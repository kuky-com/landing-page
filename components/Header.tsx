import Image from 'next/image'
import { useState, useEffect } from 'react'

const Header: React.FC = () => {
    const [starCount, setStarCount] = useState<string>('');

    useEffect(() => {
        const fetchStarCount = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/kuky-com/landing-page');
                const data = await response.json();
                await setStarCount(formatStarCount(data.stargazers_count));
            } catch (error) {
                console.error('Error fetching star count:', error);
                await setStarCount('N/A');
            }
        };

        fetchStarCount();
    }, []);

    const formatStarCount = (count: number): string => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count.toString();
    };

    return (
        <header className="p-4 flex justify-between items-center mb-24">
            <div className="flex items-center">
                <Image src="/kuky-icon.svg" alt="Kuky Icon" width={34} height={34} />
                <p className="ml-2 font-lexend text-[10px] font-bold leading-[12.5px] text-left text-black">
                    CONNECT,<br />CREATE & CELEBRATE
                </p>
            </div>
            <div className="flex items-center relative">
                <div className="wiggle-animation mr-6 relative">
                    <Image src="/notification-icon.svg" alt="Notification Icon" width={24} height={24} />
                </div>
                <div className="absolute -bottom-24 left-3 transform -translate-x-1/2">
                    <div className="inline-block relative">
                        <div className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-lg z-10 border border-gray-200">
                            <span className="text-sm font-medium">Sign up to get 3 months free access</span>
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border border-gray-100"></div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image src="/star-button.png" alt="Star Button" width={120} height={32} />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-sm font-bold">
                        {starCount}
                    </span>
                </div>
            </div>
        </header >
    )
}

export default Header