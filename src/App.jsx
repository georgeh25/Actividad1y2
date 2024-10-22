import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;