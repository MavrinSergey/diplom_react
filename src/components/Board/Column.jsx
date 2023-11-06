import React from "react";
import Task from "./Task";
import column from "./Column.module.css";

const Column = (props) => {
    return (
        <div className={column.column}>
            <div className={column.header}>to-work</div>
            <div className={column.content} id="to-work">
                <Task tasks={props.tasks}/>
            </div>
        </div>
    )
}

export default Column
