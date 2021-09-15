import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sign from '../images/sign.png';
import './index.scss'
import DataInput from './Data-input'
import Button from '@material-ui/core/Button';
import Edit from '../images/edit.png';
import Delete from './Delete';

const Shedule = () => {
  const [allShedule, setAllShedule] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/allShedule').then(res => {
      setAllShedule(res.data.data);
    });
  }, [setAllShedule])

  const [nameInput, setNameInput] = useState('');
  const [doctorInput, setDoctorInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [complaintsInput, setComplaintsInput] = useState('');

  const butAdd = () => {
    axios.post('http://localhost:8000/createShedule', {
      name: nameInput,
      doctor: doctorInput,
      data: dateInput,
      lament: complaintsInput
    }).then(res => {setAllShedule(res.data.data);});

    setNameInput('');
    setDoctorInput('');
    setDateInput('');
    setComplaintsInput('');
  }

  return (
    <div className="main-shedule">
      <div className="head">
        <div className="title">
          <img src={Sign} alt='' />
          <h1>Shedule</h1>
        </div>
        <Button variant="contained">Exit</Button>
      </div>
      <div className="data-input">
        <DataInput
          nameInput={nameInput}
          setNameInput={setNameInput}
          doctorInput={doctorInput}
          setDoctorInput={setDoctorInput}
          dateInput={dateInput}
          setDateInput={setDateInput}
          complaintsInput={complaintsInput}
          setComplaintsInput={setComplaintsInput}
        />
        <Button variant="contained" onClick={() => butAdd()}>Add</Button>
      </div>
      <div className="container-shedule">
        <div className="headlines">
          <p>Name</p>
          <p>Doctor</p>
          <p>Date</p>
          <p>Complaints</p>
        </div>
        <div className="container-info">
          {
            allShedule.map ((item, index) => {
              const { _id, name, doctor, data, lament} = item;

              return (
              <div key={`list-${index}`} className="info">
                <p className="name">{name}</p>
                <p className="doctor">{doctor}</p>
                <p className="date">{data}</p>
                <p className="complaints">{lament}</p>
                <div className="container-button">
                  <img src={Edit} alt='' />
                  <Delete id={_id}/>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Shedule;