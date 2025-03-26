'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/nav.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../lib/features/nav/store/nav-slice';

export default function Nav () {
    const dispatch = useDispatch();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [currentScrollPos, setCurrentScrollPos] = useState(0);
    const [translateYPos, setTranslateYPos] = useState("");
    const [isDescending, setIsDescending] = useState(true);
    const isOpen = useSelector((state) => state.nav.data.isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setPrevScrollPos(window.scrollY);

            setTimeout(() => {
            setCurrentScrollPos(window.scrollY);
            }, 250);

            if (currentScrollPos < prevScrollPos) {
            setTranslateYPos('-200px');
            setIsDescending(false);
            } else {
            setTranslateYPos('0px');
            setIsDescending(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [window.scrollY]);

    return (
        <nav className={`nav ${isDescending ? styles.slideDown : 'fadeOut'}`}
             style={{ translate: `0px ${translateYPos}`}}>
            <div className={styles.burgerSection}>
                {/* Hide/Show using state */}
                <FontAwesomeIcon icon={faBars}
                        className={`${styles.burgerIcon} ${'visible md:invisible'}`}
                        style={{ fontSize: '2rem', paddingLeft: '30px' }}/>

                <Link href="/">
                    <Image className={styles.navBrand}
                            src="/Logo.svg"
                            width={500}
                            height={500}
                            alt="logo" style={{ width: '8.5rem'}} />
                </Link>
            </div>

            <ul className={styles.navLinks}>
                <li className={styles.navLink}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/menu">Menu</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/reservations">Reservations</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/order-online">Order Online</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}
