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
  const currencies = [
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
        value={nameInput}
        variant="outlined"
        autocomplete="off"
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
        {currencies.map((option) => (
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
        autocomplete="off"
        id="outlined-required"
        label="Complaints"
        value={complaintsInput}
        variant="outlined"
        onChange={(e) => {setComplaintsInput(e.target.value)}}
      />
    </>
  )
}

export default DataInput;