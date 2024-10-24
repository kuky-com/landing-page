import Image from 'next/image'
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="p-4 flex w-full flex-col items-center bg-white">
            <div className="flex justify-between items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/kuky-logo.svg" alt="Kuky Icon" width={34} height={34} />
                </div>

                <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-12 relative">
                    {/* About Us Button */}
                    <Link href="/about-us" passHref>
                        <div className="bg-gray-100 text-[#333333] font-light py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm lg:text-base rounded-full shadow-sm hover:bg-gray-200">
                            About us
                        </div>
                    </Link>

                    {/* Sign Up Free Button */}
                    <Link href="/" passHref>
                        <div className="bg-[#333333] text-white font-light py-2 px-4 sm:px-10 lg:px-16 text-xs sm:text-sm lg:text-base rounded-full shadow-md hover:bg-gray-700">
                            Sign up free
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;
