import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AffiliateLearnMore() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-40"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 pt-10">
          <Link
            href="/affiliate-program"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Affiliate Program
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
            Everything You Need to Know About Our Affiliate Program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Detailed information about commissions, payment methods, tracking,
            and how to maximize your earnings with Intellixel.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Commission Structure */}
            <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/50">
              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Commission Structure
                  </h2>
                  <p className="text-gray-400 mb-4">
                    Our affiliate program offers one of the most competitive
                    commission rates in the industry. Here's how it works:
                  </p>
                  <ul className="space-y-3 text-gray-400 mb-6">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-white">15% commission</strong>{" "}
                        on all web development projects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        <strong className="text-white">15% commission</strong>{" "}
                        on all software development projects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        Commissions are calculated on the{" "}
                        <strong className="text-white">
                          total project value
                        </strong>
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-400">
                    Example: If you refer a client who purchases a $1,000 web
                    development project, you'd earn $150 (15% of $1,000).
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/50">
              <div className="flex items-start">
                <div className="bg-purple-500/20 p-3 rounded-lg mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                  <p className="text-gray-400 mb-4">
                    We make getting paid simple and convenient with multiple
                    payment options:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800/50">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-400 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Mobile Payments
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Receive payments directly to your Bkash, Nagad, or
                        Bank account.
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800/50">
                      <h3 className="font-semibold text-lg mb-2 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Bank Transfer
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Direct bank transfers available for larger payments.
                      
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0a0a0a] p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold text-lg mb-2 text-blue-400">
                      Payment Schedule
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      All payments are processed on the{" "}
                      <strong className="text-white">order completion</strong>{" "}
                      and payment receive.
                    </p>
                    <p className="text-gray-400 text-sm">
                      Example: You get your commission when an order is completed
                      and payment is done.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking & Reporting */}
            {/* <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/50">
              <div className="flex items-start">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tracking & Reporting</h2>
                  <p className="text-gray-400 mb-4">
                    Our advanced tracking system gives you complete visibility into your affiliate performance:
                  </p>
                  <div className="grid gap-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-1 rounded mr-4 mt-1">
                        <svg className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Real-time Analytics</h3>
                        <p className="text-gray-400 text-sm">
                          Track clicks, conversions, and earnings in real-time through your affiliate dashboard.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-1 rounded mr-4 mt-1">
                        <svg className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Detailed Reports</h3>
                        <p className="text-gray-400 text-sm">
                          Download monthly reports with all your referral activity and earnings.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-1 rounded mr-4 mt-1">
                        <svg className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Custom Tracking Links</h3>
                        <p className="text-gray-400 text-sm">
                          Generate unique tracking links for different campaigns or platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0a0a0a] p-4 rounded-lg border border-purple-500/20">
                    <h3 className="font-semibold text-lg mb-2 text-purple-400">Cookie Duration</h3>
                    <p className="text-gray-400 text-sm">
                      Our tracking cookies last for <strong className="text-white">60 days</strong>. If someone clicks your affiliate link and makes a purchase within 60 days, you'll get credit for the sale.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Marketing Resources */}
            <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/50">
              <div className="flex items-start">
                <div className="bg-purple-600/20 p-3 rounded-lg mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Marketing Resources
                  </h2>
                  <p className="text-gray-400 mb-6">
                    We provide a complete suite of marketing materials to help
                    you promote our services effectively:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#0a0a0a] p-5 rounded-lg border border-gray-800/50 hover:border-blue-500/50 transition-all">
                      <h3 className="font-semibold text-lg mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                          />
                        </svg>
                        Banners & Graphics
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Professionally designed banners in multiple sizes for
                        websites, blogs, and social media.
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-5 rounded-lg border border-gray-800/50 hover:border-purple-500/50 transition-all">
                      <h3 className="font-semibold text-lg mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-400 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Email Templates
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Ready-to-use email templates for different campaign
                        types (promotional, educational, etc.).
                      </p>
                    </div>
                    <div className="bg-[#0a0a0a] p-5 rounded-lg border border-gray-800/50 hover:border-blue-500/50 transition-all">
                      <h3 className="font-semibold text-lg mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-400 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                          />
                        </svg>
                        Social Media Content
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Pre-written posts for Facebook, Twitter, LinkedIn, and
                        Instagram with optimal hashtags.
                      </p>
                    </div>
                    {/* <div className="bg-[#0a0a0a] p-5 rounded-lg border border-gray-800/50 hover:border-purple-500/50 transition-all">
                      <h3 className="font-semibold text-lg mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-400 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        Video Content
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Product demo videos and customer testimonial videos you
                        can share on YouTube or social media.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-[#111111] p-8 rounded-xl border border-gray-800/50">
              <div className="flex items-start">
                <div className="bg-blue-700/20 p-3 rounded-lg mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Best Practices for Success
                  </h2>
                  <p className="text-gray-400 mb-6">
                    Maximize your earnings with these proven strategies from our
                    top-performing affiliates:
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 text-blue-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Leverage Your Network
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Start with people you know - business contacts, social
                          media followers, email lists. Personal recommendations
                          convert best.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 text-blue-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Create Valuable Content
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Blog posts, videos, or social media content that
                          educates about web/software development needs performs
                          better than direct ads.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 text-blue-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Use Multiple Channels
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Diversify across platforms - YouTube, LinkedIn,
                          Facebook groups, forums, and email marketing for
                          maximum reach.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 text-blue-400 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Track & Optimize</h3>
                        <p className="text-gray-400 text-sm">
                          Use UTM parameters to see which links perform best,
                          then double down on what works.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 sm:p-12 rounded-2xl border border-gray-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join our affiliate program today and start earning commissions on
              every referral.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
              asChild
            >
              <Link href="/affiliate-program/register">Register Now</Link>
            </Button>
            <p className="text-gray-400 text-sm mt-4">
              No fees, no commitments - just unlimited earning potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
