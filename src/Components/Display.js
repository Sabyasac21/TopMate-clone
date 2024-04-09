import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Styles/display.css";

function Display() {
  const [div1Visible, setDiv1Visible] = useState(false);
  const [div2Visible, setDiv2Visible] = useState(false);
  const [div3Visible, setDiv3Visible] = useState(false);
  const [div4Visible, setDiv4Visible] = useState(false);
  const [div5Visible, setDiv5Visible] = useState(false);

  const handleDivClick = (divNumber) => {
    
    switch (divNumber) {
      case 1:
        setDiv1Visible(!div1Visible);
        setDiv2Visible(false);
        setDiv3Visible(false);
        setDiv4Visible(false);
        setDiv5Visible(false);
        console.log(divNumber, div1Visible);

        break;
      case 2:
        setDiv1Visible(false);
        setDiv2Visible(!div2Visible);
        setDiv3Visible(false);
        setDiv4Visible(false);
        setDiv5Visible(false);
        break;
      case 3:
        setDiv1Visible(false);
        setDiv2Visible(false);
        setDiv4Visible(false);
        setDiv5Visible(false);
        setDiv3Visible(!div3Visible);
        break;
      case 4:
        setDiv1Visible(false);
        setDiv2Visible(false);
        setDiv3Visible(false);
        setDiv5Visible(false);
        setDiv4Visible(!div4Visible);
        break;
      case 5:
        setDiv1Visible(false);
        setDiv2Visible(false);
        setDiv3Visible(false);
        setDiv4Visible(false);
        setDiv5Visible(!div5Visible);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex sm:flex-row flex-col my-16 mr-4">
      <div className="displayCheck sm:w-1/2 w-full justify-center items-center hidden sm:flex">
        <div className=" w-4/5 flex justify-center items-center shadow-xl rounded-[15%] ">
          <img
            className="w-full "
            loading="lazy"
            src="https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ffeature-2-3.svg&w=384&q=75"
          />
        </div>
      </div>
      <div className=" lg:w-1/2 w-full flex justify-center items-center">
        <div className="w-full  m-4 text-left cursor-pointer">
          <ul>
            <li
              id="chh"
              className="border-b px-4 py-8 hover:bg-gray-300 hover:bg-opacity-20  "
              onClick={() => {
                return handleDivClick(1);
              }}
            >
              <div className="flex justify-between items-center">
                <p className=" text-lg h-8 w-8 mr-4 flex font-medium justify-center items-center ">
                  01
                </p>
                <h1 className="w-4/5 text-xl font-bold md:font-normal md:text-3xl">
                  Offer 1:1 sessions{" "}
                </h1>
                <p className=" text-red-700 text-2xl h-8 w-8">
                  <FontAwesomeIcon icon={faChevronDown} />
                </p>
              </div>

              <div
                className={`flex justify-center items-center h-${
                  div1Visible ? "20" : "0"
                } transition-all duration-300 ease-in-out `}
              >
                <p
                  className={`w-4/5 mt-4 ml-4 opacity-${
                    div1Visible ? 1 : 0
                  } transition-all duration-300 ease-in-out `}
                >
                  Membership session, consultations, discovery calls-do what you
                  do best.We take care of everything.
                </p>
              </div>
              <div className=" lg:w-1/2 w-full flex justify-center items-center ">
                <div className=" w-4/5 flex justify-center items-center">
                  <img
                    className={`w-full ${
                      div1Visible ? "visible" : "hidden"
                    } sm:hidden`}
                    loading="lazy"
                    src="https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ffeature-2-1.svg&w=384&q=75"
                  />
                </div>
              </div>
            </li>

            <li
              className="border-b px-4 py-8 hover:bg-gray-300 hover:bg-opacity-20 "
              onClick={() => {
                return handleDivClick(2);
              }}
            >
              <div className="flex justify-between items-center">
                <p className=" text-lg h-8 w-8 mr-4 flex font-medium justify-center items-center">
                  02
                </p>
                <h1 className="w-4/5 text-xl font-bold md:font-normal md:text-3xl">
                  Setup priority DMs in seconds{" "}
                </h1>
                <p className=" text-red-700 text-2xl h-8 w-8">
                  <FontAwesomeIcon icon={faChevronDown} />
                </p>
              </div>
              <div
                className={`flex justify-center items-center h-${
                  div2Visible ? "20 " : "0"
                } transition-height duration-300 ease-in-out delay-300 opacity-${div2Visible? 1: 0} `}
              >
                <p className={`w-4/5 mt-4 ml-4`}>
                  Let your followers ask text based Priority DM. Then answer as
                  per your convenience
                </p>
              </div>
              <div className=" lg:w-1/2 w-full flex justify-center items-center ">
                <div className=" w-4/5 flex justify-center items-center">
                  <img
                    className={`w-full ${
                      div2Visible ? "visible" : "hidden"
                    }  sm:hidden`}
                    loading="lazy"
                    src="https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ffeature-2-2.svg&w=384&q=75"
                  />
                </div>
              </div>
            </li>

            <li
              onClick={() => handleDivClick(3)}
              className="border-b px-4 py-8 hover:bg-gray-300 hover:bg-opacity-20"
            >
              <div className="flex justify-between items-center ">
                <p className=" text-lg h-8 w-8 mr-4 flex font-medium justify-center items-center">
                  03
                </p>
                <h1 className="w-4/5 text-xl font-bold md:font-normal md:text-3xl">
                  Bundle your services{" "}
                </h1>
                <p className=" text-red-700 text-2xl h-8 w-8">
                  <FontAwesomeIcon icon={faChevronDown} />
                </p>
              </div>
              <div
                className={`flex justify-center items-center h-${
                  div3Visible ? "20" : "0"
                } opacity-${
                  div3Visible ? 1 : 0
                } transition-all duration-300 ease-in-out`}
              >
                <p className={`w-4/5 mt-4 ml-4`}>
                  Connect with 100s of followers at once. Classes, group calls,
                  workshops - do them all
                </p>
              </div>
              <div className=" lg:w-1/2 w-full flex justify-center items-center ">
                <div className=" w-4/5 flex justify-center items-center">
                  <img
                    className={`w-full ${
                      div3Visible ? "visible" : "hidden"
                    }  sm:hidden`}
                    loading="lazy"
                    src="https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ffeature-2-4.svg&w=384&q=75"
                  />
                </div>
              </div>
            </li>
            <li
              onClick={() => handleDivClick(4)}
              className="border-b px-4 py-8 hover:bg-gray-300 hover:bg-opacity-20"
            >
              <div className="flex justify-between items-center  ">
                <p className=" text-lg h-8 w-8 mr-4 flex font-medium justify-center items-center">
                  04
                </p>
                <h1 className="w-4/5 text-xl font-bold md:font-normal md:text-3xl">
                  Sell a digital product{" "}
                </h1>
                <p className=" text-red-700 text-2xl h-8 w-8">
                  <FontAwesomeIcon icon={faChevronDown} />
                </p>
              </div>
              <div
                className={`flex justify-center items-center h-${
                  div4Visible ? "20 " : "0"
                } opacity-${
                  div4Visible ? 1 : 0
                } transition-height duration-300 ease-in-out  `}
              >
                <p className={`w-4/5 mt-4 ml-4`}>
                  Create packages of all your services. Perfect for high-ticket
                  and long term engagements
                </p>
              </div>
              <div className=" lg:w-1/2 w-full flex justify-center items-center ">
                <div className=" w-4/5 flex justify-center items-center">
                  <img
                    className={`w-full ${
                      div4Visible ? "visible" : "hidden"
                    }  sm:hidden`}
                    loading="lazy"
                    src="https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ffeature-2-5.svg&w=384&q=75"
                  />
                </div>
              </div>
            </li>
            <li
              onClick={() => handleDivClick(5)}
              className="border-b px-4 py-8 hover:bg-gray-300 hover:bg-opacity-20 "
            >
              <div className="flex justify-between items-center ">
                <p className=" text-lg h-8 w-8 mr-4 flex font-medium justify-center items-center">
                  05
                </p>
                <h1 className="w-4/5 text-xl font-bold md:font-normal md:text-3xl">
                  Host a webinar{" "}
                </h1>
                <p className=" text-red-700 text-2xl h-8 w-8">
                  <FontAwesomeIcon icon={faChevronDown} />
                </p>
              </div>
              <div
                className={`flex justify-center items-center h-${
                  div5Visible ? "20" : "0 "
                } opacity-${
                  div5Visible ? 1 : 0
                } transition-height duration-300 ease-in-out`}
              >
                <p className="w-4/5 mt-4 ml-4">
                  Guides, ebooks, templates, cheatsheets and everything else.
                  Start earning passively
                </p>
              </div>
              <div className=" lg:w-1/2 w-full flex justify-center items-center ">
                <div className=" w-4/5 flex justify-center items-center">
                  <img
                    className={`w-full ${
                      div5Visible ? "visible" : "hidden"
                    }  sm:hidden`}
                    loading="lazy"
                    src="https://topmate.io/_next/image?url=%2Fimages%2Fhomepage%2Ffeature-2-3.svg&w=384&q=75"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Display;
