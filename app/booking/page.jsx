'use client'

import BookingForm from "../../components/BookingForm.jsx";
import Hero from "../../components/Hero.jsx";
import { submitForm } from "../../api/api.jsx";

export default function BookTable() {

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
                submitFunction={submitForm}
            />
        </main>
    );
}