import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

function Nav () {
    return (
        <nav className="nav">
            {/* Enable  burger icon, after setting up Global state */}
            {/* <div className="burgerIcon">
                 <FontAwesomeIcon icon={faBars} 
                    style={{ fontSize: '2em' }}/>
            </div> */}

            <Image className="navBrand"
                    src="/Logo.svg"
                    width={100}
                    height={100}
                    alt="logo" />

            <ul className="navLinks">
                <li className="navLink">
                    <Link href="/">Home</Link>
                </li>
                <li className="navLink">
                    <Link href="/about">About</Link>
                </li>
                <li className="navLink">
                    <Link href="/menu">Menu</Link>
                </li>
                <li className="navLink">
                    <Link href="/reservations">Reservations</Link>
                </li>
                <li className="navLink">
                    <Link href="/order-online">Order Online</Link>
                </li>
                <li className="navLink">
                    <Link href="login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
