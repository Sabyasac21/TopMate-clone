import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Info() {
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
    <div className="bg-[#fefce4]">
      <div className="md:flex py-10 md:py-20">
        <div className="md:w-1/2 ">
          <h1 className="font-bold text-4xl md:text-6xl px-4 md:px-8 py-8 text-left " style={{lineHeight:'1.2'}}>Frequently asked questions</h1>
          <p className="text-lg text-left px-4 md:px-8">Can't find the answer you are looking for?</p>
          <p className="text-xl  font-bold text-left px-4 md:px-8 py-2 text-green-700">Reach out to us</p>
        </div>
        <div className="md:w-1/2 px-4 py-4 md:px-12">
          <div className="w-full py-6  border-b ">
            <div
              className="flex relative  p-4 "
              onClick={() => handleDivClick(1)}
            >
              <h3
                className=" font-bold  text-xl text-left"
                style={{ lineHeight: "" }}
              >
                What is topmate?
              </h3>
              <div className="absolute right-0">
                <div className="text-2xl font-bold">
                  <FontAwesomeIcon
                    className={`${div1Visible ? "hidden" : "visible"}`}
                    icon={faChevronDown}
                  />
                </div>
                <div className="text-2xl font-bold ">
                  <FontAwesomeIcon
                    className={`${div1Visible ? "visible" : "hidden"}`}
                    icon={faChevronUp}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                div1Visible ? "block" : "hidden"
              } text-left p-4 font-medium`}
              style={{ lineHeight: "1.7" }}
            >
              <p>
                Topmate is a tool that enables you to connect with your audience
                through 1:1 sessions - to share your knowledge and monetise your
                time better. Just create your personal link, add your services,
                availability and charges; and share your link with your
                followers. Your followers can now book a call to connect with
                you
              </p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div
              className="flex relative  p-4"
              onClick={() => handleDivClick(2)}
            >
              <h3
                className=" font-bold  text-xl text-left"
                style={{ lineHeight: "" }}
              >
                Can I conduct paid sessions?
              </h3>
              <div className="absolute right-0">
                <div className="text-2xl font-bold">
                  <FontAwesomeIcon
                    className={`${div2Visible ? "hidden" : "visible"}`}
                    icon={faChevronDown}
                  />
                </div>
                <div className="text-2xl font-bold ">
                  <FontAwesomeIcon
                    className={`${div2Visible ? "visible" : "hidden"}`}
                    icon={faChevronUp}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                div2Visible ? "block" : "hidden"
              } text-left p-4 font-medium`}
              style={{ lineHeight: "1.7" }}
            >
              <p>
                Absolutely, we enable you to conduct both free and paid sessions
                with your followers
              </p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div
              className="flex relative  p-4"
              onClick={() => handleDivClick(3)}
            >
              <h3
                className=" font-bold  text-xl text-left"
                style={{ lineHeight: "" }}
              >
                How much can I charge for my sessions?
              </h3>
              <div className="absolute right-0">
                <div className="text-2xl font-bold">
                  <FontAwesomeIcon
                    className={`${div3Visible ? "hidden" : "visible"}`}
                    icon={faChevronDown}
                  />
                </div>
                <div className="text-2xl font-bold ">
                  <FontAwesomeIcon
                    className={`${div3Visible ? "visible" : "hidden"}`}
                    icon={faChevronUp}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                div3Visible ? "block" : "hidden"
              } text-left p-4 font-medium`}
              style={{ lineHeight: "1.7" }}
            >
              <p>
                It really depends on how much value you think you're providing
                and how much are your followers willing to pay. For idea, our
                creators charge anywhere from $50 to $500 for a session
              </p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div
              className="flex relative  p-4"
              onClick={() => handleDivClick(4)}
            >
              <h3
                className=" font-bold  text-xl text-left"
                style={{ lineHeight: "" }}
              >
                How do the payments work?
              </h3>
              <div className="absolute right-0">
                <div className="text-2xl font-bold">
                  <FontAwesomeIcon
                    className={`${div4Visible ? "hidden" : "visible"}`}
                    icon={faChevronDown}
                  />
                </div>
                <div className="text-2xl font-bold ">
                  <FontAwesomeIcon
                    className={`${div4Visible ? "visible" : "hidden"}`}
                    icon={faChevronUp}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                div4Visible ? "block" : "hidden"
              } text-left p-4 font-medium`}
              style={{ lineHeight: "1.7" }}
            >
              <p>
                You can collect payments from anywhere in the world in your
                preferred currency. Payouts are Instant with the help of our
                integration with Stripe and Paypal
              </p>
            </div>
          </div>
          <div className="py-4 border-b">
            <div
              className="flex relative  p-4"
              onClick={() => handleDivClick(5)}
            >
              <h3
                className=" font-bold  text-xl text-left"
                style={{ lineHeight: "" }}
              >
                Wait, is Topmate really free?
              </h3>
              <div className="absolute right-0">
                <div className="text-2xl font-bold">
                  <FontAwesomeIcon
                    className={`${div5Visible ? "hidden" : "visible"}`}
                    icon={faChevronDown}
                  />
                </div>
                <div className="text-2xl font-bold ">
                  <FontAwesomeIcon
                    className={`${div5Visible ? "visible" : "hidden"}`}
                    icon={faChevronUp}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                div5Visible ? "block" : "hidden"
              } text-left p-4 font-medium`}
              style={{ lineHeight: "1.7" }}
            >
              <p>
                Yes! We're free to use and charge a very tiny commission on your
                earnings (7%). So that we grow only when you grow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
