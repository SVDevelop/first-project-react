import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: "Valera" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Maxim" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hi is are you?" },
  { id: 3, message: "Yo" },
];

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 11 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
