import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="text-white font-bold uppercase mb-4">LOGO</div>
          </div>

          {/* Navigation Links - Column 1 */}
          <div className="md:col-span-1">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/discovery"
                  className="text-white hover:text-gray-200"
                >
                  Discovery
                </Link>
              </li>
              <li>
                <Link href="/photos" className="text-white hover:text-gray-200">
                  Photos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links - Column 2 */}
          <div className="md:col-span-1">
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-white hover:text-gray-200">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-gray-200">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="text-white hover:text-gray-200"
                >
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links - Column 3 */}
          <div className="md:col-span-1">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/testimonials"
                  className="text-white hover:text-gray-200"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="text-white hover:text-gray-200"
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="text-white hover:text-gray-200"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white hover:text-gray-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-sm focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-gray-300 text-gray-600 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm mt-2">
              Stay in touch with us for the freshest products!
            </p>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-end mt-8 space-x-4">
          <Link href="#" className="text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          <Link href="#" className="text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>
          <Link href="#" className="text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
          <Link href="#" className="text-white hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
