'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";

interface IProps {
  showAmbassadorBtn?: boolean;
}

const Header: React.FC<IProps> = ({ showAmbassadorBtn = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const getBtnStyle = (target: string) => {
    const isActive = pathname === target;
    return {
      bg: isActive ? "bg-[#725ED4]" : "bg-gray-100",
      txt: isActive ? "text-white" : "text-[#333333]",
    };
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
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
            <Image src="/kuky-logo.svg" alt="Kuky Icon" width={34} height={34} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
          <Link href="/about-us">
            <div className={`${getBtnStyle("/about-us").bg} ${getBtnStyle("/about-us").txt} font-semibold py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200 hover:text-black`}>
              About us
            </div>
          </Link>

          {showAmbassadorBtn && (
            <Link href="/ambassador">
              <div className={`${getBtnStyle("/ambassador").bg} ${getBtnStyle("/ambassador").txt} font-semibold py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200 hover:text-black`}>
                Become an Ambassador
              </div>
            </Link>
          )}

          <Link href="https://app.kuky.com/">
            <div className="bg-gray-100 text-black font-semibold py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full hover:bg-gray-200">
              Explore Communities
            </div>
          </Link>

          <Link href="https://app.kuky.com/signup">
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
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>

          <div className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg sm:p-6 p-3 flex flex-col items-center space-y-2 z-50">
            <IoMdClose className="text-[#333333] text-3xl self-end cursor-pointer" onClick={() => setMenuOpen(false)} />

            <Link className="sm:w-max w-full" href="/about-us">
              <div className={`${getBtnStyle("/about-us").bg} ${getBtnStyle("/about-us").txt} font-semibold py-2 sm:px-6 px-4 text-sm text-center rounded-full hover:bg-gray-200 hover:text-black`}>
                About us
              </div>
            </Link>

            {showAmbassadorBtn && (
              <Link className="sm:w-max w-full" href="/ambassador">
                <div className={`${getBtnStyle("/ambassador").bg} ${getBtnStyle("/ambassador").txt} font-semibold py-2 sm:px-6 px-4 text-sm text-center rounded-full hover:bg-gray-200 hover:text-black`}>
                  Become an Ambassador
                </div>
              </Link>
            )}

            <Link className="sm:w-max w-full" href="https://app.kuky.com/">
              <div className="bg-gray-100 text-black font-semibold py-2 sm:px-6 px-4 text-sm text-center rounded-full hover:bg-gray-200">
                Explore Communities
              </div>
            </Link>

            <Link className="sm:w-max w-full" href="https://app.kuky.com/signup">
              <div className="bg-gray-100 text-black font-semibold py-2 sm:px-6 px-4 text-sm text-center rounded-full hover:bg-gray-200">
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