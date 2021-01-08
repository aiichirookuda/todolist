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


  let style;
  const today = deadline;
  switch (true) {
    case today === deadline:
      style = {backgroundColor: 'rgba(255, 0, 0, 0.355)'} 
      break;
    // case today > deadline:
    //   // style = 赤
    //   break;
    // default:
    //   // style = 緑
  }


  return (
    <>
      <ul style={style} className='box' onClick={open}>
        <li>{title}</li>
        <li>{details}</li>
        <li className='date'>{deadline}</li>
      </ul>
      {modal}
    </>
  );
}