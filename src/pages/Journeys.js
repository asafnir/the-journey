import React from "react";
import MainLayout from "layouts/MainLayout"

const JOURNEYS = [
  {
    id: '1',
    title: "Long time",
    image: "https://cdn.mos.cms.futurecdn.net/dEbFeK75AEXnEvPw5yvLwi-970-80.jpg.webp",
    story: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
  },
  {
    id: '2',
    title: "Long time",
    image: "https://cdn.mos.cms.futurecdn.net/dEbFeK75AEXnEvPw5yvLwi-970-80.jpg.webp",
    story: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
  },
  {
    id: '3',
    title: "Long time",
    image: "https://cdn.mos.cms.futurecdn.net/dEbFeK75AEXnEvPw5yvLwi-970-80.jpg.webp",
    story: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
  },
   {
    id: '4',
    title: "Long time",
    image: "https://cdn.mos.cms.futurecdn.net/dEbFeK75AEXnEvPw5yvLwi-970-80.jpg.webp",
    story: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
  },
  {
    id: '5',
    title: "Long time",
    image: "https://cdn.mos.cms.futurecdn.net/dEbFeK75AEXnEvPw5yvLwi-970-80.jpg.webp",
    story: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
  },
  {
    id: '6',
    title: "Long time",
    image: "https://cdn.mos.cms.futurecdn.net/dEbFeK75AEXnEvPw5yvLwi-970-80.jpg.webp",
    story: "American visual artist, author, teacher, and Vajrayana practitioner known for creating spiritual and psychedelic paintings.[1] He works in multiple forms including performance art, process art, installation art, sculpture, visionary art, and painting",
  },
]

const Journeys = () => {
  return (
    <MainLayout>
      <div className="pb-16">
        <p className="text-4xl text-white text-center">Shared Journeys</p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {JOURNEYS.map(journey => 
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white" key={journey.id }>
              <img class="w-full" src={journey.image} alt="Sunset in the mountains"/>
              <div class="px-6">
              <div class="font-bold text-xl">{journey.title}</div>
              <p class="text-gray-700 text-base">
                  {journey.story}
              </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ayahuasca</span>
              </div>
            </div>
          )}
      </div>
    </MainLayout>
  );
}

export default Journeys;
