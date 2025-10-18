import Link from "next/link";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaPhoneAlt,
  FaRocket,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

export default function DetailsPageInBangla() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto mt-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Intellixel - Next Generation Web & Software Solution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            আমরা তৈরি করি উচ্চ পারফরম্যান্স, সিকিউর এবং স্কেলেবল ওয়েবসাইট ও
            অ্যাপ্লিকেশন যেগুলো বর্তমান সময়ের সবচেয়ে এডভান্সড টেকনোলজি ব্যবহার
            করে তৈরি করা হয়।
          </p>
        </section>

        {/* Problem Section */}
        <section className="mb-16 bg-gray-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            বর্তমান দেশীয় ইন্ডাস্ট্রির প্রধান সমস্যাসমূহ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <FaServer className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                পুরাতন টেকনোলজির সীমাবদ্ধতা
              </h3>
              <p className="text-gray-300">
                বাংলাদেশের ৯০% এর বেশি ওয়েবসাইট এখনও WordPress এবং পুরনো PHP
                ফ্রেমওয়ার্কে তৈরি, যার ফলে প্রায়ই দেখা যায়:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>সার্ভার ক্র্যাশ এবং ডাউনটাইম সমস্যা</li>
                  <li>সিকিউরিটি ভুলভ্রান্তি বেশি</li>
                  <li>ট্রাফিক বাড়লেই পারফরম্যান্স ড্রপ</li>
                </ul>
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <FaMobileAlt className="text-yellow-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                পারফরম্যান্স ও ব্যবহারযোগ্যতা সমস্যা
              </h3>
              <p className="text-gray-300">
                পুরনো সিস্টেমে তৈরি ওয়েবসাইটগুলোতে সাধারণত:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>মোবাইল ডিভাইসে লোড হতে ৫-১০ সেকেন্ড সময় নেয়</li>
                  <li>Google PageSpeed স্কোর ৩০-৪০ এর মধ্যে থাকে</li>
                  <li>ব্যবহারকারীদের ৫৩% সাইট ছেড়ে চলে যায় ধীরগতির জন্য</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            আমাদের সমাধান
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-blue-500">
              <FaCode className="text-blue-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">মডার্ন টেক স্ট্যাক</h3>
              <p className="text-gray-300">
                আমরা ব্যবহার করি Next.js, React, Node.js, MongoDB এর মতো মডার্ন
                টেকনোলজি যা Netflix, IMDB এর মতো বড় প্ল্যাটফর্মে ব্যবহৃত হয়।
                এর ফলে:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>১০x দ্রুততর পারফরম্যান্স</li>
                  <li>৯৫+ Google PageSpeed স্কোর</li>
                  <li>সার্ভার কস্ট ৭০% কম</li>
                </ul>
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-purple-500">
              <FaPaintBrush className="text-purple-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">কাস্টম ডিজাইন</h3>
              <p className="text-gray-300">
                প্রতিটি প্রজেক্ট আমরা স্ক্র্যাচ থেকে ডিজাইন করি যাতে:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>আপনার ব্র্যান্ডের জন্য সম্পূর্ণ ইউনিক লুক</li>
                  <li>ইউজার এক্সপেরিয়েন্স ফোকাসড ডিজাইন</li>
                  <li>কনভার্সন রেট ৩x পর্যন্ত বাড়ানো</li>
                </ul>
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-green-500">
              <FaShieldAlt className="text-green-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">সিকিউরিটি ফোকাসড</h3>
              <p className="text-gray-300">
                আমরা প্রতিটি প্রজেক্টে:
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>সর্বোচ্চ সিকিউরিটি স্ট্যান্ডার্ড মেইনটেইন করি</li>
                  <li>রেগুলার সিকিউরিটি আপডেট প্রদান করি</li>
                  <li>DDoS প্রোটেকশন এবং ফায়ারওয়াল সিস্টেম</li>
                </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16 bg-gray-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            আমাদের টেক স্ট্যাক
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Javascript",
              "Node.js",
              "Express",
              "MySQL",
              "NoSQL",
              "TailwindCSS",
              "Firebase",
              "AWS",
              "more +"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm font-medium text-gray-200 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 shadow-xl">
          <FaRocket className="text-yellow-400 text-5xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            আপনার ডিজিটাল ট্রান্সফর্মেশন শুরু করুন
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার ব্যবসাকে ডিজিটাল বিশ্বে নতুন
            উচ্চতায় নিয়ে যান।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://www.intellixel.com"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
            >
              আমাদের ওয়েবসাইট
            </Link>
            <Link
              href="tel:+8801300523268"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2"
            >
              <FaPhoneAlt /> +880 1300-523268
            </Link>
            <Link
              href="mailto:contact@intellixel.com"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition flex items-center justify-center gap-2"
            >
              ইমেইল করুন
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
