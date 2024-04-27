import React, { useState } from "react";
import "../Styles/nav.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SmallLogo from "../Components/SoftwareEng/Images/smallLogo.png";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Nav({ scrollTarget }) {
  const [visible, setVisible] = useState(false);
  const [hamVisible, setHamVisible] = useState(false);
  const [creatorsList, setCreatorsList] = useState(false)
  const navigate = useNavigate();

  function handleHamburger() {
    setHamVisible(!hamVisible);
    
  }
 

  const handleDropdown = () => {
    setVisible(!visible);
  };

  const handleCreatorPopup=()=>{
    setCreatorsList(!creatorsList)
    
  }
  // console.log(creatorsList);

  const handleScrollClick = () => {
    if (scrollTarget) navigate("/");

    scrollTarget.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:h-[12vh] sticky z-50 top-0  bg-red-100 ">
      <div className="relative w-full flex justify-center">
        <div className="w-[90%] py-4 h-full flex">
          <div className=" md:w-[50%] flex items-center">
            <div className="w-[30%] navanime ">
              <Link to="/">
                <img
                  className="md:w-full hidden md:block"
                  src="https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Ftopmate-light.svg&w=256&q=75"
                />
                <img className="md:hidden" src={SmallLogo} />
              </Link>
            </div>
            <div className="flex justify-around w-[70%] ">
              <div className="relative">
                <h1
                  onClick={handleDropdown}
                  className={`checkk hidden md:block font-bold hover:underline ${
                    visible ? "underline" : ""
                  }`}
                >
                  For Creaters
                </h1>
                <div
                  onClick={handleDropdown}
                  className={`absolute bg-white rounded-xl p-4 w-auto text-left shadow-md ${
                    visible ? "block" : "hidden"
                  }`}
                >
                  <Link to="/for/engineers">
                    <p className="p-4 w-48 hover:bg-gray-200 hover:font-bold transition duration-300 ease-in-out rounded-sm whitespace-nowrap">
                      Software Engineers
                    </p>
                  </Link>
                  <Link to="/for/designers">
                    <p className="p-4 hover:bg-gray-200 hover:font-bold transition duration-300 ease-in-out rounded-sm">
                      Designers
                    </p>
                  </Link>
                  <p className="p-4 hover:bg-gray-200 hover:font-bold transition duration-300 ease-in-out rounded-sm">
                    Creators
                  </p>
                  <p className="p-4 hover:bg-gray-200 hover:font-bold transition duration-300 ease-in-out rounded-sm">
                    Product Managers
                  </p>
                </div>
              </div>
              <span className="hidden md:block font-bold hover:underline ">
                Pricing
              </span>
              <span className="hidden md:block font-bold hover:underline">
                Earning Calculator
              </span>
            </div>
          </div>

          <div className="md:w-[50%] w-full flex justify-end items-center">
            <div className="md:w-[70%] flex justify-between">
              <div onClick={handleScrollClick}>
                <Link to="/#ai-search">
                  <button className="w-full  justify-between items-center  whitespace-nowrap flex px-1  md:px-8 py-[8px] text-white bg-[#8a60f6] font-bold rounded-full mr-4">
                    <div className=" h-full w-full  ">
                      <FontAwesomeIcon
                        className=" font-extrabold text-md"
                        icon={faSearch}
                      />
                    </div>
                    <span className="hidden md:block">Ai Search</span>
                  </button>
                </Link>
              </div>
              {/* <button className='px-12 py-2 text-white bg-[#8a60f6] font-bold rounded-full mr-4'>Ai Search</button> */}
              <Link to="/sign-in">
                <button className="px-8 hidden md:block py-2 ml-2 rounded-md bg-white  border hover:border-black transition duration-300 ease-in-out ">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className=" whitespace-nowrap px-4 py-2 ml-2 rounded-md bg-black text-white hover:bg-white font-bold hover:text-black transition duration-300 ease-in-out">
                  Sign up Free
                </button>
              </Link>
              <div
                onClick={handleHamburger}
                className="relative flex md:hidden items-center px-2 ml-2 "
              >
                <FontAwesomeIcon className="text-3xl font-thin" icon={faBars} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[100%] md:hidden p-4 w-[100vw]  px-6  opacity-1 ${
          hamVisible ? "block" : "hidden"
        }`}
      >
        <div className="relative shadow-lg flex flex-col text-2xl p-4 border rounded-xl bg-white text-left">
          <Link to="/sign-in">
            <span className="p-4 ">Login</span>
          </Link>
          <span onClick={handleCreatorPopup} className="p-4 flex justify-between">
            <p>For Creators</p>
            <p className={`${!creatorsList?'block':'hidden'}`}><FontAwesomeIcon icon={faChevronDown}/></p>
            <p className={`${creatorsList?'block':'hidden'}`}><FontAwesomeIcon icon={faChevronUp}/></p>

            <div className={`absolute ${creatorsList?'block':'hidden'} p-2 my-2 shadow-lg  border rounded-xl top-full right-0 w-full bg-white`}>
              <div className="text-2xl  flex flex-col p-4">
                <Link to='/for/engineers'><span className="p-2">Software Engineers</span></Link>
                <span className="p-2">Designers </span>
                <span className="p-2">Product Engineers</span>
              </div>
            </div>
            
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
