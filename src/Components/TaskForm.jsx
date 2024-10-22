import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask({
        id: Date.now(),
        title: title.trim(),
        completed: false
      }));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nueva tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;