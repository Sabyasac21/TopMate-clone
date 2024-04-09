import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col md:py-24 py-8 justify-center items-center  bg-[#141414]">
      <div className="flex flex-col md:flex-row h-auto w-full px-4 py-8 md:py-0 md:px-12 ">
        <div className="flex justify-start  items-start w-[70%] pb-8 md:pb-0">
          <div className="w-[70%]">
            <Link to='/'>
            <img
              className="w-full"
              src="https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Ftopmate-dark.svg&w=640&q=75"
            />
            </Link>
            
          </div>
        </div>
        <div className="flex  gap-12 justify-start items-start md:w-[30%]">
          <div className="text-white " style={{lineHeight:'2.5rem', textAlign:'start', fontSize:'1rem'}}>
            <p className=" line-height-4">About</p>
            <p className=" line-height-8">Contact Us</p>
            <p>Terms Of Service</p>
            <p>Privacy</p>
          </div>
          <div className="" style={{lineHeight:'2.5rem', textAlign:'start', fontSize:'1rem'}}>
            <p className="text-white">Pricing</p>
            <p className="text-white">Blog </p>
            <p className="text-white">Creator report 2022</p>
            <p className="text-white">Carousel Maker</p>
          </div>
        </div>
      </div>
      <div className="flex md:text-start flex-col-reverse md:flex-row px-4 md:px-12 w-[100vw]">
        <div className="md:w-[70%] py-8  md:py-0 text-white" style={{lineHeight:'2rem'}}>
            <p>548 Market St PMB 30073, San Francisco</p>
            <p>©2024 Topmate</p>
        </div>
        <div className="flex items-center justify-around md:justify-start text-white md:w-[30%] text-4xl">
            <span className="md:mr-16"><FontAwesomeIcon className="hover:bg-white rounded-xl hover:text-[#141414] transition duration-500 ease-in-out" icon={faInstagram} /></span>
            <span className="md:mr-16"><FontAwesomeIcon className="hover:bg-white rounded-lg hover:text-[#141414] transition duration-500 ease-in-out"icon={faLinkedin} /></span>
            <span className="md:mr-16"><FontAwesomeIcon className="hover:bg-white rounded-full hover:text-[#141414] transition duration-500 ease-in-out" icon={faTwitter} /></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
