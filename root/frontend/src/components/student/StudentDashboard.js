import React from 'react'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './StudentDashboard.css'
import UpcomingAssignments from './UpcomingAssignment'
// import SubmittedAssignments from './SubmittedAssignment'

class StudentDashboard extends React.Component{
    state = {selected: false, upcoming: false, add: false}

    handleLogoutClick = () => {
        window.open("http://localhost:5000/logout", "_self");
    }

    handleOnAdd = () => {
        this.setState({add: true}, () => {
            console.log(this.state.add)
        })
    }

    onButtonClick = () =>{
        this.setState({selected: !this.state.selected, upcoming: !this.state.upcoming}, () => {
            console.log(this.state.upcoming)
        })
        
    }

    render(){
        let btn_class1 = this.state.selected ? "selected" : "un-selected";
        let btn_class2 = this.state.selected ? "un-selected" : "selected";
        return (
            <div className="student-dashboard">
                <div className="profile">
                    <Avatar className="user-avatar">M</Avatar>
                    <div className="user-name">Manish Sharma</div>
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
                        onClick={this.handleLogoutClick}
                    >
                        Logout
                    </Button>
                </div>
                <div className="assignments">
                    <input className="assignment-code" placeholder="Enter Code"></input>
                    <button onClick={this.handleOnAdd} className="add-assignments"><AddCircleIcon/><span>Add</span></button>
                    <div className="assignment-tabs">
                        <button className={btn_class1} onClick={this.onButtonClick}>Upcoming</button>
                        <button className={btn_class2} onClick={this.onButtonClick}>Submitted</button>
                    </div>
                    { this.state.upcoming === false && <UpcomingAssignments add={this.state.add}/> }
                </div>
            </div>
        )
    }
}

export default StudentDashboard;