import React from 'react'
import Link from '../components/Link'

export default function SiteLogo({ isOpen, isSecondaryGrid }) {
  return (
    <>
      <Link href="/">
        <a className="text-2xl font-bold">
          <span className={`${isSecondaryGrid ? 'text-blue-400' : 'text-blue-400 md:text-blue-600'}`}
            style={{ fontFamily: 'Sansita Swashed' }}>Dev</span>
          <span className={`${isSecondaryGrid && !isOpen ?
            'text-gray-300' : isOpen ?
              'text-gray-700' : 'text-gray-300 md:text-gray-600'}`}
            style={{ fontFamily: 'Inknut Antiqua' }}>Teams</span>
        </a>
      </Link>
    </>
  )
}
