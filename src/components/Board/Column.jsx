import React from "react";
import Task from "./Task";
import column from "./Column.module.css";

const Column = () => {
    return  (
        <div className={column.column}>
            <div className={column.header}>to-work</div>
            <div className={column.content} id="to-work">

                <Task title='title' desc='desc' id='id' create='create' update='update' expirate='expirate' respons='respons'/>

            </div>
        </div>
    )
}

export default Column