import tasksReducer from "./tasks-reducer";

const store = {
    _state: {
        tasks: {
            toWork: [],
            inWork: [],
            agreement: [],
            completed: [],
            newTaskData: {
                title: 'new-title',
            },
        },
        sidebar: {},
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

    dispatch(action) {
        this._state.tasks = tasksReducer(this._state.tasks, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;
// store - OOP
