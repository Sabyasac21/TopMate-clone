import React, { useEffect } from "react";

function Forms({setScrollTarget}) {
 
  useEffect(()=>{
    setScrollTarget(document.getElementById('scroll-target'))
  }, [])
  return (
    <div id="scroll-target" className="flex flex-col items-center justify-center h-40vh bg-gray-900 text-white">
      <h1 className="text-5xl md:text-6xl mt-12 mb-4">
        Find the <b>right expert</b>
      </h1>
      <p className="mb-8 text-xl md:block hidden">
        Get personalized adivice from top experts to your specific questions
      </p>

      <div  className="relative w-4/5 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className=" w-full text-black py-6 px-8 m-4 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300 text-md flex-shrink-0"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 py-3 px-8 border border-gray-300 bg-purple-700 hover:text-black rounded-full focus:outline-none focus:ring focus:border-blue-300 text-xl transition duration-300 ease-in-out font-bold mb-2">
          Search
        </button>
      </div>

      <div className=" flex md:grid flex-col md:grid-cols-2 gap-4 w-3.5/5 p-4 ">
        <div className="example-container border rounded-xl p-4 hover:bg-gray-300 hover:bg-opacity-15 text-left">
          <h2 className="text-xl font-bold">Find people from a company</h2>
          <p className="text-gray-500">
            I am looking for the SDE working in Google
          </p>
        </div>

        <div className="example-container border rounded-xl p-4 hover:bg-gray-300 hover:bg-opacity-15 text-left">
          <h2 className="text-xl font-bold">Find people from a company</h2>
          <p className="text-gray-500">
            I am looking for the SDE working in Google
          </p>
        </div>

        <div className="example-container border rounded-xl p-4 hover:bg-gray-300 hover:bg-opacity-15 text-left">
          <h2 className="text-xl font-bold">Find people from a company</h2>
          <p className="text-gray-500">
            I am looking for the SDE working in Google
          </p>
        </div>

        <div className="example-container border rounded-xl p-4 hover:bg-gray-300 hover:bg-opacity-15 text-left">
          <h2 className="text-xl font-bold">Find people from a company</h2>
          <p className="text-gray-500">
            I am looking for the SDE working in Google
          </p>
        </div>
      </div>


      <div className="border rounded-full bg-gray-300 bg-opacity-15 h-28 my-16">
        <div className="flex justify-start items-center h-full">
          <div className="h-24 w-24 border rounded-full bg-white ml-2">
            <img src="https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Fai-search%2Faisearch-hi.png&w=128&q=75" />
          </div>
          <div className="flex mr-12 flex-col md:flex-row border-red-600 ml-10 items-start text-left">
            <div>
              <h1 className="font-bold text-2xl hidden md:block">Are you an expert?</h1>
              <p>Let people find you</p>
            </div>
            <div className="flex h-8 md:h-12 my-4 ml-4 w-32 justify-center items-start ">
              <button className=" h-full w-full py-1 px-4 self-start font-bold text-lg border rounded-sm bg-white text-black ">
                Get Listed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
