import React from 'react';

export const TodoModal = () => {
  
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
        <button>close</button>
      </div>
      <div className='background'></div>
    </>
  );
}