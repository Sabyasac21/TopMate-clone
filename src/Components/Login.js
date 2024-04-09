import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-[100vh] bg-white">
      <div className="flex md:mx-32 mx-8">
        <div className="md:w-3/5 w-full">
          <div className="flex justify-between items-center mt-4 ">
            <Link className="w-1/2" to="/">
              <div className="w-4/5 flex">
                <img src="https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Ftopmate-light.svg&w=256&q=75" />
              </div>
            </Link>

            <button className="border rounded-md px-4 py-2 md:mr-8 text-sm md:text-lg transition duration-300 ease-in-out hover:border hover:border-black ">
              Create Account
            </button>
          </div>
          <div className="border-b my-4 mb-20"></div>

          <div className="min-h-[40vh] ">
            <div className="md:w-4/5 w-full  ">
              <h1 className="font-bold text-3xl md:text-4xl text-left mb-4">
                Sign In
              </h1>
              <div className="flex md:flex-row flex-col gap-4">
                <button className="flex justify-center gap-4 items-center border transition duration-300 ease-in-out hover:border hover:border-black rounded-lg py-3 px-1 w-full text-sm md:text-sm md:w-1/2">
                  <img src="https://topmate.io/_next/image?url=%2Fimages%2Fsign-in%2Fgoogle.svg&w=32&q=75" />
                  <span className="">
                    Continue with <b>Google</b>
                  </span>
                </button>
                <button className="flex justify-center gap-4 items-center border transition duration-300 ease-in-out hover:border hover:border-black rounded-lg py-3 px-2 w-full text-sm md:text-sm md:w-1/2">
                  <img src="https://topmate.io/_next/image?url=%2Fimages%2Fsign-in%2Flinkedin.svg&w=32&q=75" />
                  <span className="">
                    Continue with <b>LinkedIn</b>
                  </span>
                </button>
              </div>

              <div className="flex justify-center items-center my-4">
                <div className="border-b h-0 w-1/2"></div>
                <span className="text-gray-300 pt-2">Or</span>
                <div className="border-b h-0 w-1/2"></div>
              </div>

              <form className="">
                <div className="mb-4">
                  <div className="text-left pb-1">
                    <label>Username/Email</label>
                  </div>
                  <div className="flex items-start w-full">
                    <input
                      placeholder="Username/Email"
                      className="w-full p-2 rounded-lg border"
                    ></input>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-left pb-1">
                    <label>Password</label>
                  </div>
                  <div className="w-full">
                    <input
                      placeholder="Password"
                      className="w-full p-2 rounded-lg border"
                    ></input>
                  </div>
                </div>

                <div className="w-full py-2 bg-black text-white rounded-lg my-2 mb-8 transition duration-300 easse-in-out hover:bg-gray-700">
                  <button>Sign-in</button>
                </div>
              </form>

              <div className="border-b my-4"></div>

              <div className="text-left font-bold text-lg text-green-700 py-4">
                <span className="transition duration-300 ease-in-out hover:text-green-600 cursor-pointer">Forgot Password</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 md:block hidden">
          <img
            className="h-full"
            src="https://topmate.io/_next/image?url=%2Fimages%2Fsign-in%2Fsign-in-back.svg&w=640&q=75"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
