import React, {useState} from "react";
import Column from "./Column/Column";
import board from "./Board.module.css";
import Modal from "../Modal/Modal";
// import ModalAddTaskContainer from "./ModalAddTask/ModalAddTaskContainer";
import ModalAddTask from "./ModalAddTask/ModalAddTask";
// import store from "../../redux/store";


const Board = (props) => {

debugger
    const [modalActive, setModalActive] = useState(true)

    return (
        <section>
            <h2 className={board.title} id="scrum-board__title">ScrumBoard</h2>
            <div className="btn-group">
                <button className="btn" id="task-add" onClick={() => setModalActive(true)}>Add task</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <ModalAddTask newTaskData={props.tasks.newTaskData}
                                  addTask={props.addTask}
                                  updateNewTaskTitle={props.updateNewTaskTitle}/>
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