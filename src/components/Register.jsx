import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      navigate("/dashboard");
    },
    [navigate]
  );

  return (
    <div className="min-h-screen flex flex-col sm:justify-center sm:items-center px-5 py-8 bg-gradient-to-b from-gray-100 to-purple-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 w-[70%] sm:w-full sm:text-center">
          Create your PopX account
        </h1>
        <p className="text-gray-500 mb-6 sm:text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name Field */}
          <div className="relative mt-6">
            <input
              type="text"
              id="fullName"
              {...register("fullName", {
                required: "Full Name is required",
              })}
              className={`w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 focus:outline-none ${
                errors.fullName
                  ? "border-red-500"
                  : "focus:ring-indigo-500 focus:ring-2"
              }`}
              placeholder="Enter Full Name"
            />
            <label
              htmlFor="fullName"
              className="absolute -top-2 left-3 bg-transperant z-10 px-1 text-sm text-PrimaryColor font-semibold"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            {errors.fullName && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative mt-6">
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid phone number",
                },
              })}
              className={`w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 focus:outline-none ${
                errors.phone
                  ? "border-red-500"
                  : "focus:ring-indigo-500 focus:ring-2"
              }`}
              placeholder="Enter Phone Number"
            />
            <label
              htmlFor="phone"
              className="absolute -top-2 left-3 bg-transperant z-10 px-1 text-sm text-PrimaryColor font-semibold"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            {errors.phone && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="relative mt-6">
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className={`w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 focus:outline-none ${
                errors.email
                  ? "border-red-500"
                  : "focus:ring-indigo-500 focus:ring-2"
              }`}
              placeholder="Enter Email"
            />
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-transperant z-10 px-1 text-sm text-PrimaryColor font-semibold"
            >
              Email <span className="text-red-500">*</span>
            </label>
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="relative mt-6">
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 focus:outline-none ${
                errors.password
                  ? "border-red-500"
                  : "focus:ring-indigo-500 focus:ring-2"
              }`}
              placeholder="Enter Password"
            />
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-transperant z-10 px-1 text-sm text-PrimaryColor font-semibold"
            >
              Password <span className="text-red-500">*</span>
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Company Field */}
          <div className="relative mt-6">
            <input
              type="text"
              id="company"
              {...register("company", {
                required: "Company Name is required",
              })}
              className={`w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 focus:outline-none ${
                errors.company
                  ? "border-red-500"
                  : "focus:ring-indigo-500 focus:ring-2"
              }`}
              placeholder="Enter Company Name"
            />
            <label
              htmlFor="company"
              className="absolute -top-2 left-3 bg-transperant z-10 px-1 text-sm text-PrimaryColor font-semibold"
            >
              Company Name
            </label>
            {errors.company && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.company.message}
              </span>
            )}
          </div>

          {/* Agency Field */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-600">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex mt-2">
              <div className="flex items-center mr-6">
                <input
                  type="radio"
                  id="yes"
                  {...register("hasExperience", {
                    required: "Please select an option",
                  })}
                  value="yes"
                  className="mr-2"
                />
                <label htmlFor="yes" className="text-gray-600">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="no"
                  {...register("hasExperience", {
                    required: "Please select an option",
                  })}
                  value="no"
                  className="mr-2"
                />
                <label htmlFor="no" className="text-gray-600">
                  No
                </label>
              </div>
            </div>
            {errors.hasExperience && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.hasExperience.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 px-4 text-transperant z-10 font-semibold text-white rounded-md transition ${
              isValid
                ? "bg-PrimaryColor hover:bg-HoverPrimary"
                : "bg-SecondaryColor cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
