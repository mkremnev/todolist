import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store";
import Todos from "@/modules/Todos/Todos";

export const App: React.FC<{}> = () => {

    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    );
};