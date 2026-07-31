import {
  FaUserTie,
  FaCalendarAlt,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function Institution() {
  const experts = [
    {
      id: 1,
      name: "Dr. Anil Kumar",
      specialization: "Artificial Intelligence",
      experience: "12 Years",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Machine Learning",
      experience: "10 Years",
    },
    {
      id: 3,
      name: "Prof. Ramesh Rao",
      specialization: "Cyber Security",
      experience: "15 Years",
    },
  ];

  const schedules = [
    {
      id: 1,
      workshop: "React.js Workshop",
      date: "15 Aug 2026",
      mode: "Online",
    },
    {
      id: 2,
      workshop: "Machine Learning Bootcamp",
      date: "22 Aug 2026",
      mode: "Offline",
    },
    {
      id: 3,
      workshop: "Cloud Computing",
      date: "05 Sep 2026",
      mode: "Online",
    },
  ];

  const bookings = [
    {
      id: 1,
      institution: "ABC Engineering College",
      workshop: "React.js Workshop",
      status: "Pending",
    },
    {
      id: 2,
      institution: "XYZ University",
      workshop: "Machine Learning Bootcamp",
      status: "Approved",
    },
    {
      id: 3,
      institution: "Global Institute",
      workshop: "Cloud Computing",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700">
            Institution Dashboard
          </h1>

          <p className="text-gray-600 mt-3">
            Manage experts, workshop schedules, and booking requests.
          </p>
        </div>

        {/* Available Experts */}

        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-3 mb-6">
            <FaUserTie />
            Available Experts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {experts.map((expert) => (

              <div
                key={expert.id}
                className="border rounded-xl p-5 hover:shadow-lg duration-300"
              >
                <h3 className="text-xl font-semibold">
                  {expert.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {expert.specialization}
                </p>

                <p className="mt-2">
                  Experience: {expert.experience}
                </p>

                <button className="mt-5 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800">
                  View Profile
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Workshop Schedule */}

        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-3 mb-6">
            <FaCalendarAlt />
            Workshop Schedule
          </h2>

          <table className="w-full">

            <thead className="bg-blue-700 text-white">

              <tr>
                <th className="p-3">Workshop</th>
                <th>Date</th>
                <th>Mode</th>
              </tr>

            </thead>

            <tbody>

              {schedules.map((item) => (

                <tr
                  key={item.id}
                  className="border-b text-center hover:bg-gray-50"
                >
                  <td className="p-3">{item.workshop}</td>
                  <td>{item.date}</td>
                  <td>{item.mode}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Booking Requests */}

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-3 mb-6">
            <FaClipboardList />
            Booking Requests
          </h2>

          <div className="space-y-5">

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="border rounded-lg p-5 flex flex-col md:flex-row justify-between items-center"
              >

                <div>
                  <h3 className="text-lg font-semibold">
                    {booking.institution}
                  </h3>

                  <p className="text-gray-600">
                    {booking.workshop}
                  </p>
                </div>

                <div className="flex gap-3 mt-4 md:mt-0">

                  <span
                    className={`px-4 py-2 rounded-full text-white ${
                      booking.status === "Approved"
                        ? "bg-green-600"
                        : "bg-yellow-500"
                    }`}
                  >
                    {booking.status}
                  </span>

                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
                    <FaCheckCircle />
                    Approve
                  </button>

                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2">
                    <FaClock />
                    Reject
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Institution;