const Footer = () => {
    return(<>
    <footer>
        <div className="container px-4 py-10 mx-auto">
            <div className="w-full  h-full">
                <div className="flex sm:pl-0    md:flex-row gap-y-14 flex-col  h-full">
                    <div className="w-full md:w-[20%] lg:w-[30%]  flex justify-center md:justify-start">
                        <h1 className="text-3xl">LOGO</h1>
                    </div>
                    <div className=" w-full pl-6 sm:pl-0  sm:gap-x-2 gap-x-4 md:w-[80%] lg:w-[70%] h-full gap-y-10 grid-cols-2 grid md:grid-cols-3 ">
                        <div className="h-full flex flex-col">
                            <h1 className="text-gray-600 text-[14px] sm:text-lg font-medium inter pb-6 tracking-wider">Quick Links</h1>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider">Home</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">About</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">First Responder Agency Solutions</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Technology Solutions</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Wireless Account Management</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Contact</a>
                        </div>
                        <div className="h-full flex flex-col">
                            <h1 className="text-gray-600 text-[14px] sm:text-lg font-medium inter pb-6 tracking-wider">Technology Solutions</h1>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider">Cellular Service for Business</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Fibre Internet for Business & Enterprise</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Cloud Solutions</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">CyberSecurity</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">AT&T</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Internet & WAN Networking</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Business Voice Solution</a>

                        </div>
                        <div className="h-full flex flex-col">
                            <h1 className="text-gray-600 text-[14px] sm:text-lg font-medium inter pb-6 tracking-wider">Contact Information</h1>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider">Cellular Service for Business</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Fibre Internet for Business & Enterprise</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">Cloud Solutions</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">info@springsairns.com</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">212-991-8442</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-3">90 Hausman St, Brooklyn NY 11222</a>



                        </div>
                    </div>
                </div>
                <div className="w-full  gap-y-4 flex sm:flex-row px-6 flex-col justify-between pt-5 border-t mt-20 border-gray-300">
                    <div className="flex gap-2.5 sm:gap-5 !text-xl ">
                    <i class="fa-brands text-gray-600 fa-facebook"></i>
                    <i class="fa-brands text-gray-600 fa-instagram"></i>
                    <i class="fa-brands text-gray-600 fa-linkedin"></i>
                    <i class="fa-brands text-gray-600 fa-youtube"></i>
                    <i class="fa-brands text-gray-600 fa-whatsapp"></i>
                    </div>
                    <div className="w-fit  text-gray-600  inter font-light tracking-wide text-sm">
                        <h1>© 2024 SpringsAirNS, Inc.</h1>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>)}
export default Footer;