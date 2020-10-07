import React from 'react'
import { AiOutlineUser } from "react-icons/ai";

export default function developer() {
  return (
    <section className="flex flex-raw mx-4 md:mx-auto pt-4 shadow-none lg:shadow-lg rounded-md 
    overflow-hidden md:max-w-4xl lg:max-w-5xl justify-around">
      <img src="/static/signup3.jpg" alt="signup"
        className="hidden lg:block w-full md:w-2/5 h-75" />
      <form className="w-full bg-white md:w-3/5 p-10 rounded-r-md">
        <div className="form-header mb-6">
          <h1 className="brand-txt">
            DevTeams</h1>
          <h2 className="mx-auto text-center text-lg text-gray-600 font-semibold tracking-wide">Sign Up</h2>
        </div>
        <div className="flex mb-4">
          <div className="formField">
            <div className="inputField">
              <input name="email" type="text" placeholder="Username"
                className="form-input"
              />
              <div className="input-icon">
                <AiOutlineUser size={24} />
              </div>
            </div>
          </div>
        </div>

      </form>
    </section>
  )
}
