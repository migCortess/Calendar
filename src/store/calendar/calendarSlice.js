import { createSlice } from "@reduxjs/toolkit";
import  { addHours } from 'date-fns'
const tempEvent = {
    _id: new Date().getTime(),
    title: 'cumple de pepe',
    notes: 'hay que comprar algo',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: 123,
      name: 'Hector Cortes'
    }}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
        onClose: (state) => {
            state.is = false;
        },
    }
});

export const {onSetActiveEvent, onClose} = calendarSlice.actions;