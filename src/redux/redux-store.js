import {combineReducers, createStore} from "redux";
import tasksReducer from "./tasks-reducer";


const reducers = combineReducers({
    tasks: tasksReducer,
});

const store = createStore(reducers);

export default store;