import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Regist-Author.scss';
import HospitalImg from '../images/hospital.png';
import InputAuthorization from './Input-Authorization';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Sign from '../images/sign.png';
import Snackbar from '@material-ui/core/Snackbar';

const Authorization = () => {
  const [nameText, setnameText] = useState('');
  const history = useHistory();

  const [state, setState] = useState({
    open: false,
    message: ''
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const { open, message } = state;

  const [authPassword, setauthPassword] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const butLog = () => {
    if (nameText.length < 6) {
      return setState({...state, open: true, message: 'Login must be at least 6 characters long'});
    }

    if (authPassword.password.length < 6) {
      return setState({...state, open: true, message: 'Password must contain at least 6 characters'});
    }

    if(!/[a-zA-Z]/.test(authPassword.password)) {
      return setState({...state, open: true, message: 'The password must consist of Latin letters'});
    }

    if (!/\d/.test(authPassword.password)) {
      return setState({...state, open: true, message: 'The password must consist of numbers'});
    }

    axios.post('http://localhost:8000/login', {
      login: nameText,
      password: authPassword.password,
    }).then(res => {
      localStorage.setItem('token', res.data.accessToken)
      history.push(`/main`)
    }).catch(err => setState({...state, open: true, message: 'Error! This username or password does not exist'}));
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
          <div>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={open}
            onClose={handleClose}
            message={message}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorization;