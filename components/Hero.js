import React from 'react'
import Draw from '../public/undraw_social_friends.svg'

export default function Hero() {
  return (
    <>
      <section className="relative bg-blue-800 p-16 sm:p-0">
        <video
          className="z-0 hidden sm:block"
          autoPlay
          muted
          loop
          style={{
            filter: 'brightness(0.5)'
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="relative flex flex-col container items-center sm:absolute my-16 mx-auto sm:m-0 sm:p-0 
        sm:inset-y-30 sm:z-1">
          <div className="py-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-0 xs:mb-2 text-white">
              Creating apps to help others</h2>
            <h3 className="text-lg md:text-2xl mb-2 text-gray-200">
              Create apps for non-profit organizations</h3>
            <h3 className="text-md md:text-xl max-w-md md:max-w-full mb-2 text-gray-300">
              Gain experience as a developer and collaborate with other developers</h3>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 w-48 shadow-lg tracking-wider">
            Start Now
          </button>
        </div>

      </section>

    </>
  )
}


