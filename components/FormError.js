import React from 'react'

export default function FormError({ msg }) {
  return (
    <span className="text-sm text-red-500 mb-2">
      {msg}
    </span>
  )
}
