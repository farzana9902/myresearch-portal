import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    console.log(contact);

    setContact({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-lg">
            We'd love to hear from you. Feel free to contact us for
            research collaborations, workshops, or technical support.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">

        {/* Contact Information */}

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-600 text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">
                  MyResearch Portal,
                  Bangalore, Karnataka,
                  India - 560001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600">
                  +91 9876543210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-600 text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-600">
                  support@myresearchportal.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-orange-500 text-2xl mt-1" />

              <div>
                <h3 className="font-bold text-lg">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday
                </p>

                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Send Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contact.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contact.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={contact.subject}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={contact.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-4 rounded-lg hover:bg-blue-800 duration-300 flex justify-center items-center gap-3"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* Google Map */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="rounded-xl overflow-hidden shadow-lg">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Bangalore&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
}

export default Contact;