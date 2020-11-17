import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './CreateExam.css'
import Question from './Question'
import ExamSettings from './ExamSettings';


class CreateExam extends React.Component{  
    
    state = {exam: this.props.location.oneExamProps.exam, radioValue: '', updated:false}

    componentDidMount = () => {
        var i, j;
        var exam = {...this.state.exam}
        var questions = exam.questions
        for(i=0; i<exam.noOfQues; i++){
            var question = questions[i]
            var Correct;
            for(j=0; j<4; j++){
                if(this.state.exam.questions[i].options[j].isCorrect){
                    Correct = this.state.exam.questions[i].options[j].optionNo
                }
            }
            question["Correct"] = Correct
            
        }
        this.setState({exam: exam})
        this.setState({updated: true})
    }

    questionsUI = () => {
        return this.state.exam.questions.map((ques, i) => (
           <div key={i}>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                <input readOnly value={ques.questionText} />
                            </div>      
                            <FormControl>
                                <RadioGroup className="mcq-option" value={ques.Correct} aria-label="quiz" name="type">
                                    {ques.options.map((option, j) => (
                                        <div key={j}>
                                            <FormControlLabel value={option.optionNo} control={<Radio />} /><input readOnly value={option.optionText} />
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
           </div>
        ))
    }

    render(){
        const msg = this.state.updated ? this.questionsUI() : null
        return(
            <div className="create-exam">   
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper className="paper" >
                            <div>
                                <input className="exam-title" readOnly value={this.state.exam.examTitle} />
                            </div>
                            <div>
                                <input className="exam-description" readOnly value={this.state.exam.examDescription} />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                {msg}
            </div>
        )
    }
}

export default CreateExam;