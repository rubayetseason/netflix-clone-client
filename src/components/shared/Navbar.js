import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const path = "/";
        navigate(path);
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center w-full absolute z-[100] px-5 pt-5">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br cursor-pointer from-red-600 to-red-900">
          NITFLEX
        </h1>
      </div>
      {user?.uid ? (
        <div>
          <Link to="/gallery">
            <button className="text-white mr-4">Gallery</button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-red-600 py-2 px-3 hover:bg-red-800 text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/gallery">
            <button className="text-white mr-4">Gallery</button>
          </Link>
          <Link to="signin">
            <button className="bg-red-600 py-2 px-3 hover:bg-red-800 text-white">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
