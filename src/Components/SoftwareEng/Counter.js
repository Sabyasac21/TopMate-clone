import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Counter() {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="bg-[#f7f9fd]">
      <div className="flex justify-center items-center flex-col py-12">
        <div className="p-8 py-12 w-[60%]">
          <h1 className="font-bold text-6xl" style={{ lineHeight: "1.2" }}>
            Software Engineers on Topmate spreading awesomeness with
          </h1>
        </div>
        <ScrollTrigger
          onEnter={() => {
            setCounterState(true);
          }}
          onExit={() => {
            setCounterState(false);
          }}
        >
          <div className="flex justify-around min-w-[70vw] py-8">
            <div>
              <div>
                <span className="font-bold text-7xl">
                  {counterState && <CountUp start={0} end={4}/>}k
                </span>
                <p>Creators</p>
              </div>
            </div>
            <div>
              <div>
                <span className="font-bold text-7xl">
                  {counterState && <CountUp start={0} end={35}/>}k
                </span>
                <p>Sessions</p>
              </div>
            </div>
            <div>
              <div>
                <span className="font-bold text-7xl">
                  {counterState && <CountUp start={0} end={28} />}k
                </span>
                <p>Followers connected</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>

        <div className="w-[60%] py-16">
          <button className="font-bold text-xl border px-20 py-2 bg-black text-white rounded-lg hover:opacity-70  transition-transform ease-in">
            Join the club
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
