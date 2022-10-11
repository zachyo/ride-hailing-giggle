import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import CurrentUserProvider from './contexts/currentUser.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentUserProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </CurrentUserProvider>
);

