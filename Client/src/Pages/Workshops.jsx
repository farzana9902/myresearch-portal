import {
  FaUserTie,
  FaCalendarAlt,
  FaVideo,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Workshops() {
  const workshopData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      workshopName: "React.js Development Workshop",
      expertName: "Dr. Anil Kumar",
      date: "15 August 2026",
      mode: "Online",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      workshopName: "Machine Learning Bootcamp",
      expertName: "Dr. Priya Sharma",
      date: "22 August 2026",
      mode: "Offline",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      workshopName: "Research Methodology",
      expertName: "Prof. Ramesh Rao",
      date: "05 September 2026",
      mode: "Online",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      workshopName: "Cyber Security Awareness",
      expertName: "Dr. Sneha Patil",
      date: "18 September 2026",
      mode: "Offline",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      workshopName: "Cloud Computing Workshop",
      expertName: "Prof. Kiran Joshi",
      date: "25 September 2026",
      mode: "Online",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      workshopName: "AI for Beginners",
      expertName: "Dr. Rahul Verma",
      date: "10 October 2026",
      mode: "Offline",
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700">
            Upcoming Workshops
          </h1>

          <p className="text-gray-600 mt-3">
            Register for upcoming workshops and webinars conducted by
            experienced researchers and industry experts.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopData.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={workshop.image}
                alt={workshop.workshopName}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {workshop.workshopName}
                </h2>

                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-blue-600" />
                    <span>{workshop.expertName}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-green-600" />
                    <span>{workshop.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {workshop.mode === "Online" ? (
                      <FaVideo className="text-purple-600" />
                    ) : (
                      <FaMapMarkerAlt className="text-red-600" />
                    )}

                    <span>{workshop.mode}</span>
                  </div>
                </div>

                <Link to="/register">
                  <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 duration-300">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workshops;
