import React, { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import { BsTrash } from 'react-icons/bs';
import TaskTemplate from '../TaskTemplate/TaskTemplate';
import { Link, useLocation } from 'react-router-dom';

const Main = (props) => {
  const { pathname } = useLocation();

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim() === '') {
      return alert('Please enter a task');
    }
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const completedTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='header-component-container'>
      <div className='header'>
        <div className='title'>
          <h1>#todo</h1>
        </div>
      </div>
      <div className='btn-container'>
        <ul>
          <li className={pathname === '/' ? 'select-line' : 'select-line-hide'}>
            {' '}
            <Link to='/'>All</Link>
          </li>
          <li
            className={
              pathname === '/active' ? 'select-line' : 'select-line-hide'
            }
          >
            {' '}
            <Link to='/active'>Active</Link>
          </li>
          <li
            className={
              pathname === '/completed' ? 'select-line' : 'select-line-hide'
            }
          >
            {' '}
            <Link to='/completed'>Completed</Link>
          </li>
        </ul>
        <div className='underline'>
          <div className='line'></div>
        </div>
      </div>

      <TaskForm onSubmit={addTask} />
      <div className='task-container'>
        {tasks.map((task) => {
          return (
            <TaskTemplate
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              taskCompleted={completedTask}
            />
          );
        })}
      </div>

      <div className='btn-wrapper'>
        <div className='btn'>
          <button
            className={
              pathname === '/' || pathname === '/active'
                ? 'del-btn del-btn-hide'
                : 'del-btn'
            }
            onClick={clearAllTasks}
          >
            <BsTrash className='trash-bin' /> delete all{' '}
          </button>
        </div>
      </div>
      <p>
        created by <a href='https://www.instagram.com/tonsofcode'>tonsofcode</a>{' '}
        - devChallenges.io
      </p>
    </div>
  );
};

export default Main;
