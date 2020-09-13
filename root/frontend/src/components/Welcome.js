import React from 'react'
import './Welcome.css'
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import {useHistory} from 'react-router-dom';


const Welcome = () =>{
    const [value, setValue] = React.useState('');
    const history = useHistory();

    const onFormSubmit = (event) => {
        event.preventDefault()
        if (value == 'student'){            
            history.push('/student/dashboard');
        }
        else if (value == 'teacher'){            
            history.push('/teacher/dashboard');
        }
    }

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="type-select">
            <div className="welcome-text">Welcome to Evaluate!!</div>
            <div className="supporting-text">Select an option which describes you the best</div>
            <form className="user-type-form" onSubmit={onFormSubmit}>
                <FormControl>
                    <RadioGroup value={value} aria-label="quiz" name="type" onChange={handleRadioChange}>
                        <FormControlLabel className="user-type" value="student" control={<Radio />} label="Student - I plan on giving assignments and joining classes" />
                        <FormControlLabel className="user-type" value="teacher" control={<Radio />} label="Teacher - I plan on scheduling assignments and managing class" />
                    </RadioGroup>
                    <button className="btn btn-primary continue">Continue</button>
                </FormControl>
            </form>
        </div>
    )
}

export default Welcome