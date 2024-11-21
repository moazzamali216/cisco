import deploys from "../assets/images/deploys.avif"
const Deploys = () => {
  
    return (
<>
<div className=" container mt-16 mx-auto ">
<div className="w-full flex gap-y-8 md:flex-row flex-col-reverse ">
 <div className="h-full flex flex-col justify-center pl-6 sm:pl-12 xl:pl-24 pr-4 sm:pr-8 xl:pr-16 w-full md:w-1/2">
 <p className="mt-3 text-[#3C3C3C] text-lg work-sans">Future-proof your business with the Meraki Marketplace.</p>
 <h1 style={{lineHeight:"50px"}} className=" text-[40px] lg:text-[50px]  work-sans font-medium lea">Develop and deploy apps built on top of the Meraki platform.</h1>
 <p className="mt-3 text-[#3C3C3C] text-lg work-sans">Grow your business by engaging with the Meraki Marketplace, an extensive library of apps that delivers customized experiences. Uncover new opportunities by industry product integration, experience, region, and more.</p>

 <div>
    <button className="text-white bg-blue-600 px-6  mt-5 inter text-base sm:text-lg py-3 rounded-full font-medium tracking-wide">
        VISIT THE MARKET PLACE
    </button>
 </div>
 </div>
 <div className="md:w-1/2  flex items-center   justify-center ">
    <img className="p-4 w-full bg-white rounded-xl lg:px-10 xl:px-24" src={deploys} alt="" />
 </div>
</div>
</div>

</>

)}
export default Deploys;