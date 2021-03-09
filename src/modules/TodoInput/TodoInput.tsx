import React, {ChangeEvent, FC, useState} from "react";
import {Field} from "@/components/Field/Field";
import DatePickerCustome from "@/components/DatePickerCustome/DatePickerCustome";
import ListsCostume from "@/components/ListsCostume/ListsCostume";
import StyledCheckbox from "@/components/StyledCheckbox/StyledCheckbox";
import {makeStyles} from "@material-ui/core/styles";

export type TodoInputProps = {
    value?: string;
    onChange?: () => void;
    show?: boolean;
    onChecked?: () => void;
}

const styles = makeStyles(() => ({
    root: {
        position: 'relative',
        overflow: 'hidden'
    }
}));

const TodoInput: FC<TodoInputProps> = ({value, onChange, show, onChecked}) => {
    const classes = styles();
    const [clicked, setClicked] = useState(false);

    const onClicked = () => {
        setClicked(true);
        console.log('Clicked')
    };

    return (
        <div className={classes.root}>
            <Field clicked={clicked} onClick={onClicked} value={value} onChange={onChange} />
            <DatePickerCustome clicked={clicked} />
            <ListsCostume clicked={clicked} />
            { show && <StyledCheckbox clicked={clicked} onChange={onChecked}/> }
        </div>
    )
};

export default TodoInput;

TodoInput.displayName = 'TodoInput';
