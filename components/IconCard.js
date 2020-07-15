import React from 'react'

export default function IconCard({ Svg, title, content }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Svg />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  )
}
