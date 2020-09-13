import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './CreateExam.css'
import Question from './Question'


class CreateExam extends React.Component{

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
                <Question />
            </div>
        )
    }
}

export default CreateExam;