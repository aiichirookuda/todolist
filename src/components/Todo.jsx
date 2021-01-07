import React, { useState } from 'react';

export const Todo = (props) => {

  const {
    title, details, deadline,
    detailsText, deadlineDate,
    onChangeDetailsText, onChangeDeadlineDate,
    onClickDelete, onClickComplete, 
    setNewDetails, setNewDeadline,
    getDetailsText, getDeadlineDate
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    getDetailsText(); 
    getDeadlineDate();
    setIsOpen(true);
  };

  const close = () => {
    setNewDetails();
    setNewDeadline();
    setIsOpen(false);
  };

  const TodoComplete = () => {
    onClickComplete(); setIsOpen(false);
  };

  const TodoDelete = () => {
    onClickDelete(); setIsOpen(false);
  };

  let modal;
  if (isOpen) {
    modal =
      <>
        <div className='todo-modal'>
          <p>{title}</p>
          <p>details</p>
          <textarea className='details'
            value={detailsText}
            onChange={onChangeDetailsText} />
          <p>deadline</p>
          <input className='deadline'
            type='date'
            value={deadlineDate}
            onChange={onChangeDeadlineDate} />
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