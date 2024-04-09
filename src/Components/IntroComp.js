import React from "react";
import "../Styles/introComp.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function IntroComp() {
  const handleClickScroll = () => {
    const element = document.getElementById("peoplee");
    if (element) {
      console.log(element);
      //  Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="main-cont  flex md:flex-row flex-col h-auto justify-center items-center">
        <div
          className="display-intro w-full md:w-1/2 flex justify-center items-center flex-row"
          style={{ textAlign: "start" }}
        >
          <div className="relative w-4/5">
            <div className="h-auto w-4/5 rounded-3xl bg-red-200 my-8 p-2 flex">
              <p onClick={handleClickScroll} className="text-sm mr-4">
                See incredible <b>topmate launch stories</b>
              </p>
              <span className="ml-4">
                <FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
              </span>
            </div>
            <div className=" rounded-full   visible md:hidden bg-blue-300">
              <img
                className="w-full"
                src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-landing-hero-mobile-2.9b28c0de.svg&w=640&q=75"
              />
            </div>
            <div className="animate relative w-auto my-8">
              <h1 className="font-bold text-6xl md:text-8xl my-8">
                <span className="font-normal">Start your</span>
                <br /> side hustle today
              </h1>
              <p className="font-medium text-xl ">
                Turn your passion into a thriving business.Help your audience
                get ahead in life.
              </p>
            </div>
            <div
              id="btn-anime"
              className="reveal relative flex flex-col  lg:flex-row "
            >
              <button className="w-full lg:w-1/2 mb-4 lg:mr-4 lg:mb-0 rounded-lg p-4  text-white bg-black font-bold ">
                Book a free session{" "}
              </button>
              <button className="relative w-full font-bold lg:w-1/2 rounded-lg  p-4 bg-red-300 text-white">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="absolute left-12 top-1/2 lg:left-4 transform -translate-y-1/2"
                />
                <span className="">Watch the film </span>
              </button>
            </div>
            <div className="h-16 flex items-center w-full">
              <div class="review-section relative h-12 md:w-3/5 m-0">
                <span class="absolute h-full w-12 rounded-full ">
                  <img src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-1.b846f2ab.png&w=64&q=75" />
                </span>
                <span
                  class="absolute h-full w-12 rounded-full bg-blue-500"
                  style={{ left: "12%", border: "1px solid blue" }}
                >
                  <img src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-2.b46f03f4.png&w=64&q=75" />
                </span>
                <span
                  class="absolute h-full w-12 rounded-full bg-red-500 "
                  style={{ left: "24%" }}
                >
                  <img src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-3.634a415a.png&w=64&q=75" />
                </span>
                <span
                  class="absolute h-full w-12 rounded-full bg-yellow-500 "
                  style={{ left: "36%" }}
                >
                  <img src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-4.0824352e.png&w=64&q=75" />
                </span>
                <span
                  class="absolute h-full w-12 rounded-full bg-black"
                  style={{ left: "48%" }}
                >
                  <img src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser-1.b846f2ab.png&w=64&q=75" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="display-img flex justify-center items-center">
          <div className="cont w-[23rem] h-[23rem] relative transform: -translate-y-0 hidden md:block">
            <div className=" pic h-full w-full bg-green-200 border-green-800">
              <img
                className=" w-full h-[120%] absolute bottom-0 hidden md:block "
                src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-landing-hero-3.c88414d3.webp&w=640&q=75"
                alt="Cover-img"
              />
            </div>
            <div className=" pic h-full w-full bg-pink-200 border-green-800">
              <img
                className=" w-full h-[120%] absolute bottom-0 hidden md:block "
                src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-landing-hero-4.8d27c239.webp&w=640&q=75"
                alt="Cover-img"
              />
            </div>
            <div className=" pic h-full w-full bg-purple-200 border-green-800">
              <img
                className=" w-full h-[120%] absolute bottom-0 hidden md:block "
                src="https://topmate.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-landing-hero-2.1d4f0b54.webp&w=640&q=75"
                alt="Cover-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="testimonials-cont py-12"
        style={{ backgroundColor: "#eccc7b", marginTop: "0" }}
      >
        <div className="heading">
          <h1 className="text-4xl py-4">
            <span style={{ fontWeight: "400" }}>For people</span> making impact
          </h1>
        </div>
        <div className="categories py-4">
          <ul className="category-list">
            <li className="bg-[hsla(0,0%,100%,.8)]">Data</li>
            <li>Product</li>
            <li>Mental Health</li>
            <li>Study Abroad</li>
            <li>Tech</li>
            <li>Career</li>
            <li>Creators</li>
          </ul>
        </div>
        <div className="people" id="peoplee">
          <span>
            <img className="bg-img" src="http://i.imgur.com/XsJg1Ey.jpg" />
            <p className="dp">
              <img
                className="dp-img"
                src="https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2F4hEHanHW7mYhzweRzW81Qg.jpg&w=128&q=75"
              />
            </p>
            <div className="profile-intro">
              <h1>Luna</h1>
              <p>Helps build career in IT</p>
            </div>
          </span>
          <span>
            <img className="bg-img" src="http://i.imgur.com/XsJg1Ey.jpg" />
            <p className="dp">
              <img
                className="dp-img"
                src="https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FkuG8DNEzjHzZTAih39LDDE.png&w=128&q=75"
              />
            </p>
            <div className="profile-intro">
              <h1>Luna</h1>
              <p>Helps build career in IT</p>
            </div>
          </span>
          <span>
            <img className="bg-img" src="http://i.imgur.com/XsJg1Ey.jpg" />
            <p className="dp">
              <img
                className="dp-img"
                src="https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FuzsCBNS9zuGZzNv5K8N9za.png&w=128&q=75"
              />
            </p>
            <div className="profile-intro">
              <h1>Austrine</h1>
              <p>Helps build career selling courses</p>
            </div>
          </span>
          <span>
            <img className="bg-img" src="http://i.imgur.com/XsJg1Ey.jpg" />
            <p className="dp">
              <img
                className="dp-img"
                src="https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2F52ZSLsGtN2AqdetNuSZuAo.jpeg&w=128&q=75"
              />
            </p>
            <div className="profile-intro">
              <h1>Zingo</h1>
              <p>Helps improve sales</p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default IntroComp;
