import React, {FC, useContext, FormEvent, ChangeEvent, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { ContextTodos } from "@/modules/Todos/Todos";
import {addTask, Task} from "@/modules/Todos/reducer";
import TodoInput from "@/modules/TodoInput/TodoInput";
import clsx from 'clsx';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

const styles = makeStyles(() => ({
    form: {
        display: 'flex'
    }
}));

export type NewTaskProps = {
}

const NewTask: FC<NewTaskProps> = () => {
    const classes = styles();
    const { dispatch } = useContext(ContextTodos);
    const [date, changeDate] = useState<MaterialUiPickersDate>(new Date());
    const [valueSelect, changeSelect] = useState('');
    const [index, setIndex] = useState(0)
    const [value, setValue] = useState<string>('')


    const addNewTask = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const newTask: Task = {
            index: index,
            date: date,
            name: value,
            isDone: false,
            status: valueSelect
        }
        if (dispatch) {
            console.log(newTask)
            dispatch(addTask(newTask));
        }
        setIndex(index + 1)
    }

    return (
            <Grid
                item xs={12}
            >
                <form className={clsx(classes.form)} onSubmit={event => addNewTask(event)}>
                    <TodoInput
                        value={value}
                        onChange={(ev: ChangeEvent<HTMLTextAreaElement>) => setValue(ev.target.value)}
                        changeDate={(date: MaterialUiPickersDate) => changeDate(date)}
                        valueDate={date}
                        changeSelect={(ev: ChangeEvent<{ value: unknown; }>) => changeSelect((ev.target.value as string))}
                        valueSelect={valueSelect}
                    />
                    <IconButton type='submit'>
                        <AddCircleOutlineOutlinedIcon />
                    </IconButton>
                </form>
            </Grid>

    )
};

export default NewTask;

NewTask.displayName = 'NewTask';
