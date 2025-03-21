import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-gray-100">
      <div className="text-red-500 font-bold uppercase">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-gray-600 uppercase text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/discovery"
                className="text-gray-800 hover:text-gray-600 uppercase text-sm font-medium"
              >
                Discovery
              </Link>
            </li>
            <li>
              <Link
                href="/photos"
                className="text-gray-800 hover:text-gray-600 uppercase text-sm font-medium"
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-gray-600 uppercase text-sm font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="User Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
