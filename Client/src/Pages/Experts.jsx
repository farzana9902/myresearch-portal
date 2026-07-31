import {
  FaStar,
  FaChalkboardTeacher,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

function Experts() {
  const experts = [
    {
      id: 1,
      name: "Dr. Anil Kumar",
      specialization: "Full Stack Development",
      experience: "12+ Years",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Machine Learning",
      experience: "10+ Years",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    {
      id: 3,
      name: "Prof. Ramesh Rao",
      specialization: "Research Methodology",
      experience: "15+ Years",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Meet Our Top Experts
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Learn from experienced researchers, professors, and industry
            professionals who conduct workshops, webinars, and mentoring
            sessions through the MyResearch Portal.
          </p>
        </div>

        {/* Expert Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-center text-gray-800">
                  {expert.name}
                </h3>

                <div className="flex justify-center mt-3">
                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {expert.specialization}
                  </span>
                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex justify-between">
                    <span className="font-semibold">Experience</span>
                    <span>{expert.experience}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Rating</span>

                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar />
                      <span>{expert.rating}</span>
                    </div>
                  </div>

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-8">

                  <button className="flex-1 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 duration-300 flex justify-center items-center gap-2">
                    <FaChalkboardTeacher />
                    View Profile
                  </button>

                  <button className="bg-gray-200 p-3 rounded-lg hover:bg-blue-700 hover:text-white duration-300">
                    <FaEnvelope />
                  </button>

                  <button className="bg-gray-200 p-3 rounded-lg hover:bg-blue-700 hover:text-white duration-300">
                    <FaLinkedin />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experts;