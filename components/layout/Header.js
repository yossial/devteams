import React, { useState } from 'react'
import Link from '../Link'
import next from 'next'
import Hamburger from '../layout/Hamburger';
import SiteLogo from '../../components/SiteLogo'

export default function header({ isSolid, isOpen, handleOpen }) {
  const anchorClass = `px-3 lg:px-4 py-2 
    ${isOpen ? 'hover:bg-black hover:bg-opacity-003' : 'hover:bg-white hover:bg-opacity-01'}`;
  const liClass = `${isOpen ? 'py-3 border-b border-gray-400' : ''}`;
  const ctaClass = `px-4 py-2 
    ${isOpen ? 'hover:bg-opacity-05' : 'cta bg-red-600 text-white rounded-lg ml-4 hover:bg-red-700'}`
  const handleAnchorClick = () => { handleOpen(false) };
  const navBgColor = isOpen ? 'bg-gray-100' : isSolid ? 'bg-solid' : 'bg-transparent';
  return (
    <header className={`header ${navBgColor} nav w-full px-10 md:px-20 fixed top-0 left-0 z-50 
    ${isOpen ? 'h-screen text-gray-700' : 'text-gray-300'} ${isSolid ? 'py-3' : 'py-4'}`}
      id="navbar" >
      <nav className={isOpen ? '' : `flex items-center justify-between`}>
        <SiteLogo isOpen={isOpen} handleClick={handleAnchorClick} />
        <Hamburger isOpen={isOpen} handleOpen={handleOpen} isSolid={isSolid} />
        <div className={`md:flex align-middle items-center ${isOpen ? 'flex mt-12 text-lg' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row w-full">
            <li className={liClass}>
              <Link activeClassName="active" href="/">
                <a className={anchorClass}
                  onClick={handleAnchorClick}>Home</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/#sections">
                <a className={anchorClass}
                  onClick={handleAnchorClick}>About Us</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/#contact">
                <a className={anchorClass}
                  onClick={handleAnchorClick}> Contact Us</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/login">
                <a className={anchorClass}
                  onClick={handleAnchorClick}>Login</a></Link></li>
            <li className={liClass}>
              <Link activeClassName="active" href="/signup">
                <a className={ctaClass}
                  onClick={handleAnchorClick}>Get Started</a></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
