import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
  showAmbassadorBtn?: boolean;
}

const Header: React.FC<IProps> = ({ showAmbassadorBtn = false }) => {
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the current path is "/about-us"
      setIsAboutPage(window.location.pathname === "/about-us");
    }
  }, []);

  const bgColor = isAboutPage ? "bg-[#725ED4]" : "bg-gray-100";
  const txtColor = isAboutPage ? "text-white" : "text-[#333333]";
  return (
    <header className="p-4 flex w-full flex-col items-center bg-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-12 relative">
          {/* About Us Button */}
          <Link href="/about-us" passHref>
            <div
              className={`${bgColor} ${txtColor} font-light py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full shadow-sm hover:bg-gray-200`}
            >
              About us
            </div>
          </Link>

          {showAmbassadorBtn && (
            <Link href="/" passHref>
              <div
                className={`${bgColor} ${txtColor} font-light py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base sm:block hidden rounded-full shadow-sm hover:bg-gray-200`}
              >
                Become an Ambassador
              </div>
            </Link>
          )}

          {/* Sign Up Free Button */}
          <Link href="/" passHref>
            <div className="bg-[#333333] text-white font-light py-2 px-4 sm:px-10 lg:px-16 text-xs sm:text-sm lg:text-base rounded-full shadow-md hover:bg-gray-700">
              Sign up free
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
