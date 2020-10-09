import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { AiOutlineUser } from "react-icons/ai";

import FormError from '../../components/FormError'

const schema = yup.object().shape({
  fname: yup.string().required(),
  lname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export default function developer() {
  const [loaded, setLoaded] = useState(false)
  const image = useRef()
  const handleLoad = () => setLoaded(true)
  useEffect(() => {
    debugger;
    if (image.current.complete) setLoaded(true);
  }, [])

  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="hidden lg:block lg:w-1/3 h-85">
        <img src={require('../../static/signup.jpg')} alt="signup"
          className="object-cover h-full" ref={image} onLoad={handleLoad}
          style={{ display: !loaded ? 'none' : '' }}
        />
        <img src={require('../../static/signup.jpg?lqip')} alt="signup"
          className="object-cover h-full blur"
          style={{ display: loaded ? 'none' : '' }}
        />
      </div>
      <main className="flex-1 bg-gray-200 w-full lg:w-2/3 h-85">
        <section className="bg-white h-full p-12 mx-8 lg:mx-0">
          <div className="lg:flex lg:flex-col">
            <h1 className="brand-txt lg:text-xl mb-2">DevTeams</h1>
            <h2 className="form-main-title lg:w-1/3 sm:text-lg">Create New Developer</h2>
          </div>
          <form>
            <div className="lg:flex mb-8">
              <div className="lg:w-1/3 mt-8">
                <legend className="form-section-title">User Details</legend>
                <p className="text-sm font-light text-red">This entire section is required.</p>
              </div>
              <div className="lg:w-2/3 ml-8 mt-8">
                <div className="lg:flex items-center">
                  <div className="w-1/2">
                    <div className="relative">
                      <input name="fname" type="text"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="First Name" autoComplete="off" />
                      <span className="input-icon">
                        <AiOutlineUser size={20} />
                      </span>
                    </div>

                  </div>
                  <div className="formField w-1/2">
                    <div className="relative">
                      <input name="lname" type="text"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="Last Name" autoComplete="off" />
                      <span className="input-icon">
                        <AiOutlineUser size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:flex">
                  <div className="formField my-2 lg:w-full">
                    <div className="relative">
                      <input name="email" type="email"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="Email Address" autoComplete="off" />
                      <span className="input-icon">
                        <AiOutlineUser size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
