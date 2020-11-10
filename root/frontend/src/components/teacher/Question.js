import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import './Question.css'
// import MultipleChoice from './Ques/MultipleChoice'
// import ShortAnswer from './Ques/ShortAnswer'
// import MultipleAnswer from './Ques/MultipleAnswer'


class Question extends React.Component{
    state = {
        open:false, 
        questype: 'multiple-choice', 
        quesString: "",
        optionOneString: "",
        optionTwoString: "",
        optionThreeString: "",
        optionFourString: "",
    }

    onFormSubmit = (event) => {
        event.preventDefault()
    }

    handleRadioChange = (event) => {
        console.log(event.target.value)
    };

    handleOptionOne = (event) => {
        this.setState({optionOneString: event.target.value})
    }

    handleOptionTwo = (event) => {
        this.setState({optionTwoString: event.target.value})
    }

    handleOptionThree = (event) => {
        this.setState({optionThreeString: event.target.value})
    }

    handleOptionFour = (event) => {
        this.setState({optionFourString: event.target.value})
    }

    handleChange = (event) => {
        this.setState({questype: event.target.value})
    };
    
    handleClose = () => {
        this.setState({open:false})
    };
    
    handleOpen = () => {
        this.setState({open:true})
    };

    handleQuesStringChange = (e) => {
        this.setState({quesString: e.target.value}, () => console.log(this.state.quesString))
    }
    
    render(){

        return(
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                {/* input length needs to be changed */}
                                <input value={this.state.quesString} onChange={this.handleQuesStringChange} placeholder="Question" />
                            </div>      
                            
                            {/* Just for mcq as of now */}
                            <FormControl>
                                <RadioGroup className="mcq-option" aria-label="quiz" name="type" onChange={this.handleRadioChange}>
                                    <div><FormControlLabel value="option1" control={<Radio />} /><input placeholder="Option1" value={this.state.optionOneString} onChange={this.handleOptionOne} /></div>
                                    <div><FormControlLabel value="option2" control={<Radio />} /><input placeholder="Option2" value={this.state.optionTwoString} onChange={this.handleOptionTwo} /></div>
                                    <div><FormControlLabel value="option3" control={<Radio />} /><input placeholder="Option3" value={this.state.optionThreeString} onChange={this.handleOptionThree} /></div>
                                    <div><FormControlLabel value="option4" control={<Radio />} /><input placeholder="Option4" value={this.state.optionFourString} onChange={this.handleOptionFour} /></div>
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
                                        onClick={this.props.delete}
                                        startIcon={<DeleteIcon />}
                                    >Delete</Button>
                                </div> 
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Question