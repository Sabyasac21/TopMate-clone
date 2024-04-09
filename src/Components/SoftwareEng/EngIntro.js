import React from "react";

function EngIntro() {
  return (
    <div className="p-8 bg-white">
      <div className="min-h-[20vh] ">
        <h1 className="font-bold text-[54px]" style={{ lineHeight: "1.3" }}>
          Why should Software Engineers use Topmate?
        </h1>
        <div className="flex justify-around">
          <div className="mt-20 px-12">
            <div className="h-[20%] flex justify-center mb-12">
              <img
                className="h-full"
                src="https://topmate.io/_next/image?url=%2Fimages%2Fcategory-page%2Fimg-category-why-1.svg&w=256&q=75"
              />
            </div>
            <h3 className="font-bold text-2xl my-8">Begin your side hustle</h3>
            <p className="font-medium" style={{ lineHeight: "1.9" }}>
              Always had the kick to start something of your own? Start with
              monetising your time with Topmate!
            </p>
          </div>
          <div className="mt-20 px-12">
            <div className="h-[20%] flex justify-center mb-12">
              <img
                className="h-full"
                src="https://topmate.io/_next/image?url=%2Fimages%2Fcategory-page%2Fimg-category-why-2.svg&w=256&q=75"
              />
            </div>
            <h3 className="font-bold text-2xl my-8">
              Connect with your followers
            </h3>
            <p className="font-medium">
              1:1 | Group calls | webinar | Queries | Seamless Packages. Get
              your hands on everything at one place
            </p>
          </div>
          <div className="mt-20 px-12">
            <div className="h-[20%] flex justify-center mb-12">
              <img
                className="h-full"
                src="https://topmate.io/_next/image?url=%2Fimages%2Fcategory-page%2Fimg-category-why-3.svg&w=256&q=75"
              />
            </div>
            <h3 className="font-bold text-2xl my-8">Up-skill your community</h3>
            <p className="font-medium">
              Build and connect with folks from your ecosystem, exchange, share
              and monetise your community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EngIntro;
