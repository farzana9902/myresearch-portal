import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaGraduationCap className="text-white text-3xl" />
          <h1 className="text-white text-2xl font-bold">
            MyResearch
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-300 duration-300">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/research"
                className="hover:text-yellow-300 duration-300"
              >
                Research
              </Link>
            </li>

            <li>
              <Link
                to="/workshops"
                className="hover:text-yellow-300 duration-300"
              >
                Workshops
              </Link>
            </li>

            <li>
              <Link
                to="/experts"
                className="hover:text-yellow-300 duration-300"
              >
                Experts
              </Link>
            </li>

            <li>
              <Link
                to="/institution"
                className="hover:text-yellow-300 duration-300"
              >
                Institution
              </Link>
            </li>

            <li>
              <Link
                to="/participant"
                className="hover:text-yellow-300 duration-300"
              >
                Participant
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black duration-300"
        >
          Login
        </Link>
      </div>
    </header>
  );
}

export default Navbar;