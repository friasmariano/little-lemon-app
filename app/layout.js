
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Karla, Markazi_Text } from 'next/font/google';

import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import StoreProvider from './StoreProvider';

export const metadata = {
  title: "Little Lemon Website",
  description: "Web application for the Little Lemon Restaurant",
  images: [
    {
      url: "/opengraph-image.jpg",
      width: "1200",
      height: "630",
      alt: "Little Lemon Homepage",
    }
  ]
}

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-karla'
});

const markaziText = Markazi_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-markazi-text'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${karla.variable} ${markaziText.variable}`}>
        <StoreProvider>
          <Header />
          <Nav />
          <Main>
              {children}
          </Main>
          <Footer />
          </StoreProvider>
      </body>
    </html>
  );
}
