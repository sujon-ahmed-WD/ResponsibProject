import React from "react";

import { useEffect, useState } from "react";

const data = [
  {
    img: "https://t3.ftcdn.net/jpg/03/29/45/10/360_F_329451018_VdprRf0DVrabtTZvty43KDZS4asL4JpQ.jpg",
    title: "Padma River",
    des: "Rivers are lifelines of nature, flowing through landscapes, shaping ecosystems, and sustaining life across the planet.",
  },
  {
    img: "https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/6512d89c7acf21001c2996bd.jpg",
    title: "Meghna River",
    des: "Rivers are lifelines of nature, flowing through landscapes, shaping ecosystems, and sustaining life across the planet.",
  },
  {
    img: "https://i.pinimg.com/736x/88/60/8b/88608b9888bfdfa040c07f33950452ef.jpg",
    title: "Jamuna River",
    des: "Rivers are lifelines of nature, flowing through landscapes, shaping ecosystems, and sustaining life across the planet..",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/009/403/299/large_2x/landscape-with-rainbow-river-view-in-bangladesh-free-photo.jpg",
    title: "Brahmaputra River",
    des: "Rivers are lifelines of nature, flowing through landscapes, shaping ecosystems, and sustaining life across the planet..",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvC2kv1D0OwAn0dkEOAdTt6Z4dcghSYmKKsw&s",
    title: "Teesta River",
    des: "Revel in the vibrant colors and delicate petals of a blossoming field. An ideal retreat for those seeking a burst of natural beauty and serenity.",
  },
];

export const River = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === data.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);
  return (
    <div className=" flex flex-col lg:flex-row container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl   font-bold mb-4">
            Your Title Here
          </h2>
          <p className="text-lg  ">
            Bangladesh is known for its vast network of rivers, with over 700
            rivers crisscrossing the country. The three major rivers—Padma,
            Jamuna, and Meghna—are central to the country's geography and
            culture. These rivers provide water for agriculture, support
            fisheries, and are crucial for transportation. However, they also
            bring challenges like seasonal flooding and erosion. Despite the
            risks, the rivers are the lifeblood of Bangladesh, shaping its
            fertile land and supporting millions of livelihoods.
          </p>
        </div>
      </div>
      <div className=" md:w-full p-4   h-50   transform overflow-hidden rounded-lg  w-100   h-[540px] lg:gap-10">
        {data.map((slide, index) => {
          const { img, title, des } = slide;
          return (
            <div
              className={`${
                index === currentSlider
                  ? "visible opacity-100"
                  : "invisible opacity-0"
              } absolute inset-0 duration-500 ease-linear`}
              key={`index_${index}`}
            >
              <img
                src={img}
                width="1200"
                height="600"
                alt={title}
                className={`h-full w-full object-cover duration-500 ease-linear ${
                  index === currentSlider ? "scale-100" : "scale-105"
                }`}
              />
              <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
                <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-3xl">
                  <div className="mb-3 overflow-hidden text-xl font-semibold lg:text-3xl">
                    <h1
                      className={`${
                        index === currentSlider ? "" : "translate-y-12"
                      } duration-500 ease-linear`}
                    >
                      {title}
                    </h1>
                  </div>
                  <div className="overflow-hidden text-sm md:text-base lg:text-lg">
                    <p
                      className={`${
                        index === currentSlider ? "" : "-translate-y-12"
                      } duration-500 ease-linear`}
                    >
                      {des}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default River;
