import {connect} from "react-redux";
import {addTaskActionCreator, updateNewTaskActionCreator} from "../../redux/tasks-reducer";
import Board from "./Board";



// debugger
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        newTaskData: state.tasks.newTaskData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => {
            dispatch(addTaskActionCreator());
        },
        updateNewTaskTitle: (title) => {
            let action = updateNewTaskActionCreator(title);
            dispatch(action);
        }
    }
}

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);
export default BoardContainer
