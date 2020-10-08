import React from 'react'
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
  return (
    <div className="lg:flex h-full">
      <div className="hidden lg:block lg:w-1/3">
        <img src="/static/signup.jpg" alt="signup" id="dev-signup" />
      </div>
      <main className="flex-1 bg-gray-200 w-full lg:w-3/5">
        <section className="bg-white h-full p-12 mx-8 lg:mx-0">
          <div className="lg:flex lg:flex-col">
            <h1 className="brand-txt lg:text-xl mb-2">DevTeams</h1>
            <h2 className="form-main-title lg:w-1/3 sm:text-lg">Create New Developer</h2>
          </div>
          <form>
            <div className="lg:flex mb-8">
              <div className="lg:w-1/3">
                <legend className="form-section-title">User Details</legend>
                <p className="text-sm font-light text-red">This entire section is required.</p>
              </div>
              <div className="lg:w-2/3 ml-8">
                <div className="lg:flex items-start">
                  <div className="w-1/2">
                    <div className="relative">
                      <input type="text" className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="First Name" autoComplete="off" />
                      <span className="input-icon">
                        <AiOutlineUser size={24} />
                      </span>
                    </div>

                  </div>
                  <div className="formField w-1/2">
                    <div className="relative">
                      <input type="text" className="input-field focus:bg-gray-200 hover:bg-gray-200" placeholder="First Name" autoComplete="off" />
                      <span className="input-icon">
                        <AiOutlineUser size={24} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:flex">
                  <div className="formField my-2 lg:w-full">
                    <div className="relative">
                      <input type="text" className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="First Name" autoComplete="off" />
                      <span className="input-icon">
                        <AiOutlineUser size={24} />
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
