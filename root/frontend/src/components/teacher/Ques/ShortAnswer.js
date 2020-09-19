import React from 'react'

class ShortAnswer extends React.Component{
    render(){
        return(
            <div className="short-answer">
                <div className="question">
                    <input placeholder="Answer" />
                </div>
            </div> 
        )
    }
}

export default ShortAnswer;