import React from "react";
import reactnative from "../assets/reactnative.webp";
import Tilt from "react-tilt";
import Typical from "react-typical";

function TechIknow() {
  return (
    <div>
      <div className="bg-black py-11  pt-40 pb-40 px-4  flex  justify-center">
        <div>
          <p
            id="TechIknow"
            className="text-right text-5xl font-mono text-white "
          >
            <Typical
              steps={[
                "",
                1000,
                "Tech",
                1000,
                "Tech I",
                1000,
                "Tech I Know",
                1000,
              ]}
              loop={1}
              wrapper="p"
            />
          </p>
          <div className="max-w-4xl  place-items-stretch  my-5 grid grid-rows-2 grid-flow-col gap-4 ">
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <img
                    className="p-4 "
                    src="https://img.search.brave.com/SnF6Oe8Q_va-vv7IQV60dbirM5lFMCabEHYNSYrdZ3I/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDEvSmF2YVNj/cmlwdF9Mb2dvLnBu/Zw"
                    alt={"JS"}
                  />
                  <p className="text-center text-white  ">JavaScript</p>
                </a>
              </div>
            </Tilt>

            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://www.typescriptlang.org/">
                  <img
                    className="p-4 "
                    src="https://img.search.brave.com/iYvHs9Xi-RxG_UNu8VNweUxaitOM4qrgtrwXfBHwhF0/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9ibG9n/LmplcmVteWxpa25l/c3MuY29tL2Jsb2cv/MjAxOS0wMy0wNV90/eXBlc2NyaXB0LWZv/ci1qYXZhc2NyaXB0/LWRldmVsb3BlcnMt/YnktcmVmYWN0b3Jp/bmctcGFydC0xLW9m/LTIvaW1hZ2VzLzEu/anBlZw"
                    alt={"TS"}
                  />
                  <p className="text-center text-white  ">TypeScript</p>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://reactjs.org/">
                  <img
                    className="p-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt={"React.js"}
                  />
                  <p className="text-center text-white pt-7 ">React.JS</p>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://reactnative.dev/">
                  <img className="p-5" src={reactnative} alt={"RN"} />
                  <p className="text-center text-white pt-7 ">React Native</p>
                </a>
              </div>
            </Tilt>
            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://firebase.google.com/">
                  <img
                    className="p-5"
                    src="https://img.search.brave.com/RwJ4K9OTApOXXAR4ZTDHc6VsLb_wruKzXz1-YBtFpY8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly80LmJw/LmJsb2dzcG90LmNv/bS8tcnROUlZNM2FJ/dkkvWEpYX1UwN1ot/SUkvQUFBQUFBQUFK/WFkvWXBkT280OTBG/VGdkS094TTRxREct/Mi1FemNORkFXa0tB/Q0s0QkdBWVlDdy9z/MTYwMC9sb2dvJTJC/ZmlyZWJhc2UlMkJp/Y29uLnBuZw"
                    alt={"Firebase"}
                  />
                </a>
                <p className="text-center text-white pt-2.5 ">Firebase</p>
              </div>
            </Tilt>

            <Tilt>
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500
              shadow-lg rounded-lg my-2 bg-clip-padding backdrop-filter
              backdrop-blur-xl bg-opacity-60"
              >
                <a href="https://redux.js.org/">
                  <img
                    className="p-5"
                    src="https://img.search.brave.com/5JGMiUw0sGBOVEgIbDVMmKYLwIHIh5IJkdfruhyqpwM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL3Jl/YWN0anMvcmVkdXgv/bWFzdGVyL2xvZ28v/bG9nby5wbmc"
                    alt={"Redux"}
                  />
                  <p className="text-center text-white   pt-7">Redux</p>
                </a>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechIknow;
