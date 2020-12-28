import React, { useState } from 'react';
import './App.css';
import { TodoModal } from './components/TodoModal';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [detailsText, setDetailsText] = useState('');
  const [category, /*setCategory*/] = useState(['work', 'private']);
  const [incompleteTodo, setIncompleteTodo] = useState([
    { title: 'todo1', details: 'details1', deadline: '2020-11-10' },
    { title: 'todo2', details: 'details2', deadline: '2020-11-25' }
  ]);
  const [completeTodo, setCompleteTodo] = useState([
    { title: 'todo3', details: 'details3', completionDate: '2020-12-1' },
    { title: 'todo4', details: 'details4', completionDate: '2020-12-5' }
  ]);

  // todo追加
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onSubmitAdd = (e) => {
    e.preventDefault();
    if (todoText === '') return;
    const newTodo = [...incompleteTodo, { title: todoText }];
    setIncompleteTodo(newTodo);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
    setIsOpen(false);
  };

  const onClickComplete = (index) => {
    const now = new Date();
    const getCompletionDate = () => {
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
    setIsOpen(false);
  };

  //modal
  const [isOpen, setIsOpen] = useState(false);
  const onClickModalOpen = () => setIsOpen(true);
  const onClickModalClose = () => setIsOpen(false);


  const onChangeDetailsText = (e) => setDetailsText(e.target.value);

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
                <div key={index}>
                  <ul className='box' onClick={onClickModalOpen}>
                    <li>{todo.title}</li>
                    <li>{todo.details}</li>
                    <li>{todo.deadline}</li>
                  </ul>
                  <TodoModal
                    isOpen={isOpen}
                    title={incompleteTodo[index].title}
                    details={incompleteTodo[index].details}
                    deadline={incompleteTodo[index].deadline}
                    detailsText={detailsText}
                    onChangeDetailsText={onChangeDetailsText}
                    onClickDelete={onClickDelete}
                    onClickComplete={() => onClickComplete(index)}
                    closeModal={onClickModalClose}
                  />
                </div>
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
    </>
  );
}