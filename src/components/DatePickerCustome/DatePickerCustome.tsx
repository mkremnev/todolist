import React, {FC, useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import {OutterCalendarProps} from "@material-ui/pickers/views/Calendar/Calendar";

const styleDatePicker = makeStyles({
    root: {
        transition: "none",
        background: "#DCDCDC",
        width: '40px',
        height: '40px',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        opacity: '0',
        position: "absolute",
        top: 5,
        zIndex: 100,
        left: 430,
        'border-radius': '10px',
        '& button': {
            padding: '12px'
        },
        "& > div:hover": {
            background: "none",
        },
        "& input": {
            display: "none",
        },
        "& > div": {
            background: "none",
            transition: "none",
            padding: '0',
        },
        "& > div > div": {
            margin: '0',
        },
        "& > ::before": {
            border: "none",
            transition: "none",
        },
        "& > div:hover::before": {
            border: "none",
        },

    },
    clicked: {
        animation: `$animationDatePicker 0.4s linear forwards`
    },
    '@keyframes animationDatePicker': {
        "from": {
            opacity: '0',
            zIndex: 100
        },
        "to": {
            opacity: '1',
            zIndex: 400
        }
    }
});

interface DatePickerProps extends OutterCalendarProps{
    clicked?: boolean;
    changeDate?: (date: MaterialUiPickersDate) => void;
    value?: MaterialUiPickersDate;
}

const DatePickerCustome: FC<DatePickerProps> = ({ clicked, changeDate,value }) => {
    const classes = styleDatePicker();

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={
                    clsx(classes.root, clicked ? classes.clicked : '')
                }
                value={value}
                emptyLabel=''
                onChange={changeDate}
                format="yyyy/MM/dd"
                inputVariant={'filled'}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePickerCustome;

DatePickerCustome.displayName = 'DatePickerCustome';
