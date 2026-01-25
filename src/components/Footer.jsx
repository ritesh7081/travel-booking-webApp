import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-slide-in">
            <h3 className="text-2xl font-bold tracking-tight">
              <span className="text-blue-400">Kashi Tour</span> & Trevels
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering the future with innovative solutions. Join us on our journey to make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.59 8.08 8.36 9.44v-6.68H7.96v-2.76h2.44v-2.1c0-2.41 1.47-3.73 3.61-3.73 1.03 0 1.91.08 2.16.11v2.51h-1.48c-1.16 0-1.39.55-1.39 1.36v1.79h2.77l-.36 2.76h-2.41v6.68c4.77-1.36 8.36-5.03 8.36-9.44 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.95 4.83c-.88.39-1.83.65-2.82.77 1.01-.61 1.79-1.57 2.16-2.71-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.13 1.13-4.1-.21-7.73-2.17-10.16-5.16-.42.72-.66 1.55-.66 2.44 0 1.69.86 3.18 2.16 4.06-.8-.03-1.55-.24-2.21-.61v.06c0 2.36 1.68 4.33 3.91 4.78-.41.11-.84.17-1.28.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.06 2.09-.39 0-.78-.02-1.17-.07 2.17 1.39 4.75 2.2 7.52 2.2 9.03 0 13.97-7.48 13.97-13.97 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm.02 4.5h-5v16h5v-16zm7.98 0h-4.96v16h4.96v-8.62c0-4.88 6.36-5.34 6.36 0v8.62h4.96v-10.26c0-8.14-9.32-7.84-11.32-3.76v-2.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300 hover:translate-x-2 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300 hover:translate-x-2 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300 hover:translate-x-2 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition duration-300 hover:translate-x-2 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  1234 Example St, City, Country
                </span>
              </li>
              <li>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5z" />
                  </svg>
                  support@yourcompany.com
                </span>
              </li>
              <li>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                  </svg>
                  +1 (123) 456-7890
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="animate-slide-in">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
              <button
                className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;