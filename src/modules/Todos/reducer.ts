import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
    newTask: string;
    tasks: Task[];
}

export const initialState: State = {
    newTask: '',
    tasks: []
}

export interface Task {
    name: string;
    isDone: boolean;
}

export type TaskName = string;

export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, { payload }: PayloadAction<string>) => ({
            ...state,
            tasks: [...state.tasks, { name: payload, isDone: false }]
        }),
        changeTask: ((state, { payload } : PayloadAction<string>) => ({
            ...state, newTask: payload
        })),
        removeTask: (state, { payload } : PayloadAction<Task>) => ({
            ...state, tasks: [...state.tasks.filter((task: Task) => task.name !== payload.name)]
        }),
        toggleTasks: (state, { payload } : PayloadAction<Task>) => ({
            ...state, tasks: [...state.tasks.map((task: Task) => task !== payload ? task: {...task, isDone: !task.isDone})]
        }),
        error: () => {
            throw new Error('Unexpected action')
        },
    }
});

export const { addTask, changeTask, removeTask, toggleTasks, error } = todosSlice.actions;
export const reducer = todosSlice.reducer;
