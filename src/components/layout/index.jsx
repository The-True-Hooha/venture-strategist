import Link from 'next/link'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <header className='bg-stone-100 p-8'>
        <nav className='container'>
          <ul className='flex gap-4'>
            <li>
              <Link
                href='/'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/posts'
                className='text-sm font-medium uppercase text-stone-400'
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className='container p-8'>{children}</main>

      <footer className='text-sm font-medium text-white fixed bottom-0 left-0 w-full z-10'>
        <div className='container'>
          <p>copyrights the venture strategist</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
