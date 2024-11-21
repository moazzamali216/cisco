import React from "react";

const FeedBack = () => {
  return (
    <>
      <div className="w-full  py-10"
        style={{background: "linear-gradient(90deg, rgba(40,64,255,1) 0%, rgba(0,210,255,1) 100%)",}}
      >
  <div  className=" flex container items-center  px-4 justify-center h-[440px] sm:h-[370px] mx-auto ">
  <div className=" flex-col items-center max-w-[670px] w-full flex justify-start">
            <h1 className="work-sans text-3xl font-semibold text-gray-100">LOGO</h1>
            <h1 className="text-3xl  font-medium text-gray-100 mt-4 text-center work-sans">“The Meraki platform makes our networking better, more manageable, simpler, and more structured.”</h1>
            <h4 className="mt-6 text-gray-100 font-medium">-BRIAN FISHER</h4>
            <h4 className="text-gray-100 text-center inter font-medium">VP of Technology Services, CAMPUS USA Credit Union</h4>
            <button className="text-white border border-white px-6  inter mt-10 text-base sm:text-lg py-3 rounded-full font-medium tracking-wide">
READ CUSTOMER STORY
    </button>
        </div>
  </div>
      </div>
    </>
  );
};

export default FeedBack;
