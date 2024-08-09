'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function DepressionPage() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(1)

    useEffect(() => {
        localStorage.setItem('routeName', 'depression')

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    router.push('/')
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [router])

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
            <Image
                src="/kuky-icon.svg"
                alt="Kuky Logo"
                width={100}
                height={100}
                className="mb-8"
            />
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
                Kuky is here to connect you with people who understand and support you on your journey.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-4">
                    {`We're preparing a personalized experience for you...`}
                </p>
                <p className="text-center text-gray-500">
                    Redirecting in {countdown} seconds
                </p>
            </div>
        </div>
    )
}