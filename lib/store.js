
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import reservationReducer from './features/table-reservation/store/reservation-slice'
import navReducer from './features/nav/store/nav-slice'

const rootReducer = combineReducers({
    nav: navReducer,
    reservation: reservationReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
    })

    const persistor = persistStore(store)
    return { store, persistor }
}