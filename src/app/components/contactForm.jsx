"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "src/schema/contact";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (data) => {
    // Your submit logic here, e.g. API call
    console.log(data);
    reset();
  };

  return (
    <div className="lg:pt-5 lg:px-11 lg:rounded-r-2xl rounded-2xl">
      <h2 className="font-manrope text-4xl font-semibold leading-10 mb-5 text-gray-50">
        Send Us A Message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name and Last Name side by side */}
        <div className="flex flex-col md:flex-row md:gap-4 mb-3">
          <div className="flex-1">
            <input
              type="text"
              className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex-1 mt-3 md:mt-0">
            <input
              type="text"
              className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4"
              placeholder="Last Name"
              {...register("lastName")}
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
          placeholder="Subject"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}

        {/* Email */}
        <input
          type="text"
          className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4 mb-3"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

        {/* Message */}
        <textarea
          className="resize-none w-full h-44 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 p-4 mt-5"
          placeholder="Message"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}

        {/* Privacy Policy */}
        <p className="tracking-wide leading-relaxed text-xs px-1 mb-4 text-gray-50">
          By submitting this form, you agree to our privacy policy.
        </p>

        {/* Submit */}
        <div className="text-center mb-10">
          <button
            type="submit"
            className="bg-gray-500 w-full hover:bg-gray-600 py-3 rounded-lg text-base font-medium leading-5 text-white font-manrope shadow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
