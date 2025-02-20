
import Image from 'next/image';

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
                    <a href="#">Home</a>
                </li>
                <li className="navLink">
                    <a href="#">About</a>
                </li>
                <li className="navLink">
                    <a href="#">Menu</a>
                </li>
                <li className="navLink">
                    <a href="#">Reservations</a>
                </li>
                <li className="navLink">
                    <a href="#">Order Online</a>
                </li>
                <li className="navLink">
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
