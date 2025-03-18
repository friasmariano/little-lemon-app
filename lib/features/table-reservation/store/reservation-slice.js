import { createSlice } from "@reduxjs/toolkit";

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: {
        data: {
            name: '',
            lastname: '',
            phone: '',
            date: '',
            time: '',
            guest: 1,
            ocassion: 'Birthday',
            creditCard: ''
        }
    },
    reducers: {
        update: (state, action) => {
            state.data = {...action.payload};
        }
    }
})

export const { update } = reservationSlice.actions;
export default reservationSlice.reducer;