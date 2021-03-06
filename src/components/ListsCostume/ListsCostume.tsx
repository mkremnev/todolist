import React, { FC, useState} from 'react';
import clsx from "clsx";
import {makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {InputBase, MenuItem} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        padding: '11px 26px 11px 21px',
        width: 122,
        '&:focus': {
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            background: 'none'
        }
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
        opacity: 0,
        '& div': {
            paddingRight: '0 !important',
            color: 'grey',
            position: 'relative'
        },
        '& svg': {
            color: 'grey'
        }
    },
    circle: {
        display: 'inline-block',
        position: 'absolute',
        top: 16,
        left: 7,
        width: 5,
        height: 5,
        border: '2px solid grey',
        color: 'grey',
        backgroundColor: '#DCDCDC',
        borderRadius: 7
    },
    animation: {
        animation: `$animatedSelect 0.4s linear forwards`
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
                id='lists'
                value={list}
                onChange={ (ev: React.ChangeEvent<{ name?: string; value: string | unknown }>) => handlerChangeList((ev.target.value as string))}
                input={<BootstrapInput />}
                IconComponent={() => <ExpandMoreIcon />}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
            >
                <MenuItem value=''>Not list</MenuItem>
                <MenuItem value='Важное'>Важное</MenuItem>
                <MenuItem value='Важное'>Важное</MenuItem>
                <MenuItem value='Не очень важное'>Не очень важное</MenuItem>
            </Select>
            <span className={classes.circle} />
        </FormControl>
    )
}

export default ListsCostume;