import './globals.css'
import '../styles/custom.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react';


export const metadata = {
  title: 'Transmall',
  description: 'Transmall POS ERP System',
  icons: {
    icon: '/images/logo-icon-transmall.svg',
    shortcut: '/images/logo-icon-transmall.svg',
  },
}



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