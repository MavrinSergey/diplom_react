import React from "react";
import {addTaskActionCreator, updateNewTaskActionCreator} from "../../../redux/tasks-reducer";
import ModalAddTask from "./ModalAddTask";


const ModalAddTaskContainer = (props) => {
    // debugger
    let state = props.store.getState();


    let addTask = () => {
        props.store.dispatch(addTaskActionCreator());
    }

    let TaskChange = (title) => {
        let action = updateNewTaskActionCreator(title);
        props.store.dispatch(action);
    }

    return (
       <ModalAddTask updateNewTaskTitle={TaskChange} addTask={addTask}
                     newTaskData={state.tasks.newTaskData}/>
    )
}
export default ModalAddTaskContainer