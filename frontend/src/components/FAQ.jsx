import React, { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const faqData = [
  {
    question: "How to contact with rider's emergency?",
    answer:
      "You can contact the rider's emergency service via the app by tapping on 'Emergency Support' under the Help section.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer:
      "Ensure your phone's OS is updated to the latest version. Clear the cache and retry installation or download directly from our website.",
  },
  {
    question: "Website response taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions and answers on a particular topic. The purpose is to provide helpful info efficiently.",
  },
  {
    question: "New update fixed all bug and issues",
    answer:
      "Yes! The latest update includes performance enhancements, bug fixes, and UI improvements to deliver a smoother experience.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="md:px-20 py-12 bg-white text-[#0F2137]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-[#EF9E48] uppercase font-semibold">Frequent Question</p>
          <h2 className="text-3xl font-bold mt-2">Do you have any question?</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="p-3 cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start gap-3">
                {activeIndex === index ? (
                  <FaMinusCircle className="text-[#3FDBB1] mt-1" size={20} />
                ) : (
                  <IoIosAddCircle className="text-[#3FDBB1] mt-1" size={20} />
                )}
                <div>
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  {activeIndex === index && (
                    <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
