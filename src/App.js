import React, { useState } from 'react';
import './App.css';

export const App = () => {
  return (
    <>
      {/* header */}
      <div className='logo'>Logo</div>
      <div className='main-wrapper'>
        <div className='left-container'>
          {/* category */}
          <div className='category'>
            <p>work</p>
            <p>life</p>
            <p>+</p>
          </div>
          {/* input */}
          <form>
            <input placeholder='Please add new TODO'/>
          </form>
          {/* todo */}
          <div className='todo'>
            <ul className='box'>
              <li>title</li>
              <li>details</li>
              <li>deadline</li>
            </ul>
          </div>
        </div>
        <div className='right-container'>
          {/* done */}
          <div className='done'>
            <p>done</p>
            <div className='space'></div>
            <ul className='box'>
              <li>title</li>
              <li>details</li>
              <li>completion day</li>
            </ul>
            <ul className='box'>
              <li>title</li>
              <li>details</li>
              <li>completion day</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
