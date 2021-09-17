import React from 'react';
import TextField from '@material-ui/core/TextField';

const DataInput = ({
  nameInput,
  setNameInput,
  doctorInput,
  setDoctorInput,
  dateInput,
  setDateInput,
  complaintsInput,
  setComplaintsInput,
}) => {
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

  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Name"
        autoComplete='off'
        value={nameInput}
        variant="outlined"
        onChange={(e) => {setNameInput(e.target.value)}}
      />
      <TextField
        id="outlined-select-currency-native"
        select
        label="Doctor"
        value={doctorInput}
        onChange={(e) => setDoctorInput(e.target.value)}
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
            label="Date"
            type="date"
            value={dateInput}
            onChange={(e) => {setDateInput(e.target.value)}}
            className='date'
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      <TextField
        required
        id="outlined-required"
        label="Complaints"
        autoComplete='off'
        value={complaintsInput}
        variant="outlined"
        onChange={(e) => {setComplaintsInput(e.target.value)}}
      />
    </>
  )
}

export default DataInput;