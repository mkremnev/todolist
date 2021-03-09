import React, {FC, useContext, FormEvent, ChangeEvent} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ContextTodos } from "@/modules/Todos/Todos";
import { addTask, changeTask, TaskName } from "@/modules/Todos/reducer";
import {Field} from "@/components/Field/Field";
import DatePickerCustome from "@/components/DatePickerCustome/DatePickerCustome";
import ListsCostume from "@/components/ListsCostume/ListsCostume";

const styles = makeStyles(() => ({
    root: {
        position: 'relative',
        overflow: 'hidden'
    }
}));

export type NewTaskProps = {
    value?: string;
    clicked?: boolean;
    onClicked?: () => void;
}

const NewTask: FC<NewTaskProps> = ({ clicked, onClicked, value}) => {
    const classes = styles();
    const { state, dispatch } = useContext(ContextTodos);


    const addNewTask = (ev: FormEvent<HTMLFormElement>, task: TaskName) => {
        ev.preventDefault();
        if (dispatch) {
            dispatch(addTask(task));
            dispatch(changeTask(''));
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
                item xs={6}
            >
                <form onSubmit={event => addNewTask(event, state!.newTask)}>
                    <div className={classes.root}>
                        <Field clicked={clicked} onClick={onClicked} value={value} onChange={(ev: ChangeEvent<HTMLTextAreaElement>) => changeNewTask(ev)} />
                        <DatePickerCustome clicked={clicked} />
                        <ListsCostume clicked={clicked} />
                        <button type='submit'>Add</button>
                    </div>
                </form>
            </Grid>

    )
};

export default NewTask;

NewTask.displayName = 'NewTask';
