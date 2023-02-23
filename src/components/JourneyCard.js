import React from "react";

const JourneyCard = (journey) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white" key={journey.id }>
        <img className="w-full" src={journey.image} alt="Sunset in the mountains"/>
        <div className="px-6">
        <div className="font-bold text-xl">{journey.title}</div>
        <p className="text-gray-700 text-base">
            {journey.story}
        </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ayahuasca</span>
        </div>
    </div>
  );
};
export default JourneyCard;
