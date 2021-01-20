import React, { useState } from 'react';

export const Todo = (props) => {

  const {
    title, details, deadline,
    detailsText, deadlineDate,
    onChangeDetailsText, onChangeDeadlineDate,
    onClickDelete, onClickComplete,
    setNewDetails, setNewDeadline,
    getDetailsText, getDeadlineDate,
    today
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
        <div className='modal'>
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
  switch (true) {
    case deadline === '':
      // 緑
      style = { backgroundColor: ' rgba(0, 128 ,0 ,0.300)' }
      break;
    case deadline === today:
      // 黄
      style = { backgroundColor: 'rgba(255, 255, 0 ,0.355)' }
      break;
    case deadline < today:
      // 赤
      style = { backgroundColor: 'rgba(255 , 0 , 0, 0.355)' }
      break;
    default:
      // 緑
      style = { backgroundColor: ' rgba(0, 128 ,0 ,0.300)' }
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