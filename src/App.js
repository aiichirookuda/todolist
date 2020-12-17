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
    { title: 'todo3', details: 'details3', completionDate: '2020/12/1' },
    { title: 'todo4', details: 'details4', completionDate: '2020/12/5' }
  ]);
  const [modal, setModal] = useState('');

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onSubmitAdd = (event) => {
    event.preventDefault();
    const newTodo = [...incompleteTodo, { title: todoText, details: '', deadline: '' }];
    setIncompleteTodo(newTodo);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
    setModal('');
  };

  const onClickComplete = (index) => {
    const now = new Date();
    const getCompletionDate = () =>{
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const today = `${year}-${month}-${date}`;
      incompleteTodo[index].completionDate = today;
    };
    getCompletionDate();

    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);
    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
    setModal('');
  };

  const modalOpen = (index) => {
    setModal(
      <TodoModal
        title={incompleteTodo[index].title}
        details={incompleteTodo[index].details}
        deadline={incompleteTodo[index].deadline}
        modalClose={() => setModal('')}
        todoDelete={() => onClickDelete(index)}
        todoComplete={() => onClickComplete(index)}
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
                  <li>{todo.completionDate}</li>
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