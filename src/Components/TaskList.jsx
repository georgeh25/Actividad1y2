import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../store/taskSlice';
import withLoading from '../hoc/withLoading'; // Asegúrate de que la ruta es correcta

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="list-group mt-3">
      {tasks.map(task => (
        <div key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <span className={task.completed ? 'text-decoration-line-through' : ''}>
              {task.title}
            </span>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(removeTask(task.id))}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

const TaskListWithLoading = withLoading(TaskList);
export default TaskListWithLoading;