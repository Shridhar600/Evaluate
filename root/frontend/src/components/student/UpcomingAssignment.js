import React from 'react';
import {Redirect, Link} from 'react-router-dom';

class UpcomingAssignment extends React.Component{


    render(){
        const add = this.props.add;
        let ques;
        if (add){
            ques = (<div className="exam">
                        <div className="left">
                            <div className="subject">Untitled</div>
                            <div>Assignments Description</div>
                        </div>
                        <div className="right">
                            <div className="total-response">12th September 2020, 8:30 - 11:30</div>
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
                        <div className="subject">Untitled3</div>
                        <div>Assignments Description</div>
                    </div>
                    <div className="right">
                    <div className="total-response">15th September 2020, 8:30 - 11:30</div>
                        <Link to="/attempt/"><div className="view-response">Start</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpcomingAssignment;