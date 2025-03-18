'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { makeStore } from '../lib/store'
import { increment } from '../lib/features/table-reservation/store/reservation-slice'

export default function StoreProvider({ children }) {
    const storeRef = useRef(null)

    if (!storeRef.current) {
        const { store, persistor } = makeStore();
        storeRef.current = { store, persistor };
        // storeRef.current = makeStore();
        // storeRef.current.dispatch(increment());
    }

    // return <Provider store={storeRef.current}> {children} </Provider>

    return (
        <Provider store={storeRef.current.store}>
            <PersistGate loading={null} persistor={storeRef.current.persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}