import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMenu } from 'react-icons/hi'
import cx from 'clsx'
import { useRouter } from 'next/router'

const menuLink = [
  {
    id: 1,
    label: 'Home',
    url: '/'
  },
  {
    id: 2,
    label: 'Services',
    url: 'services'
  },
  {
    id: 3,
    label: 'About',
    url: 'about'
  },
  {
    id: 4,
    label: 'Blog',
    url: 'posts'
  }
]

function Navbar() {
  const [scrollBar, setScrollbar] = useState('')
  const [menuDisplay, setMenuDisplay] = useState(false)
  const [active, setActive] = useState('')
  const router = useRouter()
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    setActive(router.asPath)
    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [router.asPath])
  const stickNavbar = () => {
    if (typeof window !== 'undefined') {
      let windowHeight = window.scrollY
      windowHeight > 90
        ? setScrollbar('!bg-white') // backdrop-blur-[100px]
        : setScrollbar('bg-transparent')
    }
  }
  const toggleNav = url => {
    setActive(url)
    setMenuDisplay(prev => !prev)
  }
  return (
    <header
      className={cx(
        'bg-white shadow-sm fixed top-0 right-0 left-0',
        scrollBar,
        { 'md:bg-transparent': menuDisplay }
      )}
    >
      <div className='w-full md:w-max px-[24px] py-[8px] md:p-0 flex items-center justify-between'>
        <div className='md:hidden'>
          <button
            type='button'
            className='outline-none'
            onClick={() => setMenuDisplay(prev => !prev)}
          >
          <HiOutlineMenu className='h-[32px] w-[32px] text-blue-primary' />
          </button>
        </div>
      </div>
      <div
        className={cx('w-full flex', { 'hidden md:block': !menuDisplay })}
      >
        <ul className='p-0 justify-between flex flex-col md:flex-row items-center md:gap-[30px] lg:gap-[50px]'>
          {menuLink.map((v, idx) => (
            <Link href={v.url} key={v.id}>
              <li
                onClick={() => toggleNav(v.url)}
                className={cx(
                  'text-sm font-primary hover:font-bold w-full p-[16px] md:px-0 md:py-[8px] md:w-max cursor-pointer text-center text-grey-4',
                  {
                    '!text-black font-[900] md:border-b-[2px] md:border-blue-primary':
                      v.url === active
                  }
                )}
              >
                {v.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
    // <header className='bg-white shadow-sm fixed top-0 right-0 left-0'>
    //   <div className=' h-20 flex container mx-auto items-center justify-between'>
    //     <nav className=' '>
    //       <ul className='flex w-full space-x-10 text-base font-medium'>
    //         <li>
    //           <a href=''>Home</a>
    //         </li>
    //         <li>
    //           <a href=''>Home</a>
    //         </li>
    //         <li>
    //           <a href=''>Home</a>
    //         </li>
    //         <li>
    //           <a href=''>Home</a>
    //         </li>
    //         <li>
    //           <a href=''>Home</a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div>
    //       <button className='bg-blue-700 px-5 py-3 rounded-md text-white text-base font-medium'>
    //         Join Waitlist
    //       </button>
    //     </div>
    //   </div>
    // </header>
  )
}

export default Navbar
