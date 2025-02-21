import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Nav /> 
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
