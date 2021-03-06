import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import SiteLogo from "../components/SiteLogo";
import { MdFingerprint } from "react-icons/md";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

import FormError from "../components/FormError";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function login() {
  const { register, handleSubmit, watch, errors, isValid } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [serverErrors, setServerErrors] = useState("");
  const onSubmit = async (values) => {
    let res = await fetch("/api/login", {
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
    <>
      <section className="flex items-center justify-center h-full">
        <div className="flex-1 md:mx-auto md:mt-10 max-w-full md:max-w-xl">
          <div className="md:container">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white text-sm rounded shadow-md mx-4 md:mx-auto px-8 md:px-12 pb-8 mb-4"
            >
              <MdFingerprint
                className="mx-auto text-6xl text-indigo-300 relative"
                style={{ top: "-1rem" }}
              />
              <h1 className="brand-txt text-center">DevTeams</h1>
              <h2 className="mx-auto text-center text-lg text-gray-600 pb-5">
                Welcome Back!
              </h2>
              <div className="relative my-4">
                <input
                  name="email"
                  type="text"
                  placeholder="Username"
                  className="input-field focus:bg-gray-200 hover:bg-gray-200 w-full"
                  ref={register}
                />
                <span className="input-icon">
                  <AiOutlineUser size={24} />
                </span>
                {errors && <FormError msg={errors?.email?.message} />}
              </div>
              <div className="relative my-4">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register}
                  className="input-field focus:bg-gray-200 hover:bg-gray-200 w-full"
                />
                <div className="input-icon">
                  <AiOutlineLock size={24} />
                </div>
                {errors && <FormError msg={errors?.password?.message} />}
              </div>
              <div className="flex flex-col mt-4">
                <button
                  type="submit"
                  className="shadow-md py-3 px-4 mt-0 sm:mt-2 text-green-100
                  cursor-pointer bg-indigo-500 hover:bg-indigo-700 
                  rounded tr-mt text-center w-full"
                  disabled={!!isValid}
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline text-sm 
                text-gray-600 hover:text-gray-900 my-2"
                  href="#"
                >
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
      </section>
    </>
  );
}
