import React from 'react'
import Draw from './draw'

export default function Hero() {
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     document.getElementById('vid').play();
  //   }, 1000)
  // }, []);
  return (
    <>
      <section className="bg-blue-800 sm:bg-gray-100 sm:p-0">
        <div className="flex flex-row container items-center justify-around mx-auto py-24 sm:py-32  sm:z-1">
          <div className="txt">
            <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold mb-0 xs:mb-2 text-white sm:text-black">
              Use your skills to help others</h2>
            <h3 className="text-xl md:text-2xl mb-2 text-gray-200 sm:text-gray-700">
              Create apps for non-profit organizations</h3>
            <h3 className="text-xl max-w-md md:max-w-full mb-2 text-gray-200 sm:text-gray-700">
              Gain experience as a developer.
              <br />Expand your Colleague networks by collaborating with other developers.
              <br />Contribute to the community by making apps that help people.
              <br /><strong className="mt-4">Join us and start your journey</strong>
            </h3>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 mt-4 w-48 shadow-lg tracking-wider">
              Start Now
          </button>
          </div>
          <div className="draw hidden sm:block sm:max-w-screen-xxs">
            <Draw />
          </div>

        </div>

      </section>
    </>
  )
}


