// src/components/WhatsappChat.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";

// A refined, centered WhatsApp icon for the main toggle button
const WhatsAppMainToggleIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* This path is often found in cleaner, more universally appealing WhatsApp icons */}
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.5.39 2.92.98 4.2L2 22l5.88-1.58c1.18.66 2.5 1.02 3.12 1.02 5.523 0 10-4.477 10-10S17.523 2 12 2zm3.5 14.5c-.17.06-.57.26-.77.34-.2.08-.38.08-.55-.08-.17-.26-.68-.83-.81-.98-.13-.15-.26-.13-.44-.04-.17.08-.43.27-.66.5-.22.22-.45.49-.68.56-.23.07-.46.04-.84-.13-.38-.17-.9-.35-1.5-.94-.59-.59-1-1.32-1.32-1.89-.31-.57-.03-.89.1-.11-.13-.15-.17-.26-.26-.35-.08-.09-.17-.2-.26-.3-.08-.08-.17-.16-.09-.32.08-.16.57-1.38.65-1.55.08-.17.04-.32-.01-.42-.05-.1-.38-.91-.52-1.21-.14-.3-.28-.26-.4-.26-.11 0-.25-.01-.4-.01s-.38.06-.58.26c-.2.2-.77.75-.77 1.82s.79 2.1 1.09 2.4c.3.3.94 1.45 2.27 2.07 1.33.62 2.57.85 3.32.75.75-.1.21-.69.44-.94.23-.25.43-.3.62-.22.19.08.38.25.43.34.05.09.35.17.6.17.25 0 .48-.09.68-.17.2-.08.43-.17.65-.25.22-.08.4-.17.58-.08.18.09.9.46 1.02.66.12.2.12.38.08.55-.04.17-.1.25-.19.34z" />
  </svg>
);

// A slightly simpler WhatsApp icon for internal use (inside the chat bubble)
const WhatsAppInternalIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2C6.58 2 2.14 6.47 2.14 12.02c0 1.76.46 3.45 1.32 4.95L2 22l4.83-1.29c1.47.78 3.16 1.22 4.93 1.22 5.46 0 9.89-4.47 9.89-10.02S17.5 2 12.04 2zm5.75 14.75c-.24.08-.85.43-.99.51-.14.08-.29.08-.43-.08-.14-.24-.51-.66-.63-.79-.12-.14-.24-.08-.43.08-.14.24-.36.43-.51.58-.14.16-.29.16-.54.08-.24-.08-1.09-.4-2.07-1.28-.79-.72-1.32-1.61-1.48-1.87-.14-.24-.03-.36.08-.47.11-.12.24-.29.36-.43.1-.14.14-.24.2-.36.07-.12.03-.24-.03-.36-.08-.14-.43-1.04-.58-1.4-.14-.36-.29-.3-.43-.36-.14-.08-.29-.08-.43-.08s-.36.08-.51.24c-.14.16-.54.51-.54 1.25s.55 1.45.63 1.55c.08.1.99 1.59 2.39 2.17.8.36 1.45.55 1.95.66.7.16 1.05.12 1.45.08.43-.08 1.25-.51 1.42-.99.16-.47.16-.85.11-.99s-.14-.24-.29-.36z" />
  </svg>
);

// Icon for the close button (X)
const CloseIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

// This is the main toggle icon that appears on the page
const WhatsappToggleIcon = ({ isOpen, className }) => {
  return (
    <div
      className={`transition-transform duration-300 ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
    >
      {isOpen ? (
        <CloseIcon className={className} />
      ) : (
        <WhatsAppMainToggleIcon className={className} /> // Use the dedicated main icon
      )}
    </div>
  );
};

const WhatsappChat = ({ dictionary, currentLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBubbleRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Close chat bubble when clicking outside
  const handleClickOutside = (event) => {
    if (
      chatBubbleRef.current &&
      !chatBubbleRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const contactPhoneNumber = "+96899726225"; // Your WhatsApp number
  const defaultPrefilledMessage =
    currentLocale === "ar"
      ? "مرحباً، لدي استفسار بخصوص موقعكم."
      : "Hello, I have a question about your website.";

  const whatsappLink = `https://wa.me/${contactPhoneNumber}?text=${encodeURIComponent(
    dictionary.prefilled_message || defaultPrefilledMessage
  )}`;

  return (
    <div
      className={`fixed bottom-4 right-4 z-[1000] flex items-end ${
        currentLocale === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {isOpen && (
        <div
          id="whatsapp-chat-bubble" // Added an ID for aria-controls
          ref={chatBubbleRef}
          className={`
            relative bg-white dark:bg-gray-800 z-[1000] rounded-3xl p-4 shadow-xl mb-5
            text-gray-900 dark:text-white max-w-xs
            transform transition-all duration-300 ease-out
         
            ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}
          `}
        >
          <div className="flex z-[1000] items-center mb-3">
            <div className="bg-emerald-500 rounded-full p-2 flex-shrink-0">
              {/* Use the internal WhatsApp icon here, which is slightly less detailed */}
              <WhatsAppInternalIcon className="h-5 w-5 text-white" />
            </div>
            <p
              className={`text-base font-semibold ${
                currentLocale === "ar" ? "mr-3" : "ml-3"
              }`}
            >
              {dictionary.chat_bubble_heading ||
                "I checked the website, and I have a few questions to ask"}
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center w-full px-4 py-2 rounded-lg
              bg-gray-900 text-white font-bold text-sm
              hover:bg-gray-700 transition-colors duration-200
            `}
            aria-label={
              dictionary.chat_button_text || "Chat With Us on WhatsApp"
            }
          >
            <WhatsAppInternalIcon className="h-5 w-5 mr-2" />
            <span>{dictionary.chat_button_text || "Chat With Us"}</span>
            {/* Added a right arrow for the chat button */}
            <svg
              className={`h-4 w-4 ${currentLocale === "ar" ? "ml-2" : "ml-2"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      )}

      <button
        ref={buttonRef}
        onClick={handleToggleChat}
        className={`
          bg-emerald-500 text-white rounded-full p-3 z-[1000] mb-14  sm:mb-0 shadow-lg
          hover:bg-emerald-600 transition-colors duration-200
          flex items-center justify-center
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75
          min-w-[48px] min-h-[48px] 
        `}
        aria-expanded={isOpen}
        aria-controls="whatsapp-chat-bubble"
        aria-label={
          isOpen
            ? dictionary.close_chat_label || "Close WhatsApp chat"
            : dictionary.open_chat_label || "Open WhatsApp chat"
        }
      >
        <WhatsappToggleIcon isOpen={isOpen} className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsappChat;
