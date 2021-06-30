import { useState } from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

function AdminLogin() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("UserName: ", userName);
        console.log("Password: ", password);
    }
    return (
        <div>
            <div className="login">
                <h2>Admin Login</h2>
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <input placeholder="userName" onChange={(e)=>{setUserName(e.target.value)}}/>
                    <input placeholder="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>

                    <input type="submit" placeholder="login"/>
                </form>
                <div className="options">
                    <p>Login as <Link to="/userlogin">User</Link></p>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
