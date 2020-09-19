import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';

import './CreateExam.css'
import Question from './Question'


class CreateExam extends React.Component{

    state = { questions: [], key:0}

    deleteQuestion = (key) => {
        const index = this.state.questions.findIndex((question) => {
            return question.key === key
        })
        const CopyQuestionsArray = Object.assign([], this.state.questions)
        CopyQuestionsArray.splice(index, 1) 
        this.setState({questions:CopyQuestionsArray})
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
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper className="paper" >
                            <div>
                                <input className="exam-title" value="Untitled" />                                
                            </div>
                            <div>
                                <input className="exam-description" value="Exam-description" />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Question key={0} index={0} delete={this.deleteQuestion} /> */}
                {this.state.questions}
                <Button
                    variant="contained"
                    color="primary"
                    className="add-ques"
                    size="large"
                    startIcon={<AddCircleIcon />}
                    onClick={this.addQuestion}
                >Add</Button>
            </div>
        )
    }
}

export default CreateExam;