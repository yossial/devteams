import React from 'react'

export default function IconCard({ Svg, title, content }) {
  return (
    <div className="flex flex-col items-center max-w-sm overflow-hidden bg-white mx-2 mt-4 md:my-0 text-center">
      <Svg />
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  )
}
