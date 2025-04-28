import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      navigate("/dashboard");
    },
    [navigate]
  );

  useEffect(() => {
  }, [reset]);

  return (
    <div className="min-h-screen flex flex-col sm:justify-center sm:items-center px-5 pt-8 bg-gradient-to-b from-gray-100 to-purple-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 w-[80%] sm:w-full">
          Signin to your PopX account
        </h1>
        <p className="text-gray-500 font-medium mb-2">
          Welcome back! Please enter your credentials to access your account.
        </p>
        <p className="text-gray-500 mb-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              className={`w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 focus:outline-none  ${
                errors.email
                  ? "border-red-500"
                  : "focus:ring-indigo-500 focus:ring-2"
              }`}
              placeholder="Enter Email"
            />
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-PrimaryColor font-semibold"
            >
              Email
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
              className={`w-full border border-gray-300 rounded-md px-3 pt-4 pb-2 focus:outline-none ${
                errors.password
                  ? "border-red-500"
                  : "focus:ring-indigo-500 focus:ring-2"
              }`}
              placeholder="Enter 6 Character Password "
            />
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-PrimaryColor font-semibold"
            >
              Password
            </label>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 px-4 text-white font-semibold rounded-md transition ${
              isValid
                ? "bg-PrimaryColor hover:bg-HoverPrimary"
                : "bg-SecondaryColor cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;