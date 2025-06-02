"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cn } from "@/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import ContactTemplate from "src/views/SendContact";
import { ContactSchema } from "src/schema/contact";
import { redirect, useRouter } from "next/navigation";

const Form = ({ dictionary, currentLocale }) => {
  const isArabic = currentLocale === "ar";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      // Explicit validation for safety
      await ContactSchema.validate(data, { abortEarly: false });

      const template = new ContactTemplate(
        data.firstName,
        data.lastName,
        data.email,
        data.subject,
        data.message
      );

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          subject: data.subject,
          html: template.render(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      reset();
      toast(dictionary.contact_form_success_message);
      router.push('/');
    } catch (error) {
      if (error.name === "ValidationError") {
        toast.error(error.errors[0]);
      } else {
        console.error("Send mail error:", error);
        toast.error("There was a problem sending your message. Please try again later.");
      }
    }
  };

  return (
    <>
      <div
        className={cn(
          "lg:pt-5 lg:px-11 lg:rounded-r-2xl rounded-2xl",
          "bg-gray-600/15 backdrop-blur-2xl text-gray-50",
          isArabic ? "text-right" : "text-left"
        )}
      >
        <h2 className="font-manrope text-4xl font-semibold leading-10 mb-5 text-gray-50">
          {dictionary.contact_form_heading}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row md:gap-4 mb-3">
            <div className="flex-1">
              <input
                type="text"
                className="px-1 w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4"
                placeholder={dictionary.contact_form_first_name_placeholder}
                {...register("firstName")}
                dir={isArabic ? "rtl" : "ltr"}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div className="flex-1 mt-3 md:mt-0">
              <input
                type="text"
                className="px-1 w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4"
                placeholder={dictionary.contact_form_last_name_placeholder}
                {...register("lastName")}
                dir={isArabic ? "rtl" : "ltr"}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <input
            type="text"
            className="px-1 w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4 mb-3"
            placeholder={dictionary.contact_form_subject_placeholder}
            {...register("subject")}
            dir={isArabic ? "rtl" : "ltr"}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}

          <input
            type="email"
            className="px-1 w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4 mb-3"
            placeholder={dictionary.contact_form_email_placeholder}
            {...register("email")}
            dir={isArabic ? "rtl" : "ltr"}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <textarea
            className="resize-none w-full h-44 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 p-4 mt-5"
            placeholder={dictionary.contact_form_message_placeholder}
            {...register("message")}
            dir={isArabic ? "rtl" : "ltr"}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}

          <p className="tracking-wide leading-relaxed text-xs px-1 mb-4 text-gray-50">
            {dictionary.contact_form_privacy_policy}
          </p>

          <div className="text-center mb-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gray-500 w-full cursor-pointer hover:bg-gray-600 py-3 rounded-lg text-base font-medium leading-5 text-white font-manrope shadow-sm"
            >
              {isSubmitting
                ? dictionary.contact_form_sending_button
                : dictionary.contact_form_send_button}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </>
  );
};

export default Form;
