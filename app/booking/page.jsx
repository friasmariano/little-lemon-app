'use client'

import BookingForm from "../../components/BookingForm.jsx";
import Hero from "../../components/Hero.jsx";

import { useState } from "react";

export default function BookTable() {
    const [availableTimes, setAvailableTimes] = useState([
       {id: 1, value: '17:00'},
       {id: 2, value: '18:00'},
       {id: 3, value: '19:00'},
       {id: 4, value: '20:00'},
       {id: 5, value: '21:00'},
       {id: 6, value: '22:00'}
    ]);

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
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
            />
        </main>
    );
}