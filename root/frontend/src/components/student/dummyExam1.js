import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';

import './dummyExam1.css'

class dummyExam1 extends React.Component{

    render(){
        return(
            <div>
                <div className="create-exam"> 
                    <div className="exam-action-btn">
                        <Button
                            variant="contained"
                            className="publish-exam"
                            size="large"
                            startIcon={<PublishIcon />}
                        >Submit</Button>
                    </div>  
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper className="paper" >
                            <div>
                                <input className="exam-title" readOnly value="Demo Exam 1" />
                            </div>
                            <div>
                                <input className="exam-description" readOnly value="For Project Evaluation" />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                <input readOnly value="Mention the size of the FIFO register, contained by the Bus Interface Unit" />
                            </div>      
                            <FormControl>
                                <RadioGroup className="mcq-option" aria-label="quiz" name="type">
                                    <div><FormControlLabel value="1" control={<Radio />} /><input readOnly value="4" /></div>
                                    <div><FormControlLabel value="2" control={<Radio />} /><input readOnly value="6" /></div>
                                    <div><FormControlLabel value="3" control={<Radio />} /><input readOnly value="8" /></div>
                                    <div><FormControlLabel value="4" control={<Radio />} /><input readOnly value="12" /></div>
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                <input readOnly value="In 8086, the instruction is fetched one-by-one from ______ of memory" />
                            </div>      
                            <FormControl>
                                <RadioGroup className="mcq-option" aria-label="quiz" name="type">
                                    <div><FormControlLabel value="1" control={<Radio />} /><input readOnly value="Data Segment" /></div>
                                    <div><FormControlLabel value="2" control={<Radio />} /><input readOnly value="Extra Segment" /></div>
                                    <div><FormControlLabel value="3" control={<Radio />} /><input readOnly value="Code Segment" /></div>
                                    <div><FormControlLabel value="4" control={<Radio />} /><input readOnly value="None of these" /></div>
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                <input readOnly value="Which of the following is not true about 8086 microprocessor?" />
                            </div>      
                            <FormControl>
                                <RadioGroup className="mcq-option" aria-label="quiz" name="type">
                                    <div><FormControlLabel value="1" control={<Radio />} /><input readOnly value="coprocessor is interfaced in min mode" /></div>
                                    <div><FormControlLabel value="2" control={<Radio />} /><input readOnly value="coprocessor is interfaced in max mode" /></div>
                                    <div><FormControlLabel value="3" control={<Radio />} /><input readOnly value="I /O can be interfaced in max / min mode." /></div>
                                    <div><FormControlLabel value="4" control={<Radio />} /><input readOnly value="supports pipelining" /></div>
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="grid" >
                        <Paper className="paper" >
                            <div className="question" >
                                <input readOnly value="The type of Hazards in pipelined unit is basically" />
                            </div>      
                            <FormControl>
                                <RadioGroup className="mcq-option" aria-label="quiz" name="type">
                                    <div><FormControlLabel value="1" control={<Radio />} /><input readOnly value="Two Types" /></div>
                                    <div><FormControlLabel value="2" control={<Radio />} /><input readOnly value="Three Types" /></div>
                                    <div><FormControlLabel value="3" control={<Radio />} /><input readOnly value="Four Types" /></div>
                                    <div><FormControlLabel value="4" control={<Radio />} /><input readOnly value="None of these" /></div>
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}

export default dummyExam1;