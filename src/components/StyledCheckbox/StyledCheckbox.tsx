import React, { FC } from 'react';
import clsx from 'clsx';
import { Checkbox, makeStyles } from '@material-ui/core'

const styleChecked = makeStyles({
    root: {
        position: 'absolute',
        top: 18,
        left: 3,
        zIndex: 50,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: 5,
        width: 20,
        height: 20,
        backgroundColor: '#DCDCDC',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#D3D3D3',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#D3D3D3',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 20,
            height: 20,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#DCDCDC',
        },
    },
    animation: {
        animation: `$animationCheckbox 0.3s linear forwards`
    },
    '@keyframes animationCheckbox': {
        'from': {
            left: 3,
            zIndex: 50
        },
        'to': {
            left: 20,
            zIndex: 300
        }
    }
})

interface CheckboxProps {
    clicked: boolean;
}

const StyledCheckbox: FC<CheckboxProps> = ({clicked}) => {
    const classes = styleChecked();

    return (
            <Checkbox
                className={clsx(classes.root, clicked ? classes.animation : '')
                }
                color="default"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
                inputProps={{ 'aria-label': 'decorative checkbox' }}
            />);
}

export default StyledCheckbox;