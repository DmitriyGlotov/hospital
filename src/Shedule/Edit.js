import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Delete.scss';
import './Edit.scss';

const Edit = ({setOpenEdit, setAllShedule, item}) => {
  const { _id, Name, Doctor, Data, Lament } = item;
  const [nameChange, setNameChange] = useState(Name);
  const [doctorChange, setDoctorChange] = useState(Doctor);
  const [dateChange, setDateChange] = useState(Data);
  const [complaintsChange, setComplaintsChange] = useState(Lament);

  const doctors = [
    {
      value: '',
    },
    {
      value: 'Petrov Mihail',
    },
    {
      value: 'Kirilenro Stanislav',
    },
    {
      value: 'Sidorov Danil',
    },
    {
      value: 'Khmyrov Sergey',
    },
  ];

const butSave = () => {
  const accessToken = localStorage.getItem('token');
  axios.patch('http://localhost:8000/changeShedule', {
    _id,
    Name: nameChange,
    Doctor: doctorChange,
    Data: dateChange,
    Lament: complaintsChange
    }, {headers: {
      Authorization: `${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    }}).then(res => {
    setAllShedule(res.data.data);
  });

  setOpenEdit(false);
}
  return (
    <>
    <div className="modal-edit">
      <div className="modal-head">
        <p>Change record</p>
      </div>
      <div className="edit-body">
        <TextField
          required
          id="outlined-required"
          className="input-edit"
          label="Name"
          autoComplete='off'
          value={nameChange}
          variant="outlined"
          onChange={(e) => {setNameChange(e.target.value)}}
        />
        <TextField
          id="outlined-select-currency-native"
          className="input-edit"
          select
          label="Doctor"
          value={doctorChange}
          onChange={(e) => setDoctorChange(e.target.value)}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {doctors.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
          <form className='date-form'>
            <TextField
              id="date"
              className="input-edit"
              label="Date"
              type="date"
              value={dateChange}
              onChange={(e) => {setDateChange(e.target.value)}}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        <TextField
          required
          id="outlined-required"
          className="input-edit edit"
          label="Complaints"
          autoComplete='off'
          value={complaintsChange}
          variant="outlined"
          onChange={(e) => {setComplaintsChange(e.target.value)}}
        />
      </div>
      <div className="modal-footer">
        <Button variant="contained" onClick={() => setOpenEdit(false)}>Cancel</Button>
        <Button
          disabled={
            (!nameChange.trim() ||
              !doctorChange.trim() ||
              !dateChange ||
              !complaintsChange.trim())
                ? true
                : false }
          variant="contained"
          onClick={() => butSave(_id)}
        >
          Save
        </Button>
      </div>
    </div>
    <div className="modal-shadow"></div>
    </>
  );
}

export default Edit;