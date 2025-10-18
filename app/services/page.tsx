import { Metadata } from "next";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";
import { ServiceBox } from "../components/ServiceBox";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Intellixel offers a wide range of services including web development, mobile app development,frontend, backend solutions, branding, and more. Our team delivers high-quality solutions tailored to your business needs.",
};

export default function Services() {
  const services = [
    {
      title: "Web App Development",
      desc: "We build responsive, scalable, and tailored web applications for your business.",
      options: [
        "Custom Web Apps",
        "E-commerce Solutions & Automation",
        "Progressive Web Apps (PWA) + Others",
      ],
    },
    {
      title: "Mobile App Development",
      desc: "High-performance mobile apps designed for seamless user experiences.",
      options: [
        "Native Android Apps",
        "Cross-Platform Solutions",
        "App Maintenance & Support",
      ],
    },
    {
      title: "UI/UX Design",
      desc: "Crafting intuitive and visually stunning interfaces for your digital products.",
      options: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Interactive Design",
      ],
    },
  ];

  const faqs = [
    {
      question: "What industries does Intelixel specialize in?",
      answer:
        "We specialize in IT, Software Development, and Digital Services, working with businesses worldwide to build innovative solutions.",
    },
    {
      question: "How does Intelixel ensure quality?",
      answer:
        "We follow agile methodologies, conduct code reviews, and perform extensive testing to exceed expectations.",
    },
    {
      question: "What's Intelixel's pricing model?",
      answer:
        "We offer flexible pricing, typically working on milestone-based payments for each project phase.",
    },
  ];

  return (
    <section className="min-w-full relative overflow-hidden py-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="w-full text-center mb-10 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Services
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Empowering businesses with cutting-edge digital solutions and
            seamless user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceBox
              key={index}
              title={service.title}
              desc={service.desc}
              options={service.options}
              btnText="Book a meeting"
            />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 mb-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you're a startup or an enterprise, we're here to turn your
            ideas into reality.
          </p>
          <Link href="/book-meeting">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors">
              Get Started
            </button>
          </Link>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-3 inline-flex items-center justify-center gap-2">
              <FaQuestionCircle className="text-purple-500" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-5 rounded-lg border border-gray-800"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1"
            >
              View all FAQs <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
