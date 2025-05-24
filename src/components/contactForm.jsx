"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactSchema } from '@/schema/contact';

const Form = () => {
  // Setting up form validation and state handling
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // Mutation for creating a contact
//   const { mutate: createContactMutation, isPending } = useCreateContactMutation();

  // Handling form submission
  const onSubmit = (data) => {
    // createContactMutation(JSON.stringify(data)); 
    reset();
  };

  return (
    <div className="lg:pt-5 lg:px-11 lg:rounded-r-2xl rounded-2xl">
      <h2 className="font-manrope text-4xl font-semibold leading-10 mb-5">
        Send Us A Message
      </h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <input
          type="text"
          className="w-full h-12 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 pl-4"
          placeholder="Email"
          {...register("email")} // Registering with react-hook-form
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

        {/* Message Input */}
        <textarea
          className="resize-none w-full h-44 text-gray-50 placeholder-gray-50 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-500 p-4 mt-5"
          placeholder="Message"
          {...register("message")} // Registering with react-hook-form
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}

        {/* Privacy Policy Notice */}
        <p className="tracking-wide leading-relaxed text-xs px-1 mb-4">By submitting this form, you agree to our privacy policy.</p>

        {/* Submit Button */}
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
