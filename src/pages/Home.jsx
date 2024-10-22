import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center">
      <h1>Bienvenido a Task Manager</h1>
      <p className="lead">
        Una aplicación simple para gestionar tus tareas diarias
      </p>
      <Link to="/tasks" className="btn btn-primary">
        Ir a mis tareas
      </Link>
    </div>
  );
};

export default Home;