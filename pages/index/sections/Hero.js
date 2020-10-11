import React from "react";
import DrawHome from "../../../components/draw/DrawHome";
import Link from "../../../components/Link";

export default function Hero() {
  return (
    <div className="wrap pt-10 md:pt-0">
      <section className="h-screen sm:p-0 overflow-hidden">
        <div
          className="container flex flex-col lg:flex-row items-center justify-center lg:justify-around py-4
         md:py-10 min-h-screen91"
        >
          <div className="txt flex flex-col gap-2 z-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-0 xs:mb-2 text-white">
              Make the best out of your free time helping others
            </h2>
            <h3 className="text-xl md:text-2xl mb-2 text-gray-150">
              Use your skills to assist non-profit organizations
            </h3>
            <section className="my-4 text-xl max-w-md md:max-w-3xl text-gray-150 sm:leading-8">
              <h4>
                Gain valuable experience in software development and project
                management.
              </h4>
              <h4>
                Expand your network, Collaborate with people in your area of
                ​​expertise.
              </h4>
              <h4>
                Contribute to the community, your work will help people live a
                better life.
              </h4>
            </section>
            <div className="mt-4">
              <strong className="pt-8 text-xl sm:text-lg text-gray-200">
                Time is the most valuable thing, dont waste it, start today!
              </strong>
            </div>
            <div className="flex flex-row gap-2">
              <Link href="/signup">
                <a
                  className="bg-red-600 hover:bg-red-700 text-center 
                text-white font-semibold py-3 px-4 mt-4 w-32 sm:w-48 shadow-lg tracking-wider 
                transition duration-300 ease-in"
                >
                  Start Now
                </a>
              </Link>
              <Link href="/#sections">
                <a
                  className="bg-gray-700 text-gray-400 hover:bg-gray-750
               text-center font-semibold py-3 px-4 mt-4 w-32 sm:w-48 shadow-lg tracking-wider 
               transition duration-300 ease-in"
                >
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
