import React from 'react';

export const Input = (props) => {

  const { onSubmitAdd, todoText, onChangeTodoText } = props;

  return (
    <form onSubmit={onSubmitAdd}>
      <input className='input-todo' placeholder='Please add new TODO' value={todoText} onChange={onChangeTodoText} />
    </form>
  );
};