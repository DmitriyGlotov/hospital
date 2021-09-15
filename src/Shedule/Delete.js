import React from 'react';
import Del from '../images/Del.png';

// Доделаю в следующем пулреквесте

const Delete = ({_id}) => {
  const [open, setOpen] = React.useState(false);

  const butDel = () => {
    setOpen(true);
  }

  return (
    <div>
      <img src={Del} alt='' onClick={() => butDel()} />

    </div>
  );
}

export default Delete;