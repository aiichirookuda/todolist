import React, { useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Done } from './components/Done';

export const App = () => {
  const [category, /*setCategory*/] = useState(['work', 'private']);
  const [incompleteTodo, setIncompleteTodo] = useState([
    { title: 'todo1', details: 'details1', deadline: '2020-11-10' },
    { title: 'todo2', details: 'details2', deadline: '2020-11-25' },
    { title: 'todo3', details: 'details3', deadline: '2020-11-25' }
  ]);
  const [completeTodo, setCompleteTodo] = useState([
    { title: 'todo4', details: 'details4', completionDate: '2020-12-1' },
    { title: 'todo5', details: 'details5', completionDate: '2020-12-5' }
  ]);

  // TODO追加
  const [todoText, setTodoText] = useState('');
  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onSubmitAdd = (e) => {
    e.preventDefault();
    if (todoText === '') return;
    const newTodo = [...incompleteTodo, { title: todoText }];
    setIncompleteTodo(newTodo);
    setTodoText('');
  };

  // TODO削除
  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };

  // TODO完了
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
  };

  // TODOの説明関連
  const [detailsText, setDetailsText] = useState('');
  const onChangeDetailsText = (e) => setDetailsText(e.target.value);

  // DONE戻す
  const onClickReturn = (index) => {
    console.log(completeTodo[index]);
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);
    setCompleteTodo(newCompleteTodo);

    const newTodo = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newTodo);
  }

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
                  <Todo
                    title={todo.title}
                    details={todo.details}
                    deadline={todo.deadline}
                    detailsText={detailsText}
                    onChangeDetailsText={onChangeDetailsText}
                    onClickDelete={() => onClickDelete(index)}
                    onClickComplete={() => onClickComplete(index)}
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
                <Done key={index}
                  title={todo.title}
                  details={todo.details}
                  completionDate={todo.completionDate}
                  onClickReturn={()=>onClickReturn(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}