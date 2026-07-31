import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from "react-icons/fa";

function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div>
          <p className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-5">
            Research • Workshops • Webinars
          </p>

          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            MyResearch Portal &
            <span className="text-blue-700">
              {" "}Workshop Management
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            A complete platform for researchers, experts, institutions,
            and participants to manage research activities, organize
            workshops, conduct webinars, share learning materials,
            and collaborate effectively.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/about"
              className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="text-center">
              <FaBookOpen className="text-4xl text-blue-700 mx-auto mb-3" />
              <h3 className="font-bold">Research</h3>
              <p className="text-sm text-gray-600">
                Track research progress
              </p>
            </div>

            <div className="text-center">
              <FaChalkboardTeacher className="text-4xl text-green-600 mx-auto mb-3" />
              <h3 className="font-bold">Workshops</h3>
              <p className="text-sm text-gray-600">
                Organize webinars
              </p>
            </div>

            <div className="text-center">
              <FaUsers className="text-4xl text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold">Collaboration</h3>
              <p className="text-sm text-gray-600">
                Connect with experts
              </p>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Research Collaboration"
            className="rounded-2xl shadow-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
