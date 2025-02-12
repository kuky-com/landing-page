'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(2);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    window.location.href = `https://app.kuky.com/explore`;
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
                Redirecting to the Kuky App...
            </p>
            <p className="text-lg text-center text-gray-500">Redirecting in {countdown} seconds</p>
        </div>
    );
}
