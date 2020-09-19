import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class MultipleChoice extends React.Component{
    render(){
        return (<div>
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
        </div>)
    }
}

export default MultipleChoice;