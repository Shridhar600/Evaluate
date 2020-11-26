import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Responses.css'

class Responses extends React.Component{
    render(){
        return(
            <div>
                <div className="Responses">
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Paper className="paper">
                                <div className="total-responses">0 Responses</div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid className="summary" container spacing={4}>
                        <Grid item xs={4}>
                            <Paper className="paper">
                                <div className="average-score">
                                    <div className="heading">Average</div>
                                    <div>0/0</div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className="paper">
                                <div className="median">
                                    <div className="heading">Median</div>
                                    <div>0/0</div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className="paper">
                                <div className="range">
                                    <div className="heading">Range</div>
                                    <div>0-0</div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid className="summary" container spacing={4}>
                        <Grid item xs={12}>
                            <Paper className="paper">
                                <div className="response">
                                    <IconButton aria-label="delete" >
                                        <ArrowBackIosIcon fontSize="small" />
                                    </IconButton>
                                    <u>0</u> of 0
                                    <IconButton aria-label="delete" >
                                        <ArrowForwardIosIcon fontSize="small" />
                                    </IconButton>
                                </div>
                            </Paper>
                        </Grid>
                        
                    </Grid>
                </div> 
            </div> 
        )
    }
}

export default Responses;