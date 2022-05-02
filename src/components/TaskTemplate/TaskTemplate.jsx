import React, { useEffect } from 'react';
import { BsTrash } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const TaskTemplate = ({ id, text, completed, taskCompleted, deleteTask }) => {
  const { pathname } = useLocation();

  if (completed === true && pathname === '/active') {
    return null;
  } else if (completed === false && pathname === '/completed') {
    return null;
  }

  // console.log(completed);
  return (
    <div className='task-template-container'>
      <div className='checks-container'>
        <div className={completed ? 'checks completed' : 'checks'}>
          <div className='input-text'>
            <input
              type='checkbox'
              name=''
              id=''
              checked={completed}
              onClick={() => {
                taskCompleted(id);
              }}
            />
            <p>{text}</p>
          </div>
          <div
            className={
              pathname === '/active' || pathname === '/'
                ? 'task-delete-hide'
                : 'task-delete'
            }
          >
            <BsTrash
              className='trash-bin delete-task'
              onClick={() => deleteTask(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTemplate;
