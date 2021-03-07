import React, {FC, useState} from "react";
import { Grid } from "@material-ui/core";
import { Field } from "@/components/Field/Field";
import StyledCheckbox from "@/components/StyledCheckbox/StyledCheckbox";
import DatePickerCustome from "@/components/DatePickerCustome/DatePickerCustome";
import ListsCostume from "@/components/ListsCostume/ListsCostume";
import { makeStyles } from "@material-ui/core/styles";



const styles = makeStyles(() => ({
    root: {
        position: 'relative',
        overflow: 'hidden'
    }
}))

const Todos: FC<{}> = () => {
    const classes = styles();

    const [clicked, setClicked] = useState(false);

    const onClicked = () => {
        setClicked(true);
        console.log('Clicked')
    }

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
        >
            <Grid
                className={classes.root}
                item xs={6}
            >
                <Field clicked={clicked} onClick={onClicked} />

                <StyledCheckbox clicked={clicked} />
                <DatePickerCustome clicked={clicked} />
                <ListsCostume clicked={clicked} />
            </Grid>
            <Grid item xs={6}>
                <h3>Задачи</h3>
            </Grid>
        </Grid>
    )
}

export default Todos;

Todos.displayName = 'Todos';