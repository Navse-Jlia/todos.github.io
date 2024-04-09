import React from 'react';
import ReactDOM from 'react-dom';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
