import React, { useState } from 'react'
import SiteLogo from '../components/SiteLogo'
import FloatingLabelInput from '../components/FloatingLabelInput'
import { FaRegUser } from "react-icons/fa";
import DrawSignup from '../components/draw/DrawSignup'

export default function signup() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfmPassword, setCnfmPassword] = useState('');
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== cnfmPassword) {
      setErrors((prev) => {
        return { ...prev, password: "Passwords must match" }
      });
      return false;
    }
    let res = await fetch('/api/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: fname,
          lastName: lname,
          email: email,
          password: password,
        })
      })
    let data = await res.json();
    if (data.errors) {
      setErrors(data.errors);
      return false;
    }
    if (data.user) {
      location.assign('/');
    }

  }

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
              <form>
                <div className="w-full">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    <span className="text-red-400 mr-1">*</span> First Name</div>
                  <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                    <input name="fname" placeholder="Jhon" type="text" required
                      value={fname} onChange={(e) => setFname(e.target.value)}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                  </div>
                  <span className="text-sm text-red-500">{errors?.firstName}</span>
                </div>
                <div className="w-full">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    <span className="text-red-400 mr-1">*</span> Last Name</div>
                  <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                    <input name="lname" placeholder="Doe" type="text" required
                      value={lname} onChange={(e) => setLname(e.target.value)}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                  </div>
                  <span className="text-sm text-red-500">{errors?.lastName}</span>
                </div>
                <div className="w-full">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    <span className="text-red-400 mr-1">*</span> Email</div>
                  <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                    <input name="email" placeholder="jhon@doe.com" type="email" required
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                  </div>
                  <span className="text-sm text-red-500">{errors?.email}</span>
                </div>
                <div className="w-full">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    <span className="text-red-400 mr-1">*</span> Password</div>
                  <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                    <input name="pass" placeholder="********" type="password" required
                      value={password} onChange={(e) => setPassword(e.target.value)}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                  </div>
                  <span className="text-sm text-red-500">{errors?.password}</span>
                </div>
                <div className="w-full">
                  <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                    <span className="text-red-400 mr-1">*</span> Repeat Password</div>
                  <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                    <input name="cnfmPassword" placeholder="********" type="password" required
                      value={cnfmPassword} onChange={(e) => setCnfmPassword(e.target.value)}
                      className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                  </div>
                  <span className="text-sm text-red-500">{errors?.password}</span>
                </div>
                <div className="mt-6 flex flex-col justify-center">
                  <button className="shadow-md py-3 px-4 text-green-100
                  cursor-pointer bg-teal-600 hover:bg-teal-700 rounded tr-mt text-center w-1/2 mx-auto"
                    onClick={handleSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
