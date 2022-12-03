import React, { useState } from "react";
import lights from "../assets/lights.jpg";
import "./shared/inputStyle.css";

const Signin = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    setUserEmail(email);
    console.log(email);
  };

  return (
    <div>
      <div className="w-full h-screen">
        <img
          src={lights}
          className="w-full brightness-75 h-full absolute object-cover"
          alt="lights background"
        />
        <div className="fixed w-full px-5 py-24 z-50">
          <div className="max-w-[450px] max-h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-10">
              <h1 className="text-2xl font-medium">Sign In</h1>
              <form className="mt-5" onSubmit={handleSubmit}>
                <div>
                  <div className="ad-textbox">
                    <input
                      className={`${userEmail ? "has-value" : ""}`}
                      id="textbox"
                      type="text"
                      name="email"
                    />
                    <span className="material-symbols-outlined"></span>
                    <label htmlFor="textbox">Email Address</label>
                    <div className="underline" />
                  </div>
                </div>

                <br />
                <button className="bg-[#E50914] w-full  py-3 font-medium">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
