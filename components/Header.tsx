import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { ToastContainer } from "react-toastify";

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false); // Close menu if screen is resized to larger than mobile
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="font-comforta p-4 flex w-full flex-col items-center bg-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl px-3 md:px-4 sm:px-2 lg:px-8 gap-1">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image
              src="/kuky-logo.svg"
              alt="Kuky Icon"
              width={34}
              height={34}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
          <Link href="/about-us" passHref>
            <div
              className={`${bgColor} ${txtColor} font-semibold py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200 hover:text-black`}
            >
              About us
            </div>
          </Link>

          {showAmbassadorBtn && (
            <Link href="/ambassador" passHref>
              <div
                className={`${bgColorAmba} ${txtColorAmba} font-semibold py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200 hover:text-black`}
              >
                Become an Ambassador
              </div>
            </Link>
          )}

          <Link href="https://app.kuky.com/" passHref>
            <div
              className={`${bgColor} ${txtColor} font-semibold py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200 hover:text-black`}
            >
              Explore Communities
            </div>
          </Link>

          <Link href="https://app.kuky.com/register" passHref>
            <div className="bg-gray-100 text-black font-semibold py-2 px-4 sm:px-10 lg:px-16 text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200">
              Sign up for free
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
          <div className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg sm:p-6 p-3 flex flex-col items-center space-y-2 z-50 transition-transform transform">
            <IoMdClose
              className="text-[#333333] text-3xl self-end cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />

            <Link className="sm:w-max w-full" href="/about-us" passHref>
              <div
                className={`${bgColor} ${txtColor} font-semibold py-2 sm:px-6 px-4 text-sm text-center rounded-full hover:bg-gray-200 hover:text-black`}
              >
                About us
              </div>
            </Link>

            {showAmbassadorBtn && (
              <Link className="sm:w-max w-full" href="/ambassador" passHref>
                <div
                  className={`${bgColorAmba} ${txtColorAmba} font-semibold text-center py-2 sm:px-6 px-4 text-sm rounded-full hover:bg-gray-200 hover:text-black`}
                >
                  Become an Ambassador
                </div>
              </Link>
            )}

            <Link href="https://app.kuky.com/"  className="sm:w-max w-full" passHref>
            <div
              className="bg-gray-100 text-black font-semibold py-2 text-center sm:px-6 px-4 text-sm rounded-full hover:bg-gray-200"
            >
              Explore Communities
            </div>
          </Link>

            <Link
              className="sm:w-max w-full"
              href="https://app.kuky.com"
              passHref
            >
              <div className="bg-gray-100 text-black font-semibold py-2 text-center sm:px-6 px-4 text-sm rounded-full hover:bg-gray-200">
                Sign up for free
              </div>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
