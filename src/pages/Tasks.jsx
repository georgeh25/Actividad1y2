import React from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';

const Tasks = () => {
  return (
    <div className="container">
      <h2>Gestión de Tareas</h2>
      <TaskForm />
      <TaskList isLoading={false} />
    </div>
  );
};

export default Tasks;
