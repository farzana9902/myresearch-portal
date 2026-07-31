import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserTag,
  FaGraduationCap,
} from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex justify-center items-center px-5 py-10">

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2">

        {/* Left Section */}

        <div className="bg-blue-700 text-white flex flex-col justify-center items-center p-10">

          <FaGraduationCap className="text-7xl mb-6" />

          <h1 className="text-4xl font-bold mb-5">
            MyResearch Portal
          </h1>

          <p className="text-center leading-7">
            Join our Research & Workshop Management System and connect
            with researchers, experts, institutions, and participants
            to collaborate and learn together.
          </p>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            alt="Register"
            className="rounded-xl mt-8 shadow-lg"
          />

        </div>

        {/* Right Section */}

        <div className="p-10">

          <h2 className="text-3xl font-bold text-center text-blue-700">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Register to access MyResearch Portal
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}

            <div>

              <label className="font-semibold">
                Full Name
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaUser className="text-blue-700" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />

              </div>

            </div>

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
                  placeholder="Enter Email"
                  value={formData.email}
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
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />

              </div>

            </div>

            {/* Role */}

            <div>

              <label className="font-semibold">
                Select Role
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaUserTag className="text-blue-700" />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                >
                  <option value="">Choose Role</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Expert">Expert</option>
                  <option value="Institution">Institution</option>
                  <option value="Participant">Participant</option>
                </select>

              </div>

            </div>

            {/* Register Button */}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 duration-300 font-semibold"
            >
              Register
            </button>

          </form>

          <p className="text-center mt-8">
            Already have an account?

            <Link
              to="/login"
              className="text-blue-700 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;