import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full absolute z-[100] px-5 pt-5">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br cursor-pointer from-red-600 to-red-900">
          NETFLIX
        </h1>
      </div>
      <div>
        <button className="text-white mr-4">Sign In</button>
        <button className="bg-red-600 py-2 px-3 hover:bg-red-700 text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
