import React from 'react'

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class MultipleAnswer extends React.Component{

    state = {option1:false, option2:false, option3:false, option4:false}

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.checked})
    }

    render(){
        return(
            <FormControl className="m-ans" component="fieldset">
                <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={this.state.option1} onChange={this.handleChange} name="option1" />}
                    label="Option"
                />
                <FormControlLabel
                    control={<Checkbox checked={this.state.option2} onChange={this.handleChange} name="option2" />}
                    label="Option"
                />
                <FormControlLabel
                    control={<Checkbox checked={this.state.option3} onChange={this.handleChange} name="option3" />}
                    label="Option"
                />
                <FormControlLabel
                    control={<Checkbox checked={this.state.option4} onChange={this.handleChange} name="option4" />}
                    label="Option"
                />
                </FormGroup>
            </FormControl>
        )
    }
}

export default MultipleAnswer;