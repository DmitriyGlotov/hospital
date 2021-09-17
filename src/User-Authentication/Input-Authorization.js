import React from 'react';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './Input-MU.scss';

const InputAuthorization = ({logText, setLogText, password, setPassword, repiatRassword, setRepiatRassword}) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '100%',
    },
  }));

  const classes = useStyles();

  const passwordChange = (prop) => (e) => {
    setPassword({ ...password, [prop]: e.target.value });

  };

  const passwordClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const passwordMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <TextField
        className= 'text'
        required
        id="outlined-required"
        label="Login"
        autoComplete='off'
        placeholder="Login"
        variant="outlined"
        value={logText}
        onChange={(e) => {setLogText(e.target.value)}}
      />
      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-password"
          type={password.showPassword ? 'text' : 'password'}
          value={password.password}
          autoComplete='off'
          onChange={passwordChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={passwordClickShowPassword}
                onMouseDown={passwordMouseDownPassword}
                edge="end"
              >
                {password.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </>
  )
}

export default InputAuthorization;