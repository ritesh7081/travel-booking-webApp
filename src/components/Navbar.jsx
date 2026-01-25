import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiSearch, FiMapPin } from "react-icons/fi";
import Logo from "../assets/Logo/logo1.png";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import EnquiryModel from "./page/EnquiryModel";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Fixed typo and used boolean
  const [logedIn, setLogedIn] = useState(false);
  const [enqueryModel, setEnqueryModel] = useState(false);
  

  useEffect(() => {
    const getToken = localStorage.getItem("adminToken");
    if (getToken) {
      setLogedIn(true);
    } else {
      setLogedIn(false);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLoginButton = () => {
    setIsLoginModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setEnqueryModel(false)
  };

  const handleLogOut = () => {
  const confirmLogout = window.confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    localStorage.removeItem("adminToken");
    setLogedIn(false);
    navigate("/");
  }
};
  const handleEnquiry = ()=>{
    setEnqueryModel(true)
  }

  return (
    <nav className="bg-gradient-to-r from-sky-50 to-blue-100 shadow-sm sticky top-0 w-full z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent flex items-center"
            >
              <img
                src={Logo}
                alt="Kashi Tour & Trevels"
                className="h-25 w-20"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:space-x-1">
            <Link
              to="/"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center"
            >
              <FiMapPin className="mr-1" /> Home
            </Link>
            {/* <Link
              to="/explore-Vehicle"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
            >
              Explore Vehicle
            </Link> */}
            <Link
              to="/gallery"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
            >
              Contact
            </Link>
            {logedIn && (
              <Link
                to="/admin"
                className="text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200"
              >
                Admin
              </Link>
            )}
          </div>

          {/* Right side icons (search, user, favorites) */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            {logedIn ? (
              // Show Logout button when user is logged in
              <button
                onClick={handleLogOut}
                className="p-2 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <FiUser className="h-5 w-5" />
              </button>
            ) : (
              // Show Login button when user is NOT logged in
              <button
                onClick={handleLoginButton}
                className="p-2 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <FiUser className="h-5 w-5" />
              </button>
            )}

            <button
            onClick={handleEnquiry}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 shadow-sm whitespace-nowrap">
              Enquiry now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <FiSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-100 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center"
              onClick={toggleMenu}
            >
              <FiMapPin className="mr-2" /> Home
            </Link>
             <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
             onClick={toggleMenu}
          >
              Gallery
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          <div className=" border-t border-gray-200 px-4">
            <div className=" space-y-1">
              <Link
                to="/login"
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center min-h-screen "
          onClick={closeModal} // Close modal when clicking on backdrop
        >
          <div
            className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none"
              onClick={closeModal}
            >
              <FiX size={24} />
            </button>
            <Login />
          </div>
        </div>
      )}
      {enqueryModel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center min-h-screen "
          onClick={closeModal} // Close modal when clicking on backdrop
        >
          <div
            className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none"
              onClick={closeModal}
            >
              <FiX size={24} />
            </button>
            <EnquiryModel/>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
