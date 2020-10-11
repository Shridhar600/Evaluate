import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './TeacherDashboard.css'

class TeacherDashboard extends React.Component{
    
    handleLogoutClick = () => {
        window.open("http://localhost:5000/logout", "_self");
    }

    state = {
        user: {},
        error: null,
        authenticated: false,
        profilePic: ""
    };   
    
    componentDidMount() {
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
            this.setState({
                authenticated: true,
                user: responseJson.user,
                profilePic: responseJson.user._json['picture']
            });
            console.log(responseJson)
        })
        .catch(error => {
            this.setState({
                authenticated: false,
                error: "Failed to authenticate user"
            });
        });
        console.log("This is teachers")
    }

    render(){
        return (
            <div className="teacher-dashboard">
                <div className="profile">
                    <Avatar src={this.state.profilePic} ></Avatar>
                        <div className="user-name">{this.state.user.displayName}</div>
                    <Button
                        className="settings"
                        variant="outlined"
                        startIcon={<SettingsIcon />}
                    >
                        Settings
                    </Button>
                    <br />
                    <Button
                        className="logout"
                        variant="outlined"
                        startIcon={<ExitToAppIcon />}
                        onClick = {this.handleLogoutClick}
                    >
                        Logout
                    </Button>
                </div>  
                <div className="assignments">
                    <Link to="new/"><button className="create-assignments"><AddCircleIcon/><span>Create New</span></button></Link>
                    <div className="published-assignments">
                        <div className="exam">
                            <div className="left">
                                <div className="subject">Untitled</div>
                                <div>Assignments Description</div>
                            </div>
                            <div className="right">
                            <div className="total-response">Total Response: 12</div>
                                <Link to="responses"><div className="view-response">View Responses</div></Link>
                            </div>
                        </div>
                        <div className="exam">
                            <div className="left">
                                <div className="subject">Untitled2</div>
                                <div>Assignments Description</div>
                            </div>
                            <div className="right">
                            <div className="total-response">Total Response: 37</div>
                                <div className="view-response">View Responses</div>                        
                            </div>
                        </div>
                        <div className="exam">
                            <div className="left">
                                <div className="subject">Untitled3</div>
                                <div>Assignments Description</div>
                            </div>
                            <div className="right">
                            <div className="total-response">Total Response: 40</div>
                                <div className="view-response">View Responses</div>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;