import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import HomePage from './HomePage'
import Navbar from './Navbar'
import SignIn from './SignIn'
import OneExam from './teacher/OneExam'
import Welcome from './Welcome'
import StudentDashboard from './student/StudentDashboard'
import TeacherDashboard from './teacher/TeacherDashboard'
import CreateExam from './teacher/CreateExam'
import Responses from './teacher/Responses'

class App extends React.Component{
    state = {
        user: {},
        authenticated: false,
        profilePic: "",
        type: null,
        error: null
    };
    
    componentDidMount(){
        fetch("http://localhost:5000/login/success", {
            method: "GET",
            credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
        .then(response => {
            if (response.status === 200) return response.json();
                throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
            console.log(responseJson)
            this.setState({
                authenticated: true,
                user: responseJson.user,
                type: responseJson.user.type,
                profilePic: responseJson.user.profileImage
            }, () => console.log(this.state.type));
        })
        .catch(error => {
            this.setState({
                authenticated: false,
                error: "Failed to authenticate user"
            })
        });
    }

    render(){
        const { authenticated } = this.state;
        const path = `/${this.state.type}/dashboard`
        return (
            <div>
                <Navbar />
                <div>
                    {!authenticated ? (
                        <Redirect to="/" />
                    ):(
                        <Redirect to={path} />
                    )}
                </div>

                <Switch>
                    <Route component={HomePage} exact path="/" />
                    <Route path="/signin" render={(props) => <SignIn {...props} authenticated={this.state.authenticated} user={this.state.user} />} />
                    <Route path="/welcome" render={(props) => <Welcome {...props} authenticated={this.state.authenticated} user={this.state.user} />} />
                    <Route component={StudentDashboard} path="/student/dashboard" />
                    <Route path="/teacher/dashboard" render={(props) => <TeacherDashboard {...props} authenticated={this.state.authenticated} user={this.state.user} />} />
                    <Route path="/teacher/new" render={(props) => <CreateExam {...props} authenticated={this.state.authenticated} user={this.state.user} />} />
                    <Route component={Responses} path="/teacher/responses" />
                    <Route path="/oneexam" component={OneExam} />
                </Switch>
            </div>
        )
    }
}

export default App;