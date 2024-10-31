'use client'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

declare global {
    interface Window {
        grecaptcha: any;
    }
}

export default function Home() {
    const dispatch = useDispatch<AppDispatch>()
    const { status, error } = useSelector((state: RootState) => state.user)
    const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        goal: '',
        routeName: ''
    })

    useEffect(() => {
        const storedRouteName = localStorage.getItem('routeName')
        if (storedRouteName) {
            setFormData(prev => ({ ...prev, routeName: storedRouteName }))
            localStorage.removeItem('routeName')
        }
        if (status == 'succeeded') setIsFormSubmitted(true)
    }, [status])

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">

            <Header />

            <main className="flex-grow flex flex-col justify-center items-center sm:px-6 lg:px-0 mt-[92px]">
                <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 main-block">
                    {/* Title section at the top */}
                    <div className="main-block-title">
                        <h2 className="text-lg font-normal text-[#333333] leading-normal mb-2 mx-4 sm:mx-0">Our Mission:</h2>
                        <h1 className="text-2xl font-normal text-[#494949] leading-snug mx-4 sm:mx-0">
                            Connecting People Through Shared Experiences
                        </h1>
                    </div>

                    {/* Text and Image side by side below the title */}
                    <div className="w-full flex flex-col lg:flex-row gap-8 lg:justify-between px-4 sm:px-12 sm:py-12">
                        {/* Text on the left */}
                        <div className="w-full lg:w-1/2 main-block-text flex items-center">
                            <h3 className="text-4xl font-normal text-[#494949] leading-normal sm:leading-loose mb-4">
                                Discover the story behind<br /> <span className="text-black font-semibold">Kuky</span> and why we’re passionate<br />
                                about building a supportive<br /> community
                            </h3>
                        </div>

                        {/* Image on the right */}
                        <div className="w-full lg:w-1/2 main-block-image">
                            <img
                                src="/about-us-main.png"
                                alt="Kuky Community"
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Below section: Additional text */}
                    <div className="text-center mt-8 mb-16">
                        <h2 className="text-3xl font-bold text-[#333333] mb-6">The <span className="text-black font-semibold">Kuky</span> Journey</h2>
                        <p className="text-nm font-light text-[#333333] leading-loose p-4 sm:p-0">
                            <span className="text-black font-normal">Kuky</span> was born out of a desire to create a space where people could connect on a deeper<br />
                            level through shared experiences. We believe in the power of community and the<br />
                            importance of finding others who truly understand your journey.
                        </p>
                    </div>
                </div>


                <section className="w-full bg-[#725ED4] text-white py-16">
                    <div className="w-full max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-600 mb-8 sm:mb-16">What We Stand For</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* First Column */}
                            <div className="text-center">
                                <h3 className="text-2xl font-200 mb-4">Empathy First</h3>
                                <span className="text-lg sm:text-sm font-light leading-relaxed">
                                    We prioritize understanding and<br /> supporting one another in every<br /> connection.
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="text-center">
                                <h3 className="text-2xl font-200 mb-4">Privacy & Security</h3>
                                <span className="text-lg sm:text-sm font-light leading-relaxed">
                                    Your privacy is our top priority. We<br /> ensure that all your interactions<br /> are safe and secure.
                                </span>
                            </div>

                            {/* Third Column */}
                            <div className="text-center">
                                <h3 className="text-2xl font-200 mb-4">Diversity & Inclusion</h3>
                                <span className="text-lg sm:text-sm font-light text-center leading-relaxed">
                                    We welcome individuals from all<br /> walks of life and strive to create a<br /> space where everyone belongs.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full max-w-7xl mx-auto py-24">
                    <h2 className="text-3xl font-semibold text-center mb-12 sm:mb-20 text-[#333333]">The People Behind Kuky</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="text-center">
                            <img
                                src="ceo-image.png" // Replace with the actual image path
                                alt="Full Name"
                                className="w-full h-auto rounded-lg object-cover sm:mb-4 p-6"
                            />
                            <h3 className="text-3xl sm:text-xl text-[#333333] sm:font-normal mb-2">Armin Nehzat</h3>
                            <p className="text-[#333333] font-light text-xl sm:text-sm">Sales & Marketing</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="text-center">
                            <div
                                className="w-full h-auto rounded-lg"
                            >
                                <img
                                    src="cto-image.png" // Replace with the actual image path
                                    alt="Full Name"
                                    className="w-full h-auto rounded-lg object-cover sm:mb-4 p-6"
                                />
                            </div>

                            <h3 className="text-3xl sm:text-xl text-[#333333] font-normal mb-2">Ben Hong</h3>
                            <p className="text-[#333333] font-light text-xl sm:text-sm">Product & Operations</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="text-center">
                            <img
                                src="cfo-image.png" // Replace with the actual image path
                                alt="Full Name"
                                className="w-full h-auto rounded-lg object-cover sm:mb-4 p-6"
                            />
                            <h3 className="text-3xl sm:text-xl text-[#333333] font-normal mb-2">Tung Mai</h3>
                            <p className="text-[#333333] font-light text-xl sm:text-sm">Engineering</p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="text-center">

                            <img
                                src="cdo-image.png"
                                alt="Full Name"
                                className="w-full h-auto rounded-lg object-cover sm:mb-4 p-6"
                            />
                            <h3 className="text-3xl sm:text-xl text-[#333333] font-normal mb-2">Sepideh Salimi</h3>
                            <p className="text-[#333333] font-light text-xl sm:text-sm">User Experience</p>
                        </div>
                    </div>
                </section>


                <section className="w-full mx-auto bg-[#725ED4] p-16">
                    <h2 className="text-white text-3xl font-bold text-center mb-6">Join our Community</h2>
                    <p className="text-[#E8FF58] text-center mb-16">Be a Part of Something Bigger</p>
                    <div className="flex justify-center">
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                            {/* App Store Button */}
                            <a
                                href="https://apps.apple.com/au/app/kuky/id6711341485"
                                className="flex items-center justify-center w-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/apple-app-store.png" // Replace with actual path to the App Store image
                                    alt="Download on the App Store"
                                    className="h-16" // Adjust height responsively
                                />
                            </a>

                            {/* Google Play Button */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.kuky.android"
                                className="flex items-center justify-center w-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/google-play.png" // Replace with actual path to the Google Play image
                                    alt="Get it on Google Play"
                                    className="h-16" // Adjust height responsively
                                />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    )
}
