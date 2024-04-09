import React, { useState } from "react";
import "../Styles/RevealAnimation.css";

function RevealAnimation() {
  const [change, setChange] = useState(false)
  const handleClick = ()=>{
    setChange(!change)
  }
  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <div id="check" className="bg-red-200 py-4 w-[200px]" onClick={handleClick}>
        <div className="w-full bg-green-200">Below is the presentation</div>
        <div className={`w-full bg-blue-300 h-${change?'[20rem]':'0'} transition duration-300 ease-in-out`}>
          Lorem ipsum is ny brother Lorem ipsum is ny brother Lorem ipsum is ny
          brother Lorem ipsum is ny brother Lorem ipsum is ny brother Lorem
          ipsum is ny brother
        </div>
      </div>
    </div>
  );
}

export default RevealAnimation;
