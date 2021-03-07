import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
    newTask: string;
    tasks: Task[];
}

const initialState: State = {
    newTask: '',
    tasks: []
}

export interface Task {
    name: string;
    isDone: boolean;
}

export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, { payload }: PayloadAction<Task>) => ({
            ...state,
            tasks: [...state.tasks, { name: payload.name, isDone: false }]
        }),
        changeTask: ((state, { payload } : PayloadAction<State>) => ({
            ...state, tasks: payload.tasks
        })),
        removeTask: (state, { payload } : PayloadAction<Task>) => ({
            ...state, tasks: [...state.tasks.filter((task: Task) => task !== payload)]
        }),
        toggleTasks: (state, { payload } : PayloadAction<Task>) => ({
            ...state, tasks: [...state.tasks.map((task: Task) => task !== payload ? task: {...task, isDone: !task.isDone})]
        }),
        error: () => {
            throw new Error('Unexpected action')
        },
    }
})