import React, { useState } from 'react';

export const Todo = (props) => {

  const { title, details, deadline, detailsText, onClickDelete, onClickComplete, onChangeDetailsText } = props;

  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const TodoComplete = () => { onClickComplete(); close(); };
  const TodoDelete = () => { onClickDelete(); close(); };

  let modal;
  if (isOpen) {
    modal =
      <>
        <div className='todo-modal'>
          <p>{title}</p>
          <p>details</p>
          <textarea className='details' value={detailsText} onChange={onChangeDetailsText} />
          <p>deadline</p>
          <input className='deadline' type='date' />
          <button onClick={TodoComplete}>complete</button>
          <button onClick={TodoDelete}>delete</button>
          <button onClick={close}>close</button>
        </div>
        <div className='background'></div>
      </>
  }


  return (
    <div className='box'>
      <ul onClick={open}>
        <li>{title}</li>
        <li>{details}</li>
        <li>{deadline}</li>
      </ul>
      {modal}
    </div>
  );
}