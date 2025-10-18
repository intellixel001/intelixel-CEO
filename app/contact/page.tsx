"use client";

import { useActionState } from "react";
import { submitContactUs } from "@/actions/submitContactUs";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactUs() {
  const [state, action, pending] = useActionState(submitContactUs, undefined);

  const emailError = state?.errors?.email?.[0];
  const nameError = state?.errors?.name?.[0];
  const messageError = state?.errors?.message?.[0];
  const successMessage = state?.message;

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="mt-[30px] w-full max-w-md lg:max-w-lg xl:max-w-xl bg-background backdrop-blur-sm border border-gray-800/50 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 lg:p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">Get in Touch</h1>
          <p className="text-center text-blue-100 mt-2 lg:mt-3">We'd love to hear from you</p>
        </div>
        <form action={action} className="p-6 sm:p-8 lg:p-10 space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-gray-500" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full pl-10 pr-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              placeholder="Your name"
            />
            {nameError && (
              <p className="text-red-400 text-xs mt-1 flex items-center">
                {nameError}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-500" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-10 pr-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              placeholder="your.email@example.com"
            />
            {emailError && (
              <p className="text-red-400 text-xs mt-1 flex items-center">
                {emailError}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute top-3 left-3">
              <FiMessageSquare className="text-gray-500" />
            </div>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              placeholder="Your message..."
            ></textarea>
            {messageError && (
              <p className="text-red-400 text-xs mt-1 flex items-center">
                {messageError}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={pending}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {pending ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </button>

          {/* Success Message */}
          {successMessage && (
            <div className="p-3 bg-green-900/30 border border-green-800 rounded-lg text-green-400 text-sm text-center">
              {successMessage}
            </div>
          )}
        </form>

        <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-800/50 text-center text-sm text-gray-400">
          We'll get back to you within 24 hours
        </div>
      </div>
    </div>
  );
}