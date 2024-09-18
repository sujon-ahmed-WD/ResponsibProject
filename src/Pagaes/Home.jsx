import React from "react";
import Banner from "../Components/Banner";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import River from "../Components/River";
import CardHome from "../Components/CardHome";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Dhaka",
      "Chattogram",
      "Rajshahi",
      "Khulna",
      "Sylhet",
      "Barisal",
      "Rangpur",
      "Mymensingh",
      "Cumilla",
      "Gazipur",
      "Narayanganj",
      "Jessore",
      "Cox's Bazar",
      "Natore",
      "Noakhali",
    ],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const [nameEffect] = useTypewriter({
    words: [
      "Discover the serene beauty of Bangladesh, where lush greenery, rivers, and mangrove forests create a natural paradise.",
    ],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="mt-5 p-3 mb-2 text-bold ">
      <h1 className="text-center  text-red-400 text-3xl">
        The Famous Counity in Bangladesh{" "}
        <span className="font-bold text-green-400"> {typeEffect}</span>{" "}
        <Cursor cursorStyle="!" />
      </h1>
      <Banner />

      <div>
        <h1 className="text-center">
          <span className="text-green-400 text-2xl  lg:text-3xl">{nameEffect}</span>
          <Cursor cursorStyle="!" />
        </h1>
      </div>
      {/* The Rebier Side ..... */}
      <div>
        <h1 className="text-center text-red-400  text-2xl font-bold lg:3xl ">
          This is a River Side{" "}
        </h1>
        <River />
        {/* Country Section */}
        <div>
          <h1 className="text-4xl font-bold text-center text-green-400">All Country District</h1>
        </div>
        <CardHome />
      </div>
    </div>
  );
};

export default Home;
