import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

class HomePage extends React.Component{
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