import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import CreateAuthor from './components/CreateAuthor';
import AuthorChat from './components/AuthorChat';
import Logout from './components/Logout';
import EditAuthor from './components/EditAuthor';

function App() {
  const results = localStorage.getItem("uid");
  const [uid, setID] = useState(
    results ? results : ""
  );

  const login = id => {
    setID(id);
    localStorage.setItem("uid", id);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            uid ?
              <LandingPage uid={uid} />
              :
              <div className="row">
                <p className="display-1 m-3">Welcome to Authors Paradise</p>
                <Login setID={login} />
                <Register setID={login} />
              </div>
          } />
          <Route path="/create" element={<CreateAuthor />} />
          <Route path="/author/:_id" element={<AuthorChat uid={uid} />} />
          <Route path="/logout" element={<Logout setID={login} />} />
          <Route path="/edit/:_id" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
