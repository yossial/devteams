import React, { useState } from 'react'
import Link from '../Link'
import next from 'next'
import Hamburger from '../layout/Hamburger';
import SiteLogo from '../../components/SiteLogo'

export default function header({ isSolid }) {
  const [isOpen, setIsOpen] = useState(false)
  let bgClass = isOpen ? 'opened bg-gray-100' : isSolid ? 'solid' : 'transparent';
  return (
    <header className={`${bgClass} nav w-screen px-20 py-5 fixed top-0 left-0 z-50 ${isOpen ? 'h-screen' : ''}`}
      id="navbar" >
      <nav className={`flex items-center justify-between ${isOpen ? 'flex-col' : ''}`}>
        <SiteLogo />
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} isSolid={isSolid} />
        <div className={`md:flex align-middle items-center ${isOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row">
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/">
              <a className={`px-4 py-2 ${isOpen ? 'hover:bg-darker' : ''}`} onClick={() => setIsOpen(false)}>Home</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/#about">
              <a className={`px-4 py-2 ${isOpen ? 'hover:bg-darker' : ''}`} onClick={() => setIsOpen(false)}>About Us</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/#faq">
              <a className={`px-4 py-2 ${isOpen ? 'hover:bg-darker' : ''}`} onClick={() => setIsOpen(false)}> FAQs</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/login">
              <a className={`px-4 py-2 ${isOpen ? 'px-4 py-2 hover:bg-darker' : 'px-4 ml-4'}`} onClick={() => setIsOpen(false)}>Login</a></Link></li>
            <li className={`${isOpen ? 'py-2' : ''}`}><Link activeClassName="active" href="/signup">
              <a className={`px-4 py-2  ${isOpen ? 'hover:bg-darker' : 'cta bg-red-600 text-white rounded-lg ml-4 hover:bg-red-700'}`} onClick={() => setIsOpen(false)}>Get Started</a></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
