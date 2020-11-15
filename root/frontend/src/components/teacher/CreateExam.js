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

    state = { questions: [], key: 0, popUp: false, examTitle: "Untitled", examDes: "Exam Description", questype: 'multiple-choice', noOfQues: 0}

    onExamTitleChange = (event) => {
        this.setState({examTitle: event.target.value})
    };

    onExamDesChange = (event) => {
        this.setState({examDes: event.target.value})
    }

    togglePopup = () => {
        this.setState({popUp: !this.state.popUp})
    }

    deleteQuestion = (i) => {
        var questions = [...this.state.questions];
        questions.splice(i, 1)
        this.setState({questions : questions, noOfQues: this.state.noOfQues-1})
    }

    addQuestion = () =>{
        this.setState({ 
            questions: [...this.state.questions, {questionText: "Question", options : [{optionNo:"1", optionText:"Option1", isCorrect:false},{optionNo:"2", optionText:"Option2", isCorrect:false}, {optionNo:"3", optionText:"Option3", isCorrect:false}, {optionNo:"4", optionText:"Option4", isCorrect:false}]}],
            key: this.state.key+1,
            noOfQues: this.state.noOfQues+1
        })
    }

    handleQuesStringChange = (e, key) => {
        let questions = [...this.state.questions];
        let question = {...questions[key]};
        question.questionText = e.target.value;
        questions[key] = question;
        this.setState({questions: questions});
    }

    handleOptionTextChange = (e, i, j) => {
        let questions = [...this.state.questions];
        let question = {...questions[i]};
        let options = {...question.options}
        let option = {...options[j]}
        option.optionText = e.target.value;
        options[j] = option

        const arr = []
        Object.keys(options).forEach(key => arr.push(options[key]))
        question.options = arr
        questions[i] = question
        this.setState({questions});
    }

    handleRadioChange = (event, i) => {
        let questions = [...this.state.questions]
        if(event.target.value == "1"){
            questions[i].options[0].isCorrect = true
            questions[i].options[1].isCorrect = false
            questions[i].options[2].isCorrect = false
            questions[i].options[3].isCorrect = false
        }
        else if(event.target.value == "2"){
            questions[i].options[1].isCorrect = true
            questions[i].options[0].isCorrect = false
            questions[i].options[2].isCorrect = false
            questions[i].options[3].isCorrect = false
        }
        else if(event.target.value == "3"){
            questions[i].options[2].isCorrect = true
            questions[i].options[0].isCorrect = false
            questions[i].options[1].isCorrect = false
            questions[i].options[3].isCorrect = false
        }
        else if(event.target.value == "4"){
            questions[i].options[3].isCorrect = true
            questions[i].options[0].isCorrect = false
            questions[i].options[1].isCorrect = false
            questions[i].options[2].isCorrect = false
        }
    };

    questionsUI = () => {
        return this.state.questions.map((ques, i) => (
           <div key={i}>
               <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                {/* input length needs to be changed */}
                                <input value={ques.questionText} onChange={(e) => this.handleQuesStringChange(e, i)} placeholder="Question" />
                            </div>      
                            
                            {/* Just for mcq as of now */}
                            <FormControl>
                                <RadioGroup className="mcq-option" aria-label="quiz" name="type" onChange={(e) => this.handleRadioChange(e, i)}>
                                    {ques.options.map((option, j) => (
                                        <div key={j}>
                                            <FormControlLabel value={option.optionNo} control={<Radio />} /><input placeholder={option.optionText} value={option.optionText} onChange={(e) => this.handleOptionTextChange(e, i, j)} />
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                            {/* {this.state.questype === "multiple-choice" && <MultipleChoice/>}
                            {this.state.questype === "multiple-answer" && <MultipleAnswer/>}
                            {this.state.questype === "short-answer" && <ShortAnswer/>} */}
                            <hr />
                            <div>
                                <div className="action-btn">
                                    <FormControl className="question-type">
                                        <InputLabel id="demo-controlled-open-select-label">Question Type</InputLabel>
                                        <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        onOpen={this.handleOpen}
                                        onChange={this.handleChange}
                                        value={this.state.questype}
                                        >                                        
                                        <MenuItem value="multiple-choice">Multiple Choice</MenuItem>
                                        <MenuItem value="multiple-answer">Multiple Answer</MenuItem>
                                        <MenuItem value="short-answer">Short Answer</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        className="del-ques"
                                        size="large"
                                        onClick={()=>{this.deleteQuestion(i)}}
                                        startIcon={<DeleteIcon />}
                                    >Delete</Button>
                                </div> 
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
           </div>
        ))
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
                {this.questionsUI()}
                <Button
                    variant="contained"
                    color="primary"
                    className="add-ques"
                    size="large"
                    startIcon={<AddCircleIcon />}
                    onClick={this.addQuestion}
                >Add</Button>
                {this.state.popUp && <ExamSettings
                    noOfQues = {this.state.noOfQues}
                    user = {this.props.user}
                    title = {this.state.examTitle}
                    questions = {this.state.questions}
                    desc = {this.state.examDes}
                    handleClose={this.togglePopup}
                />}
            </div>
        )
    }
}

export default CreateExam;