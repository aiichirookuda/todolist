import React from 'react';

export const Category = (props) => {

  const { allChecked, toggle } = props;
  
  return (
    <div className='category'>
      <label
        className='done-button'
        onClick={allChecked}>
        {toggle}
      </label>
    </div>

  );
};