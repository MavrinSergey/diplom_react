import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";



export const rerenderEntireTree = (state, addTask, root = ReactDOM.createRoot(document.getElementById('root'))) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addTask={addTask}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}