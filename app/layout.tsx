import './globals.css'
import '../styles/custom.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';


export const metadata = {
  title: 'Transmall',
  description: 'Transmall POS ERP System',
  icons: {
    icon: '/images/logo-icon-transmall.svg',
    shortcut: '/images/logo-icon-transmall.svg',
  },
}

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}