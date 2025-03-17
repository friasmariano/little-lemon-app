
import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from './features/table-reservation/store/reservation-slice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            reservation: reservationReducer
        }
    })
}