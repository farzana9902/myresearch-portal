import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaGraduationCap } from "react-icons/fa";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);

    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex justify-center items-center px-5">

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

        {/* Left Section */}

        <div className="bg-blue-700 text-white p-10 flex flex-col justify-center items-center">

          <FaGraduationCap className="text-7xl mb-6" />

          <h1 className="text-4xl font-bold mb-4 text-center">
            MyResearch Portal
          </h1>

          <p className="text-center leading-7">
            Welcome to the Research & Workshop Management System.

            Login to access research projects, workshops,
            webinars, and collaborate with experts.
          </p>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Research"
            className="rounded-xl mt-8"
          />

        </div>

        {/* Right Section */}

        <div className="p-10">

          <h2 className="text-3xl font-bold text-center text-blue-700">
            Login
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Sign in to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}

            <div>

              <label className="font-semibold">
                Email
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaEnvelope className="text-blue-700" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="font-semibold">
                Password
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaLock className="text-blue-700" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />

              </div>

            </div>

            {/* Remember */}

            <div className="flex justify-between items-center">

              <label className="flex items-center gap-2">

                <input
                  type="checkbox"
                  name="remember"
                  checked={loginData.remember}
                  onChange={handleChange}
                />

                Remember Me

              </label>

              <Link
                to="/forgot-password"
                className="text-blue-700 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 duration-300 font-semibold"
            >
              Login
            </button>

          </form>

          {/* Register */}

          <p className="text-center mt-8">

            Don't have an account?

            <Link
              to="/register"
              className="text-blue-700 font-semibold ml-2 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;