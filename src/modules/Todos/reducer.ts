import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

export interface TodoState {
    newTask: Task;
    tasks: Task[];
}

export const initialState: TodoState = {
    newTask: {
        index: 0,
        date: new Date(),
        name: '',
        isDone: false,
        status: ''
    },
    tasks: []
}

export interface Task {
    index: number;
    date: MaterialUiPickersDate;
    name: string;
    isDone: boolean;
    status: string
}

export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, { payload }: PayloadAction<Task>) => ({
            ...state,
            tasks: [...state.tasks, { index: payload.index, name: payload.name, isDone: false, date: payload.date, status: payload.status }]
        }),
        removeTask: (state, { payload } : PayloadAction<Task>) => ({
            ...state, tasks: [...state.tasks.filter((task: Task) => task.index !== payload.index)]
        }),
        toggleTasks: (state, { payload } : PayloadAction<Task>) => ({
            ...state, tasks: [...state.tasks.map((task: Task) => task !== payload ? task: {...task, isDone: !task.isDone})]
        }),
        error: () => {
            throw new Error('Unexpected action')
        },
    }
});

export const { addTask, removeTask, toggleTasks, error } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;
