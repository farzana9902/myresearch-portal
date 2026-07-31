import {
  FaBookOpen,
  FaUserGraduate,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

function Research() {
  const researchData = [
    {
      id: 1,
      title: "Artificial Intelligence in Healthcare",
      researcher: "Dr. Anil Kumar",
      progress: 80,
      status: "Active",
      category: "Artificial Intelligence",
    },
    {
      id: 2,
      title: "Machine Learning for Agriculture",
      researcher: "Dr. Priya Sharma",
      progress: 65,
      status: "In Progress",
      category: "Machine Learning",
    },
    {
      id: 3,
      title: "Cloud Security Framework",
      researcher: "Prof. Ramesh Rao",
      progress: 100,
      status: "Completed",
      category: "Cyber Security",
    },
    {
      id: 4,
      title: "Blockchain in Education",
      researcher: "Dr. Sneha Patil",
      progress: 45,
      status: "Ongoing",
      category: "Blockchain",
    },
    {
      id: 5,
      title: "IoT Smart Campus",
      researcher: "Prof. Kiran Joshi",
      progress: 90,
      status: "Review",
      category: "Internet of Things",
    },
    {
      id: 6,
      title: "Big Data Analytics",
      researcher: "Dr. Rahul Verma",
      progress: 70,
      status: "Active",
      category: "Data Science",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Active":
        return "bg-blue-100 text-blue-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      case "Review":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700">
            Research Projects
          </h1>

          <p className="text-gray-600 mt-4">
            Explore ongoing, completed, and upcoming research projects.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {researchData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <div className="bg-blue-700 text-white p-5 rounded-t-xl">
                <FaBookOpen className="text-4xl mb-3" />

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="text-sm mt-2">
                  {item.category}
                </p>
              </div>

              <div className="p-6 space-y-4">

                <div className="flex items-center gap-3">
                  <FaUserGraduate className="text-blue-600" />
                  <span>{item.researcher}</span>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center gap-2">
                      <FaChartLine className="text-green-600" />
                      Progress
                    </span>

                    <span>{item.progress}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-700 h-3 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                  <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                    <FaCheckCircle />
                    View Details
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

export default Research;