import React from "react";
import {addTaskActionCreator, updateNewTaskActionCreator} from "../../../redux/state";

const ModalAddTask = (props) => {

    const newTitleTask = React.createRef();

    const addTask = () => {
        props.dispatch(addTaskActionCreator());
    }

    const onTaskChange = () => {
        const title = newTitleTask.current.value;
        props.dispatch(updateNewTaskActionCreator(title));
    }

    return (
        <form action="">
            <h2 className="form-task__title">descriptions task</h2>
            <div className="form-task__inputBox">
                <input type="text" name="title" required=""
                       onChange={onTaskChange}
                       ref={newTitleTask}
                       value={props.newTaskData.title}/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="form-task__inputBox">
                <button type="submit" className="form-task__submit btn" onClick={addTask}>
                    Add Task
                </button>
            </div>
        </form>
    )
}
export default ModalAddTask