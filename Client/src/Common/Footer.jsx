import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}

        <div>
          <div className="flex items-center gap-3 mb-5">
            <FaGraduationCap className="text-4xl text-blue-500" />

            <h2 className="text-2xl font-bold text-white">
              MyResearch Portal
            </h2>
          </div>

          <p className="leading-7">
            MyResearch Portal is an integrated platform that helps
            researchers, experts, institutions, and participants
            collaborate through research activities, workshops,
            webinars, and knowledge sharing.
          </p>

          {/* Social Icons */}

          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="bg-blue-600 p-3 rounded-full hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-sky-500 p-3 rounded-full hover:scale-110 duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-blue-700 p-3 rounded-full hover:scale-110 duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="bg-pink-600 p-3 rounded-full hover:scale-110 duration-300"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-xl font-bold text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/research" className="hover:text-blue-400">
                Research
              </Link>
            </li>

            <li>
              <Link to="/workshops" className="hover:text-blue-400">
                Workshops
              </Link>
            </li>

            <li>
              <Link to="/experts" className="hover:text-blue-400">
                Experts
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}

        <div>
          <h3 className="text-xl font-bold text-white mb-6">
            Our Services
          </h3>

          <ul className="space-y-3">

            <li>Research Management</li>
            <li>Workshop Management</li>
            <li>Webinar Scheduling</li>
            <li>Expert Collaboration</li>
            <li>Document Sharing</li>
            <li>Participant Feedback</li>

          </ul>
        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold text-white mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <p>Bangalore, Karnataka, India</p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="text-blue-500 mt-1" />
              <p>+91 9876543210</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="text-blue-500 mt-1" />
              <p>support@myresearchportal.com</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            © 2026 MyResearch Portal. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link to="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-blue-400">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;