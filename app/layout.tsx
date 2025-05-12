import type { Metadata } from 'next';
import { Fira_Sans, Open_Sans, Sacramento } from 'next/font/google';
import './globals.css';
import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-main',
});

const firaSans = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-headers',
});

const sacramento = Sacramento({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-subheaders',
});

export const metadata: Metadata = {
  title: 'Fitmeal - Healthy Food Delivery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${firaSans.variable} ${sacramento.variable} font-main`}
      >
        <Header />
        <div className="pt-[60px] md:pt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
