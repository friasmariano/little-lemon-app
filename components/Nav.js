import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

function Nav () {
    return (
        <nav className="nav">
            <div className="burgerSection">
                {/* Hide/Show using state */}
                <FontAwesomeIcon icon={faBars} 
                        className="burgerIcon visible md:invisible" style={{ fontSize: '2rem', paddingLeft: '30px' }}/>

                <Image className="navBrand"
                        src="/Logo.svg"
                        width={500}
                        height={500}
                        alt="logo" style={{ marginLeft: '10vw', width: '10rem'}} />
            </div>

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
