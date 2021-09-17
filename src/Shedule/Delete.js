import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './Delete.scss'

const Delete = ({_id, setAllShedule, setOpenDel}) => {

const butDelete = (_id) => {
  axios.delete(`http://localhost:8000/deleteShedule?_id=${_id}`).then(res => {
    setAllShedule(res.data.data);
  });

  setOpenDel(false);
}
  return (
    <>
    <div className="modal-delete">
      <div className="modal-head">
        <p>Delete entry</p>
      </div>
      <div className="modal-body">
        <p>Are you sure you want to delete the entry?</p>
      </div>
      <div className="modal-footer">
        <Button variant="contained" onClick={() => setOpenDel(false)}>Cancel</Button>
        <Button variant="contained" onClick={() => butDelete(_id)}>Delete</Button>
      </div>
    </div>

    <div className="modal-shadow"></div>
    </>
  );
}

export default Delete;