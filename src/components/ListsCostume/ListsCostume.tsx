import React, { FC, useState} from 'react';
import clsx from "clsx";
import {makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { InputBase } from "@material-ui/core";

interface ListsCostumeProps {
    clicked: boolean;
}

const BootstrapInput = withStyles((theme: Theme) => ({
    root: {
        borderRadius: 10,
    },
    input: {
        borderRadius: 10,
        position: 'relative',
        fontSize: 16,
        padding: '11px 26px 11px 12px',
        '&:focus': {
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            background: 'none'
        },
        '&:before': {
            content: ' ',
            position: 'absolute',
            top: 0,
            left: 0,
            width: 10,
            height: 10,
            border: '1px solid #DCDCDC'
        },
    },
}))(InputBase);

const styleListsCostume = makeStyles((theme) => ({
    formControl: {
        borderRadius: 10,
        backgroundColor: '#DCDCDC',
        minWidth: 120,
        position: 'absolute',
        top: 16,
        left: 484,
        zIndex: 500,
        opacity: 0
    },
    animation: {
        animation: `$animatedSelect 0.4s linear forwards`
    },
    icon: {
        borderRadius: 5,
        width: 20,
        height: 20,
        backgroundColor: '#DCDCDC',
    },
    "@keyframes animatedSelect": {
        "from": {
            opacity: 0
        },
        "to": {
            opacity: 1
        }
    }
}));

const ListsCostume: FC<ListsCostumeProps> = ({ clicked }) => {
    const classes = styleListsCostume();
    const [list, handlerChangeList] = useState<string>('');

    return (
        <FormControl className={clsx(classes.formControl, clicked ? classes.animation : '')}>
            <Select
                id="lists"
                native
                value={list}
                onChange={ (ev: React.ChangeEvent<{ name?: string; value: string | unknown }>) => handlerChangeList((ev.target.value as string))}
                input={<BootstrapInput />}
                IconComponent={() => <span className={classes.icon} />}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
            >
                <option value="">No List</option>
                <option value='Важное'>Важное</option>
                <option value='Избранное'>Избранное</option>
                <option value='Не очень важное'>Не очень важное</option>
            </Select>
        </FormControl>
    )
}

export default ListsCostume;