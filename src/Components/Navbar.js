import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="Navbar" >
            <div className="Logo">
                <Link to ='/'>Quiz App</Link>
            </div>
            <div className="nav-items">
                <Link to ='/usersignup'><li>Register</li></Link>
                <Link to='/userlogin'><li>Login</li></Link>
            </div>
        </div>
    )
}

export default Navbar
