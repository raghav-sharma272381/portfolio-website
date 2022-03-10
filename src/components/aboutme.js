import React from "react";
import me from "../assets/mee.png";
import Typical from "react-typical";

function Aboutme() {
  return (
    <div className="">
      <div className="py-11 px-7 bg-violet-800 flex-1  align-middle md:grid grid-cols-2 grid-flow-row overflow-hidden place-items-center">
        <img className=" min-w-300  px-9 md:max-w-2xl " src={me} alt="My pic" />

        <div className="border-2  py-11 px-9 max-w-lg  bg-white shadow-lg rounded-lg my-2  ">
          <p className="text-left text-4xl font-mono  ">
            <Typical
              steps={["", 1000, "About", 1000, "About me", 1000]}
              loop={1}
              wrapper="p"
            />
          </p>
          <p className="text-left text-base font-mono mt-2  ">
            Welcome to my website :-)
          </p>
          <p className="text-left text-base font-mono mt-2  ">
            I am a Computer science students, who likes to work with react and
            react native to create websites and mobile apps.I am currently also
            learning about backend technologies- node.js, express, etc.
          </p>
        </div>
      </div>
      <div className="relative">
        <div class="custom-shape-divider-top-1644378519">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
