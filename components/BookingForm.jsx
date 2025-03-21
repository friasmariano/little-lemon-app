'use client'

import { useForm } from 'react-hook-form'
import { useState, useReducer } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { ErrorMessage } from "@hookform/error-message"
import Modal from './Modal'
import buttonStyles from '../styles/button.module.css'
import styles from '../styles/bookform.module.css'
import { updateTimes, initializeTimes, RESERVE_TIME } from '../hooks/useAvailableTimes'
import { fetchAPI } from '../api/api.jsx'
import { getDate, getMonth, getYear, compareAsc, startOfDay } from 'date-fns'
import Link from 'next/link'

export default function BookingForm({ sectionNames, submitFunction }) {
    const currentMonth = () => {
        let temp = getMonth(new Date()) + 1

        if (temp < 10 )
            temp = '0' + temp

        return temp
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const [month, setMonth] = useState(currentMonth)

    const [selectedDate, setSelectedDate] =
        useState(`${getYear(new Date())}-${month}-${getDate(new Date())}`);

    const [currentDate, setCurrentDate] = useState(`${getYear(new Date())}-${month}-${getDate(new Date())}`);

    const isDateValid = () => {
        return compareAsc(selectedDate, currentDate) >= 0 ?  true : false
    }

    const [times, dispatch] = useReducer(updateTimes, initializeTimes(fetchAPI(new Date())));
    const [selectedTime, setSelectedTime] = useState('');

    const [ocassion, setOcassion] = useState('');

    const handleChange = (event) => {
        dispatch({ type: RESERVE_TIME, payload: { value: event.target.value } })
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Hook Forms
    const { register, handleSubmit, watch, formState: { errors, isValid, isDirty, dirtyFields }, getValues } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        // if (typeof data !== 'undefined' && data !== null) {
        //     // Modify object before saving it to localStorage (with properties alone, without the exact 'React Hook Form' data)
        //     localStorage.setItem('reservationData', JSON.stringify(data));
        // }

        openModal();

        submitFunction(getFormData());
    }

    const getFormData = () => {
        return getValues();
    }

    return(
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} title='Confirmation' footer={false}>
                <section style={{ display: 'flex',
                                  alignItems: 'center',
                                  flexDirection: 'column'
                                 }}>
                    <p className="dark-grey"
                        style={{ fontSize: '2.1rem',
                                 textAlign: 'center',
                                 display: 'flex',
                                 margin: '30px auto 0px auto',
                                 alignItems: 'center',
                                 flexDirection: 'column',
                                 padding: '30px 0px 85px 0px'
                              }}>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{ fontSize: '4rem',
                                     marginBottom: '20px'
                             }}/>
                        <span style={{ color: '#666666',
                                       fontWeight: '600'
                         }}>
                            Reservation submitted successfully
                        </span>
                    </p>
                    <Link href='/booking/confirmation'
                          className={buttonStyles.default}
                          style={{ padding: '5px 0px 10px 0px',
                                   textAlign: 'center'
                           }}
                          onClick={() => {
                            closeModal()
                          }}>
                        View Details
                    </Link>
                </section>
              </Modal>

            <form onSubmit={handleSubmit(onSubmit)}
                  className={styles.container} role="form"
                  data-testid="booking-form">

                {/* Personal */}
                <fieldset className={styles.fieldset}>
                    <legend className="text-xl mb-4">Personal</legend>

                    {/* Name */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label htmlFor="firstname" className={styles.subtitle}>Firstname</label>
                            <div style={{ position: 'relative',
                                          display: 'flex'
                                        }}>
                                    <input
                                        className={styles.input}
                                        placeholder="Your name here"
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        defaultValue=""
                                        {...register("name", {
                                                required: "The firstname is required",
                                                minLength: {
                                                    value: 3,
                                                    message: "The 'name' must be at least '3' characters"
                                                },
                                                maxLength: {
                                                    value: 31,
                                                    message: "The 'name' must not exceed '50' characters"
                                                }
                                        })}
                                        aria-invalid={errors.name ? 'true' : 'false'}
                                        aria-describedby='Firstname-error'
                                        aria-required='true'
                                        style={{ textAlign: 'center',
                                                padding: '0px 0px 0px 15px',
                                                width: '75px'
                                        }}
                                    />
                            </div>

                        </div>

                        <div style={{ marginTop: '5px'}} aria-live="polite">
                            {errors.name ? (
                                <p className={styles.errors}>{errors.name.message}</p>
                            )
                            : dirtyFields.name && (<p className={styles.success}>The firstname is valid.</p>)}
                        </div>
                    </div>

                    {/* Lastname */}
                    <div style={{ display: 'flex', flexDirection: 'column',
                                  alignItems: 'center',
                                  marginTop: '10px'}}>
                        <div className={styles.section}>
                            <label htmlFor="lastname" className={styles.subtitle}>Lastname</label>

                            <div style={{ position: 'relative',
                                          display: 'flex'
                                        }}>
                                <input
                                    className={styles.input}
                                    placeholder="Your lastname here"
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    defaultValue=""
                                    {...register("lastname", {
                                            required: "The lastname is required",
                                            minLength: {
                                                value: 3,
                                                message: "The 'lastname' must be at least '3' characters"
                                            },
                                            maxLength: {
                                                value: 31,
                                                message: "The 'lastname' must not exceed '50' characters"
                                            }
                                    })}
                                    style={{ textAlign: 'center',
                                            padding: '0px 0px 0px 15px',
                                            width: '75px'
                                    }}
                                    aria-invalid={errors.lastname ? 'true' : 'false'}
                                    aria-describedby='Lastname-error'
                                    aria-required='true'
                                />
                            </div>
                        </div>

                        <div aria-live="polite">
                            {errors.lastname ? (
                                    <p className={styles.errors}>{errors.lastname.message}</p>
                                )
                                : dirtyFields.lastname && (<p className={styles.success}>The lastname is valid</p>)}
                        </div>
                    </div>

                    {/* Email */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
                                  margin: '10px'
                     }}>
                        <div className={styles.section}>
                            <label htmlFor="email" className={styles.subtitle}>Email</label>

                            <div style={{ position: 'relative',
                                          display: 'flex'
                                        }}>
                                <input
                                    className={styles.input}
                                    placeholder="Your email here"
                                    id="email"
                                    name="email"
                                    type="text"
                                    defaultValue=""
                                    {...register("email", {
                                            required: "The email is required",
                                            pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: 'Email format is invalid'
                                            }
                                    })}
                                    style={{ textAlign: 'center',
                                            padding: '0px 0px 0px 15px',
                                            width: '75px'
                                    }}
                                    aria-invalid={errors.email ? 'true' : 'false'}
                                    aria-describedby='Email-error'
                                    aria-required='true'
                                />
                            </div>
                        </div>

                        <div aria-live="polite">
                            {errors.email ? (
                                    <p className={styles.errors}>{errors.email.message}</p>
                                )
                                : dirtyFields.email && (<p className={styles.success}>The email is valid</p>)}
                        </div>
                    </div>

                    {/* Phone number */}
                    <div style={{ display: 'flex', flexDirection: 'column',
                                  alignItems: 'center'}}>
                        <div className={styles.section}>
                            <label htmlFor="phone" className={styles.subtitle}>Phone</label>

                            <div style={{ position: 'relative',
                                          display: 'flex'
                                        }}>
                                <input
                                className={styles.input}
                                placeholder="Your phone here"
                                id="phone"
                                name="phone"
                                type="text"
                                defaultValue=""
                                {...register("phone", {
                                        required: "The phone is required",
                                        pattern: {
                                            value: /^\+?[1-9]\d{1,14}$/,
                                            message: "The 'phone' number has an invalid format"
                                        }
                                })}
                                style={{ textAlign: 'center',
                                        padding: '0px 0px 0px 15px',
                                        width: '75px'
                                }}
                                aria-invalid={errors.phone ? 'true' : 'false'}
                                aria-describedby='Phone-error'
                                aria-required='true'
                            />
                            </div>
                            <h3 className='grey-md'
                                style={{  marginTop: '5px',
                                        fontSize: '0.9rem'

                            }}>(optional)</h3>
                        </div>

                        <div aria-live="polite">
                            {errors.phone ? (
                                    <p className={styles.errors}>{errors.phone.message}</p>
                                )
                                : dirtyFields.phone && (<p className={styles.success}>The phone is valid</p>)}
                        </div>
                    </div>
                </fieldset>

                {/* Reservation */}
                <fieldset className={styles.fieldset}>
                    <legend className="text-xl mb-4">Reservation</legend>

                    {/* Date */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                        <label className={styles.subtitle} htmlFor="date">Choose Date</label>

                            <div style={{ position: 'relative',
                                          display: 'flex',
                                          width: '150px'}}>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={selectedDate}
                                    style={{
                                        padding: '8px',
                                        borderRadius: '5px',
                                        border: '1px solid rgba(102, 102, 102, 0.2)',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        textAlign: 'center'
                                    }}
                                    onChange={(e) => {
                                        setSelectedDate(e.target.value);
                                    }}
                                    {...register("date", {
                                        required: "The 'date' field is required"
                                    })}
                                    aria-label='Choose reservation date'
                                />
                                <span
                                    style={{
                                    position: "absolute",
                                    right: "8px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    pointerEvents: "none"
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCalendar} />
                                </span>
                            </div>

                        </div>

                        <div className={styles.errors} aria-live="polite">
                            {isDateValid(selectedDate)
                                ? ''
                                : (
                                <p>
                                    The date is invalid.
                                 </p>
                            )}
                        </div>
                    </div>

                    {/* Time */}
                    <div style={{ display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  margin: '5px 0px 20px 0px' }}>
                        <label className={styles.subtitle}
                               htmlFor="time">Choose time</label>

                            <div style={{ position: 'relative',
                                          display: 'flex'
                            }}>
                                <select id="time"
                                        onChange={ (e) => {
                                                handleChange();
                                                setSelectedTime(e.target.value)
                                            }
                                        }
                                        onFocus={() => { setIsExpanded(true) }}
                                        onBlur={() => { setIsExpanded(false) }}
                                        style={{ borderRadius: '16px',
                                                padding: '5px 0px 5px 5px',
                                                border: '1px solid rgba(102, 102, 102, 0.3)',
                                                pointerEvents: 'auto !important'}}
                                        {...register("time", {
                                            required: "The 'time' field is required"
                                        })}
                                        aria-labelledby='Choose time'
                                        aria-expanded={isExpanded}>
                                    {times.map((time) =>
                                        <option key={time.id} value={time.value}>
                                            {time.value} {time.available ? '' : '(Reserved)'}
                                        </option>
                                    )}
                                </select>
                            </div>
                    </div>

                    {/* Guests */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label className={styles.subtitle}
                                htmlFor="guests">Guests</label>

                            <div style={{ position: 'relative',
                                          display: 'flex'
                                        }}>

                                <input
                                    placeholder='1'
                                    id="guests"
                                    name="guests"
                                    type="number"
                                    defaultValue="1"
                                    {...register("guests", {
                                            min: {
                                                value: 1,
                                                message: "The 'guest' list be at least '1'"
                                            },
                                            max: {
                                                value: 31,
                                                message: "The 'guest' list must not exceed '10'"
                                            }
                                    })}
                                        style={{ textAlign: 'center',
                                                padding: '0px 0px 0px 15px',
                                                width: '75px',
                                                borderRadius: '16px',
                                                border: '1px solid rgba(102, 102, 102, 0.3)',
                                        }}
                                />
                            </div>
                        </div>
                        <div className={styles.errors}>
                            <ErrorMessage
                                errors={errors}
                                name="guests"
                                render={({ message }) =>
                                <p>
                                    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px'}} />
                                    {message}
                                </p>}
                            />
                        </div>
                    </div>

                    {/* Ocassion */}
                    <div className={styles.section}>
                        <label className={styles.subtitle}
                               htmlFor="ocassion">Ocassion</label>
                            <select id="ocassion"
                                    style={{ border: '1px solid rgba(102, 102, 102, 0.3)',
                                             borderRadius: '16px',
                                             padding: '5px'
                                    }}
                                    onChange={ (e) => {
                                        handleChange();
                                        setOcassion(e.target.value)
                                    }}
                                    {...register("ocassion", {
                                        required: "The 'ocassion' field is required"
                                    })}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                    </div>
                </fieldset>

                {/* Credit Card */}
                <fieldset className={styles.fieldset}>
                    <legend className="text-xl mb-4">Credit Card</legend>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className={styles.section}>
                            <label htmlFor="card" className={styles.subtitle}>Card</label>
                            <input
                                className={styles.input}
                                placeholder="Your credit card here"
                                id="card"
                                name="card"
                                type="text"
                                defaultValue=""
                                {...register("card", {
                                        required: "The card is required",
                                        pattern: {
                                            value: /4[0-9]{12}(?:[0-9]{3})?$/,
                                            message: "The 'credit card' has an invalid format"
                                        }
                                })}
                                style={{
                                        textAlign: 'center',
                                        padding: '0px 0px 0px 15px',
                                        width: '75px'
                                    }}
                            />
                        </div>

                        <div aria-live="polite">
                            {errors.card ? (<p className={styles.errors}>{errors.card.message}</p>)
                            : dirtyFields.card && (<p className={styles.success}>The card is valid</p>)}
                        </div>
                    </div>
                </fieldset>

                {/* Submit */}
                <div className={`${styles.submit}`}>
                    <button style={{ display: 'flex', padding: '5px 0px 0px 15px' }}
                            className={isValid && isDateValid(selectedDate) ?
                                       buttonStyles.default : buttonStyles.disabled}
                            role='button'
                            type='submit'>
                        Submit
                    </button>
                    <button style={{ display: 'flex', padding: '5px 0px 0px 15px' }}
                            className={buttonStyles.secondary}>
                        Cancel
                    </button>
                </div>

            </form>
        </>
    )
}