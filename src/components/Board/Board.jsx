import React, {useState} from "react";
import Column from "./Column/Column";
import board from "./Board.module.css";
import Modal from "../Modal/Modal";
import ModalAddTaskContainer from "./ModalAddTask/ModalAddTaskContainer";
// import store from "../../redux/store";


const Board = (props) => {
    let state = props.store.getState();
debugger
    const [modalActive, setModalActive] = useState(false)

    return (
        <section>
            <h2 className={board.title} id="scrum-board__title">ScrumBoard</h2>
            <div className="btn-group">
                <button className="btn" id="task-add" onClick={() => setModalActive(true)}>Add task</button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <ModalAddTaskContainer store={props.store}/>
                </Modal>

                <button className="btn" id="task-delete">Delete</button>
                <button className="btn" id="task-update">Update</button>
            </div>
            <div className={board.board} id="board">
                <Column tasks={state.tasks.toWork}/>
                <Column tasks={state.tasks.inWork}/>
                <Column tasks={state.tasks.agreement}/>
                <Column tasks={state.tasks.completed}/>
            </div>
        </section>
    )
}
export default Board