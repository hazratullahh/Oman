import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className="relative  text-white">
            <div className="absolute top-0 left-0  bg-gradient-to-b from-gray-900 via-gray-950 to-black w-[100%] overflow-hidden">
                <svg data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-black"></path>
                </svg>
                <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl text-gray-50">Footer</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores
                            vel ipsa reiciendis corporis similique dolor earum aut itaque.
                        </p>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-gray-50 py-2 uppercase">
                            Creativity
                        </li>
                        <li className="my-4 list-none">Website Guidlines & Ideas</li>
                        <li className="my-4 list-none">Tips & Tricks</li>
                        <li className="my-4 list-none">photography</li>
                    </div>

                    <div>
                        <li className="text-[22px] list-none font-semibold text-gray-50 py-2 uppercase">
                            Creativity</li>
                        <li className="my-4 list-none">Guidlines & Ideas</li>
                        <li className="my-4 list-none">Tips & Tricks</li>
                        <li className="my-4 list-none">photography</li>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-gray-50 py-2 uppercase">Contact</h2>
                        <p className="text-[16px] my-4">Email: youremail.gmail.com</p>
                        <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
                      
                    </div>
                </div>

                <div className="mt-10 mx-auto max-w-[90%]">
                    <div className="flex flex-col justify-between pt-8 pb-6 mt-12 border-t sm:flex-row gap-y-4 border-white/10 sm:mt-16 lg:mt-20 __web-inspector-hide-shortcut__">
                        <div><p className="text-sm leading-5 text-gray-400">© 2025 Maznoor, Inc. All rights reserved.</p>
                            <p className="mt-2 text-xs leading-5 text-gray-400 sr-only">Built with love by <a href="https://www.manzoorify.com" target="_blank" className="text-gray-300 hover:underline" rel="noreferrer">Manzoor Ahmad Wayar</a>
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                className="text-white hover:text-gray-50 transform hover:scale-150 
                            transition-all duration-150 ease-in-out" href="">
                                <FaGithub />
                            </a>
                            <a
                                className="text-white hover:text-gray-50 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="text-white hover:text-gray-50 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white hover:text-gray-50 transform hover:scale-150
                             transition-all duration-150 ease-in-out" href="">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;