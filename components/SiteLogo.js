import React from 'react'
import Link from '../components/Link'

export default function SiteLogo({ isOpen, handleClick }) {
  return (
    <>
      <Link href="/">
        <a className="text-2xl font-bold" onClick={handleClick}>
          <span className={`${isOpen ? 'text-blue-600' : 'text-gray-200'}`}
            style={{ fontFamily: 'Sansita Swashed' }}>Dev</span>
          <span className={`${isOpen ? 'text-gray-700' : 'text-red-400'}`}
            style={{ fontFamily: 'Inknut Antiqua' }}>Teams</span>
        </a>
      </Link>
    </>
  )
}
