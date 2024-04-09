import React from 'react';

import Task from '../Task/Task';
import './TaskList.css';

const TaskList = () => {
  const tasks = [
    { id: 1, text: 'Check mail', className: 'completed' },
    { id: 2, text: 'Drink coffee', className: 'editing' },
    { id: 3, text: 'Refuel the car' },
  ];

  // Это начальный вариант кода. В нем li не присваиваются классы.
  // const taskComponents = tasks.map((task) => <Task key={task.id} text={task.text} />)

  const taskComponents = tasks.map((task) => (
    <Task key={task.id} text={task.text} className={task.className} />
  ));

  return <ul className="todo-list">{taskComponents}</ul>;
};

export default TaskList;
