import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="relative text-white">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black w-[100%] overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                         250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                         3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[600px] fill-black"
          ></path>
        </svg>

        {/* Main Footer Content Grid */}

        <div className="grid lg:grid-cols-4 gap-12 sm:grid-cols-1 px-8 py-12 md:px-20">
          {/* Company Info / About Section */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Tas'heel Logo"
              className="w-36 rounded-lg"
              width={1000}
              height={1000}
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              To transform life and business in Oman by making every interaction
              simple, every process predictable, and every outcome successful.
              Empowering clients with innovative solutions and personalized
              support.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-50 pb-4 uppercase border-b border-gray-700 mb-6">
              Explore
            </h3>
            <ul>
              <li className="my-3">
                <Link
                  href="/"
                  className="hover:text-green-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/about"
                  className="hover:text-green-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/contact"
                  className="hover:text-green-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/faq"
                  className="hover:text-green-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-50 pb-4 uppercase border-b border-gray-700 mb-6">
              Our Services
            </h3>
            <ul>
              <li className="my-3">
                <Link
                  href="/services/obtaining-an-emirates-id"
                  className="hover:text-green-300 transition-colors"
                >
                  Obtain Emirates ID
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/services/enewing-an-emirates-id"
                  className="hover:text-green-300 transition-colors"
                >
                  Renew Emirates ID
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/services/opening-companies-in-oman"
                  className="hover:text-green-300 transition-colors"
                >
                  Setup Omani Company
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/services/web-app-development"
                  className="hover:text-green-300 transition-colors"
                >
                  Web App Development
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/services/mvp-development-business"
                  className="hover:text-green-300 transition-colors"
                >
                  Business MVP Development
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-[20px] font-semibold text-gray-50 pb-4 uppercase border-b border-gray-700 mb-6">
              Get In Touch
            </h3>
            {/* Email */}
            <Link
              href="mailto:youremail.gmail.com"
              className="text-gray-300 text-sm flex items-start gap-3 my-4 hover:text-white transition-colors"
            >
              <Mail size={18} className="text-green-400 mt-1 flex-shrink-0" />{" "}
              <div>
                <span className="font-semibold block">Email:</span>
                <span>youremail.gmail.com</span>
              </div>
            </Link>

            {/* Phone Numbers */}
            <div className="text-gray-300 text-sm flex items-start gap-3 my-4">
              <Phone size={18} className="text-red-400 mt-1 flex-shrink-0" />{" "}
              <div>
                <span className="font-semibold block">Phone:</span>
                <Link
                  href="tel:+96899726225"
                  className="hover:text-white transition-colors block"
                >
                  +96 899 726 225
                </Link>
                <Link
                  href="tel:+96877386169"
                  className="hover:text-white transition-colors block"
                >
                  +96 877 386 169
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="text-gray-300 text-sm flex items-start gap-3 my-4">
              <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />{" "}
              <div>
                <span className="font-semibold block">Address:</span>
                <span>Oman-Al Buraimi</span>
                <br />
                <span>Tas'heel Document Printing and Copying No. 27</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-10 mx-auto max-w-[90%] pb-6 md:pb-8">
          {/* Adjusted padding */}
          <div className="flex flex-col justify-between pt-8 pb-6 mt-12 border-t sm:flex-row gap-y-4 border-white/10">
            {/* Copyright */}
            <div>
              <p className="text-sm leading-5 text-gray-400">
                © {Year} TAS-HEEL CO. All rights reserved.
              </p>
              <p className="mt-2 text-xs leading-5 text-gray-400">
                Built with love by
                <a
                  href="https://www.manzoorify.com"
                  target="_blank"
                  className="text-gray-300 hover:underline"
                  rel="noreferrer"
                >
                  Manzoor Ahmad Wayar
                </a>
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6 text-xl">
              <a
                className="hover:text-green-300 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://www.facebook.com/profile.php?id=61576596532114"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="hover:text-blue-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://www.linkedin.com/company/your-company-page"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="hover:text-pink-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://www.instagram.com/tasheelalburaimi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
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
