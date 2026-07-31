import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
  FaUsers,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      id: 1,
      icon: <FaUserGraduate className="text-5xl text-blue-600" />,
      number: "500+",
      title: "Researchers",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher className="text-5xl text-green-600" />,
      number: "120+",
      title: "Experts",
    },
    {
      id: 3,
      icon: <FaUniversity className="text-5xl text-purple-600" />,
      number: "75+",
      title: "Institutions",
    },
    {
      id: 4,
      icon: <FaUsers className="text-5xl text-red-600" />,
      number: "10K+",
      title: "Participants",
    },
    {
      id: 5,
      icon: <FaBookOpen className="text-5xl text-orange-500" />,
      number: "350+",
      title: "Research Projects",
    },
    {
      id: 6,
      icon: <FaCalendarAlt className="text-5xl text-indigo-600" />,
      number: "900+",
      title: "Workshops Conducted",
    },
  ];

  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center text-white mb-14">
          <h2 className="text-4xl font-bold">
            Our Statistics
          </h2>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
            Empowering researchers, experts, institutions, and
            participants through one integrated research and
            workshop management platform.
          </p>
        </div>

        {/* Statistics Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg text-center p-6 hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-800">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;