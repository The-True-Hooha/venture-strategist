import Link from 'next/link';
import React from 'react';
import Navbar from './navBar';


const Layout = ({ children }) => {
  return (
    <>
    {/* <Navbar/> */}
      <header className='bg-stone-100 p-4 md:p-8'>
        <nav className='container'>
          <ul className='flex gap-4 items-center justify-between'>
            <li>
              <Link href='/' className='text-sm font-medium text-black'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className='text-sm font-medium text-black'>
                About
              </Link>
            </li>
            <li></li>
            <li className='text-lg hidden md:flex font-bold text-center text-black'>
              The Venture Strategist
            </li>
            <li></li>
            <li>
              <Link
                href='/services'
                className='text-sm font-medium text-black'
              >
                Services
              </Link>
            </li>
            <li>
              <button className='bg-blue-700 text-white px-4 py-2 rounded'>
              <Link
                href='/posts'
                className='text-sm font-medium text-white'
              >
                BLOG
              </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className='container p-4 md:p-8'>{children}</main>

      <footer className='text-sm font-medium text-black bg-gray-100 py-2 fixed bottom-0 left-0 w-full z-10'>
        <div className='container flex justify-between'>
          <p>&copy; The Venture Strategist</p>
          <div>
            <Link href='/privacy' className='text-black mr-4'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='text-black'>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
