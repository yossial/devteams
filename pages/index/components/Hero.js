import React from 'react'
import DrawHome from '../../../components/draw/DrawHome'
import Link from '../../../components/Link'

export default function Hero() {

  return (
    <>
      <section className="bg-blue-800 sm:bg-gray-100 sm:p-0">
        <div className="flex flex-row gap-4 container items-center justify-center mx-auto py-10 sm:z-1">
          <div className="txt flex flex-col gap-2">
            <h2 className="text-2xl sm:text-xl md:text-3xl font-bold mb-0 xs:mb-2 text-white sm:text-black">
              Develop. Contribute. collaborate</h2>
            <h3 className="text-xl md:text-2xl mb-2 text-gray-200 sm:text-gray-700">
              Create apps for non-profit organizations</h3>
            <section className="my-4 text-xl max-w-md md:max-w-full text-gray-200 sm:text-gray-700">
              <h4>
                Gain valuable experience as a developer.</h4>
              <h4>Expand your Colleagues network by collaborating with other developers.</h4>
              <h4>Contribute to the community by making apps that will improve people's life.</h4>
            </section>
            <div className="mt-4"><strong className="pt-8 text-xl sm:text-lg text-gray-200 sm:text-gray-700">Join us and start your journey</strong></div>
            <Link href="/signup">
              <a className="bg-red-600 hover:bg-red-700 text-center text-white font-semibold py-3 px-4 mt-4 w-48 shadow-lg tracking-wider">
                Start Now
          </a>
            </Link>

          </div>
          <div className="draw hidden sm:block sm:max-w-screen-xxs">
            <DrawHome />
          </div>

        </div>
      </section>
    </>
  )
}


