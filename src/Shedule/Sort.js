import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Sort.scss';

const Sort = ({setSort, sort, sortReverse, setSortReverse }) => {
  const sortingType = [
    {
      label: 'Increase',
      value: 1
    },
    {
      label: 'Decrease',
      value: 0
    }
  ]

  const sortBy = [
    {
      value: '_id',
      label: '',
    },
    {
      value: 'Name',
      label: 'Name',
    },
    {
      value: 'Doctor',
      label: 'Doctor',
    },
    {
      value: 'Data',
      label: 'Data',
    },
  ];

  const changeSortBy = (e) => {
    setSort(e.target.value);
    setSortReverse(1);
  }

  return (
    <div className="sort">
      <TextField
        id="outlined-select-currency-native"
        select
        className="sort-inc"
        label="SortBy"
        value={sort}
        onChange={(e) => changeSortBy(e)}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
      >
        {sortBy.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      {sort !== '_id' && <TextField
        id="outlined-select-currency-native"
        select
        className="sort-inc"
        label="Direction"
        value={sortReverse}
        onChange={(e) => setSortReverse(e.target.value)}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
      >
        {sortingType.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      }
    </div>
  )
}

export default Sort;