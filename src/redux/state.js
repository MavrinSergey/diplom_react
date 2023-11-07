import {rerenderEntireTree} from "../render";

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
    {
        date_creation: "2023-08-26",
        description: "добавить хеширование пароля при регистрации",
        id: 66,
        lead_time: "2023-09-09",
        status: "in-work",
        title: "Регистрация",
        update_date: "2023-11-05",
        user: 1,
    }
];

const state = {
    tasks: {
        toWork: [],
        inWork: [],
        agreement: [],
        completed: [],
    }
}

tasks.forEach((task) => {
    addSortTaskToState(task);
})

function addSortTaskToState(task) {
    switch (task.status) {
        case 'in-work':
            state.tasks.inWork.push(task)
            break
        case 'agreement':
             state.tasks.agreement.push(task)
            break
        case 'completed':
             state.tasks.completed.push(task)
            break
        default:
             state.tasks.toWork.push(task)
            break
    }
}

export const addTask = (task) => {
    const newTask = {
        date_creation: "2023-08-26",
        description: "добавить хеширование пароля при регистрации",
        id: 55,
        lead_time: "2023-09-09",
        status: "to-work",
        title: "Регистрация",
        update_date: "2023-11-05",
        user: 3,
    };
    addSortTaskToState(newTask);
    rerenderEntireTree(state, addTask);
}

export default state;