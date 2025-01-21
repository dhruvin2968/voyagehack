import React, { useState } from "react";
import { PostCard } from "./ItiernaryCard";

import { SkeletonCard } from "../components/SkeletonCard";
export const TripSurvey = () => {
  const [formData, setFormData] = useState({
    location: "",
    dates: "",
    theme: "",
  });

  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerateItinerary = async () => {
    setError(""); // Clear previous errors
    setItinerary(null); // Clear previous itinerary

    const { location, dates, theme } = formData;

    if (!location || !dates || !theme) {
      setError("Please provide all required fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://shreyanshknayak-itinerarygenerator.hf.space/generate-itinerary",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            destination: location,
            dates: dates,
            theme: theme,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setItinerary(data.itinerary);
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to the backend.");
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Plan Your Dream Trip ✈️
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Tell us about your trip, and we'll craft the perfect itinerary for
          you!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Destination"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            placeholder="Dates (e.g., 2025-01-20 to 2025-01-23)"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            placeholder="Theme (e.g., Family Vacation)"
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="button"
            onClick={handleGenerateItinerary}
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Generate Itinerary
          </button>
        </form>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {itinerary && (
          <div className="mt-8 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-4xl font-extrabold text-green-700 border-b-2 border-green-300 pb-2">
              Your Itinerary
            </h1>
            <p className="text-gray-700 text-lg mt-4 font-medium">
              {itinerary.introduction}
            </p>

            <div className="mt-6 bg-gray-100 rounded-lg p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Daily Plans
              </h2>
              {itinerary.days.split("*").map((line, index) => (
                <div key={index}>
                  {(line.startsWith("Day") ||
                    line.startsWith("Morning") ||
                    line.startsWith("Afternoon") ||
                    line.startsWith("Evening") ||
                    line.startsWith("Optional") ||
                    line.startsWith("Notes")) && <br />}
                  {line.startsWith("Day") ||
                  line.startsWith("Theme") ||
                  line.startsWith("Overall Vibe") ||
                  line.startsWith("##") ||
                  line.startsWith("Morning") ||
                  line.startsWith("Afternoon") ||
                  line.startsWith("Evening") ||
                  line.startsWith("Optional") ||
                  line.startsWith("Notes") ? (
                    <b>
                      <p className="text-gray-900 text-md font-serif">{line}</p>
                    </b>
                  ) : (
                    <p className="text-gray-900 text-md font-serif">{line}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-100 font-serif rounded-lg p-4 ">
              <h2 className="text-2xl font-semibold text-gray-800">Events:</h2>
              <ul className="list-disc mt-4 pl-8 text-gray-700 text-md">
                {itinerary.events.map((event, idx) => (
                  <li key={idx} className="py-2">
                    {event}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-gray-100 rounded-lg p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Final Notes:
              </h2>
              <p className="mt-4 text-gray-600">{itinerary.final_notes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
