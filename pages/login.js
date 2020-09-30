import React, { useState } from 'react'
import SiteLogo from '../components/SiteLogo'
import FloatingLabelInput from '../components/FloatingLabelInput'
import { FaFingerprint } from "react-icons/fa";


const ErrMsg = (err) => {
  return (<span className="text-sm text-red-500 ml-2 -mt-4 mb-2">{err}</span>)
}

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch('/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        })
      })
    let data = await res.json();
    if (data.errors) {
      setErrors(data.errors);
    }
    if (data.user) {
      location.assign('/');
    }

  }

  return (
    <>
      <section className="bg-gray-100">

        <div className="mx-auto pt-40 pb-20 max-w-lg">

          <div className="container">
            <form className="font-sans bg-white text-sm rounded shadow-md w-full max-w-screen-md mx-auto px-8 pt-6 pb-8 mb-4">
              <h1 className="mx-auto text-center text-xl text-gray-900 p-4">Log in to your account</h1>
              <FaFingerprint className="mx-auto text-5xl mb-8" />
              <div className="mb-4">
                <FloatingLabelInput name="email" type="text"
                  value={email} handleChange={setEmail}>
                  Username
              </FloatingLabelInput>
                {ErrMsg(errors?.email)}
              </div>
              <div>
                <FloatingLabelInput name="password" type="password"
                  value={password} handleChange={setPassword}>
                  Password
              </FloatingLabelInput>
                {ErrMsg(errors?.password)}
              </div>

              <div className="flex flex-col mt-4">
                <button onClick={handleSubmit}
                  className="shadow-md py-3 px-4 text-green-100
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
      </section >

    </>
  )
}


