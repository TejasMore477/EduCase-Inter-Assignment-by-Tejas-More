import React, { useState } from "react";
import profilePlaceholder from "../assets/dummyImg.jpg";

function Dashbord() {
  const [user] = useState({
    name: "Mr.Been",
    email: "Mr.Been@example.com",
    photo: profilePlaceholder,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-purple-100 ">
      {/* Account Settings */}
      <div className="bg-white py-4 px-5">
        <p className="text-xl font-semibold text-gray-500 cursor-pointer">Account Seetings</p>
      </div>

      <div className="flex my-3 px-5">
        <div className="space-y-3 pb-3 border-b-2 border-zinc-300 border-dashed">
          {/* Profile Section */}
          <div className="flex gap-8 items-center">
            <div className="relative">
              <img
                src={user.photo}
                alt="Profile"
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover object-center"
              />
              <div className="absolute bottom-0 right-1 bg-indigo-600 w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-base text-gray-600 mb-5">{user.email}</p>
            </div>
          </div>

          {/* Content Section */}
          <p className="text-base text-gray-800 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus aspernatur dolorum dicta!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
