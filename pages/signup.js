import React from 'react'
import DrawDev from '../components/draw/DrawDev'
import DrawOrg from '../components/draw/DrawOrg'
import Link from '../components/Link'

export default function signup() {
  return (
    <div>
      <div className="container mt-10">
        <section className="flex flex-row justify-around max-w-4xl mx-auto">
          <div className="w-5/12">
            <div className="card bg-white text-center py-10 px-2
            hover:bg-indigo-50 transition duration-300 ease-in cursor-pointer">
              <DrawDev />
              <div className="mx-auto">
                <h1 className="text-3xl font-semibold pt-6 py-4">Developer</h1>
                <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, eum.</p>
                <Link href="/">
                  <a className="bg-indigo-600 hover:bg-indigo-700 text-center text-white font-semibold py-3 px-4 shadow-lg tracking-wider">
                    Start Here
                </a>
                </Link>
              </div>

            </div>
          </div>
          <div className="w-5/12">
            <div className="card bg-white text-center py-10 px-2
            hover:bg-red-50 transition duration-300 ease-in cursor-pointer">
              <DrawOrg />
              <div className="mx-auto">
                <h1 className="text-3xl font-semibold pt-6 py-4">Organization</h1>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam harum omnis iure.</p>
                <Link href="/">
                  <a className="bg-red-600 hover:bg-red-700 text-center text-white font-semibold py-3 px-4 shadow-lg tracking-wider">
                    Start Here
                  </a>
                </Link>
              </div>

            </div>
          </div>
          <div className="vertical divider uppercase font-semibold">Or</div>
        </section>
      </div>
    </div>


  )
}
