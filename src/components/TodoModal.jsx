import React from 'react';

export const TodoModal = (props) => {

  const { title, details, deadline, modalClose } = props;

  return (
    <>
      <div className='modal'>
        <p>{title}</p>
        <p>details</p>
        <textarea className='details' value={details} />
        <p>deadline</p>
        <input className='deadline' type='date' value={deadline} />
        <button>complete</button>
        <button>delete</button>
        <button onClick={modalClose}>close</button>
      </div>
      <div className='background'></div>
    </>
  );
}