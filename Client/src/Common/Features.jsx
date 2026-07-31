import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaUsers,
  FaFileUpload,
  FaComments,
  FaUserShield,
} from "react-icons/fa";

function Features() {
  const featureData = [
    {
      id: 1,
      icon: <FaBookOpen className="text-5xl text-blue-600" />,
      title: "Research Management",
      description:
        "Track daily research activities, manage projects, and monitor progress efficiently.",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher className="text-5xl text-green-600" />,
      title: "Workshop & Webinar",
      description:
        "Organize online and offline workshops with scheduling and participant management.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-5xl text-purple-600" />,
      title: "Expert Collaboration",
      description:
        "Connect researchers with industry experts and reviewers for guidance and knowledge sharing.",
    },
    {
      id: 4,
      icon: <FaFileUpload className="text-5xl text-orange-500" />,
      title: "Document Sharing",
      description:
        "Upload and share PPTs, assignments, code files, and research documents securely.",
    },
    {
      id: 5,
      icon: <FaComments className="text-5xl text-pink-600" />,
      title: "Feedback System",
      description:
        "Participants can submit ratings and feedback after attending workshops and webinars.",
    },
    {
      id: 6,
      icon: <FaUserShield className="text-5xl text-red-600" />,
      title: "Role-Based Access",
      description:
        "Separate dashboards and permissions for Researchers, Experts, Institutions, and Participants.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Features
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            MyResearch Portal provides everything needed to manage research,
            conduct workshops, collaborate with experts, and support learning
            through one centralized platform.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featureData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <div className="flex justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;