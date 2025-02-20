import React, { useEffect } from "react";
import BgVideo from "../components/BgVideo";
import { ThemeSelector } from "../components/ThemeSelector";
import { Chatbot } from "../components/ChatBot";
import Carousel from "../components/Carousel"

import TravelScene from "../components/Scene"

export const Home = () => {
  useEffect(() => {
    document.title = `Planorama - The Perfect TravelPlanner`;
  }, []);

  const handleScrollToThemeSelector = () => {
    const element = document.getElementById("theme-selector");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the element
      });
    }
  };

  return (
    <div className="min-h-screen">
      <BgVideo/>
      {/* Hero Section */}
      <main className="">
        <div className="absolute inset-0 flex flex-col justify-center items-left text-left text-white px-4">
          <h1 className="text-8xl text-white font-bold  mb-4 pl-8 ">
            Explore the
          </h1>
          <h1 className="text-8xl  text-white font-bold mb-4 pl-8 ">
            world with us
          </h1>

          <h4 className="text-2xl text-black pl-8">
            Planorama, the ultimate travel planner, lets you create
          </h4>
          <h4 className="text-2xl text-black pl-8">
            unforgettable experiences with ease. Whether you're
          </h4>
          <h4 className="text-2xl text-black pl-8">
            a seasoned explorer or a first-time traveler.
          </h4>
          <div className="flex">
            <button
              onClick={handleScrollToThemeSelector}
              className="mt-4 ml-8 max-w-52  bg-blue-950   text-white font-semibold rounded-2xl shadow-lg transform transition duration-300 hover:bg-black"
            >
              <span className="font-medium text-xl">Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
                className="inline ml-2"
              >
                <circle
                  strokeWidth="3"
                  stroke="white"
                  r="30.5"
                  cy="37"
                  cx="37"
                ></circle>
                <path
                  fill="white"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </button>

          </div>
         
        </div>
        <Carousel/>
       
      </main>
      <TravelScene />
      <div id="theme-selector">
      
      <ThemeSelector />
      </div>
      {/* Theme Selector Section */}
      <div id="theme-selector">
      
       
       
        <div className="border rounded-bl-full p-4 flex items-center justify-center">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};
