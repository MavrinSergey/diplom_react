const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK = 'UPDATE-NEW-TASK';

const initialState = {
    toWork: [],
    inWork: [],
    agreement: [],
    completed: [],
    newTaskData: {
        title: 'new-title',
    },
}
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const stateCopy = {
                ...state,
                toWork: [...state.toWork],
                inWork: [...state.inWork],
                agreement: [...state.agreement],
                completed: [...state.completed],
            };
            const newTask = {
                date_creation: "2023-08-26",
                description: "добавить хеширование пароля при регистрации",
                id: 55,
                lead_time: "2023-09-09",
                status: 'in-work',
                title: state.newTaskData.title,
                update_date: "2023-11-05",
                user: 3,
            };
            sortedAndAddStateTasks(newTask, stateCopy);
            stateCopy.newTaskData.title = '';
            return stateCopy;
        }
        case UPDATE_NEW_TASK: {
            const stateCopy = {
                ...state,
                newTaskData: {...state.newTaskData},
            }
            stateCopy.newTaskData.title = action.newTitleTask;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addTaskActionCreator = () => {
    return {
        type: ADD_TASK,
    }
}

export const updateNewTaskActionCreator = (title) => {
    return {
        type: UPDATE_NEW_TASK,
        newTitleTask: title,
    }
}

function sortedAndAddStateTasks(task, state) {
    switch (task.status) {
        case 'in-work':
            state.inWork.push(task);
            break;
        case 'agreement':
            state.agreement.push(task);
            break;
        case 'completed':
            state.completed.push(task);
            break;
        default:
            state.toWork.push(task);
            break;
    }
}

export default tasksReducer;