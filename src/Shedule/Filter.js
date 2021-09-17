import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Filter.scss'

const Filter = ({upward, setUpward, smaller, setSmaller}) => {
  return(
    <div className="filter">
      <form className='date-form'>
        <TextField
          id="date"
          label="From"
          type="date"
          value={upward}
          onChange={(e) => {setUpward(e.target.value)}}
          className='date'
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <form className='date-form'>
        <TextField
          id="date"
          label="Until"
          type="date"
          value={smaller}
          onChange={(e) => {setSmaller(e.target.value)}}
          className='date'
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  )
}

export default Filter;