import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-pink-500">Glossy</h3>
          </a>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          <Link
            href="/#"
            className="flex text-gray-600 hover:text-pink-500 cursor-pointer transition delay-150 hover:font-semibold hover:-translate-y-1 hover:scale-110"
          >
            Home
          </Link>

          <Link
            href="/#Services"
            className="flex text-gray-600 hover:text-pink-500 cursor-pointer transition delay-150 hover:font-semibold hover:-translate-y-1 hover:scale-110"
          >
            Usługi
          </Link>

          <Link
            href="/#Onas"
            className="flex text-gray-600 hover:text-pink-500 cursor-pointer transition delay-150 hover:font-semibold hover:-translate-y-1 hover:scale-110"
          >
            O nas
          </Link>

          <Link
            href="/#"
            className="flex text-gray-600 hover:text-pink-500 cursor-pointer transition delay-150 hover:font-semibold hover:-translate-y-1 hover:scale-110"
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
