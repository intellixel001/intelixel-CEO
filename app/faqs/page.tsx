import FAQClient from "../components/faqClient";

const faqData = [
  {
    question: "What services does Intelixel offer?",
    answer:
      "Intelixel provides web app development, Android app development, backend development, and branding services like logo and product design.",
  },
  {
    question: "How can I get started with Intelixel?",
    answer:
      "You can contact us through our website or email us directly, and we'll guide you through the process, from requirements gathering to project completion.",
  },
  {
    question: "What is the pricing model at Intelixel?",
    answer:
      "We work with a milestone-based payment system. For example, for 30% of the work, we require 30% payment. This ensures transparency and client satisfaction.",
  },
  {
    question: "Does Intelixel offer custom branding services?",
    answer:
      "Yes, we offer custom branding services, including logo design, product design, and overall branding strategy to help your business stand out.",
  },
  {
    question: "Is Intelixel open for international projects?",
    answer:
      "Absolutely! We handle both American and European markets, and we're happy to work with clients from all over the world.",
  },
  {
    question: "What are the technologies Intelixel uses?",
    answer:
      "We specialize in modern technologies like React, Next.js, Node.js, Express, Firebase, Appwrite, and more for creating robust web and mobile applications.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the complexity of the project. We usually discuss and provide an estimated timeline during the initial consultation.",
  },
  {
    question: "Does Intelixel have a support team?",
    answer:
      "Yes, we have a dedicated support team to assist you with any technical issues or questions that may arise after project completion.",
  },
  {
    question: "Does Intelixel offer backend development?",
    answer:
      "Yes, we offer backend development services using technologies like Node.js, Express, Firebase, and Appwrite, ensuring robust and scalable server-side solutions.",
  },
  {
    question: "Does Intelixel offer frontend development?",
    answer:
      "Yes, we specialize in frontend development using modern JavaScript frameworks like React and Next.js, delivering interactive and responsive user interfaces.",
  },
  {
    question: "Does Intelixel offer Android app development?",
    answer:
      "Yes, we provide Android app development services, creating fully-functional and user-friendly mobile applications that meet the unique needs of your business.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Questions
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about our services and processes
        </p>
      </div>

      <FAQClient faqData={faqData} />
    </section>
  );
}
