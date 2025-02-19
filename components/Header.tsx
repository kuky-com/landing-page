import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface IProps {
  showAmbassadorBtn?: boolean;
}

const Header: React.FC<IProps> = ({ showAmbassadorBtn = false }) => {
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isAmbassadorPage, setIsAmbassadorPage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAboutPage(window.location.pathname === "/about-us");
      setIsAmbassadorPage(window.location.pathname === "/ambassador");
    }
  }, []);

  const bgColor = isAboutPage ? "bg-[#725ED4]" : "bg-gray-100";
  const txtColor = isAboutPage ? "text-white" : "text-[#333333]";
  const bgColorAmba = isAmbassadorPage ? "bg-[#725ED4]" : "bg-gray-100";
  const txtColorAmba = isAmbassadorPage ? "text-white" : "text-[#333333]";

  return (
    <header className="p-4 flex w-full flex-col items-center bg-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image src="/kuky-logo.svg" alt="Kuky Icon" width={34} height={34} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-6 lg:space-x-12">
          <Link href="/about-us" passHref>
            <div className={`${bgColor} ${txtColor} font-light py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full shadow-sm hover:bg-gray-200 hover:text-black`}>
              About us
            </div>
          </Link>

          {showAmbassadorBtn && (
            <Link href="/ambassador" passHref>
              <div className={`${bgColorAmba} ${txtColorAmba} font-light py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full shadow-sm hover:bg-gray-200 hover:text-black`}>
                Become an Ambassador
              </div>
            </Link>
          )}

          <Link href="/" passHref>
            <div className="bg-gray-100 text-black font-light py-2 px-4 sm:px-10 lg:px-16 text-xs sm:text-sm lg:text-base rounded-full shadow-md hover:bg-gray-200">
              Sign up free
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden" onClick={() => setMenuOpen(true)}>
          <IoMdMenu className="text-[#333333] text-3xl cursor-pointer" />
        </div>
      </div>

      {/* Overlay + Mobile Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)} // Clicking outside the menu closes it
          ></div>

          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg p-6 flex flex-col items-center space-y-2 z-50 transition-transform transform">
            <IoMdClose
              className="text-[#333333] text-3xl self-end cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />

            <Link href="/about-us" passHref>
              <div className={`${bgColor} ${txtColor} font-light py-2 px-6 text-sm rounded-full shadow-sm hover:bg-gray-200 hover:text-black`}>
                About us
              </div>
            </Link>

            {showAmbassadorBtn && (
              <Link href="/ambassador" passHref>
                <div className={`${bgColorAmba} ${txtColorAmba} font-light py-2 px-6 text-sm rounded-full shadow-sm hover:bg-gray-200 hover:text-black`}>
                  Become an Ambassador
                </div>
              </Link>
            )}

            <Link href="/" passHref>
              <div className="bg-gray-100 text-black font-light py-2 px-6 text-sm rounded-full shadow-md hover:bg-gray-200">
                Sign up free
              </div>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
