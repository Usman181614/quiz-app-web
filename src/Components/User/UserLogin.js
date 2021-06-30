import '../../App.css'
import {Link} from 'react-router-dom'

function UserLogin() {
    const handleSubmit = () =>{
        console.log("HandleSubmit")
    }
    return (
        <div>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder="userName"/>
                    <input placeholder="password"/>

                    <input type="submit" placeholder="login"/>
                </form>
                <div className="options">
                    <p>Dont have an account? <Link to='usersignup'>Join us Now</Link></p>
                    <p>Login as <Link to="adminlogin">Admin</Link></p>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
