// src/app/components/contactForm.jsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "src/schema/contact"; // Ensure this path is correct
import { cn } from "@/lib/utils"; // Assuming you have cn utility

// Make sure your ContactSchema is also using the dictionary for error messages
// If ContactSchema is defined like this (example):
// import * as yup from 'yup';
// export const ContactSchema = yup.object().shape({
//   firstName: yup.string().required('First Name is required'),
//   ...
// });
// You might need to pass the dictionary to a function that generates the schema
// or load the schema dynamically based on the dictionary.
// For simplicity, I'll assume dictionary keys for messages will be available.
// If your schema uses static strings, you'll need to update it to use dictionary.

const Form = ({ dictionary, currentLocale }) => {
  // Accept dictionary and currentLocale
  const isArabic = currentLocale === "ar";

  // If your ContactSchema uses static strings, you need to modify it
  // to accept a dictionary or define error messages directly here using dictionary.
  // For demonstration, I'll assume your ContactSchema has keys like 'firstName_required' etc.
  // If not, you'll need a mechanism to pass translated messages to yup.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ContactSchema), // Assuming ContactSchema can be translated or handles it
  });

  const onSubmit = (data) => {
    // Your submit logic here, e.g. API call
    console.log(data);
    // You might integrate Formspree here if you were using it for submission,
    // otherwise, this is where you'd send data to your backend API.
    reset();
    // Potentially show a success message from the dictionary here
    alert(dictionary.contact_form_success_message); // Simple alert for success
  };

  return (
    <div
      className={cn(
        "lg:pt-5 lg:px-11 lg:rounded-r-2xl rounded-2xl",
        "bg-gray-600/15 backdrop-blur-2xl text-gray-50",
        isArabic ? "text-right" : "text-left" // Adjust form alignment
      )}
    >
      <h2 className="font-manrope text-4xl font-semibold leading-10 mb-5 text-gray-50">
        {dictionary.contact_form_heading}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name and Last Name side by side */}
        <div className="flex flex-col md:flex-row md:gap-4 mb-3">
          <div className="flex-1">
            <input
              type="text"
              className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4"
              placeholder={dictionary.contact_form_first_name_placeholder}
              {...register("firstName")}
              dir={isArabic ? "rtl" : "ltr"} // Set input direction
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {/* Assuming error messages are also in dictionary or handled by schema */}
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex-1 mt-3 md:mt-0">
            <input
              type="text"
              className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4"
              placeholder={dictionary.contact_form_last_name_placeholder}
              {...register("lastName")}
              dir={isArabic ? "rtl" : "ltr"} // Set input direction
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <input
          type="text"
          className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4 mb-3"
          placeholder={dictionary.contact_form_subject_placeholder}
          {...register("subject")}
          dir={isArabic ? "rtl" : "ltr"} // Set input direction
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}

        {/* Email */}
        <input
          type="text" // Should be type="email" for better accessibility and validation
          className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4 mb-3"
          placeholder={dictionary.contact_form_email_placeholder}
          {...register("email")}
          dir={isArabic ? "rtl" : "ltr"} // Set input direction
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

        {/* Message */}
        <textarea
          className="resize-none w-full h-44 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 p-4 mt-5"
          placeholder={dictionary.contact_form_message_placeholder}
          {...register("message")}
          dir={isArabic ? "rtl" : "ltr"} // Set input direction
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}

        {/* Privacy Policy */}
        <p className="tracking-wide leading-relaxed text-xs px-1 mb-4 text-gray-50">
          {dictionary.contact_form_privacy_policy}
        </p>

        {/* Submit */}
        <div className="text-center mb-10">
          <button
            type="submit"
            className="bg-gray-500 w-full hover:bg-gray-600 py-3 rounded-lg text-base font-medium leading-5 text-white font-manrope shadow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? dictionary.contact_form_sending_button
              : dictionary.contact_form_send_button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
