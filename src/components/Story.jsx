import storyimg1 from "../assets/images/story-img-1.webp"
import storyimg2 from "../assets/images/story-img-2.webp"

const Story = () => {


    return (
        <>
        <div className="w-full py-16">
            <div className="container px-4 mx-auto ">
          <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl work-sans text-center font-medium text-[#3C3C3C]">The journey to success begins in the cloud.</h1>
             <p className="text-center text-gray-700 mt-5 inter font-light">Learn how our customers rely on the power and ease of the Meraki cloud-first platform to get there faster.</p>
             <a href="" className="text-[maroon] text-center mx-auto mt-4 font-medium">SEE ALL STORIES <i class="fa-solid rotate-180 fa-angle-left"></i></a>
          </div>
           <div className="grid gap-y-16 gap-10 xl:px-24  mt-8 grid-cols-1 md:grid-cols-2">
           <div>
            <img src={storyimg1} alt="" />
            <h1 className="work-sans mt-10 text-2xl">CLARKS CASE STUDY</h1>
            <p className="work-sans text-4xl font-[600] text-[#3C3C3C] mt-4">Simplifying IT operations and reducing costs</p>
            <p className="font-light inter mt-6">Since adopting Meraki solutions, Clarks has realized significant efficiencies and cost savings across several key business areas.</p>
            <button className="text-white bg-blue-600 px-6  inter mt-10 text-base sm:text-lg py-3 rounded-full font-medium tracking-wide">
READ CASE STUDY
    </button>
           </div>
           <div>
            <img src={storyimg2} alt="" />
            <h1 className="work-sans mt-10 text-2xl">VISIONWORKS CASE STUDY</h1>
            <p className="work-sans text-4xl font-[600] text-[#3C3C3C] mt-4">Improving the customer and patient experience</p>
            <p className="font-light inter mt-6">Customers now enjoy a superior in-store Wi-Fi experience, and Meraki smart cameras are providing enhanced security.</p>
            <button className="text-white bg-blue-600 px-6  inter mt-10 text-base sm:text-lg py-3 rounded-full font-medium tracking-wide">
READ CASE STUDY
    </button>
           </div>
           </div>
            </div>
        </div>
        </>
    )
}
export default Story;