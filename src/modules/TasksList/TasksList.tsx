import React, {ChangeEvent, FC, useContext, useState} from 'react';
import { Grid } from "@material-ui/core";
import { ContextTodos } from "@/modules/Todos/Todos";
import {removeTask, toggleTasks, Task, changeTask} from "@/modules/Todos/reducer";
import TodoInput from "@/modules/TodoInput/TodoInput";

export type TasksListProps = {
    onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void
}



const TasksList: FC<TasksListProps> = ({onChange}) => {
    const { state, dispatch } = useContext(ContextTodos);

    const removeTaskOfList = (taskRemoving: Task) => {
        if (dispatch) {
            dispatch(removeTask(taskRemoving));
            console.log(taskRemoving);
            console.log(state);
        }
    }

    const toggleTaskOfList = (taskForChange: Task) => {
        if (dispatch) {
            dispatch(toggleTasks(taskForChange));
        }
    }

    const changeNewTask = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        ev.preventDefault();
        if (dispatch) {
            dispatch(changeTask((ev.target as HTMLTextAreaElement).value));
        }
    }

    return (
        <Grid
            item
            xs={6}
        >
            <h3>Задачи</h3>
            <ul>
                {
                    state?.tasks.map((task: Task, i: number) => (
                        <li key={task.name + i}>
                            <TodoInput show={true}/>
                            <button key={task.name + i + 'button'} onClick={() => removeTaskOfList(task)}>x</button>
                        </li>
                    ))
                }
            </ul>
        </Grid>
    )
};

export default TasksList;

TasksList.displayName = 'TasksList';