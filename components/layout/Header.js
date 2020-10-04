import React, { useState } from 'react'
import Link from '../Link'
import next from 'next'
import Hamburger from '../layout/Hamburger';
import SiteLogo from '../../components/SiteLogo'

export default function header({ isSolid, isSecondaryGrid }) {
  const [isOpen, setIsOpen] = useState(false)
  const bgClass = isOpen ? 'opened bg-gray-100' : 'bg-gradient';
  const anchorClass = `px-4 py-2 ${isOpen ? 'hover:bg-black hover:bg-opacity-003' : 'hover:bg-white hover:bg-opacity-01'}`;
  const liClass = `${isOpen ? 'py-3 border-b border-gray-400' : ''}`;
  const ctaClass = `px-4 py-2 ${isOpen ? 'hover:bg-darker' : 'cta bg-red-600 text-white rounded-lg ml-4 hover:bg-red-700'}`
  return (
    <header className={`header ${bgClass} nav w-full px-10 md:px-20 py-3 sticky top-0 left-0 z-50 
    ${isOpen ? 'h-screen text-gray-700' : 'text-gray-300'}`} id="navbar" >
      <nav className={isOpen ? '' : `flex items-center justify-between`}>
        <SiteLogo isOpen={isOpen} isSecondaryGrid={isSecondaryGrid} />
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} isSolid={isSolid} isSecondaryGrid={isSecondaryGrid} />
        <div className={`md:flex align-middle items-center ${isOpen ? 'flex mt-12 text-lg' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row w-full">
            <li className={liClass}>
              <Link activeClassName="active" href="/">
                <a className={anchorClass}
                  onClick={() => setIsOpen(false)}>Home</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/#about">
                <a className={anchorClass}
                  onClick={() => setIsOpen(false)}>About Us</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/#faq">
                <a className={anchorClass}
                  onClick={() => setIsOpen(false)}> FAQs</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/login">
                <a className={anchorClass}
                  onClick={() => setIsOpen(false)}>Login</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/signup">
                <a className={ctaClass}
                  onClick={() => setIsOpen(false)}>Get Started</a></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
