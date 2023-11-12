import React from "react";


const ModalAddTask = (props) => {
debugger
    const newTitleTask = React.createRef();

    const onAddTask = () => {
        props.addTask();
    }

    const onTaskChange = () => {
        const title = newTitleTask.current.value;
        props.updateNewTaskTitle(title);
    }

    return (
        <form action="">
            <h2 className="form-task__title">descriptions task</h2>
            <div className="form-task__inputBox">
                <input type="text" name="title" required=""
                       key="user_name_key"
                       onChange={onTaskChange}
                       ref={newTitleTask}
                       value={props.newTaskData.title}/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="form-task__inputBox">
                <button type="submit" className="form-task__submit btn" onClick={onAddTask}>
                    Add Task
                </button>
            </div>
        </form>
    )
}


export default ModalAddTask