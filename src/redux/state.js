const store = {
    _state: {
        tasks: {
            toWork: [],
            inWork: [],
            agreement: [],
            completed: [],
        },
        newTaskData: {
            title: 'new-title',
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addSortTaskToState(task) {
        switch (task.status) {
            case 'in-work':
                this._state.tasks.inWork.push(task)
                break
            case 'agreement':
                this._state.tasks.agreement.push(task)
                break
            case 'completed':
                this._state.tasks.completed.push(task)
                break
            default:
                this._state.tasks.toWork.push(task)
                break
        }
    },

    dispatch(action) {
        if (action.type === ADD_TASK) {
            const newTask = {
                date_creation: "2023-08-26",
                description: "добавить хеширование пароля при регистрации",
                id: 55,
                lead_time: "2023-09-09",
                status: 'to-work',
                title: this._state.newTaskData.title,
                update_date: "2023-11-05",
                user: 3,
            };
            this.addSortTaskToState(newTask);
            this._state.newTaskData.title = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_TASK) {
            this._state.newTaskData.title = action.newTitleTask;
            this._callSubscriber(this._state);
        }
    }

}
const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK = 'UPDATE-NEW-TASK';
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

const tasks = [
    {
        date_creation: "2023-08-26",
        description: "добавить хеширование пароля при регистрации",
        id: 66,
        lead_time: "2023-09-09",
        status: "in-work",
        title: "Регистрация",
        update_date: "2023-11-05",
        user: 2,
    },
];

tasks.forEach((task) => {
    store.addSortTaskToState(task);
})

export default store;
window.state = store;
// store - OOP
