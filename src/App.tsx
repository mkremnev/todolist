/** @jsx jsx */
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {store} from "./store";
import { Grid } from '@material-ui/core'
import { Field } from "@/components/Field/Field";
import StyledCheckbox from "@/components/StyledCheckbox/StyledCheckbox";
import { jsx, css } from '@emotion/react';
import DatePickerCustome from "@/components/DatePickerCustome/DatePickerCustome";
import ListsCostume from "@/components/ListsCostume/ListsCostume";

export const App: React.FC<{}> = () => {
    const [clicked, setClicked] = useState(false);

    const onClicked = () => {
        setClicked(true);
        console.log('Clicked')
    }

    return (
        <Provider store={store}>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={6} css={css`
                    position: relative;
                    overflow: hidden;
                `}>
                    <Field clicked={clicked} onClick={onClicked} />
                    <StyledCheckbox clicked={clicked} />
                    <DatePickerCustome clicked={clicked} />
                    <ListsCostume clicked={clicked} />
                </Grid>
                <Grid item xs={6}>
                    <h3>Задачи</h3>
                </Grid>
            </Grid>
        </Provider>
    );
};