import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/nav.module.css';

function Nav () {
    return (
        <nav className="nav">
            <div className={styles.burgerSection}>
                {/* Hide/Show using state */}
                <FontAwesomeIcon icon={faBars}
                        className={`${burgerIcon} ${'visible md:invisible'}`}
                        style={{ fontSize: '2rem', paddingLeft: '30px' }}/>

                <Image className={styles.navBrand}
                        src="/Logo.svg"
                        width={500}
                        height={500}
                        alt="logo" style={{ marginLeft: '10vw', width: '10rem'}} />
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

export default Nav;
