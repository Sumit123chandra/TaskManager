import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // ✅ Import default App
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
