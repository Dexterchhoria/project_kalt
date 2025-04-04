import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const faqsData = [
  {
    question: "What is Kaltarang'25?",
    answer:
      "Kaltarang'25 is an annual cultural festival featuring music, dance, and various performances.",
  },
  {
    question: "When and where will Kaltarang'25 take place?",
    answer:
      "The event will be held at RGIPT Jais Campus on 18th April. Stay tuned for more details!",
  },
  {
    question: "How can I participate?",
    answer:
      "You can register online through our website. Follow us on social media for updates on registration dates.",
  },
  {
    question: "Are there any entry fees?",
    answer:
      "Entry fees vary for different events. Check our website for specific pricing details.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] md:text-3xl text font-bold italic text-glow mb-8">
        FAQs
      </h2>

      <div className="max-w-5xl mx-auto">
        {faqsData.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4 mb-4">
            <button
              className="w-full text-left flex text justify-between items-center text-lg md:text-xl font-semibold text-gray-300 hover:text-white transition duration-300"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 text text-start">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
  );
};

export default Faqs;
