import Link from 'next/link'
import React from 'react'
import { BsBoxArrowLeft } from 'react-icons/bs'
import { isMobile } from 'react-device-detect';

export default function NavBackHome() {
  return (
    <header className="nav w-full px-4 sm:px-10 h-4">
      <nav className="flex items-center justify-between">
        <ul className="flex flex-col md:flex-row w-full">
          <li className="py-3">
            <Link href="/">
              <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded 
              inline-flex items-center"><BsBoxArrowLeft size={20} className="mr-4" />
                {!isMobile && <span>back to devteams</span>}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}
