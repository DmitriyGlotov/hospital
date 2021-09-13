import React, {useState} from 'react';
import './Registration.scss';
import HospitalImg from '../images/hospital.png'
import InputMu from './Input-MU';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Registration = () => {
  const [logText, setLogText] = useState('');

  const [password, setPassword] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [repiatRassword, setRepiatRassword] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const butReg = () => {
    if (logText.length < 6) {
      return alert('Login must be at least 6 characters long');
    }

    if (password.password.length < 6) {
      return alert('Password must contain at least 6 characters')
    }

    if (!/[a-zA-Z]/.test(password.password) || !/[0-9]/.test(password.password)) {
      return alert('The password must consist of Latin letters and numbers')
    }

    if (password.password !== repiatRassword.password) {
      return alert('Password mismatch')
    }

    axios.post('http://localhost:8000/createUser', {
      login: logText,
      password: password.password,
    })
  }

  return (
    <div className="main">
      <img src={HospitalImg} alt='' className="hospitalImg" />
      <div className="registration">
        <h1>Registration</h1>
        <div className="container-log">
          <InputMu
            logText={logText}
            setLogText={setLogText}
            repiatRassword={repiatRassword}
            setRepiatRassword={setRepiatRassword}
            password={password}
            setPassword={setPassword}
          />
          <div className="registration-button">
            <Button variant="outlined" color="primary" className="but" onClick={() => {butReg()}}>
              Registration
            </Button>
            <Button variant="contained" color="secondary" className="but">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;