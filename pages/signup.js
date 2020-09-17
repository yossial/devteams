import React from 'react'
import SiteLogo from '../components/SiteLogo'
import FloatingLabelInput from '../components/FloatingLabelInput'
import { FaRegUser } from "react-icons/fa";
import DrawSignup from '../components/draw/DrawSignup'

export default function signup() {
  return (
    <>
      <div className="mt-20 w-full mx-auto sm:max-w-6xl sm:pt-8 sm:pb-4 sm:mt-4">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="hidden sm:flex w-1/2 sm:max-w-md flex-col sm:gap-2 justify-center">
            <div className="md:text-4xl sm:text-lg font-black uppercase">Join us and find your next challenge</div>
            <div className="sm:text-xl my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quisquam.</div>
            <DrawSignup />
          </div>
          <div className="flex sm:hidden justify-center">
            <h1 className="text-2xl font-semibold">Sign Up</h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-start sm:mt-10 md:justify-end">
            <div className="shadow-sm sm:shadow-md flex-auto w-screen sm:w-sm px-10 pb-10">
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> First Name</div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input name="fname" placeholder="Jhon" type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Last Name</div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input name="lname" placeholder="Doe" type="text" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Email</div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input name="email" placeholder="jhon@doe.com" type="email" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Password</div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input name="pass" placeholder="********" type="password" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
              </div>
              <div className="w-full">
                <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                  <span className="text-red-400 mr-1">*</span> Repeat Password</div>
                <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input name="repass" placeholder="********" type="password" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />  </div>
              </div>
              <div className="mt-6 flex flex-col justify-center">
                <button className="shadow-md py-3 px-4 text-green-100
                  cursor-pointer bg-teal-600 hover:bg-teal-700 rounded tr-mt text-center w-1/2 mx-auto">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
