import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Display from './components/display';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path=":thename/:id" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
