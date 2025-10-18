import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AffiliateProgram() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-40"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
            Intellixel এর অ্যাফিলিয়েট প্রোগ্রামে <br />
            যোগ দিন
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            আমাদের প্রিমিয়াম ডিজিটাল সেবায় নিয়ে আসা প্রতিটি গ্রাহকের জন্য পান{" "}
            <span className="font-bold text-blue-400">১৫% কমিশন</span>।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
              asChild
            >
              <Link href="/affiliate-program/register">
                এখনই যোগ দিন
              </Link>
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-gray-600 text-white hover:bg-white/5 hover:border-white rounded-lg"
              asChild
            >
              <Link href="/affiliate-program/learn-more">আরও জানুন</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold">কেন যোগ দেবেন?</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              ওয়েব ও সফটওয়্যার ডেভেলপমেন্টে সেরা অ্যাফিলিয়েট প্রোগ্রাম
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              অ্যাফিলিয়েট মার্কেটার হিসেবে সফল হওয়ার জন্য আমরা সবকিছু প্রদান করি।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "উচ্চ কমিশনের হার",
                desc: "প্রতিটি রেফার্ড গ্রাহকের পেমেন্টে ইন্ডাস্ট্রির শীর্ষস্থানীয় ১৫% কমিশন পান।",
                icon: "💸",
              },
              {
                title: "প্রিমিয়াম প্রোডাক্ট",
                desc: "উচ্চ রূপান্তর হার সহ আমাদের মানসম্পন্ন ডিজিটাল সমাধানগুলি প্রচার করুন।",
                icon: "🚀",
              },
              {
                title: "মার্কেটিং রিসোর্স",
                desc: "প্রচারের জন্য ব্যানার, ইমেইল এবং কন্টেন্ট অ্যাক্সেস পান।",
                icon: "📊",
              },
              {
                title: "সময়মতো পেমেন্ট",
                desc: "অর্ডার সম্পন্ন হলে মোবাইল ব্যাংকিং - বিকাশ, নগদের মাধ্যমে পেমেন্ট পান",
                icon: "💳",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111111] p-6 rounded-xl border border-gray-800/50 hover:border-blue-500/50 transition-all hover:translate-y-[-4px]"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold">কিভাবে কাজ করে</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              ৩টি সহজ ধাপে আয় শুরু করুন
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:h-0.5 md:w-full md:-top-4 md:left-0"></div>
              <div className="relative bg-[#111111] p-6 rounded-xl border border-gray-800/50 h-full">
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  ১
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">নিবন্ধন করুন</h3>
                <p className="text-gray-400">
                  বিনামূল্যে নিবন্ধন করুন এবং তাত্ক্ষণিকভাবে মার্কেটিং শুরু করুন।
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:h-0.5 md:w-full md:-top-4 md:left-0"></div>
              <div className="relative bg-[#111111] p-6 rounded-xl border border-gray-800/50 h-full">
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  ২
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">প্রচার করুন</h3>
                <p className="text-gray-400">
                  আপনার অনন্য মার্কেটিং কৌশল ব্যবহার করে আমাদের পরিষেবাগুলি আপনার সম্ভাব্য লিডের সাথে শেয়ার করুন।
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:h-0.5 md:w-full md:-top-4 md:left-0"></div>
              <div className="relative bg-[#111111] p-6 rounded-xl border border-gray-800/50 h-full">
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  ৩
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">আয় করুন</h3>
                <p className="text-gray-400">
                  আপনি যে বিক্রয় তৈরি করেন তার জন্য অর্থ পান। যত বেশি রেফার করবেন, তত বেশি আয় করবেন!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="signup"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 sm:p-12 rounded-2xl border border-gray-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              আয় শুরু করতে প্রস্তুত?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Intellixel এর প্রিমিয়াম সমাধান দিয়ে ইতিমধ্যেই আয় করা অ্যাফিলিয়েটদের দলে যোগ দিন।
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
              asChild
            >
              <Link href="/affiliate-program/register">এখনই নিবন্ধন করুন</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold">প্রশ্ন আছে?</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            সাধারণত জিজ্ঞাসিত প্রশ্নাবলী
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "অ্যাফিলিয়েট হিসেবে আমি কতটা আয় করতে পারি?",
              answer:
                "আমাদের ১৫% কমিশন স্ট্রাকচার এবং প্রিমিয়াম প্রোডাক্টের সাথে আপনার আয়ের সম্ভাবনা উল্লেখযোগ্য।",
            },
            {
              question: "আমি কিভাবে পেমেন্ট পাব?",
              answer:
                "আমরা মাসিকভাবে মোবাইল ব্যাংকিং (যেমন বিকাশ, নগদ) এবং আন্তর্জাতিক পেমেন্ট গেটওয়ের মাধ্যমে পেমেন্ট প্রক্রিয়া করি",
            },
            {
              question: "কি ধরনের মার্কেটিং ম্যাটেরিয়াল প্রদান করা হয়?",
              answer:
                "আপনি প্রচারের জন্য ব্যানার, ইমেইল টেমপ্লেট, সোশ্যাল মিডিয়া পোস্ট, ডেমো ভিডিও এবং কেস স্টাডি অ্যাক্সেস পাবেন।",
            },
            {
              question: "আমি কি সোশ্যাল মিডিয়া বা ইউটিউবে প্রচার করতে পারি?",
              answer:
                "অবশ্যই! আমাদের শীর্ষ অ্যাফিলিয়েটরা ইউটিউব, টুইটার, লিংকডইন, ব্লগ এবং অন্যান্য প্ল্যাটফর্মের মাধ্যমে প্রচার করে।",
            },
            {
              question: "প্রোগ্রামে যোগ দিতে কি কোন খরচ আছে?",
              answer:
                "না, আমাদের অ্যাফিলিয়েট প্রোগ্রামে যোগদান সম্পূর্ণ বিনামূল্যে। আপনি আয় করলে আমরা আয় করি।",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-[#111111] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {item.question}
              </h3>
              <p className="text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}