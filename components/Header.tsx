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
        <header className="p-4 flex justify-between items-center">
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
                <div className="absolute -bottom-12 left-3 transform -translate-x-1/2">
                    <Image src="/notification-cloud.svg" alt="Notification Cloud" width={133} height={41} />
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