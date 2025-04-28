import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-end sm:justify-center sm:items-center pb-10 bg-gradient-to-b from-gray-100 to-purple-100">

        <div className="sm:text-center px-5">
          <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold md:font-semibold mb-3 sm:mb-5">
            Welcome to PopX
          </h1>
          <p className="sm:text-lg text-gray-800 mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, dolorum!
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-5">
            <Link
              to="/register"
              className="px-6 py-2 text-white rounded-md text-center bg-PrimaryColor hover:bg-HoverPrimary transition"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="px-6 py-2 border border-PrimaryColor text-PrimaryColor rounded-md text-center bg-SecondaryColor hover:bg-PrimaryColor hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Home;