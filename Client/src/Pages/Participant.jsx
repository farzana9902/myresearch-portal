import {
  FaCalendarCheck,
  FaDownload,
  FaCertificate,
  FaCommentDots,
  FaFilePdf,
} from "react-icons/fa";

function Participant() {
  const workshops = [
    {
      id: 1,
      title: "React.js Development Workshop",
      expert: "Dr. Anil Kumar",
      date: "15 August 2026",
      status: "Completed",
    },
    {
      id: 2,
      title: "Machine Learning Bootcamp",
      expert: "Dr. Priya Sharma",
      date: "22 August 2026",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Cloud Computing Workshop",
      expert: "Prof. Ramesh Rao",
      date: "05 September 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-blue-700">
            Participant Dashboard
          </h1>

          <p className="text-gray-600 mt-3">
            Access your registered workshops, learning materials,
            certificates, and feedback.
          </p>

        </div>

        {/* Registered Workshops */}

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-3 mb-8">
            <FaCalendarCheck />
            Registered Workshops
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {workshops.map((item) => (

              <div
                key={item.id}
                className="border rounded-xl p-6 hover:shadow-xl duration-300"
              >

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  <strong>Expert:</strong> {item.expert}
                </p>

                <p className="text-gray-600 mt-2">
                  <strong>Date:</strong> {item.date}
                </p>

                <span
                  className={`inline-block mt-4 px-4 py-2 rounded-full text-white ${
                    item.status === "Completed"
                      ? "bg-green-600"
                      : "bg-yellow-500"
                  }`}
                >
                  {item.status}
                </span>

                {/* Buttons */}

                <div className="space-y-3 mt-6">

                  <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 flex justify-center items-center gap-2">
                    <FaDownload />
                    Download Materials
                  </button>

                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 flex justify-center items-center gap-2">
                    <FaCertificate />
                    Download Certificate
                  </button>

                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 flex justify-center items-center gap-2">
                    <FaCommentDots />
                    Give Feedback
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Learning Resources */}

        <div className="bg-white rounded-xl shadow-lg mt-10 p-8">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Study Materials
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center border rounded-lg p-4">

              <div className="flex items-center gap-3">
                <FaFilePdf className="text-red-600 text-2xl" />

                <span>React Workshop Notes.pdf</span>
              </div>

              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
                Download
              </button>

            </div>

            <div className="flex justify-between items-center border rounded-lg p-4">

              <div className="flex items-center gap-3">
                <FaFilePdf className="text-red-600 text-2xl" />

                <span>Machine Learning Slides.pdf</span>
              </div>

              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
                Download
              </button>

            </div>

            <div className="flex justify-between items-center border rounded-lg p-4">

              <div className="flex items-center gap-3">
                <FaFilePdf className="text-red-600 text-2xl" />

                <span>Cloud Computing Handbook.pdf</span>
              </div>

              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800">
                Download
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Participant;