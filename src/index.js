import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/main.scss'

import Main from './layout/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pf" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


