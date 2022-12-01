import React from "react";
import banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="w-full brightness-50 h-full relative object-cover"
          src={banner}
          alt="home-banner"
        />
        <div className="grid place-items-center">
          <h1 className="text-white text-center font-semibold text-3xl md:text-5xl inset-y-1/3 absolute">
            Unlimited movies, TV <br /> shows, and more.
          </h1>
          <h2 className="text-base md:text-xl text-center text-white absolute top-[45%] md:top-[55%]">
            Watch anywhere. Cancel anytime.
          </h2>
          <button className="bg-red-700 py-3 px-4 hover:bg-red-800 text-white text-xl font-medium absolute  top-[50%] md:top-[65%]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
