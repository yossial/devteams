import React from 'react'
import Draw from '../public/undraw_social_friends.svg'

export default function Hero() {
  return (
    <>
      <div className="gradient h-auto md:h-screen">
        <div className="container content-center pt-24 md:pt-32 lg:pt-56 px-auto mx-auto flex justify-evenly  
        flex-col-reverse md:flex-row">
          <div className="flex flex-col mx-auto py-8 md:ml-8 md:w-6/12 md:max-w-xl">
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
          <div className="flex flex-col justify-center h-screen/4 w-full md:w-6/12 md:h-screen/3">
            <Draw />
          </div>
        </div>
      </div>

    </>
  )
}


