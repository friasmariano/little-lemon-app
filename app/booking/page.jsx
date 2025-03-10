'use client'

import BookingForm from "../../components/BookingForm.jsx";
import Hero from "../../components/Hero.jsx";
import { useState } from "react";
import { useAvailableTimes, initializeTimes } from "../../hooks/useAvailableTimes.jsx";

export default function BookTable() {
    const [state, dispatch] = useAvailableTimes();
    const [selectedDate, setSelectedDate] = useState(null);

    const updateTimes = (date) => {
        setSelectedDate(date);

        dispatch({
            type: "SET_AVAILABLE_TIMES",
            payload: initializeTimes()
        })
    }

    return(
        <main>
            <Hero>
                <div style={{ display: 'flex',
                              flexDirection: 'column',
                              margin: '50px 0px 100px 0px'}}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '650'  }}>Reserve a Table</h1>
                    <p style={{ fontSize: '1.3rem' }}>Book your visit in your favorite spot</p>
                </div>
            </Hero>
            <BookingForm
                sectionNames={['Personal', 'Reservation', 'Payment']}
                availableTimes={state}
                updateTimes={updateTimes}
            />
        </main>
    );
}