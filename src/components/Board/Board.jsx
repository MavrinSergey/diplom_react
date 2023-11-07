import React, {useState} from "react";
import Column from "./Column/Column";
import board from "./Board.module.css";
import Modal from "../Modal/Modal";
import ModalAddTask from "./ModalAddTask/ModalAddTask";

const Board = (props) => {
    const [modalActive, setModalActive] = useState(true)


    return (
        <section>
            <h2 className={board.title} id="scrum-board__title">ScrumBoard</h2>
            <div className="btn-group">
                <button className="btn" id="task-add" onClick={() => setModalActive(true)}>Add task</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <ModalAddTask addTask={props.addTask}/>
                </Modal>

                <button className="btn" id="task-delete">Delete</button>
                <button className="btn" id="task-update">Update</button>
            </div>
            <div className={board.board} id="board">
                <Column tasks={props.tasks.toWork}/>
                <Column tasks={props.tasks.inWork}/>
                <Column tasks={props.tasks.agreement}/>
                <Column tasks={props.tasks.completed}/>
            </div>
        </section>
    )
}
export default Board