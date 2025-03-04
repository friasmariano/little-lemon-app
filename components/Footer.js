import Image from 'next/image';


export default function Footer () {
    return (
        <footer className="footer">
            <div className="footerSection"
                 style={{ padding: '28px 0px 0px 0px' }}>
                <Image
                    className="navBrand"
                    src="/Logo.svg"
                    width={100}
                    height={100}
                    alt="logo"
                />
            </div>

            <div className="footerSection">
                <ul className="footerNav">
                    <b>Menu</b>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Reservations</a>
                    </li>
                    <li>
                        <a href="#">Order Online</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>

                <ul className="footerNav">
                    <b>Contact</b>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>

                <ul className="footerNav">
                    <b>Social Media Links</b>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
    );
};
