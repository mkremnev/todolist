import React, {ChangeEvent, FC, useState} from "react";
import { Field } from "@/components/Field/Field";
import DatePickerCustome from "@/components/DatePickerCustome/DatePickerCustome";
import ListsCostume from "@/components/ListsCostume/ListsCostume";
import StyledCheckbox from "@/components/StyledCheckbox/StyledCheckbox";
import { makeStyles } from "@material-ui/core/styles";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

export type TodoInputProps = {
    value?: string;
    onChange?: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
    show?: boolean;
    checkedBox?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    valueDate: MaterialUiPickersDate;
    changeDate?: (date: MaterialUiPickersDate) => void;
    valueSelect: string;
    changeSelect?: (ev: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
    valueChecked?: boolean;
    defaultValue?: string;
}

const styles = makeStyles(() => ({
    root: {
        position: 'relative',
    }
}));

const TodoInput: FC<TodoInputProps> =
    ({
         value,
         onChange,
         show,
         checkedBox,
         valueDate,
         changeDate,
         valueSelect,
         changeSelect,
         valueChecked,
         defaultValue
    }) => {
    const classes = styles();
    const [clicked, setClicked] = useState(false);

    const onClicked = (value: boolean) => {
        setClicked(value);
    };

    return (
            <div className={classes.root}>
                <Field clicked={clicked} onClick={() => onClicked(true)} value={value} onChange={onChange} defaultValue={defaultValue} />
                <DatePickerCustome clicked={clicked} value={valueDate} changeDate={changeDate} />
                <ListsCostume clicked={clicked} valueSelect={valueSelect} changeSelect={changeSelect}/>
                { show && <StyledCheckbox value={valueChecked} clicked={clicked} checkedBox={checkedBox} /> }
            </div>
    )
};

export default TodoInput;

TodoInput.displayName = 'TodoInput';
