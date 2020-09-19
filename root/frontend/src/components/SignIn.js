import React from 'react'
import {Link} from 'react-router-dom'
import './SignIn.css'
import Google from './search.svg'

const SignIn = () => {
    return (
        <div className="signIn">
            <div>Continue with Evaluate</div>
            <Link to='/welcome'><button className="btn"><img src={Google} alt="Google Logo" />Sign in with Google</button></Link>
        </div>
    )
}

export default SignIn;