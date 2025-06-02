"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CheckIcon = () => (
  <svg
    className="flex-shrink-0 h-4 w-4 text-emerald-400 mt-1" // Slightly larger, with top margin for alignment
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

const PackageCard = ({
  packageName,
  price,
  features,
  isArabic,
  isRecommended = false,
}) => {
  const router = useRouter();

  const handleChoosePlan = () => {
    const subject = isArabic
      ? `استفسار حول باقة: ${packageName}`
      : `Inquiry about: ${packageName} Package`;

    const message = isArabic
      ? `أنا مهتم بباقة ${packageName} بسعر ${price}. الميزات المتضمنة هي: ${features.join(
          "، "
        )}.`
      : `I am interested in the ${packageName} package, priced at ${price}. The included features are: ${features.join(
          ", "
        )}. Please tell me more about how to proceed.`;

    router.push(
      `/${isArabic ? "ar" : "en"}/contact?subject=${encodeURIComponent(
        subject
      )}&message=${encodeURIComponent(message)}`
    );
  };

  return (
    <div
      className={`
        relative flex flex-col rounded-xl p-8
        transition-all duration-700 ease-in-out
        transform-gpu
        perspective-1000
        ${
          isRecommended
            ? "bg-gradient-to-br from-purple-900 via-indigo-800 to-black " +
              "border-2 border-emerald-500 " +
              "shadow-lg ring-2 ring-emerald-500 ring-opacity-50 " +
              "scale-[1.03] " +
              "z-20 " +
              "hover:shadow-xl hover:scale-[1.05] "
            : "bg-gray-800 border border-gray-700 " +
              "shadow-md " +
              "hover:shadow-lg hover:scale-[1.01] "
        }
        ${isArabic ? "text-right" : "text-left"}
      `}
    >
      {isRecommended && (
        <span
          className={`
            absolute top-0
            ${isArabic ? "left-0 rounded-tl-md" : "right-0 rounded-tr-md"}
            bg-emerald-500 text-white text-xs font-bold px-2 py-0.5
            uppercase tracking-widest z-30
            transform -translate-y-px translate-x-px
          `}
        >
          {isArabic ? "موصى به" : "Recommended"}
        </span>
      )}

      {isRecommended && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-full h-full rounded-xl"
            style={{
              background:
                "radial-gradient(circle at 10% 90%, rgba(34,197,94,0.1) 0%, transparent 50%), " +
                "radial-gradient(circle at 90% 10%, rgba(124,58,237,0.1) 0%, transparent 50%)",
            }}
          ></div>
        </div>
      )}

      {/* Content wrapper with flexible height for better text flow */}
      <div className="relative z-10 flex flex-col items-center w-full flex-grow">
        <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight text-center tracking-tight">
          {packageName}
        </h3>
        <p className="text-4xl font-extrabold text-emerald-400 mb-6 text-center drop-shadow-lg">
          {price}
        </p>

        {/* Feature list adjusted for better spacing and text */}
        <ul className={`w-full divide-y divide-gray-700 flex-grow mb-6`}>
          {" "}
          {/* flex-grow to push the list down, mb-6 for consistent spacing before button */}
          {features.map((feature, index) => (
            <li
              key={index}
              className={`
                flex items-start text-base font-medium text-gray-200 py-2 leading-relaxed // Adjusted font size and line height
                ${isArabic ? "flex-row-reverse" : ""}
              `}
            >
              <CheckIcon />
              <span
                className={`
                  ${
                    isArabic ? "mr-2" : "ml-2"
                  } // Adjusted margin for better spacing
                  ${isArabic ? "text-right" : "text-left"}
                `}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full relative z-10">
        {" "}
        {/* Removed mt-auto here, handled by flex-grow above */}
        <button
          onClick={handleChoosePlan}
          className={`
            w-full py-3 rounded-md cursor-pointer text-lg font-bold transition-all duration-300 ease-in-out
            ${
              isRecommended
                ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg " +
                  "ring-2 ring-emerald-500 ring-opacity-70 "
                : "bg-gray-700 text-indigo-200 hover:bg-gray-600 shadow-sm"
            }
            focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50
          `}
        >
          {isArabic ? "اختر الخطة" : "Choose Plan"}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
