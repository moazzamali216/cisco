import React from "react";
import womenimg from "../assets/images/newlady.webp"


const Hero = () => {
  
  return (
<>
<div className=" relative overflow-hidden ">
<div className=" overflow-hidden   md:flex-row flex-col container mx-auto  w-full flex md:pt-0 pt-[120px] md:h-[800px]">
  <div className=" flex-col md:h-auto  md:px-0 px-10 sticky z-[10] lg:px-[60px] xl:px-[120px] w-full md:w-1/2 flex justify-center items-start">
  <h1 className="work-sans  text-5xl sm:text-7xl font-medium  text-[#3C3C3C]">It all start <br className="md:hidden block"/> with a  <br className="md:hidden block"/> platform.</h1>
  <p className="text-[#3C3C3C] text-lg sm:text-xl mt-6 font-light inter">Imagine what’s possible if you converge IT, IoT, and physical environments. Cisco Meraki makes it real.</p>
  <button  className=" border-[rgba(40,64,255,1)] border mt-7 tracking-wider font-semibold text-[rgba(40,64,255,1)] px-5 py-3 rounded-full">LEARN MORE</button>
  </div>
  <div className="  sticky z-[10] flex md:h-auto h-[600px] items-center justify-center w-full md:w-1/2 ">
  <img src={womenimg} className="" alt="" />
  </div>
  <div  className="bg-blue-300 sm:block hidden right-[-400px] bottom-[-370px] rotate-45 md:bottom-[-340px] md:right-[-440px] xl:right-[-850px] lg:bottom-[-250px] xl:bottom-[-400px]  md:-rotate-45 absolute w-full h-[700px] xl:h-[1000px] "></div>
</div> 
</div>
</>
  );
};

export default Hero;
