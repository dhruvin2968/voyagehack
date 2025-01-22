import React, { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Planorama?",
      answer: "Planorama is a comprehensive travel planner designed to simplify your trips with features like itinerary generation, hotel booking, expense tracking, and more."
    },
    {
      question: "How do I create a travel itinerary?",
      answer: "Simply provide your travel dates and preferences, and Planorama will generate a customized itinerary for you."
    },
    {
      question: "Can I book hotels through Planorama?",
      answer: "Yes, Planorama allows you to book hotels at competitive prices with options for hassle-free cancellations."
    },
    {
      question: "Does Planorama support multi-language features?",
      answer: "Absolutely! Planorama supports multiple languages to ensure a seamless experience for users worldwide."
    },
    {
      question: "Can I track my travel expenses?",
      answer: "Yes, you can track your expenses in real-time to stay within your budget while traveling."
    },
    {
      question: "What sightseeing options are available?",
      answer: "Planorama provides recommendations for popular attractions and hidden gems tailored to your preferences and trip duration."
    },
    {
      question: "Is there a mobile app for Planorama?",
      answer: "Currently, Planorama is available as a web application. A mobile app is under development."
    },
    {
      question: "Does Planorama offer customer support?",
      answer: "Yes, we provide 24/7 customer support to assist you with your travel needs."
    },
    {
      question: "How do I cancel a booking?",
      answer: "You can cancel bookings through the ‘My Trips’ section on your dashboard. Cancellation policies may apply."
    },
    {
      question: "Does Planorama offer group travel planning?",
      answer: "Yes, you can plan trips for groups and share itineraries with group members."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, Planorama maintains transparency with no hidden charges. All costs are clearly outlined."
    },
    {
      question: "Can I sync my bank account for expense tracking?",
      answer: "Yes, you can securely sync your bank account to track expenses directly within Planorama."
    },
    {
      question: "Is my data safe with Planorama?",
      answer: "Yes, we use advanced security measures to ensure your data is safe and private."
    },
    {
      question: "Does Planorama offer travel insurance?",
      answer: "Currently, we do not offer travel insurance. However, we recommend trusted providers for your travel needs."
    },
    {
      question: "Can I access Planorama offline?",
      answer: "Some features, like viewing saved itineraries, are available offline. However, booking and live tracking require an internet connection."
    }
  ];

  return (
    <div className="min-h-screen bg-Blue text-gray-800">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-teal-900">FAQs</h1>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left bg-white p-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-teal-300"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-teal-800">{faq.question}</span>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-2 bg-gray-50 p-4 rounded-lg text-gray-600 shadow-inner">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

