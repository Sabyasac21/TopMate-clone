import React from "react";

function Description() {
  return (
    <div className="bg-white py-24">
      <div className="mx-8">
        <div className="mb-20">
          <h1 className="font-bold text-5xl">What all you can do?</h1>
        </div>
        <div className="flex gap-6">
          <div className="w-1/3 border rounded-3xl">
            <img
              className="w-full"
              src="https://topmate.io/_next/image?url=%2Fimages%2Fcategory-page%2Fimg-category-card-bg-1.svg&w=384&q=75"
            />
            <div className=" px-4 text-left py-8">
              <h3 className="font-bold text-2xl py-2 pb-4 text-left ">
                1:1 sessions with Software Engineering aspirants
              </h3>
              <p className="text-lg py-4" style={{ lineHeight: "1.3" }}>
                Take 1:1 mock interviews, guide and help your followers get a
                kick-start in their career
              </p>
              <h3 className="font-bold text-xl">Conduct 1:1s</h3>
            </div>
          </div>
          <div className="w-1/3 border rounded-3xl">
            <img
              className="w-full"
              src="https://topmate.io/_next/image?url=%2Fimages%2Fcategory-page%2Fimg-category-card-bg-2.svg&w=384&q=75"
            />
            <div className=" px-4 text-left py-8">
              <h3 className="font-bold text-2xl py-4 text-left ">
              Conduct a coding workshop
              </h3>
              <p className="text-lg py-4" style={{ lineHeight: "1.3" }}>
              Connect personally with your followers, help them master the skill
              </p>
              <h3 className="font-bold text-xl">Host a webinar</h3>
            </div>
          </div>
          <div className="w-1/3 border rounded-3xl">
            <img
              className="w-full"
              src="https://topmate.io/_next/image?url=%2Fimages%2Fcategory-page%2Fimg-category-card-bg-3.svg&w=384&q=75"
            />
            <div className=" px-4 text-left py-8">
              <h3 className="font-bold text-2xl py-4 text-left ">
              Answer tech related queries
              </h3>
              <p className="text-lg py-4" style={{ lineHeight: "1.3" }}>
              Monetise your incoming queries and provide priority help to your followers
              </p>
              <h3 className="font-bold text-xl">Get Started</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
