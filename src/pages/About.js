import React from 'react';

export const AboutPage = () => {
  useEffect(() => {
    document.title = `About - Planorama`;
  });
  return (
    <div className="min-h-screen bg-Bluee">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-indigo-900">About Planorama</h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Welcome to <span className="font-semibold text-indigo-800">Planorama</span>, your ultimate travel planning companion! We are here to simplify your journeys, making every trip stress-free and memorable. From crafting tailored itineraries to seamless bookings, Planorama ensures your travel experience is nothing short of extraordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Travel Itinerary Generation</h2>
            <p className="text-gray-600">Create personalized itineraries with recommended places, activities, and optimized schedules based on your preferences.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Hotel Booking & Cancellations</h2>
            <p className="text-gray-600">Find and book the best hotels at competitive prices, with hassle-free cancellation options.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Sightseeing Recommendations</h2>
            <p className="text-gray-600">Discover popular attractions and hidden gems tailored to your interests and trip duration.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Real-Time Expense Tracking</h2>
            <p className="text-gray-600">Keep track of your expenses during the trip to stay within budget without compromising on fun.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Multi-Language Support</h2>
            <p className="text-gray-600">Planorama speaks your language, offering support in multiple languages for a seamless experience.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Currency Converter</h2>
            <p className="text-gray-600">Stay updated with real-time exchange rates and effortlessly manage your travel finances.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Why Choose Planorama?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            At Planorama, we believe that every journey should be as unique as the traveler. With cutting-edge features, user-friendly interfaces, and unparalleled support, we are committed to redefining the way you travel.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition-all duration-200">
            Start Planning Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
};

