import React from 'react'
import {Link} from 'react-router-dom'
import './SignIn.css'
import Google from './search.svg'

 
class SignIn extends React.Component{    

    handleLoginClick = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    }
    render(){
        return (
            <div className="signIn">
                <div>Continue with Evaluate</div>
                <button onClick={this.handleLoginClick} className="btn"><img src={Google} alt="Google Logo" />Sign in with Google</button>
            </div>
        )
    } 
}

export default SignIn;