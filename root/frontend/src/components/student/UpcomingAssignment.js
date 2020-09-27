import React from 'react';

class UpcomingAssignment extends React.Component{
    render(){
        return(
            <div className="published-assignments">
                <div className="exam">
                    <div className="left">
                        <div className="subject">Untitled</div>
                        <div>Assignments Description</div>
                    </div>
                    <div className="right">
                        <div className="total-response">12th September 2020, 8:30 - 11:30</div>
                        <div className="view-response">Start</div>
                    </div>
                </div>
                <div className="exam">
                    <div className="left">
                        <div className="subject">Untitled2</div>
                        <div>Assignments Description</div>
                    </div>
                    <div className="right">
                    <div className="total-response">13th September 2020, 9:30 - 11:30</div>
                        <div className="view-response">Start</div>                        
                    </div>
                </div>
                <div className="exam">
                    <div className="left">
                        <div className="subject">Untitled3</div>
                        <div>Assignments Description</div>
                    </div>
                    <div className="right">
                    <div className="total-response">15th September 2020, 8:30 - 11:30</div>
                        <div className="view-response">Start</div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default UpcomingAssignment;