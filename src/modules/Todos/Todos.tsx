import React, {FC, useReducer, createContext, Dispatch, Reducer, useContext} from "react";
import { TodoState, todoReducer, initialState } from "./reducer";
import { Card, Grid, Paper } from "@material-ui/core";
import TasksList from "@/modules/TasksList/TasksList";
import NewTask from '@/modules/NewTask/NewTask'
import { Action } from "@reduxjs/toolkit";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';

export const ContextTodos = createContext<Partial<ContextState>>({});

export type ContextState = {
    state: TodoState;
    dispatch: Dispatch<Action>
}

const styles = makeStyles(() => ({
    root: {
        position: 'relative',
        overflow: 'hidden'
    },
    common: {
        padding: 20,
        maxWidth: '100%',
        width: '45%',
        display: 'flex',
        flexWrap: 'wrap',
        height: '89vh',
        "& h3": {
            flexBasis: '100%',
            textAlign: 'center'
        }
    },
    cardLeft: {

    },
    cardRight: {
        overflowY: "auto"
    },
    paper: {
        padding: 10,
        height: '96vh'
    }
}));

const Todos: FC = () => {
    const classes = styles();
    const [state, dispatch] = useReducer<Reducer<TodoState, Action>>(todoReducer, initialState);

    const ContextState: ContextState = {
        state,
        dispatch
    };


    return (
        <ContextTodos.Provider value={ContextState}>
            <Paper className={clsx(classes.paper)} >
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    <Card className={clsx(classes.common)} variant={"outlined"}>
                        <h3>Планировщик</h3>
                        <NewTask />
                    </Card>
                    <Card className={clsx(classes.common, classes.cardRight)} variant={"outlined"}>
                        <h3>Задачи</h3>
                        <TasksList  />
                    </Card>
                </Grid>
            </Paper>
        </ContextTodos.Provider>
    )
}

export default Todos;

Todos.displayName = 'Todos';