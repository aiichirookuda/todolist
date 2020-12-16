import React, { useState } from 'react';
import './App.css';
import { TodoModal } from './components/TodoModal';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [category, /*setCategory*/] = useState(['work', 'private']);
  const [incompleteTodo, setIncompleteTodo] = useState([
    { title: 'todoリストアプリ作成', details: 'Reactで作る', deadline: '2020-12-14' },
    { title: 'todoリストアプリ改良', details: 'コンポーネント化', deadline: '2020-12-30' }
  ]);
  const [completeTodo, setCompleteTodo] = useState([
    { title: 'todo3', details: 'details3', completionDay: '2020/12/1' },
    { title: 'todo4', details: 'details4', completionDay: '2020/12/5' }
  ]);
  const [modal, setModal] = useState('');

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onSubmitAdd = (event) => {
    event.preventDefault();
    const newTodo = [...incompleteTodo, { title: todoText, details: '', deadline: '' }];
    setIncompleteTodo(newTodo);
    setTodoText('');
  };

  const modalOpen = (index) => {
    setModal(
      <TodoModal
        title={incompleteTodo[index].title}
        details={incompleteTodo[index].details}
        deadline={incompleteTodo[index].deadline}
        modalClose={()=>setModal('')}
      />
    );
  };

  return (
    <>
      {/* header */}
      <div className='logo'>Logo</div>

      <div className='main-wrapper'>
        <div className='left-container'>

          {/* category */}
          <div className='category'>
            {category.map((categoryName) => {
              return (
                <p key={categoryName}>{categoryName}</p>
              );
            })}
            <p>+</p>
          </div>

          {/* input */}
          <form onSubmit={onSubmitAdd}>
            <input className='input-todo' placeholder='Please add new TODO' value={todoText} onChange={onChangeTodoText} />
          </form>

          {/* todo */}
          <div className='todo'>
            {incompleteTodo.map((todo, index) => {
              return (
                <ul key={index} className='box' onClick={() => modalOpen(index)}>
                  <li>{todo.title}</li>
                  <li>{todo.details}</li>
                  <li>{todo.deadline}</li>
                </ul>
              );
            })}
          </div>
        </div>

        <div className='right-container'>
          {/* done */}
          <div className='done'>
            <p>done</p>
            <div className='space'></div>
            {completeTodo.map((todo, index) => {
              return (
                <ul key={index} className='box'>
                  <li>{todo.title}</li>
                  <li>{todo.details}</li>
                  <li>{todo.completionDay}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      {modal}
    </>
  );
}