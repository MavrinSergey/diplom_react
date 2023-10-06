import React from "react";
import task from "./Task.module.css";

const Task = (props) => {
    return  (
        <div className = {task.wrapper} data-item="66" draggable="true">
            <div className = {task.task}>
                <div className = {task.header}>
                    <h4 className = {task.title}>{props.title}</h4>
                    <input className = {task.checkbox} type="checkbox" name={props.id} id={props.id}/>
                </div>
                <div className = {task.content}>
                    <div className={task.desc}>{props.desc}</div>
                    <div className={task.date}>
                        <div className="task__date__row">создание: <span>{props.create}</span></div>
                        <div className="task__date__row">обнавлено: <span>{props.update}</span></div>
                        <div className="task__date__row">завершение: <span>{props.expirate}</span></div>
                    </div>
                </div>
                <div className={task.respons}>{props.respons}</div>
            </div>
        </div>
    )
}

export default Task