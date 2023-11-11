import React from "react";
import styleTask from "./Task.module.css";

const Task = (props) => {
    // debugger
    return props.tasks.map(task => {
        return (<div className={styleTask.wrapper} data-item={task.id} draggable="true">
            <div className={styleTask.task}>
                <div className={styleTask.header}>
                    <h4 className={styleTask.title}>{task.title}</h4>
                    <input className={styleTask.checkbox} type="checkbox" name={task.id} id={task.id}/>
                </div>
                <div className={styleTask.content}>
                    <div className={styleTask.desc}>{task.description}</div>
                    <div className={styleTask.date}>
                        <div className="task__date__row">создание: <span>{task.date_creation}</span></div>
                        <div className="task__date__row">обнавлено: <span>{task.update_date}</span></div>
                        <div className="task__date__row">завершение: <span>{task.lead_time}</span></div>
                    </div>
                </div>
                <div className={styleTask.respons}>{task.user}</div>
            </div>
        </div>)
    })
}

export default Task