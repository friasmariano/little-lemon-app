'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import Hero from "../../../components/Hero"
import { useState } from "react"

export default function BookingConfirmation() {
    const [bookingData, setBookingData] = useState([]);

    const getBookingData = () => {
        if (typeof data !== 'undefined' && data !== null) {
            localStorage.getItem('reservationData');

            setBookingData(JSON.parse(localStorage.getItem('reservationData')));
        }
    }

    return (
        <main>
            <Hero>
                <div style={{ display: 'flex',
                                flexDirection: 'column',
                                margin: '50px 0px 100px 0px'}}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '650'  }}>Confirmation</h1>
                    {/* <p style={{ fontSize: '1.3rem' }}>Book your visit in your favorite spot</p> */}
                </div>
            </Hero>
            <section style={{ minHeight: '500px',
                              display: 'flex',
                              flexDirection: 'column',
                              textAlign: 'center',
                              alignItems: 'center'
             }}>
                <div style={{ minWidth: '600px',
                              minHeight: '340px',
                              borderRadius: '16px',
                              boxShadow: '0px 5px 20px rgba(0,0,0,0.15)',
                              marginTop: '50px'}}>
                    <h1 className="markazi-text"
                        style={{ margin: '90px 0px 0px 0px',
                                 fontSize: '2.1rem',
                                 color: 'rgba(102, 102, 102, 0.9)'

                    }}>You're table it's been reserved</h1>
                    <div style={{ width: '100%',
                                  height: '3px',
                                  marginTop: '10px',
                                  backgroundColor: 'rgba(102, 102, 102, 0.05)'  }}>
                    </div>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ fontSize: '4.4rem',
                                marginTop: '30px',
                                color: '#3c763d'
                        }}
                 />
                </div>

                <div>
                    <ul>
                        {bookingData.map((e, index) => {
                            return <li key={index}>
                                {e}
                            </li>
                        })}
                    </ul>
                </div>
            </section>
        </main>
    )
}