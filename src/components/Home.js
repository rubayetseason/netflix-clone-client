import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import stranger from "../assets/stranger.jpg";
import tv from "../assets/tv.png";
import "./Home.css";

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
          <Link to="/signin" className="absolute top-[50%] md:top-[65%]">
            <button className="bg-red-700 py-3 px-4 hover:bg-red-800 text-white text-xl font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 place-items-center">
          <div>
            <img src={stranger} className="md:p-5" alt="" />
          </div>
          <div className="pr-8">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Download your shows to watch offline.
            </h1>
            <p className="text-base md:text-xl mt-4">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 place-items-center">
          <div className="">
            <img src={tv} alt="" />
          </div>
          <div className="pr-8 md:row-start-1 ">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Enjoy on your TV.
            </h1>
            <p className="text-base md:text-xl mt-4">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
