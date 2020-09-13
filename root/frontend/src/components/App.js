import React from 'react'
import {Switch, Route} from 'react-router-dom'

import HomePage from './HomePage'
import Navbar from './Navbar'
import SignIn from './SignIn'
import Welcome from './Welcome'
import StudentDashboard from './student/StudentDashboard'
import TeacherDashboard from './teacher/TeacherDashboard'

class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route component={HomePage} exact path="/" />
                    <Route component={SignIn} path="/signin" />
                    <Route component={Welcome} path="/welcome" />
                    <Route component={StudentDashboard} path="/student/dashboard" />
                    <Route component={TeacherDashboard} path="/teacher/dashboard" />
                </Switch>
            </div>
        )
    }
}

export default App;