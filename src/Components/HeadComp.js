import React from "react";
import "../Styles/headComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function HeadComp() {
  return (
    // <div className="sticky z-50 h-20">
    <nav
      className="nav-cont h-20 flex justify-end"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#F8F7F2",
      }}
    >
      <div className="nav-box w-full flex justify-between">
        <div className="nav-items flex justify-around">
          <div className="w-30 flex items-center mx-4">
            <img
              className="w-full"
              src="https://topmate.io/_next/image?url=%2Fimages%2Fcommon%2Ftopmate-light.svg&w=256&q=75"
            />
          </div>
          <div className="menu-item flex justify-center items-center hover:cursor-pointer hover:underline relative mx-4">
            ForCreators
            <p>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: ".5em" }}
              />
            </p>
          </div>
          <div className="flex w-30">
            <ul className="nav-list  flex justify-around items-center">
              <li>Pricing</li>
              <li>Earnings Calculator</li>
            </ul>
          </div>
        </div>
        <div className="flex w-2/6 justify-between items-center mr-4">
          <button className="search-btn bg-purple-700">
            <p>
              <FontAwesomeIcon icon={faSearch} />
            </p>
            <span>AI Search</span>
          </button>
          <button className="login-btn">Login</button>
          <button className="sign-btn">Sign Up</button>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default HeadComp;
