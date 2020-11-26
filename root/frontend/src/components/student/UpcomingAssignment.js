import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class UpcomingAssignment extends React.Component{


    render(){
        const add = this.props.add;
        let ques;
        if (add){
            ques = (<div className="exam">
                        <div className="left">
                            <div className="subject">Demo Exam 1</div>
                            <div>For Project evaluation</div>
                        </div>
                        <div className="right">
                            <div className="total-response">18th November 2020, 12:20 AM - 12:30 AM </div>
                            <Link to="/attempt/"><div className="view-response">Start</div></Link>
                        </div>
                    </div>
                )
        }        

        return(
            <div className="published-assignments">
                {ques}
                <div className="exam">
                    <div className="left">
                        <div className="subject">Check </div>
                        <div>Assignments Description</div>
                    </div>
                    <div className="right">
                    <div className="total-response">15th December 2020, 8:30 - 11:30</div>
                        <Link to="/attempt/"><div className="view-response">Start</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpcomingAssignment;