import React from 'react'
import './ExamSettings.css'
import ExamServices from '../../services/examservices'

import TextField from '@material-ui/core/TextField';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';

class ExamSettings extends React.Component{

    state = {startDate: new Date(), endDate: new Date()}

    handleDateChange = (date) => {
        this.setState({startDate: date})
    };

    handleEndDateChange = (date) => {
        this.setState({endDate: date})
    };

    handlePublishOnClick = () => {
        var date = this.state.startDate
        var finaldate = date.getDate() + '-' +  (date.getMonth() + 1)  + '-' +  date.getFullYear()
        var data = {
            createdBy: this.props.user,
            examTitle: this.props.title,
            examDescription: this.props.desc,
            examDate: finaldate,
            startTime: this.state.startDate.toTimeString(),
            endTime: this.state.endDate.toTimeString()
        }

        ExamServices.createExam(data)
        .then((result) => {     
            console.log(result);
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

    render(){
        return(
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={this.props.handleClose}>x</span>
                    <div className="settings-heading">Settings</div>
                    <form noValidate autoComplete="off">
                        <div>
                            <span>Number of Questions</span>
                            <TextField id="standard-basic" value="20" />
                        </div>
                    </form>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} className="exam-start-date">
                        <Grid container>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Exam Date"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                className="start-time"
                                id="time-picker"
                                label="Start Time"
                                value={this.state.startDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                className="start-time"
                                id="time-picker"
                                label="End Time"
                                value={this.state.endDate}
                                onChange={this.handleEndDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <Button
                        variant="contained"
                        className="publish-exam-s"
                        size="large"
                        startIcon={<PublishIcon />}
                        onClick={this.handlePublishOnClick}
                    >Publish</Button>
                </div>
            </div>
        )
    }
}

export default ExamSettings