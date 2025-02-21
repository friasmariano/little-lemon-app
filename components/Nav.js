
import Image from 'next/image';
import Link from 'next/link';

function Nav () {
    return (
        <nav className="nav">
            <Image className="navBrand"
                    src="/Logo.svg"
                    width={100}
                    height={100}
                    alt="logo" />

            <ul className="navLinks">
                <li className="navLink">
                    <Link href="#">Home</Link>
                </li>
                <li className="navLink">
                    <Link href="#">About</Link>
                </li>
                <li className="navLink">
                    <Link href="#">Menu</Link>
                </li>
                <li className="navLink">
                    <Link href="#">Reservations</Link>
                </li>
                <li className="navLink">
                    <Link href="#">Order Online</Link>
                </li>
                <li className="navLink">
                    <Link href="#">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
