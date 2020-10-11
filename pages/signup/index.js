import React from "react";
import DrawDev from "../../components/draw/DrawDev";
import DrawOrg from "../../components/draw/DrawOrg";
import Link from "next/link";

export default function signup() {
  return (
    <section className="flex flex-col md:flex-row  items-center justify-around max-w-4xl mx-auto h-full">
      <div className="w-full md:w-5/12">
        <Link href="/signup/developer">
          <div className="signup-card border-indigo-100 border-b sm:border-indigo-700 sm:border-b-4">
            <div className="max-w-sm lg:max-w-full overflow-x-hidden">
              <DrawDev />
            </div>
            <div className="mx-auto">
              <h1 className="text-3xl font-semibold pt-6 py-4">Developer</h1>
              <p className="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos, eum.
              </p>
              <Link href="/signup/developer">
                <a className="btn-primary">Start Here</a>
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full md:w-5/12">
        <Link href="/signup/organization">
          <div className="signup-card border-gray-100 border-b sm:border-gray-700 sm:border-b-4">
            <div className="max-w-sm lg:max-w-full overflow-x-hidden">
              <DrawOrg />
            </div>
            <div className="mx-auto">
              <h1 className="text-3xl font-semibold pt-6 py-4">Organization</h1>
              <p className="pb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                harum omnis iure.
              </p>
              <Link href="/signup/organization">
                <a className="btn-secondary">Start Here</a>
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className="vertical divider uppercase font-semibold hidden md:block">
        Or
      </div>
    </section>
  );
}
