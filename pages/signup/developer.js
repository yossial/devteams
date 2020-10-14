import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from "react-icons/ai";

import FormError from "../../components/FormError";
import LazyImg from "../../components/LazyImg";

const tinyImgSrc = require("../../static/signup.jpg?lqip");
const imgSrc = require("../../static/signup.jpg");

const schema = yup.object().shape({
  fname: yup.string().required("First name is a required field"),
  lname: yup.string().required("Last name is a required field"),
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be at list 8 characters.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function developer() {
  const { register, handleSubmit, watch, errors, isValid } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [serverErrors, setServerErrors] = useState("");
  const onSubmit = async (values) => {
    let res = await fetch("/api/signup/developer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    let data = await res.json();
    if (data.err) {
      setServerErrors(data.err);
    }
    if (data.user) {
      location.assign("/");
    }
  };

  return (
    <div className="sm:container flex items-center justify-center h-screen">
      <div className="hidden sm:block w-full sm:w-1/3 h-85">
        <LazyImg
          imgSrc={imgSrc}
          tinyImgSrc={tinyImgSrc}
          alt="signup"
          className="object-cover h-full"
        />
      </div>
      <main className="flex-1 bg-gray-200 w-full sm:w-2/3 h-85">
        <section className="bg-white h-full p-12 mx-8 sm:mx-0">
          <div className="sm:flex sm:flex-col">
            <h1 className="brand-txt sm:text-xl mb-2">DevTeams</h1>
            <h2 className="form-main-title sm:w-1/3 sm:text-md">
              Create New User
            </h2>
          </div>
          <form className="flex-1 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <div className="mt-8 mb-4">
                <legend className="form-section-title">User Details</legend>
                <p className="text-sm font-light text-red">
                  This entire section is required.
                </p>
              </div>
              <div className="my-4" id="form-fields">
                <div
                  className="form-row lg:w-4/5 lg:grid"
                  style={{ alignContent: "start", justifyContent: "start" }}
                >
                  <div className="my-2">
                    <div className="relative">
                      <input
                        name="fname"
                        type="text"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="First Name"
                        autoComplete="off"
                        ref={register}
                      />
                      <span className="input-icon">
                        <AiOutlineUser size={20} />
                      </span>
                    </div>
                    {errors && <FormError msg={errors?.fname?.message} />}
                  </div>
                  <div className="my-2">
                    <div className="relative">
                      <input
                        name="lname"
                        type="text"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="Last Name"
                        autoComplete="off"
                        ref={register}
                      />
                      <span className="input-icon">
                        <AiOutlineUser size={20} />
                      </span>
                    </div>
                    {errors && <FormError msg={errors?.lname?.message} />}
                  </div>
                </div>
                <div className="form-row lg:w-4/5 lg lg:grid overflow-hidden">
                  <div className="my-2">
                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="Email Address"
                        autoComplete="off"
                        ref={register}
                      />
                      <span className="input-icon">
                        <AiOutlineMail size={20} />
                      </span>
                    </div>
                    {errors && <FormError msg={errors?.email?.message} />}
                  </div>
                </div>
                <div
                  className="form-row lg:w-4/5 lg:grid"
                  style={{ alignContent: "start", justifyContent: "start" }}
                >
                  <div className="my-2">
                    <div className="relative">
                      <input
                        name="password"
                        type="password"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="Password"
                        autoComplete="off"
                        ref={register}
                      />
                      <span className="input-icon">
                        <AiOutlineLock size={20} />
                      </span>
                    </div>
                    {errors && <FormError msg={errors?.password?.message} />}
                  </div>
                  <div className="my-2">
                    <div className="relative">
                      <input
                        name="passwordConfirmation"
                        type="password"
                        className="input-field focus:bg-gray-200 hover:bg-gray-200"
                        placeholder="Confirm Password"
                        autoComplete="off"
                        ref={register}
                      />
                      <span className="input-icon">
                        <AiOutlineLock size={20} />
                      </span>
                    </div>
                    {errors && (
                      <FormError msg={errors?.passwordConfirmation?.message} />
                    )}
                  </div>
                </div>
                <div className="mx-auto">
                  <button
                    type="submit"
                    className="shadow-md py-3 px-4 mt-0 sm:mt-2 text-white
                  cursor-pointer bg-indigo-500 hover:bg-indigo-700 
                  rounded text-center w-48"
                    disabled={!!isValid}
                  >
                    Submit
                  </button>
                  {serverErrors && <FormError msg={serverErrors} />}
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
