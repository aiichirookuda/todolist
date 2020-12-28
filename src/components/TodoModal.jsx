import React from 'react';

export const TodoModal = (props) => {

  const { title, detailsText, onClickDelete, onClickComplete, onChangeDetailsText, isOpen,
    closeModal } = props;

  return (
    <>
      {isOpen &&
        <div>
          <div className='modal'>
            <p>{title}</p>
            <p>details</p>
            <textarea className='details' value={detailsText} onChange={onChangeDetailsText} />
            <p>deadline</p>
            <input className='deadline' type='date' />
            <button onClick={onClickComplete}>complete</button>
            <button onClick={onClickDelete}>delete</button>
            <button onClick={closeModal}>close</button>
          </div>
          <div className='background'></div>
        </div>
      }
    </>
  );
}