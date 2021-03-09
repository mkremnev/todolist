import React, {FC, useReducer, createContext, useState} from "react";
import { State, reducer, initialState, addTask, changeTask, removeTask, toggleTasks, Task } from "./reducer";
import { Dispatch, Reducer } from "react";
import { Grid } from "@material-ui/core";
import TasksList from "@/modules/TasksList/TasksList";
import NewTask from '@/modules/NewTask/NewTask'
import { Action } from "@reduxjs/toolkit";


export const ContextTodos = createContext<Partial<ContextState>>({});

export type ContextState = {
    state: State;
    dispatch: Dispatch<Action>
}

const Todos: FC<{}> = () => {
    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState);
    const [clickedAdd, setClickedAdd] = useState(false);
    const [clickedList, setClickedList] = useState(false);

    const onClickedAdd = () => {
        setClickedAdd(true);
        console.log('Clicked')
    };

    const onClickedList = () => {
        setClickedList(true);
        console.log('Clicked')
    };


    const ContextState: ContextState = {
        state,
        dispatch
    };

    return (
        <ContextTodos.Provider value={ContextState}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
            >
                <NewTask clicked={clickedAdd} onClicked={onClickedAdd} />
                <TasksList  />
            </Grid>
        </ContextTodos.Provider>
    )
}

export default Todos;

Todos.displayName = 'Todos';