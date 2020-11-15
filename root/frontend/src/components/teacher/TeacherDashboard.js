import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import ExamServices from '../../services/examservices'
import './TeacherDashboard.css'

class TeacherDashboard extends React.Component{

    state = {
        user: {},
        error: null,
        authenticated: false,
        profilePic: "",
        exams: []
    };   


    componentDidMount = () => {
        if(this.props.user === undefined){
            console.log("User is undefined");
        } else{
            ExamServices.getExams(this.props.user._id)
            .then((UserExams) => { 
               this.setState({exams: UserExams})
            },

            error => {
            const resMessage =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
                console.log(resMessage);
            }
            );
            
        }
    }
    
    handleLogoutClick = () => {
        window.open("http://localhost:5000/logout", "_self");
    }

    handleProps = (props) => {
        console.log(this.props.user)
    }

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
                        {this.state.exams.map((exam, i) => (
                            <div key={i} className="exam">
                                <Link to={{
                                    pathname: '/oneexam',
                                    oneExamProps: {
                                        exam: exam
                                    }
                                }}>
                                    <div className="left">
                                        <div className="subject">{exam.examTitle}</div>
                                        <div>{exam.examDescription}</div>
                                    </div>
                                </Link>
                                <div className="right">
                                <div className="total-response">{exam.examDate}, {exam.startTime} - {exam.endTime}</div>
                                    {/* <Link to="responses"><div className="view-response">View Responses</div></Link> */}
                                    <Link to="responses"><div className="view-response">View Responses</div></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherDashboard;