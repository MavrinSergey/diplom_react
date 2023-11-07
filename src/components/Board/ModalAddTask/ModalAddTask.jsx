import React from "react";

const ModalAddTask = (props) => {

    const newTitleTask = React.createRef();
    const newDescriptionTask = React.createRef();
    const newLead_timeTask = React.createRef();
    const newStatusTask = React.createRef();
    const newUserTask = React.createRef();
    const addTask = () => {
        const newTask = {
            date_creation: newLead_timeTask,
            description: newDescriptionTask,
            status: newStatusTask,
            title: newTitleTask,
            user: newUserTask,
        };
        props.addTask(newTask);
        // newTitleTask.current.value = '';
    }
    return (
        <form action="">
            <h2 className="form-task__title">descriptions task</h2>
            <div className="form-task__inputBox">
                <input type="text" name="title" required="" ref={newTitleTask}/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="form-task__inputBox">
                <input type="text" name="description" required=""  ref={newDescriptionTask}/>
                <label htmlFor="description">Description</label>
            </div>
            <div className="form-task__inputBox">
                <input type="date" name="lead_time" required=""  ref={newLead_timeTask}/>
            </div>
            <div className="form-task__inputBox">
                <select required="" ref={newStatusTask}>
                    <option value="to-work">to-work</option>
                    <option value="in-work">in-work</option>
                    <option value="agreement">agreement</option>
                    <option value="completed">completed</option>
                </select>
                <label htmlFor="status">status</label>
            </div>
            <div className="form-task__inputBox">
                <input type="text" name="user" required="" ref={newUserTask}/>
                <label htmlFor="user">user</label>
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