import { useState } from "react";

export const PostCard = ({ post }) => {
  const { title, days } = post;
  const [showFullItinerary, setShowFullItinerary] = useState(false);

  return (
    <div
      className="card cursor-pointer p-4 border bg-blue-400 rounded-md shadow-lg hover:shadow-xl transition"
      onClick={() => setShowFullItinerary(!showFullItinerary)}
    >
      <h1 className="text-xl font-bold">{title}</h1>
      {showFullItinerary && days && (
        <div className="mt-4">
          {days.split("*").map((line, index) => {
            const cleanedLine = line.replace(/\\n/g, "").trim();

            return (
              <div key={index}>
                {(cleanedLine.startsWith("Day") ||
                  cleanedLine.startsWith("Morning") ||
                  cleanedLine.startsWith("Afternoon") ||
                  cleanedLine.startsWith("Evening") ||
                  cleanedLine.startsWith("Optional") ||
                  cleanedLine.startsWith("Notes")) && <br />}
                {cleanedLine.startsWith("Day") ||
                cleanedLine.startsWith("Theme") ||
                cleanedLine.startsWith("Overall Vibe") ||
                cleanedLine.startsWith("##") ||
                cleanedLine.startsWith("Morning") ||
                cleanedLine.startsWith("Afternoon") ||
                cleanedLine.startsWith("Evening") ||
                cleanedLine.startsWith("Optional") ||
                cleanedLine.startsWith("Notes") ? (
                  <b>
                    <p className="text-gray-900 text-md font-serif">{cleanedLine}</p>
                  </b>
                ) : (
                  <p className="text-gray-900 text-md font-serif">{cleanedLine}</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
