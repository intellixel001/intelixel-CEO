'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQClientProps {
  faqData: FAQItem[];
}

export default function FAQClient({ faqData }: FAQClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div 
          key={index} 
          className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-700"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
            onClick={() => toggleAnswer(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-lg font-medium text-white">{item.question}</span>
            <span className="text-blue-400">
              {activeIndex === index ? (
                <FaChevronUp className="w-5 h-5" />
              ) : (
                <FaChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <div className="p-6 bg-gray-900/50 border-t border-gray-800">
              <p className="text-gray-300">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}