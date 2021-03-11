import React, { FC, ChangeEvent} from 'react';
import clsx from "clsx";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {InputBase, MenuItem} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface ListsCostumeProps {
    clicked?: boolean;
    valueSelect?: string;
    changeSelect?: (ev: ChangeEvent<{ value: unknown; }>) => void
}

const BootstrapInput = withStyles(() => ({
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

const styleListsCostume = makeStyles(() => ({
    formControl: {
        borderRadius: 10,
        backgroundColor: '#DCDCDC',
        minWidth: 120,
        position: 'absolute',
        top: 5,
        left: 475,
        zIndex: 100,
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
            opacity: 0,
            zIndex: 100,
        },
        "to": {
            opacity: 1,
            zIndex: 400,
        }
    }
}));

const ListsCostume: FC<ListsCostumeProps> = ({ clicked, valueSelect, changeSelect}) => {
    const classes = styleListsCostume();

    return (
        <FormControl className={clsx(classes.formControl, clicked ? classes.animation : '')}>
            <Select
                id='lists'
                value={valueSelect}
                onChange={changeSelect}
                input={<BootstrapInput />}
                IconComponent={() => <ExpandMoreIcon />}
            >
                <MenuItem value=''>Not list</MenuItem>
                <MenuItem value='Важное'>Важное</MenuItem>
                <MenuItem value='Среднее'>Среднее</MenuItem>
                <MenuItem value='Не очень важное'>Не очень важное</MenuItem>
            </Select>
            <span className={classes.circle} />
        </FormControl>
    )
}

export default ListsCostume;

ListsCostume.displayName = 'ListsCostume';