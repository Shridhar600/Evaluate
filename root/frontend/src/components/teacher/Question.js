import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';


import './Question.css'
import MultipleChoice from './Ques/MultipleChoice'
import ShortAnswer from './Ques/ShortAnswer'
import MultipleAnswer from './Ques/MultipleAnswer'


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
                            {this.state.questype === "multiple-choice" && <MultipleChoice/>}
                            {this.state.questype === "multiple-answer" && <MultipleAnswer/>}
                            {this.state.questype === "short-answer" && <ShortAnswer/>}
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