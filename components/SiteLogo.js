import React from 'react'
import Link from '../components/Link'

export default function SiteLogo() {
  return (
    <>
      <Link href="/">
        <a className="text-3xl font-bold">
          <span className="text-red-500">Dev</span>
          <span className="text-gray-400 sm:text-gray-700" style={{ fontFamily: 'cursive' }}>Teams</span>
        </a>
      </Link>
    </>
  )
}
