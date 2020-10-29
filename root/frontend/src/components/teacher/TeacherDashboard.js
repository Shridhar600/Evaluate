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

    handleProps = (props) => {
        console.log(this.props.user)
    }

    state = {
        user: {},
        error: null,
        authenticated: false,
        profilePic: ""
    };   

    render(){
        return (
            <div className="teacher-dashboard">
                <div className="profile">
                    <Avatar src={this.props.user.profileImage}></Avatar>
                        <div className="user-name">{this.props.user.screenName}</div>
                    <Button
                        className="settings"
                        variant="outlined"
                        startIcon={<SettingsIcon />}
                        onClick={this.handleProps}
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