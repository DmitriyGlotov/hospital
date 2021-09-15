import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Regist-Author.scss';
import HospitalImg from '../images/hospital.png'
import InputAuthorization from './Input-Authorization';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Sign from '../images/sign.png';

const Registration = () => {
  const [nameText, setnameText] = useState('');
  const history = useHistory();

  const [authPassword, setauthPassword] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const butLog = () => {
    if (nameText.length < 6) {
      return alert('Login must be at least 6 characters long');
    }

    if (authPassword.password.length < 6) {
      return alert('Password must contain at least 6 characters')
    }

    if (!/[a-zA-Z]/.test(authPassword.password) || !/[0-9]/.test(authPassword.password)) {
      return alert('The password must consist of Latin letters and numbers')
    }

    axios.post('http://localhost:8000/login', {
      login: nameText,
      password: authPassword.password,
    })

    history.push(`/main`);
  }

  return (
    <div className="container">
      <div className="head-sign-in">
        <img src={Sign} alt='' className="sign" />
        <h1>Sign in</h1>
      </div>
      <div className="main">
        <img src={HospitalImg} alt='' className="hospitalImg" />
        <div className="registration">
          <div className="container-log">
            <h1>Authorization</h1>
            <InputAuthorization
              logText={nameText}
              setLogText={setnameText}
              password={authPassword}
              setPassword={setauthPassword}
            />
          </div>
          <div className="registration-button">
            <Button variant="outlined" color="primary" className="but" onClick={() => {butLog()}}>
              login
            </Button>
            <Button variant="contained" color="secondary" className="but" onClick={() => history.push(`/registration`)}>
              Registration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;