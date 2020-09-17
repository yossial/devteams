import React from 'react'
import SiteLogo from '../components/SiteLogo'
import FloatingLabelInput from '../components/FloatingLabelInput'
import { FaFingerprint } from "react-icons/fa";

export default function login() {
  return (
    <>
      <section className="bg-gray-100">

        <div className="mx-auto pt-40 pb-20 max-w-lg">

          <div className="container">
            <form className="font-sans bg-white text-sm rounded shadow-md w-full max-w-screen-md mx-auto px-8 pt-6 pb-8 mb-4">
              <h1 className="mx-auto text-center text-xl text-gray-900 p-4">Log in to your account</h1>
              <FaFingerprint className="mx-auto text-5xl mb-8" />
              <FloatingLabelInput name="username" type="text">
                Username
          </FloatingLabelInput>
              <FloatingLabelInput name="password" type="password">
                Password
          </FloatingLabelInput>
              <div className="flex flex-col mt-4">
                <button className="shadow-md py-3 px-4 text-green-100
                  cursor-pointer bg-teal-600 hover:bg-teal-700 rounded tr-mt text-center w-full">Sign In</button>
                <a className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-900 my-2" href="#">
                  Forgot Password?
        </a>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 DevTeams Corp. All rights reserved.
  </p>
          </div>


        </div>
      </section>

    </>
  )
}
