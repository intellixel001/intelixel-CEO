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
            Join the Intellixel <br />
            Affiliate Program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Earn{" "}
            <span className="font-bold text-blue-400">15% commissions</span> for
            every customer you bring to our premium digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
              asChild
            >
              <Link href="/affiliate-program/register">
                Join Now - It's Free
              </Link>
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-gray-600 text-white hover:bg-white/5 hover:border-white rounded-lg"
              asChild
            >
              <Link href="/affiliate-program/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold">WHY JOIN US</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              The Best Affiliate Program in Web & Software Development
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              We provide everything you need to succeed as an affiliate
              marketer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "High Commission Rates",
                desc: "Earn industry-leading 15% on all referred customer payments.",
                icon: "💸",
              },
              //   {
              //     title: "Recurring Earnings",
              //     desc: "Get commissions for the lifetime of the customer relationship.",
              //     icon: "🔄",
              //   },
              {
                title: "Premium Products",
                desc: "Promote our high-quality digital solutions with excellent conversion rates.",
                icon: "🚀",
              },
              {
                title: "Marketing Resources",
                desc: "Access banners, emails, and content to help you promote.",
                icon: "📊",
              },
              //   {
              //     title: "Real-time Tracking",
              //     desc: "Advanced dashboard to monitor clicks, conversions, and earnings.",
              //     icon: "📈",
              //   },
              {
                title: "Timely Payouts",
                desc: "Get paid when order is completed via mobile banking - Bkash, Nagad",
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
            <span className="text-purple-400 font-semibold">HOW IT WORKS</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Start Earning in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:h-0.5 md:w-full md:-top-4 md:left-0"></div>
              <div className="relative bg-[#111111] p-6 rounded-xl border border-gray-800/50 h-full">
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Register</h3>
                <p className="text-gray-400">
                  Register for free and start marketing instantly.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:h-0.5 md:w-full md:-top-4 md:left-0"></div>
              <div className="relative bg-[#111111] p-6 rounded-xl border border-gray-800/50 h-full">
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Promote</h3>
                <p className="text-gray-400">
                  Use your unique marketing strategy to share our services with
                  your potential lead.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:h-0.5 md:w-full md:-top-4 md:left-0"></div>
              <div className="relative bg-[#111111] p-6 rounded-xl border border-gray-800/50 h-full">
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">Earn</h3>
                <p className="text-gray-400">
                  Get paid for every sale you generate. The more you refer, the
                  more you earn!
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
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join the team of affiliates already earning with Intellixel's
              premium solutions.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all"
              asChild
            >
              <Link href="/affiliate-program/register">Register now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold">HAVE QUESTIONS?</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "How much can I earn as an affiliate?",
              answer:
                "With our 15% commission structure and premium products, your earning potential is significant.",
            },
            {
              question: "How do I get paid?",
              answer:
                "We process payments monthly via mobile banking (like Bkash, Nagad) and interational payment gateways",
            },
            // {
            //   question: "How long do referral cookies last?",
            //   answer:
            //     "Our cookies last 90 days, so you'll get credit for any sales within that period after someone clicks your link.",
            // },
            {
              question: "What marketing materials are provided?",
              answer:
                "You'll get access to banners, email templates, social media posts, demo videos, and case studies to help with your promotions.",
            },
            {
              question: "Can I promote on social media or YouTube?",
              answer:
                "Absolutely! Many of our top affiliates promote through YouTube, Twitter, LinkedIn, blogs, and other platforms.",
            },
            {
              question: "Is there a cost to join the program?",
              answer:
                "No, joining our affiliate program is completely free. We only make money when you make money.",
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
