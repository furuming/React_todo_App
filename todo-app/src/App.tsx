import React from 'react';

import { Routes, Route } from "react-router-dom";import './App.css';
import PageIndex from './pages/index'
import ToDoIndex from './pages/Todo/index'
import ToDoCreate from './pages/Todo/create'

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<PageIndex />} />
      <Route path="/todo" element={<ToDoIndex />} />
      <Route path="/todo/create" element={<ToDoCreate />} />
    </Routes>
    </>
  );
}

export default App;
