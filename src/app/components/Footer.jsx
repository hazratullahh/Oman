// src/app/components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

// Accept dictionary and currentLocale props
const Footer = ({ dictionary, currentLocale }) => {
  const Year = new Date().getFullYear();
  const isArabic = currentLocale === "ar"; // Determine if Arabic for RTL

  // Access the footer section of the dictionary
  const footerDict = dictionary.footer;

  return (
    <footer className={`relative text-white ${isArabic ? "rtl" : "ltr"}`}>
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
        <div
          className={`grid lg:grid-cols-4 gap-12 sm:grid-cols-1 px-8 py-12 md:px-20 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
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
              {footerDict.about_text} {/* Translated text */}
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-50 pb-4 uppercase border-b border-gray-700 mb-6">
              {footerDict.explore_heading} {/* Translated heading */}
            </h3>
            <ul>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.home_link} {/* Translated link text */}
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/about`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.about_us_link} {/* Translated link text */}
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/contact`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.contact_us_link} {/* Translated link text */}
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/faq`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.faq_link} {/* Translated link text */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-50 pb-4 uppercase border-b border-gray-700 mb-6">
              {footerDict.our_services_heading} {/* Translated heading */}
            </h3>
            <ul>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/services/obtaining-an-emirates-id`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.service_emirates_id_obtain}{" "}
                  {/* Translated service name */}
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/services/enewing-an-emirates-id`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.service_emirates_id_renew}{" "}
                  {/* Translated service name */}
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/services/opening-companies-in-oman`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.service_omani_company_setup}{" "}
                  {/* Translated service name */}
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/services/web-app-development`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.service_web_app_dev}{" "}
                  {/* Translated service name */}
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href={`/${currentLocale}/services/mvp-development-business`}
                  className="hover:text-green-300 transition-colors"
                >
                  {footerDict.service_mvp_dev} {/* Translated service name */}
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-[20px] font-semibold text-gray-50 pb-4 uppercase border-b border-gray-700 mb-6">
              {footerDict.get_in_touch_heading} {/* Translated heading */}
            </h3>
            {/* Email */}
            <Link
              href="mailto:youremail.gmail.com"
              className="text-gray-300 text-sm flex items-start gap-3 my-4 hover:text-white transition-colors"
            >
              <Mail size={18} className="text-green-400 mt-1 flex-shrink-0" />{" "}
              <div>
                <span className="font-semibold block">
                  {footerDict.email_label}
                </span>{" "}
                {/* Translated label */}
                <span>youremail.gmail.com</span>
              </div>
            </Link>

            {/* Phone Numbers */}
            <div className="text-gray-300 text-sm flex items-start gap-3 my-4">
              <Phone size={18} className="text-red-400 mt-1 flex-shrink-0" />{" "}
              <div>
                <span className="font-semibold block">
                  {footerDict.phone_label}
                </span>{" "}
                {/* Translated label */}
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
                <Link
                  href="tel:+971526540233"
                  className="hover:text-white transition-colors block"
                >
                  +971526540233
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="text-gray-300 text-sm flex items-start gap-3 my-4">
              <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />{" "}
              <div>
                <span className="font-semibold block">
                  {footerDict.address_label}
                </span>{" "}
                {/* Translated label */}
                <span>{footerDict.oman_address_line1}</span>{" "}
                {/* Translated address line */}
                <br />
                <span>{footerDict.oman_address_line2}</span>{" "}
                {/* Translated address line */}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div
          className={`mt-10 mx-auto max-w-[90%] pb-6 md:pb-8 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          <div className="flex flex-col justify-between pt-8 pb-6 mt-12 border-t sm:flex-row gap-y-4 border-white/10">
            {/* Copyright */}
            <div>
              <p className="text-sm leading-5 text-gray-400">
                {footerDict.copyright_text.replace("{year}", Year)}{" "}
                {/* Translated copyright */}
              </p>
              <p className="mt-2 text-xs leading-5 text-gray-400 sr-only">
                {/* Consider if "Built with love by" also needs translation */}
                Built with love by
                <Link
                  href="https://www.manzoorify.com"
                  target="_blank"
                  className="text-gray-300 hover:underline"
                  rel="noreferrer"
                >
                  Manzoor Ahmad Wayar
                </Link>
              </p>
            </div>
            {/* Social Media Icons - no text translation needed here */}
            <div
              className={`flex space-x-6 text-xl ${
                isArabic ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <Link
                className="hover:text-blue-500 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://www.facebook.com/profile.php?id=61576596532114"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                className="hover:text-blue-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://www.linkedin.com/company/your-company-page"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                className="hover:text-pink-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://www.instagram.com/tasheelalburaimi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="hover:text-green-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://wa.me/96899726225"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </Link>
              <Link
                className="hover:text-blue-400 transform hover:scale-125 transition-all duration-200 ease-in-out"
                href="https://t.me/+971526540233"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
