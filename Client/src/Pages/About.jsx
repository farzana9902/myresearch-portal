import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaBookOpen,
  FaChalkboardTeacher,
  FaCertificate,
} from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-100">

      {/* Hero Section */}

      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            About MyResearch Portal
          </h1>

          <p className="text-lg max-w-3xl mx-auto leading-8">
            MyResearch Portal is a Research and Workshop Management
            System that connects researchers, experts, institutions,
            and participants through innovative research collaboration,
            workshops, webinars, and knowledge sharing.
          </p>

        </div>

      </section>

      {/* About */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900"
            alt="About"
            className="rounded-xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8">
              Our platform simplifies research management by allowing
              institutions to organize workshops, researchers to
              collaborate on projects, experts to conduct technical
              sessions, and participants to register, learn, and earn
              certificates—all from a single platform.
            </p>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-blue-50 p-8 rounded-xl shadow-lg">

            <FaBullseye className="text-5xl text-blue-700 mb-5" />

            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-7">
              To provide an easy-to-use platform that promotes
              research collaboration, academic excellence, innovation,
              and effective workshop management.
            </p>

          </div>

          <div className="bg-green-50 p-8 rounded-xl shadow-lg">

            <FaEye className="text-5xl text-green-600 mb-5" />

            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-7">
              To become a leading digital platform connecting
              researchers, universities, experts, and students for
              global knowledge sharing and continuous learning.
            </p>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl duration-300">

              <FaBookOpen className="text-5xl text-blue-700 mx-auto mb-5" />

              <h3 className="text-xl font-bold">
                Research Management
              </h3>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl duration-300">

              <FaChalkboardTeacher className="text-5xl text-green-600 mx-auto mb-5" />

              <h3 className="text-xl font-bold">
                Workshops & Webinars
              </h3>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl duration-300">

              <FaUsers className="text-5xl text-purple-600 mx-auto mb-5" />

              <h3 className="text-xl font-bold">
                Expert Collaboration
              </h3>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl duration-300">

              <FaCertificate className="text-5xl text-orange-500 mx-auto mb-5" />

              <h3 className="text-xl font-bold">
                Digital Certificates
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-blue-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose MyResearch Portal?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-blue-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Easy Collaboration
              </h3>
              <p>
                Connect researchers, experts, and institutions in one
                platform.
              </p>
            </div>

            <div className="bg-blue-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Smart Workshop Management
              </h3>
              <p>
                Schedule, organize, and manage workshops efficiently.
              </p>
            </div>

            <div className="bg-blue-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Secure Platform
              </h3>
              <p>
                Manage research data and participant information
                securely.
              </p>
            </div>

            <div className="bg-blue-600 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                Certificate Support
              </h3>
              <p>
                Generate and download certificates after successful
                workshop completion.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;