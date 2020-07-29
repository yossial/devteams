import React, { useState } from 'react'
import Link from '../components/Link'
import next from 'next'
import Hamburger from '../components/Hamburger';

export default function header({ isSolid }) {
  const [isOpen, setIsOpen] = useState(false)
  let bgClass = isOpen ? 'opened bg-gray-100' : isSolid ? 'solid' : 'transparent';
  return (
    <header className={`${bgClass} nav w-screen px-10 py-5 fixed top-0 left-0 z-50 ${isOpen ? 'h-screen' : ''}`}
      id="navbar" >
      <nav className={`flex items-center justify-between ${isOpen ? 'flex-col' : ''}`}>
        <div>
          <Link href="/">
            <a className="text-3xl font-bold">
              <span className="text-red-500">Dev</span>
              <span className="text-gtay-200" style={{ fontFamily: 'cursive' }}>Teams</span>
            </a>
          </Link>
        </div>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} isSolid={isSolid} />
        <div className={`md:flex align-middle items-center ${isOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row">
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/">
              <a className={`px-4 py-2 ${isOpen ? 'hover:bg-darker' : ''}`}>Home</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/#about">
              <a className={`px-4 py-2 ${isOpen ? 'hover:bg-darker' : ''}`}>About Us</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/#faq">
              <a className={`px-4 py-2 ${isOpen ? 'hover:bg-darker' : ''}`}>FAQs</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/login">
              <a className={`px-4 py-2 ${isOpen ? 'px-4 py-2 hover:bg-darker' : `${isSolid ? 'text-blue-600' : 'text-white'} px-4 border border-white-400 rounded-lg ml-4`}`}>Login</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/signup">
              <a className={`px-4 py-2  ${isOpen ? 'hover:bg-darker' : 'cta bg-red-600 text-white rounded-lg ml-4 hover:bg-red-700'}`}>Get Started</a></Link></li>
          </ul>
        </div>
      </nav >
    </header >
  )
}
