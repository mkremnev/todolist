import React, { FC, useContext, Fragment, useState} from 'react';
import {Grid, List, ListItem, Divider, IconButton} from "@material-ui/core";
import { ContextTodos } from "@/modules/Todos/Todos";
import {removeTask, Task } from "@/modules/Todos/reducer";
import TodoInput from "@/modules/TodoInput/TodoInput";
import DeleteIcon from "@material-ui/icons/Delete";
const TasksList: FC = () => {
    const { state, dispatch } = useContext(ContextTodos);
    const [checked, setChecked] = useState(false);

    const removeTaskOfList = (taskRemoving: Task) => {
        if (dispatch) {
            console.log(taskRemoving)
            dispatch(removeTask(taskRemoving));
        }
    }

    return (
        <Grid
            item
            xs={12}
        >
            <List>
                {
                    state?.tasks.map((task: Task, i: number) => (
                        <Fragment key={task.index + i + 'Fragment'}>
                            <ListItem key={task.index + i + 'ListItem'}>
                                <TodoInput
                                    key={task.index + i + 'TodoInput'}
                                    show={true}
                                    defaultValue={task.name}
                                    valueDate={task.date}
                                    valueSelect={task.status}
                                    checkedBox={() => setChecked(true)}
                                    valueChecked={task.isDone}
                                />
                                <IconButton key={task.index + i + 'button'} type='submit' onClick={() => removeTaskOfList(task)}>
                                    <DeleteIcon  key={task.index + i + 'DeleteIcon'} />
                                </IconButton>
                            </ListItem>
                            <Divider />
                        </Fragment>
                    ))
                }
            </List>
        </Grid>
    )
};

export default TasksList;

TasksList.displayName = 'TasksList';