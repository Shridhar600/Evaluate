import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

class HomePage extends React.Component{

    // state = {authenticated: false}

    // componentDidMount(){
    //     fetch("http://localhost:5000/login/success", {
    //         method: "GET",
    //         credentials: "include",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": true
    //         }
    //     })
    //     .then(response => {
    //         if (response.status === 200) 
    //             return response.json();
    //         throw new Error("failed to authenticate user");
    //     })
    //     .then(responseJson => {
    //         this.setState({
    //             authenticated: true,
    //             user: responseJson.user,
    //             profilePic: responseJson.user._json['picture']
    //         });
    //         console.log(responseJson)
    //     })
    //     .catch(error => {
    //         this.setState({
    //             authenticated: false,
    //             error: "Failed to authenticate user"
    //         });
    //     });
    // }

    render(){
        return (
            <div className="homepage">
                <div className="homepage__content">
                    <div className="homepage__text">Build Beautiful Assignments for both Desktop and Mobile</div>
                    <Link to='/signin'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        )
    }
}

export default HomePage;