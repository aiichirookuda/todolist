import React, { useState } from 'react';

export const Done = (props) => {

  const { title, details, completionDate, onClickReturn } = props;

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  let modal;
  if (isOpen) {
    modal =
      <>
        <div className='modal'>
          <p>{title}</p>
          <p>details</p>
          <p className='details'>{details}</p>
          <p>Completion Date</p>
          <p>{completionDate}</p>
          <button onClick={onClickReturn}>return</button>
          <button onClick={close}>close</button>
        </div>
        <div className='background'></div>
      </>
  }

  return (
    <>
        <ul className='box' onClick={open}>
          <li>{title}</li>
          <li>{details}</li>
          <li className='date'>{completionDate}</li>
        </ul>
      {modal}
    </>
  );
}