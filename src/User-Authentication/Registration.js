import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Regist-Author.scss';
import HospitalImg from '../images/hospital.png'
import InputRegistration from './Input-registration';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Sign from '../images/sign.png';

const Registration = () => {
  const history = useHistory();
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

    // if (!/[^A-Za-z0-9]\d{1}/.test(password.password)) {
    //   return alert('The password must consist of Latin letters and numbers')
    // }

    if (password.password !== repiatRassword.password) {
      return alert('Password mismatch')
    }

    axios.post('http://localhost:8000/createUser', {
      login: logText,
      password: password.password,
    })

    history.push(`/main`);
  }

  return (
    <div className="container">
      <div className="head-sign-in">
        <img src={Sign} alt='' className="sign" />
        <h1>Registration</h1>
      </div>
      <div className="main">
        <img src={HospitalImg} alt='' className="hospitalImg" />
        <div className="registration">
          <div className="container-log">
            <h1>Registration</h1>
            <InputRegistration
              logText={logText}
              setLogText={setLogText}
              repiatRassword={repiatRassword}
              setRepiatRassword={setRepiatRassword}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className="registration-button">
            <Button variant="outlined" color="primary" className="but" onClick={() => {butReg()}}>
              Registration
            </Button>
            <Button variant="contained" color="secondary" className="but" onClick={() => {history.push(`/authorization`)}}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;