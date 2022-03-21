import { connect, createStore } from "redux";

export const initialState = {
    tasks:[],
    totaltime: 0,
    tasknum: 0
};
export default function tasksReducer(state = initialState, action) {
    let time = action.time? action.time: 0;
    return ({
        tasks: [...state.tasks,{...action, id: state.tasknum}],
        totaltime: state.totaltime + time,
        tasknum: state.tasknum +1 ,
    })
    
}




