import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Sign from '../images/sign.png';
import './index.scss';
import DataInput from './Data-input';
import Button from '@material-ui/core/Button';
import EditImg from '../images/edit.png';
import Delete from './Delete';
import Edit from './Edit';
import Del from '../images/Del.png';
import Sort from './Sort';
import Filter from './Filter';
import { Switch } from '@material-ui/core';

const Shedule = () => {
  const [allShedule, setAllShedule] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [doctorInput, setDoctorInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [complaintsInput, setComplaintsInput] = useState('');
  const [openDel, setOpenDel] = useState('');
  const [openEdit, setOpenEdit] = useState('');
  const [sort, setSort] = useState('_id');
  const [sortReverse, setSortReverse] = useState(1);
  const [upward, setUpward] = useState('');
  const [smaller, setSmaller] = useState('');
  const [addFilter, setAddFilter] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    axios.get('http://localhost:8000/allShedule', {
      headers: {
        Authorization: `${accessToken}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8'
    }}).then(res => {
    setAllShedule(res.data.data);
    });
  }, [setAllShedule]);

  allShedule.sort((a, b) => a[sort].localeCompare(b[sort]));

  if (!Number(sortReverse)) allShedule.reverse();

  let filterShedule = [];

  if (!upward && !smaller) filterShedule = allShedule;
  if (!upward && smaller) filterShedule = allShedule.filter(item => item.data <= smaller);
  if (upward && !smaller) filterShedule = allShedule.filter(item => item.data >= upward);
  if (upward && smaller) filterShedule = allShedule.filter(item => item.data <= smaller && item.data >= upward);

  const butAdd = () => {
    const accessToken = localStorage.getItem('token');
    axios.post('http://localhost:8000/createShedule', {
      Name: nameInput,
      Doctor: doctorInput,
      Data: dateInput,
      Lament: complaintsInput
    }, {headers: {
        Authorization: `${accessToken}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8'
    }}).then(res => {setAllShedule(res.data.data);});

    setNameInput('');
    setDoctorInput('');
    setDateInput('');
    setComplaintsInput('');
  }

  const funkSwitch = () => {
    setAddFilter(!addFilter);
    setUpward('');
    setSmaller('');
  }

  const butExit = () => {
    history.push('/authorization');
    localStorage.removeItem('token');
  }

  return (
    <div className='main-shedule'>
      <div className="head">
        <div className="title">
          <img src={Sign} alt='' />
          <h1>Shedule</h1>
        </div>
        <Button variant="contained" onClick={() => butExit()}>Exit</Button>
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
        <Button
          disabled={
            (!nameInput.trim() ||
              !doctorInput.trim() ||
              !dateInput ||
              !complaintsInput.trim())
                ? true
                : false }
          variant="contained"
          className="add"
          onClick={() => butAdd()}
        >
          Add
        </Button>
      </div>
      <div className="container-sort">
        <Sort
          setSortReverse={setSortReverse}
          sortReverse={sortReverse}
          setSort={setSort}
          sort={sort}
          allShedule={allShedule}
          setAllShedule={setAllShedule}/>
      </div>
      <div className="container-filter">
        {addFilter && <Filter
          upward={upward}
          smaller={smaller}
          setUpward={setUpward}
          setSmaller={setSmaller}
        />}
        <div className="switch">
          <p>Add/Remove filter by date</p>
          <Switch
            onClick={() => funkSwitch()}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
      <div className="container-shedule">
        <div className="table">
          <div className="headlines">
            <p>Name</p>
            <p>Doctor</p>
            <p>Date</p>
            <p>Complaints</p>
          </div>
          <div className="container-info">
            {
              filterShedule.map((item, index) => {
                const { _id, Name, Doctor, Data, Lament} = item;

                return (
                <div key={`list-${index}`} className="info">
                  <p className="info-data">{Name}</p>
                  <p className="info-data">{Doctor}</p>
                  <p className="info-data">{Data}</p>
                  <p className="info-data">{Lament}</p>
                  <div className="container-button">
                    <img src={EditImg} alt='' onClick={() => setOpenEdit(index)}/>
                    {openEdit === index && <Edit
                      item={item}
                      setAllShedule={setAllShedule}
                      setOpenEdit={setOpenEdit}/>
                    }
                    <img src={Del} alt='' onClick={() => setOpenDel(index)} />
                    {openDel === index && <Delete
                      _id={_id}
                      setAllShedule={setAllShedule}
                      setOpenDel={setOpenDel} />
                    }
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shedule;