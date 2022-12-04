import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import lights from "../assets/lights.jpg";
import { AuthContext } from "../context/AuthProvider";
import "./shared/inputStyle.css";
import toast from "react-hot-toast";

const Signup = () => {
  
  const { createUser, logOut } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChangeEmail = (event) => {
    setUserEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setUserPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        form.reset();
        logOut()
          .then((result) => {
            console.log(result);
            setUserEmail("");
            setUserPassword("");
          })
          .catch((error) => console.log(error));
      })
      .then((error) => console.log(error));
  };

  return (
    <div>
      <div className="w-full h-screen">
        <img
          src={lights}
          className="w-full brightness-75 h-full absolute object-cover"
          alt="lights background"
        />
        <div className="fixed w-full px-5 py-24 z-50 mt-14 md:mt-0">
          <div className="max-w-[450px] max-h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-10">
              <h1 className="text-2xl font-medium text-center">Sign Up</h1>
              <form className="mt-5" onSubmit={handleSubmit}>
                <div>
                  <div className="ad-textbox">
                    <input
                      className={`${userEmail ? "has-value" : ""}`}
                      id="textbox1"
                      type="text"
                      name="email"
                      required
                      onChange={handleChangeEmail}
                    />
                    <span className="material-symbols-outlined"></span>
                    <label htmlFor="textbox1">Email Address</label>
                    <div className="underline" />
                  </div>
                </div>
                <br />
                <div>
                  <div className="ad-textbox">
                    <input
                      className={`${userPassword ? "has-value" : ""}`}
                      id="textbox2"
                      type="password"
                      name="password"
                      required
                      onChange={handleChangePassword}
                    />
                    <span className="material-symbols-outlined"></span>
                    <label htmlFor="textbox2">Password</label>
                    <div className="underline" />
                  </div>
                </div>
                <br />
                <p className="mb-3 text-sm font-light">
                  Already have an account?{" "}
                  <Link to="/signup" className="underline">
                    Sign in now
                  </Link>{" "}
                </p>
                <button className="bg-[#E50914] w-full mt-4 py-3 font-medium">
                  Sign Up
                </button>
              </form>
              <div className="mt-10 flex justify-between">
                <div className="font-light text-sm">
                  <input type="checkbox" /> Remember me
                </div>
                <div className="text-sm">
                  <p className="hover:underline">Need help?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
