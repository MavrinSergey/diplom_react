import React from "react";
import Column from "./Column";
import board from "./Board.module.css";

const Board = (props) => {
    return (
        <section>
            <h2 className={board.title} id="scrum-board__title">ScrumBoard</h2>
            <div className="btn-group">
                <button className="btn" id="task-add">Add task</button>
                <button className="btn" id="task-delete">Delete</button>
                <button className="btn" id="task-update">Update</button>
            </div>
            <div className={board.board} id="board">
                <Column tasks={props.toWork}/>
                <Column tasks={props.inWork}/>
                <Column tasks={props.agreement}/>
                <Column tasks={props.completed}/>
            </div>
        </section>
    )
}
export default Board