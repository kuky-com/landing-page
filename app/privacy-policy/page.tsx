'use client'

import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { registerUser } from '../../store/userSlice'
import { usePathname, useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

declare global {
    interface Window {
        grecaptcha: any;
    }
}

export default function Home() {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const pathname = usePathname()

    const { status, error } = useSelector((state: RootState) => state.user)
    const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const [showTnC, setShowTnC] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
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


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'register' })
            const dataToSend = { ...formData, email: formData.email.trim().toLowerCase(), recaptchaToken: token };
            dispatch(registerUser(dataToSend));
        } catch (error) {
            console.error('reCAPTCHA error:', error)
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">

            <Header />

            <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0">


                <div className="bg-white rounded-lg max-h-[80vh] overflow-y-auto no-scrollbar">
                    <div className="p-6 sm:p-8 md:p-10 max-w-4xl">

                        <div className="text-center text-[#333333] rounded-lg p-6 mb-6">
                            <h2 className="text-sm font-200 mb-4">Your Privacy Matters</h2>
                            <p className="text-2xl text-[#494949] font-normal mb-2">
                                Understanding How We Protect Your Information
                            </p>
                        </div>

                        <div className="bg-[#f5f5f5] rounded-[30px] px-8 py-4 mb-12">
                            <p className="text-3xl text-[#333333] font-semibold mb-2 leading-relaxed">
                                Your trust matters deeply to us at Kuky. As such, we pledge to safeguard your private information while providing top-quality services:
                            </p>
                        </div>

                        <div className="p-8">
                            <h2 className="text-2xl text-black font-bold mb-4">Privacy Policy</h2>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                At Kuky, we are committed to protecting your privacy and complying with the Australian Privacy Principles (APPs) outlined in the Privacy Act 1988 (Cth). This Privacy Policy explains how we collect, use, and manage your personal information.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Collection of Personal Information</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                We collect personal information that is reasonably necessary for our functions and activities. This may include your name, email address, and other details provided through interactions with our website.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Purpose of Collection</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                We collect personal information to provide you with information, updates, and services related to Kuky. Your information may also be used for communication and marketing purposes, but only with your explicit consent.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Use and Disclosure</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                We will only use or disclose your personal information for the purposes for which it was collected, unless you give us permission or the use or disclosure is required by law.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Data Security</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                We take reasonable steps to protect your personal information from unauthorized access, modification, or disclosure. Our security measures include encryption, access controls, and regular security reviews.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Access and Correction</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                You have the right to access and correct the personal information we hold about you. If you wish to do so, please contact us using the details provided below.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Cookies and Analytics</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                Our website may use cookies to improve user experience and gather non-identifiable information about your browsing behavior. We may also use analytics tools to analyze website traffic and usage patterns.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Third Parties</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                We may share your personal information with trusted third-party service providers to assist us in delivering our services. These providers are contractually bound to handle your information confidentially and securely.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Direct Marketing</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                We may use your personal information for direct marketing purposes, such as sending you newsletters or promotional emails. You have the option to opt out of such communications at any time.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Changes to Privacy Policy</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy regularly.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium  text-left mb-2">Contact Us</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light  text-left leading-relaxed">
                                If you have questions, concerns, or wish to access or correct your personal information, please contact our Privacy Officer at: hello (at) kuky (dot) com. Our Privacy Officer will respond to your inquiries promptly and assist you with any privacy-related matters.
                            </p>

                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div >
    )
}