import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './Question.css'

class Question extends React.Component{
    state = {open:false, questype: 'multiple-choice'}

    onFormSubmit = (event) => {
        event.preventDefault()
    }

    handleRadioChange = (event) => {
    };

    handleChange = (event) => {
        this.setState({questype: event.target.value})
    };
    
    handleClose = () => {
        this.setState({open:false})
    };
    
    handleOpen = () => {
        this.setState({open:true})
    };

    // handleQuesionType = (event) =>{
    //     // event.preventDefault()
    //     console.log(this.state.questype)
    // }

    render(){

        return(
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                <input placeholder="Question" />
                            </div>
                            <div className="mcq">
                                <FormControl>
                                    <RadioGroup className="mcq-option" aria-label="quiz" name="type" onChange={this.handleRadioChange}>
                                        <FormControlLabel value="option1" control={<Radio />} label="Option" />
                                        <FormControlLabel value="option2" control={<Radio />} label="Option" />
                                        <FormControlLabel value="option3" control={<Radio />} label="Option" />
                                        <FormControlLabel value="option4" control={<Radio />} label="Option" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className="multiple-answer">

                            </div>
                            <div className="short-answer">
                                <div className="question">
                                    <input placeholder="Answer" />
                                </div>
                            </div>                            
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
                                        variant="contained"
                                        variant="outlined"
                                        color="secondary"
                                        className="del-ques"
                                        size="large"
                                        startIcon={<DeleteIcon />}
                                    >Delete</Button>
                                </div> 
                            </div>
                        </Paper>
                        <Button
                            variant="contained"
                            color="primary"
                            className="add-ques"
                            size="large"
                            startIcon={<AddCircleIcon />}
                        >Add</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Question