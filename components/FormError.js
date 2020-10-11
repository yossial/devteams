import React from 'react'

export default function FormError({ msg }) {
  return (
    <span className="text-sm text-red-500 inline-block pt-1">
      {msg}
    </span>
  )
}
