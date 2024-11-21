import planet1 from "../assets/images/planet.webp"
import planet2 from "../assets/images/planet2.webp"
import React from "react";
const Tags = () => {
  
    return (
  <> 
  <div className=" w-full bg-blue-200 ">
<div className="container md:px-0 px-6 md:flex-row flex-col md:h-[500px] mx-auto py-5  w-full gap-6 flex">
    <div className="w-full   md:w-1/2 h-[660px] sm:h-[500px] md:h-auto relative">
    <img className="w-[400px] absolute  sm:right-10 md:right-0 bottom-0 p-2 bg-white rounded-xl drop-shadow-lg"  src={planet1} alt="" />
    <img className="w-[300px] right-[50%] absolute  sm:right-[65%] translate-x-[50%] md:translate-x-0 md:right-[20%] lg:right-[35%] top-0 p-2 bg-white rounded-xl drop-shadow-lg"  src={planet2} alt="" />

    </div>
    <div className=" w-full  md:py-0 py-10  sm:px-0 px-6 md:w-1/2 flex flex-col justify-center sm:items-start  ">
    <h2 className="leading-0 work-sans text-start leading-[50px] sm:leading-[57px] font-normal text-[#212121]  text-[54px] sm:text-6xl">Proactively deliver <br /> exceptional <br /> experiences. </h2>
    <p className="inter font-light lg:w-[470px] mt-6">Transform the way you assure great end-user experiences and achieve digital resilience across any network.</p>
    <button className="font-semibold lg:text-lg text-base text-white w-fit tracking-wider px-4 py-4 rounded-full bg-blue-600  mt-8">LEARN ABOUT DXA</button>
    </div>
</div>
  </div>
  </>)
    }
    export default Tags;