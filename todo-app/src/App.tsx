import React from 'react';

import { Routes, Route } from "react-router-dom";import './App.css';
import PageIndex from './pages/index'
import ToDoIndex from './pages/Todo/index'

function App() {
  return (    <>
    <Routes>
      <Route path="/" element={<PageIndex />} />
      <Route path="/todo" element={<ToDoIndex />} />
    </Routes>
    </>
  );
}

export default App;
