
import { useEffect, useRef } from 'react'
import styles from '../styles/modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import buttonStyles from '../styles/button.module.css';

export default function Modal({ isOpen, onClose, children, title, callBackFunction }) {
    const dialogRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }

    }, [isOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog className={isOpen ? styles.dialog: styles.hidden}
                ref={dialogRef} onClick={handleBackdropClick}
                style={{ display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         marginRight: 'auto ',
                         marginLeft: 'auto',
                         marginTop: '20vw',
                         borderRadius: '16px'
                }}>
            <section>
                <div style={{ display: 'flex',
                              borderRadius: '16px 16px 0px 0px',
                              height: '55px' }}>
                    <p style={{ width: '87vw',
                                padding: '0px 0px 0px 15px',
                                textAlign: 'center',
                                fontSize: '1.3rem',
                                background: 'linear-gradient(180deg, rgba(73,94,87,1) 0%, rgba(20,47,38,1) 97%)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                    }}>
                        { title }
                    </p>
                    <button style={{ width: '50px',
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     textAlign: 'center',
                                     background: 'linear-gradient(180deg, rgba(73,94,87,1) 0%, rgba(20,47,38,1) 97%)',
                                     borderLeft: '1px solid rgba(255, 255, 255, 0.1)', 
                                     color: 'white'
                     }}
                            onClick={onClose}>
                                <FontAwesomeIcon icon={faTimesCircle}
                                    style={{ fontSize: '1.6rem' }} />
                            </button>
                </div>
                <div style={{ minHeight: '200px', color: '#495E57', padding: '20px 20px 40px 60px'}}>
                    {children}
                </div>
                <div style={{ display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '20px',
                              borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                              padding: '22px 0px 26px 10px'}}>
                    <button className={buttonStyles.default}
                            onClick={() => {
                                callBackFunction,
                                onClose
                            }}>Confirm</button>
                    <button className={buttonStyles.cancel}
                            onClick={onClose}>Cancel</button>
                </div>
            </section>
        </dialog>
    );
};