import React from 'react'
import {Link} from 'react-router-dom' 

import './Navbar.css'
import InsertChartIcon from '@material-ui/icons/InsertChart';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar">
                <div className="brand">
                    <Link to='/'>
                        <InsertChartIcon style={{ fontSize: 35 }} />Evaluate
                    </Link>
                </div>
                <div className="nav-link">
                    {/* <a href="">Login</a>
                    <a href="">Sign Up</a> */}
                </div>
            </nav>
        )
    }
}

export default Navbar;