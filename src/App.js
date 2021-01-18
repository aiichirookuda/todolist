import React, { useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Done } from './components/Done';

export const App = () => {
  const [category, /*setCategory*/] = useState(['work', 'private']);
  const [incompleteTodo, setIncompleteTodo] = useState([
    { title: 'todo1', details: 'details1', deadline: '2020-11-10' },
    { title: 'todo2', details: 'details2', deadline: '2021-01-12' },
    { title: 'todo3', details: 'details3', deadline: '2021-03-25' }
  ]);
  const [completeTodo, setCompleteTodo] = useState([
    { title: 'todo4', details: 'details4', completionDate: '2020-12-01' },
    { title: 'todo5', details: 'details5', completionDate: '2020-12-05' }
  ]);

  // 時間の取得
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const date = ('0' + (now.getDate())).slice(-2);
  const today = `${year}-${month}-${date}`;

  // #TODO関連
  const [todoText, setTodoText] = useState('');
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // ##TODO追加
  const onSubmitAdd = (e) => {
    e.preventDefault();
    if (todoText === '') return;
    const newTodo = [...incompleteTodo, { title: todoText, details: '', deadline: '' }];
    setIncompleteTodo(newTodo);
    setTodoText('');
  };

  // ##TODO削除
  const onClickDelete = (i) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(i, 1);
    setIncompleteTodo(newTodo);
  };

  // ##TODO完了
  const onClickComplete = (i) => {
    incompleteTodo[i].completionDate = today;

    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(i, 1);
    const newCompleteTodo = [...completeTodo, incompleteTodo[i]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  // #説明関連
  const [detailsText, setDetailsText] = useState('');
  const onChangeDetailsText = (e) => setDetailsText(e.target.value);

  // ##説明文の取得
  const getDetailsText = (i) => {
    if (incompleteTodo[i].detailsText === '') {
      setDetailsText('');
    } else {
      setDetailsText(incompleteTodo[i].details)
    }
  };

  // ##説明文の更新
  const setNewDetails = (i) => {
    incompleteTodo[i].details = detailsText;
    const newDetails = [...incompleteTodo];
    setIncompleteTodo(newDetails);
  };

  // #締め切り関連
  const [deadlineDate, setDeadlineDate] = useState('');
  const onChangeDeadlineDate = (e) => setDeadlineDate(e.target.value);

  // ##締め切り日の取得
  const getDeadlineDate = (i) => {
    if (incompleteTodo[i].deadline === '') {
      setDeadlineDate('');
    } else {
      setDeadlineDate(incompleteTodo[i].deadline);
    }
  };

  // ##締め切り日の更新
  const setNewDeadline = (i) => {
    incompleteTodo[i].deadline = deadlineDate;
    const newDeadline = [...incompleteTodo];
    setIncompleteTodo(newDeadline);
  };

  // #DONE関連
  // ##DONE戻す
  const onClickReturn = (i) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(i, 1);
    setCompleteTodo(newCompleteTodo);

    const newTodo = [...incompleteTodo, completeTodo[i]];
    setIncompleteTodo(newTodo);
  };

  const allChecked = () => {
    if (document.getElementById('todoCheck').checked) {
      document.getElementById('todoCheck').checked = false;
    } else {
      document.getElementById('todoCheck').checked = true;
    }

    if (document.getElementById('doneCheck').checked) {
      document.getElementById('doneCheck').checked = false;
    } else {
      document.getElementById('doneCheck').checked = true;
    }
  }

  return (
    <div className='wrapper show'>
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
            <label className='done-button' onClick={allChecked}>done</label>
          </div>

          {/* input */}
          <form onSubmit={onSubmitAdd}>
            <input className='input-todo' placeholder='Please add new TODO' value={todoText} onChange={onChangeTodoText} />
          </form>

          {/* todo */}
          <input type='checkBox' id='todoCheck'></input>
          <div className='todo'>
            <p>todo</p>
            {incompleteTodo.map((todo, i) => {
              return (
                <Todo key={i}
                  title={todo.title}
                  details={todo.details}
                  deadline={todo.deadline}
                  detailsText={detailsText}
                  deadlineDate={deadlineDate}
                  onChangeDetailsText={onChangeDetailsText}
                  onChangeDeadlineDate={onChangeDeadlineDate}
                  onClickDelete={() => onClickDelete(i)}
                  onClickComplete={() => onClickComplete(i)}
                  setNewDetails={() => setNewDetails(i)}
                  setNewDeadline={() => setNewDeadline(i)}
                  getDetailsText={() => getDetailsText(i)}
                  getDeadlineDate={() => getDeadlineDate(i)}
                  today={today}
                />
              );
            })}
          </div>
        </div>

        <div className='right-container'>
          {/* done */}
          <input type='checkBox' id='doneCheck'></input>
          <div className='done'>
            <div className='space'></div>
            <p>done</p>
            {completeTodo.map((todo, i) => {
              return (
                <Done key={i}
                  title={todo.title}
                  details={todo.details}
                  completionDate={todo.completionDate}
                  onClickReturn={() => onClickReturn(i)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}