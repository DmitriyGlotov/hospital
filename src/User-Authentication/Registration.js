import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Regist-Author.scss';
import HospitalImg from '../images/hospital.png';
import InputRegistration from './Input-registration';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Sign from '../images/sign.png';
import Snackbar from '@material-ui/core/Snackbar';

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

  const [state, setState] = useState({
    open: false,
    message: ''
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const { open, message } = state;

  const butReg = () => {
    if (logText.length < 6) {
      return setState({...state, open: true, message: 'Login must be at least 6 characters long'});
    }

    if (password.password.length < 6) {
      return setState({...state, open: true, message: 'Password must contain at least 6 characters'});
    }

    if(!/[a-zA-Z]/.test(password.password)) {
      return setState({...state, open: true, message: 'The password must consist of Latin letters'});
    }

    if (!/\d/.test(password.password)) {
      return setState({...state, open: true, message: 'The password must consist of numbers'});
    }

    if (password.password !== repiatRassword.password) {
      return setState({...state, open: true, message: 'Password mismatch'});
    }

    axios.post('http://localhost:8000/createUser', {
      login: logText,
      password: password.password,
    }).then(res => {
      localStorage.setItem('token', res.data.accessToken)
      history.push('/main')
    }).catch(err => setState({...state, open: true, message:'Error! This login is already occupied'}));
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

export default Registration;