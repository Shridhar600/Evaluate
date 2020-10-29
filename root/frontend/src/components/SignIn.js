import React from 'react'
import {Link} from 'react-router-dom'
import './SignIn.css'
import Google from './search.svg'
import {Redirect} from 'react-router-dom'

 
class SignIn extends React.Component{    

    handleLoginClick = () => {
        window.open("http://localhost:5000/auth/google", "_self");
        console.log(this.type)
    }

    render(){
        const {authenticated} = this.props.authenticated;
        const type = this.props.user.type;
        if(type === undefined){
            var path = "/welcome"
        }
        else{
            var path = `/${type}/dashboard`
        }
        return (
            <div>
                {/* {type ? (
                    <Redirect to={path} />
                ):( */}
                    <div className="signIn">
                        <div>Continue with Evaluate</div>
                        <button onClick={this.handleLoginClick} className="btn"><img src={Google} alt="Google Logo" />Sign in with Google</button>
                    </div>
                {/* )} */}
            </div>
        )
    } 
}

export default SignIn;