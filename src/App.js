import './App.css';
import { Route } from 'react-router-dom'
import UserLogin from './Components/User/UserLogin'
import UserSignup from './Components/User/UserSignup';
import AdminLogin from './Components/Admin/AdminLogin';
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <Route path='/'>
        <Navbar/>
      </Route>

      <Route path='/userlogin'>
        <UserLogin />
      </Route>

      <Route path='/usersignup'>
        <UserSignup />
      </Route>

      <Route path='/adminlogin'>
        <AdminLogin />
      </Route>
    </div>
  );
}

export default App;
