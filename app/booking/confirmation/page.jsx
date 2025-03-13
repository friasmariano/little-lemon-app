
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import Hero from "../../../components/Hero"

export default function BookingConfirmation() {
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
                              minHeight: '325px',
                              borderRadius: '16px',
                              boxShadow: '0px 5px 20px rgba(0,0,0,0.15)',
                              marginTop: '50px'}}>
                    <h1 style={{ margin: '90px 0px 0px 0px',
                                fontSize: '2.2rem',
                                fontWeight: '600',
                                color: '#666666'

                    }}>You're table it's been reserved</h1>
                    <div style={{ width: '100%',
                                  height: 'px',
                                  marginTop: '10px',
                                  backgroundColor: 'rgba(102, 102, 102, 0.3)'  }}>
                    </div>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ fontSize: '4.4rem',
                                marginTop: '30px',
                                color: '#3c763d'
                        }}
                 />
                </div>
            </section>
        </main>
    )
}