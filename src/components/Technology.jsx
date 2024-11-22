import React from "react";
import tech from "../assets/images/tech.avif"
import att from "../assets/images/att.webp"
import net from "../assets/images/first_net.webp"
const Technology = () => {
    return (
        <>
            <div className="w-full mt-10 pb-10 sm:pb-20 bg-blue-300">
                <div className="container mx-auto">
                    <div className="w-full flex flex-col items-center">
                        <img className="w-full max-w-[500px] pt-2" src={tech} alt="" />
                        <h1 className="text-4xl sm:text-5xl mt-8 sm:mt-16 md:text-7xl work-sans text-center font-medium text-black">
                        Our Partners
                        </h1>
                         <div className="flex gap-5 mt-8">
                              <img className="w-[200px] bg-white rounded-lg shadow-2xl" src={att} alt="" />
                              <img className="w-[200px] bg-white rounded-lg shadow-2xl" src={net} alt="" />

                         </div>
                        <button className=" bg-white text-blue-600 px-6  mt-10 inter text-sm sm:text-base py-4 sm:py-2.5 rounded-full font-semibold tracking-wide">
                            START  NOW
                        </button>
                    </div>
                </div>
            </div>
        </>)
}
export default Technology;