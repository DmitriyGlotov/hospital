import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Sort.scss';

const Sort = ({setSort, sort, sortReverse, setSortReverse, sortFlag, setSortFlag}) => {
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
      value: '',
    },
    {
      value: 'Name',
    },
    {
      value: 'Doctor',
    },
    {
      value: 'Date',
    },
  ];

  const changeSortBy = (e) => {
    setSort(e.target.value);
    if (e.target.value === '') {
      setSortFlag(false);
      setSortReverse(1);
    } else setSortFlag(true);
  }

  return (
    <div className="sort">
      {sortFlag && <TextField
        id="outlined-select-currency-native"
        select
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
      <TextField
        id="outlined-select-currency-native"
        select
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
            {option.value}
          </option>
        ))}
      </TextField>
    </div>
  )
}

export default Sort;