import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

import './CreateExam.css'
import Question from './Question'
import ExamSettings from './ExamSettings';


class CreateExam extends React.Component{

    state = { questions: [], key: 0, popUp: false, examTitle: "Untitled", examDes: "Exam Description"}

    onExamTitleChange = (event) => {
        this.setState({examTitle: event.target.value})
    };

    onExamDesChange = (event) => {
        this.setState({examDes: event.target.value})
    }

    togglePopup = () => {
        this.setState({popUp: !this.state.popUp})
        console.log(this.state.questions)
    }

    deleteQuestion = (i) => {
        const arr = this.state.questions.filter((question) => question.key != i);
        this.setState({questions : arr})
    }

    addQuestion = () =>{
        this.setState({ 
            questions: [...this.state.questions, <Question key={this.state.key} delete={this.deleteQuestion.bind(this, this.state.key)} />],
            key: this.state.key+1
        })
    }

    render(){
        return(
            <div className="create-exam">
                <div className="exam-action-btn">
                    <Button
                        variant="contained"
                        className="publish-exam"
                        size="large"
                        startIcon={<PublishIcon />}
                        onClick={this.togglePopup}
                    >Publish</Button>
                    <Button
                        variant="contained"
                        className="remove-exam"
                        size="large"
                        startIcon={<DeleteIcon />}
                    >Remove</Button>
                </div>
                
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper className="paper" >
                            <div>
                                <input className="exam-title" onChange={this.onExamTitleChange} value={this.state.examTitle} />
                            </div>
                            <div>
                                <input className="exam-description" onChange={this.onExamDesChange} value={this.state.examDes} />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Question key={0} delete={this.deleteQuestion.bind(this, this.state.key)} /> */}
                {this.state.questions}
                <Button
                    variant="contained"
                    color="primary"
                    className="add-ques"
                    size="large"
                    startIcon={<AddCircleIcon />}
                    onClick={this.addQuestion}
                >Add</Button>
                {this.state.popUp && <ExamSettings
                    user = {this.props.user}
                    title = {this.state.examTitle}
                    desc = {this.state.examDes}
                    handleClose={this.togglePopup}
                />}
            </div>
        )
    }
}

export default CreateExam;