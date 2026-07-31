import {
  FaBook,
  FaUsers,
  FaUniversity,
  FaChalkboardTeacher,
  FaBell,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";

function Dashboard() {
  const statistics = [
    {
      id: 1,
      title: "Research Projects",
      count: 24,
      icon: <FaBook className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      title: "Workshops",
      count: 15,
      icon: <FaChalkboardTeacher className="text-4xl text-green-600" />,
    },
    {
      id: 3,
      title: "Experts",
      count: 18,
      icon: <FaUsers className="text-4xl text-purple-600" />,
    },
    {
      id: 4,
      title: "Participants",
      count: 320,
      icon: <FaUserGraduate className="text-4xl text-red-600" />,
    },
  ];

  const workshops = [
    {
      title: "React.js Workshop",
      date: "15 Aug 2026",
      trainer: "Dr. Anil Kumar",
    },
    {
      title: "Machine Learning Webinar",
      date: "22 Aug 2026",
      trainer: "Dr. Priya Sharma",
    },
    {
      title: "Research Methodology",
      date: "05 Sep 2026",
      trainer: "Prof. Ramesh Rao",
    },
  ];

  const notifications = [
    "Workshop registration is now open.",
    "Research paper submission deadline extended.",
    "New expert joined the portal.",
    "Certificates are available for download.",
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-blue-700 text-white px-8 py-6 shadow-md">
        <h1 className="text-3xl font-bold">
          Welcome to MyResearch Dashboard
        </h1>

        <p className="mt-2 text-blue-100">
          Manage your research activities, workshops, and collaborations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {statistics.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl duration-300"
            >
              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-gray-500">
                    {item.title}
                  </h2>

                  <h3 className="text-4xl font-bold mt-2">
                    {item.count}
                  </h3>
                </div>

                {item.icon}

              </div>
            </div>
          ))}

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Workshops */}

          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" />
              Upcoming Workshops
            </h2>

            {workshops.map((item, index) => (
              <div
                key={index}
                className="border-b py-4 last:border-none"
              >
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.date}
                </p>

                <p className="text-blue-700">
                  {item.trainer}
                </p>
              </div>
            ))}

          </div>

          {/* Notifications */}

          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaBell className="text-yellow-500" />
              Notifications
            </h2>

            <ul className="space-y-4">

              {notifications.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 rounded-lg p-4"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Research Overview */}

        <div className="bg-white rounded-xl shadow-lg p-6 mt-10">

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaUniversity className="text-blue-700" />
            Recent Research Projects
          </h2>

          <table className="w-full">

            <thead className="bg-blue-700 text-white">

              <tr>
                <th className="p-3">Project</th>
                <th>Status</th>
                <th>Leader</th>
                <th>Progress</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">AI in Healthcare</td>
                <td>Active</td>
                <td>Dr. Anil Kumar</td>
                <td>80%</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Cloud Security</td>
                <td>Review</td>
                <td>Dr. Priya Sharma</td>
                <td>60%</td>
              </tr>

              <tr>
                <td className="p-3">IoT Smart Campus</td>
                <td>Completed</td>
                <td>Prof. Ramesh Rao</td>
                <td>100%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;