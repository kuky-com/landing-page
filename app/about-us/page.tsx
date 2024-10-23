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

            <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0">
                <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 main-block">
                    {/* Title section at the top */}
                    <div className="main-block-title">
                        <h2 className="text-lg font-normal text-[#333333] leading-normal mb-2">Our Mission:</h2>
                        <h1 className="text-2xl font-normal text-[#494949] leading-snug">
                            Connecting People Through Shared Experiences
                        </h1>
                    </div>

                    {/* Text and Image side by side below the title */}
                    <div className="w-full flex flex-col lg:flex-row gap-8 lg:justify-between p-12">
                        {/* Text on the left */}
                        <div className="w-full lg:w-1/2 main-block-text flex items-center">
                            <h3 className="text-4xl font-normal text-[#494949] leading-loose mb-4">
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
                        <p className="text-nm font-light text-[#333333] leading-loose">
                            <span className="text-black font-normal">Kuky</span> was born out of a desire to create a space where people could connect on a deeper<br />
                            level through shared experiences. We believe in the power of community and the<br />
                            importance of finding others who truly understand your journey.
                        </p>
                    </div>
                </div>


                <section className="w-full bg-[#725ED4] text-white py-16">
                    <div className="w-full max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-600 mb-16">What We Stand For</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* First Column */}
                            <div className="text-center">
                                <h3 className="text-2xl font-200 mb-4">Empathy First</h3>
                                <span className="text-sm font-light leading-relaxed">
                                    We prioritize understanding and<br /> supporting one another in every<br /> connection.
                                </span>
                            </div>

                            {/* Second Column */}
                            <div className="text-center">
                                <h3 className="text-2xl font-200 mb-4">Privacy & Security</h3>
                                <span className="text-sm font-light leading-relaxed">
                                    Your privacy is our top priority. We<br /> ensure that all your interactions<br /> are safe and secure.
                                </span>
                            </div>

                            {/* Third Column */}
                            <div className="text-center">
                                <h3 className="text-2xl font-200 mb-4">Diversity & Inclusion</h3>
                                <span className="text-sm font-light text-center leading-relaxed">
                                    We welcome individuals from all<br /> walks of life and strive to create a<br /> space where everyone belongs.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="w-full max-w-7xl mx-auto py-24">
                    <h2 className="text-3xl font-semibold text-center mb-20 text-[#333333]">The People Behind Kuky</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="text-center">
                            <img
                                src="ceo-image.png" // Replace with the actual image path
                                alt="Full Name"
                                className="w-full h-auto rounded-lg object-cover mb-4 p-6"
                            />
                            <h3 className="text-xl text-[#333333] font-normal mb-2">Armin Nehzat</h3>
                            <p className="text-[#333333] font-light text-sm">Sales & Marketing</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="text-center">
                            <div
                                className="w-full h-auto rounded-lg"
                            >
                                <img
                                    src="cto-image.png" // Replace with the actual image path
                                    alt="Full Name"
                                    className="w-full h-auto rounded-lg object-cover mb-4 p-6"
                                />
                            </div>

                            <h3 className="text-xl text-[#333333] font-normal mb-2">Ben Hong</h3>
                            <p className="text-[#333333] font-light text-sm">Product & Operations</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="text-center">
                            <img
                                src="cfo-image.png" // Replace with the actual image path
                                alt="Full Name"
                                className="w-full h-auto rounded-lg object-cover mb-4 p-6"
                            />
                            <h3 className="text-xl text-[#333333] font-normal mb-2">Tung Mai</h3>
                            <p className="text-[#333333] font-light text-sm">Engineering</p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="text-center">

                            <img
                                src="cdo-image.png"
                                alt="Full Name"
                                className="w-full h-auto rounded-lg object-cover mb-4 p-6"
                            />
                            <h3 className="text-xl text-[#333333] font-normal mb-2">Sepideh Salimi</h3>
                            <p className="text-[#333333] font-light text-sm">User Experience</p>
                        </div>
                    </div>
                </section>


                <section className="w-full mx-auto bg-[#725ED4] p-16">
                    <h2 className="font-lexend text-3xl font-bold text-center mb-6">Join our Community</h2>
                    <p className="text-[#E8FF58] text-center mb-16">Be a Part of Something Bigger</p>
                    <div className="flex justify-center">
                        <button
                            className="bg-gray-800 hover:bg-gray-700 text-white font-200 py-3 px-6 rounded-[20px] w-1/3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                        >
                            Sign up free
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    )
}
