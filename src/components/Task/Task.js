import React from 'react';
import './Task.css';

const Task = ({ text, className }) => {
  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{text}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {className === 'editing' && (
        <input type="text" className="edit" value={text} />
      )}
    </li>
  );
};

export default Task;
