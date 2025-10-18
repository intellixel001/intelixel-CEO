"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitMeeting } from "@/actions/submitMeeting";
import { useActionState } from "react";
import { FiMail, FiUser, FiMapPin, FiBriefcase, FiLink, FiMessageSquare } from "react-icons/fi";

export default function BookMeeting() {
  const [state, action, pending] = useActionState(submitMeeting, undefined);

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-40"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
              Book a Meeting With Us
            </h1>
            <p className="text-gray-300">
              We'd love to discuss your business needs
            </p>
          </div>

          {/* Meeting Form */}
          <div className="bg-[#111111] p-6 sm:p-8 rounded-xl border border-gray-800/50">
            <form action={action} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-gray-500" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-10 bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                    />
                  </div>
                  {state?.errors?.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-10 bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                    />
                  </div>
                  {state?.errors?.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Business Field */}
              <div className="space-y-2">
                <Label htmlFor="businessField">Business Field</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiBriefcase className="text-gray-500" />
                  </div>
                  <Input
                    id="businessField"
                    name="businessField"
                    type="text"
                    placeholder="Your industry or business field"
                    className="w-full pl-10 bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                  />
                </div>
                {state?.errors?.businessField && (
                  <p className="text-red-400 text-xs mt-1">
                    {state.errors.businessField[0]}
                  </p>
                )}
              </div>

              {/* Country Field */}
              <div className="space-y-2">
                <Label htmlFor="country">Location</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="text-gray-500" />
                  </div>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Business address, Country"
                    className="w-full pl-10 bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                  />
                </div>
                {state?.errors?.country && (
                  <p className="text-red-400 text-xs mt-1">
                    {state.errors.country[0]}
                  </p>
                )}
              </div>

              {/* Social Media Link Field */}
              <div className="space-y-2">
                <Label htmlFor="social">Social Media Link (Optional)</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLink className="text-gray-500" />
                  </div>
                  <Input
                    id="social"
                    name="social"
                    type="text"
                    placeholder="LinkedIn, Twitter, etc."
                    className="w-full pl-10 bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                  />
                </div>
                {state?.errors?.social && (
                  <p className="text-red-400 text-xs mt-1">
                    {state.errors.social[0]}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FiMessageSquare className="text-gray-500" />
                  </div>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full pl-10 bg-[#0a0a0a] border-gray-700 focus:border-blue-500"
                    placeholder="Tell us about your project or what you'd like to discuss"
                  />
                </div>
                {state?.errors?.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={pending}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                {pending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>

              {/* Success/Error Message */}
              {state?.message && (
                <div className={`p-3 rounded-lg text-center text-sm ${state.success ? "bg-green-900/30 border border-green-800 text-green-400" : "bg-red-900/30 border border-red-800 text-red-400"}`}>
                  {state.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Why Schedule a Meeting With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "Personalized consultation for your needs",
              "Expert advice from industry professionals",
              "Custom solutions tailored to your business",
              "Transparent pricing and process",
              "Quick response time (within 24 hours)",
              "No obligation - just valuable insights"
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#111111] p-4 rounded-lg border border-gray-800/50"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
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
                  <span>{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}