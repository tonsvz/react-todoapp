import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const TaskForm = (props) => {
  const { pathname } = useLocation();
  const [task, setTask] = useState('');

  const inputHandler = (e) => {
    setTask(e.target.value);
  };

  const taskSender = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: task,
      completed: false,
    };
    props.onSubmit(newTask);
    setTask(e.target.reset());
  };

  if (pathname === '/completed') return null; //Hiding TaskForm for /completed component path

  return (
    <div className='task-form-container'>
      <div className='input-container'>
        <form action='task-form' onSubmit={taskSender}>
          <input
            className='task-input'
            type='text'
            placeholder='add details'
            name='text'
            onChange={inputHandler}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
