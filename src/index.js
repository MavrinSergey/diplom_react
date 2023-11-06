import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tasks = [
    {
        date_creation: "2023-08-26",
        description: "добавить хеширование пароля при регистрации",
        id: 66,
        lead_time: "2023-09-09",
        status: "in-work",
        title: "Регистрация",
        update_date: "2023-11-05",
        user: 2,
    }, {
        date_creation: "2023-08-26",
        description: "добавить хеширование пароля при регистрации",
        id: 66,
        lead_time: "2023-09-09",
        status: "in-work",
        title: "Регистрация",
        update_date: "2023-11-05",
        user: 2,
    }
];
const toWork = [];
const inWork = [];
const agreement = []
const completed = [];
tasks.forEach((task) => {
    switch (task.status) {
        case 'in-work':
            inWork.push(task)
            break
        case 'agreement':
            agreement.push(task)
            break
        case 'completed':
            completed.push(task)
            break
        default:
            toWork.push(task)
            break
    }
})
root.render(
  <React.StrictMode>
    <App toWork={toWork} inWork={inWork} agreement={agreement} completed={completed}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
