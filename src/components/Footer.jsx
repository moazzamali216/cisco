const Footer = () => {
    return(<>
    <footer>
        <div className="container px-4 py-10 mx-auto">
            <div className="w-full  h-full">
                <div className="flex sm:pl-0    md:flex-row gap-y-14 flex-col  h-full">
                    <div className="w-full md:w-[20%] lg:w-[30%]  flex justify-center md:justify-start">
                        <h1 className="text-3xl">LOGO</h1>
                    </div>
                    <div className=" w-full pl-6 sm:pl-0  sm:gap-x-2 gap-x-4 md:w-[80%] lg:w-[70%] h-full gap-y-10 grid-cols-2 grid md:grid-cols-4 ">
                        <div className="h-full flex flex-col">
                            <h1 className="text-gray-600 text-[14px] sm:text-sm inter pb-6 tracking-wider">COMPANY</h1>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider">About Meraki</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Careers</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Privacy Statement</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Trust</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">GDPR</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Terms of use</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Cookies</a>
                        </div>
                        <div className="h-full flex flex-col">
                            <h1 className="text-gray-600 text-[14px] sm:text-sm inter pb-6 tracking-wider">PARTNERS</h1>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider">Partner Portal</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Login</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Become a Partner</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Managed service</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">providers</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Service provider</a>
                        </div>
                        <div className="h-full flex flex-col">
                            <h1 className="text-gray-600 text-[14px] sm:text-sm inter pb-6 tracking-wider">GET STARTED</h1>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider">Contact us</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Demo</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Start your trial</a>
                        </div>
                        <div className="h-full flex flex-col">
                            <h1 className="text-gray-600 text-[14px] sm:text-sm inter pb-6 tracking-wider">RESOURCES</h1>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider">Webinars</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Careers</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Documentation</a>
                            <a href="" className="text-gray-600 text-[14px] sm:text-[16px]  inter tracking-wider mt-1">Community</a>
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
                        <h1>© 2024 Cisco Systems, Inc.</h1>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>)}
export default Footer;