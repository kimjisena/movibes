import './globals.css';
import Navbar from './Navbar.component';
import Header from '../components/Header.component';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head />
      <body className={`flex flex-row justify-end bg-black w-[100vw] lg:w-[90vw] lg:ml-[5vw] lg:mr-[5vw]`}>
        <Navbar />
        <main className="w-full md:w-[75%] md:pr-4 lg:pr-0">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
