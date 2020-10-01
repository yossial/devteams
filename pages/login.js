import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import SiteLogo from '../components/SiteLogo'
import { FaUserCircle } from "react-icons/fa";

import FormError from '../components/FormError'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});


export default function login() {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  const [serverErrors, setServerErrors] = useState('')

  const onSubmit = async (values) => {
    let res = await fetch('/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    let data = await res.json();
    if (data.err) {
      setServerErrors(data.err)
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
            <form onSubmit={handleSubmit(onSubmit)}
              className="font-sans bg-white text-sm rounded shadow-md w-full max-w-screen-md mx-auto px-8 pt-6 pb-8 mb-4">
              <h1 className="mx-auto text-center text-xl text-gray-900 p-4">Log in to your account</h1>
              <FaUserCircle className="mx-auto text-5xl mb-8" />
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="my-2">Username</label>
                <input name="email" type="text"
                  className="outline-none w-full rounded bg-gray-100 text-base 
                  transition-all duration-200 ease-in-out py-3 px-4"
                  ref={register}
                />
                {errors && <FormError msg={errors?.email?.message} />}
              </div>
              <div>
                <label htmlFor="password" className="my-2">Password</label>
                <input name="password" type="password"
                  ref={register}
                  className="outline-none w-full rounded bg-gray-100 text-base
                   transition-all duration-200 ease-in-out py-3 px-4"/>
                {errors && <FormError msg={errors?.password?.message} />}
              </div>

              <div className="flex flex-col mt-4">
                <button type="submit"
                  className="shadow-md py-3 px-4 text-green-100
                  cursor-pointer bg-teal-600 hover:bg-teal-700 
                  rounded tr-mt text-center w-full">Sign In</button>
                <a className="inline-block align-baseline text-sm 
                text-gray-600 hover:text-gray-900 my-2" href="#">
                  Forgot Password?
                </a>
                {serverErrors && <FormError msg={serverErrors} />}
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


