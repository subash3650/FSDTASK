import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//docker run --name nginx-container -d -p 80:80 -v C:\Users\subas\OneDrive\Desktop\fsdtask\client\public:/usr/share/nginx/html ngin