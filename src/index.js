import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './Context/todo-context';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <TodoProvider>
      <App/>
    </TodoProvider>
  </React.StrictMode>
);