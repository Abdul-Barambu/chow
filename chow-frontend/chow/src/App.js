import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import ForgotPassword from './components/Forgot-Password/ForgotPassword';
import ResetPassword from './components/Reset-Password/ResetPassword';
import Successful from './components/Registration/Successful';

function App() {
  return (
    <div className="App">
      {/* <Registration /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      <Successful />
    </div>
  );
}

export default App;
