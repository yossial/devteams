import React, { useState } from 'react'
import Link from '../components/Link'
import next from 'next'

export default function header({ isSolid }) {
  let bgClass = isSolid ? 'solid' : 'transparent';
  return (
    <header className={`${bgClass} nav w-full px-10 py-5 fixed top-0 left-0 z-50`} id="navbar" >
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-3xl font-bold">
              <span className="text-red-500">Dev</span><span className="text-gtay-200">ote</span>
            </a>
          </Link>
        </div>

        <div className="block sm:hidden">
          <button type="button" className="navbar-toggler">
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
          </button>
        </div>


        <div className="hidden sm:flex">
          <ul className="flex flex-col sm:flex-row">
            <li><Link activeClassName="active" href="/"><a className="sm:px-4 py-2 block">Home</a></Link></li>
            <li><Link activeClassName="active" href="/#about"><a className="sm:px-4 py-2 sm:hidden lg:block">About Us</a></Link></li>
            <li><Link activeClassName="active" href="/#faq"><a className="sm:px-4 py-2 sm:hidden md:block">FAQs</a></Link></li>
            <li><Link activeClassName="active" href="/login"><a className={`${isSolid ? 'text-blue-600' : 'text-white'} sm:px-4 py-2 block border border-white-400 rounded-lg ml-4`}>Login</a></Link></li>
            <li><Link activeClassName="active" href="/signup"><a className="cta sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4 hover:bg-blue-700">Get Started</a></Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
