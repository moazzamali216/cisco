import React, { useEffect, useRef, useState } from 'react';
import navLogo from "../assets/images/svg/nav-logo.svg";



const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle the mobile navigation open/close
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  // Function to handle scroll event and toggle "fixed" class
// 

const Section = useRef(null);

// Handle scroll event
const SectionScroll = () => {
  if (Section.current) {
    // Check if the page has been scrolled more than 10px
    if (window.scrollY > 25) {
      // Add "fixed" class to the header element
      Section.current.classList.add("fixed");
      Section.current.classList.add("top-[-45px]");
    } else {
      // Remove "fixed" class when scrolled back above 10px
      Section.current.classList.remove("fixed");
      Section.current.classList.add("top-[-45px]");
    }
  }
};

useEffect(() => {
  // Attach the scroll event listener when the component mounts
  window.addEventListener("scroll", SectionScroll);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener("scroll", SectionScroll);
  };
}, []); 
  return (
<div ref={Section} style={{transition:"all ease 1s"}} className=" w-full     bg-white drop-shadow-lg ">

  <div  className=" md:flex hidden px-[25px] lg:px-[70px] xl:px-[135px]    container bg-white mx-auto py-6 flex-col  w-full">
   <div  className="w-full  gap-6  flex justify-end" >
    <div>
      <div className=" inter  font-light text-sm gap-2 flex items-baseline"> <i class="fa-solid text-[rgba(40,64,255,1)] fa-globe"></i><h4 className="text-gray-600">United States (English)</h4><i class="fa-solid text-[rgba(40,64,255,1)] fa-caret-down"></i></div>
    </div>
    <div className="flex items-center gap-4">
      <a className="font-light inter text-gray-600 text-sm" href="">Contact Us</a>
      <a className="font-light inter text-gray-600 text-sm" href="">Log In</a>
    </div>
   </div>
   <div className="  w-full  bg-white  top-0  flex mt-6">
    <div className="flex items-center">
      <h1 className=" text-xl lg:text-3xl w-[100px] lg:w-[150px]">Logo Co.</h1>
    </div>
    <div className="w-full px-1 lg:px-4 xl:px-10 justify-between flex items-center ">
      <a href="#" className="text-gray-700 font flex tracking-wide items-center gap-2 inter">Experiences <i class="fa-solid  text-xs fa-chevron-down"></i></a>
      <a href="#" className="text-gray-700 flex tracking-wide items-center gap-2 inter">Technologies <i class="fa-solid  text-xs fa-chevron-down"></i></a>
      <a href="#" className="text-gray-700 flex tracking-wide items-center gap-2 inter">TouchPoints <i class="fa-solid  text-xs fa-chevron-down"></i></a>
      <a href="#" className="text-gray-700 flex tracking-wide items-center gap-2 inter">Resources <i class="fa-solid  text-xs fa-chevron-down"></i></a>
    </div>
    <div className="flex w-[200px] justify-between  items-center">
      <div className="flex items-center">
      <i class="fa-regular text-lg fa-magnifying-glass"></i>
      </div>
      <div  className=""><button style={{background: "linear-gradient(90deg, rgba(40,64,255,1) 0%, rgba(0,210,255,1) 100%)"}} className="bg-[] text-white inter text-xs px-4 py-3 font-semibold rounded-3xl">GET A DEMO</button></div>
    </div>
   </div>
  </div>




  {/* Mobile Nav Full */}
  <div className="w-full flex md:hidden items-center justify-between tex  py-6 px-4 ">
  <div className="flex items-center ">
      <h1 className=" text-xl lg:text-3xl w-[100px] lg:w-[150px]">Logo Co.</h1>
    </div>
    <div>
    <button onClick={toggleMobileNav} className="text-gray-600">
          <i className={`fa-solid ${isMobileNavOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
        </button>
    </div>
  </div>


   {/* Mobile Navigation Drawer (Slides in from the Right) */}
<div
  className={`fixed top-0 right-0 w-full md:hidden h-screen bg-white transform transition-transform duration-300 ease-in-out ${
    isMobileNavOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex flex-col h-screen justify-center gap-10 p-6 w-full">
    {/* Close Button */}
    <button onClick={toggleMobileNav} className="text-gray-600 mb-6">
      <i className="fa-solid fa-xmark  absolute top-10 right-10 text-2xl"></i>
    </button>

    {/* Mobile Menu Content */}
    <div className="flex flex-col justify-center gap-6 mb-6">
      {/* Upper Section in Mobile */}
      <div className="flex items-baseline gap-2 justify-center inter font-light text-sm">
        <i className="fa-solid text-[rgba(40,64,255,1)] fa-globe"></i>
        <h4 className="text-gray-600">United States (English)</h4>
        <i className="fa-solid text-[rgba(40,64,255,1)] fa-caret-down"></i>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a href="#" className="font-light inter text-gray-600 text-sm">Contact Us</a>
        <a href="#" className="font-light inter text-gray-600 text-sm">Log In</a>
      </div>
    </div>

    {/* Main Navigation Links for Mobile */}
    <div className="flex w-full justify-center items-center flex-col gap-6 mb-6">
      <a href="#" className="text-gray-700">Experiences</a>
      <a href="#" className="text-gray-700">Technologies</a>
      <a href="#" className="text-gray-700">TouchPoints</a>
      <a href="#" className="text-gray-700">Resources</a>
    </div>

    {/* "GET A DEMO" Button at the Bottom */}
    <div className="mt-0 flex justify-center mx-10">
      <button
        style={{ background: "linear-gradient(90deg, rgba(40,64,255,1) 0%, rgba(0,210,255,1) 100%)" }}
        className="bottom-24 text-white w-[200px] inter text-xs px-4 py-3 font-semibold rounded-lg"
      >
        GET A DEMO
      </button>
    </div>
  </div>
</div>


</div>
  );
};

export default Header;
