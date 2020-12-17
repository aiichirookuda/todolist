import React from 'react';

export const TodoModal = (props) => {

  const { title, details, deadline, modalClose, todoDelete, todoComplete } = props;

  

  return (
    <>
      <div className='modal'>
        <p>{title}</p>
        <p>details</p>
        <textarea className='details' defaultValue={details} />
        <p>deadline</p>
        <input className='deadline' type='date' defaultValue={deadline} />
        <button onClick={todoComplete}>complete</button>
        <button onClick={todoDelete}>delete</button>
        <button onClick={modalClose}>close</button>
      </div>
      <div className='background'></div>
    </>
  );
}