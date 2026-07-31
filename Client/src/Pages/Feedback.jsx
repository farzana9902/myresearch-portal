import { useState } from "react";
import {
  FaStar,
  FaUser,
  FaEnvelope,
  FaChalkboardTeacher,
  FaCommentDots,
} from "react-icons/fa";

function Feedback() {
  const [rating, setRating] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for your feedback!");

    console.log({
      ...formData,
      rating,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10">

        {/* Heading */}

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-blue-700">
            Workshop Feedback
          </h1>

          <p className="text-gray-500 mt-3">
            Share your experience to help us improve future workshops.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}

          <div>

            <label className="font-semibold">
              Participant Name
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">

              <FaUser className="text-blue-700" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="font-semibold">
              Email
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">

              <FaEnvelope className="text-blue-700" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />

            </div>

          </div>

          {/* Workshop */}

          <div>

            <label className="font-semibold">
              Workshop Name
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">

              <FaChalkboardTeacher className="text-blue-700" />

              <select
                name="workshop"
                value={formData.workshop}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              >
                <option value="">Select Workshop</option>
                <option>React.js Development Workshop</option>
                <option>Machine Learning Bootcamp</option>
                <option>Cloud Computing Workshop</option>
                <option>Cyber Security Workshop</option>
                <option>Research Methodology</option>
              </select>

            </div>

          </div>

          {/* Rating */}

          <div>

            <label className="font-semibold">
              Rating
            </label>

            <div className="flex gap-3 mt-3">

              {[1, 2, 3, 4, 5].map((star) => (

                <FaStar
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl cursor-pointer transition ${
                    star <= rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />

              ))}

            </div>

          </div>

          {/* Feedback */}

          <div>

            <label className="font-semibold">
              Feedback
            </label>

            <div className="flex border rounded-lg mt-2 px-3">

              <FaCommentDots className="text-blue-700 mt-4" />

              <textarea
                rows="5"
                name="feedback"
                placeholder="Write your feedback..."
                value={formData.feedback}
                onChange={handleChange}
                className="w-full p-3 outline-none resize-none"
                required
              ></textarea>

            </div>

          </div>

          {/* Submit */}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300 font-semibold"
          >
            Submit Feedback
          </button>

        </form>

      </div>

    </div>
  );
}

export default Feedback;