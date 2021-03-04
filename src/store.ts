import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const reducer = combineReducers({})

export const store = configureStore({reducer});