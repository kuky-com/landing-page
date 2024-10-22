'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { registerUser } from '../../store/userSlice'
import { usePathname, useRouter } from 'next/navigation'
import Header from '../../components/Header'
import PrivacyPolicyPopup from '../../components/PrivacyPolicyPopup'
import AboutUsPopup from '../../components/AboutUsPopup'
import TnCPopup from '../../components/TnCPopup'

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
                            <h2 className="text-sm font-200 mb-4">Welcome to Kuky</h2>
                            <p className="text-2xl text-[#494949] font-normal mb-2">
                                Terms and Conditions of Use
                            </p>
                        </div>

                        <div className="bg-[#f5f5f5] rounded-[30px] px-8 py-4 mb-12">
                            <p className="text-3xl text-[#333333] font-semibold mb-2 leading-relaxed">
                                By accessing or using our app, you agree to comply with these terms. Please read them carefully.
                            </p>
                        </div>

                        <div className="p-8">
                            <h2 className="text-2xl text-black font-bold mb-4">Terms and Conditions</h2>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                Welcome to Kuky! These Terms and Conditions (Terms) govern your use of the Kuky application (App) and any related services provided by Kuky (we, us, our). By accessing or using the App, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the App.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">1. Acceptance of Terms</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                By creating an account or using the App, you agree to these Terms and our Privacy Policy. We may update these Terms from time to time, and your continued use of the App constitutes your acceptance of any changes.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">2. User Accounts</h3>
                            <p className="text-[#686868] mb-4 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>Registration:</strong> You must create an account to use the App. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                            </p>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>Eligibility:</strong> You must be at least 18 years old to create an account and use the App. By registering, you represent that you meet this age requirement.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">3. Use of the App</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use the App for personal, non-commercial purposes.
                            </p>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>Prohibited Activities:</strong> You agree not to:
                                <ul className="list-disc list-inside">
                                    <li>Use the App for any unlawful or unauthorized purpose.</li>
                                    <li>Upload, post, or share any content that is defamatory, obscene, or infringes on others&apos; rights.</li>
                                    <li>Attempt to interfere with the operation of the App or gain unauthorized access to our systems.</li>
                                </ul>
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">4. Video Uploads and Content</h3>
                            <p className="text-[#686868] mb-4 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>Public and Private Videos:</strong> You may upload two types of videos:
                                <ul className="list-disc list-inside">
                                    <li>A Public Video visible to the Kuky community.</li>
                                    <li>A Private Video used solely for our AI matching process and not shared with others.</li>
                                </ul>
                            </p>
                            <p className="text-[#686868] mb-4 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>Content Ownership:</strong> You retain ownership of any content you upload to the App. By uploading content, you grant us a license to use, modify, and display it as necessary for the operation of the App.
                            </p>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>Content Responsibility:</strong> You are solely responsible for the content you upload. We reserve the right to remove any content that violates these Terms or is otherwise objectionable.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">5. Privacy</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">6. Intellectual Property</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                All intellectual property rights in the App, including but not limited to software, designs, logos, and trademarks, are owned by us or our licensors. You may not use, copy, or distribute any content from the App without our prior written permission.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">7. Limitation of Liability</h3>
                            <p className="text-[#686868] mb-4 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>No Warranties:</strong> The App is provided as is without any warranties, express or implied. We do not guarantee that the App will be error-free or uninterrupted.
                            </p>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                <strong>Liability Cap:</strong> To the maximum extent permitted by law, our liability for any claim arising from your use of the App is limited to the amount you paid us, if any, for access to the App.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">8. Termination</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                We may terminate or suspend your access to the App at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">9. Governing Law</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                These Terms are governed by the laws of New South Wales, Australia, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts of New South Wales.
                            </p>

                            <h3 className="text-black font-roboto text-base font-medium text-left mb-2">10. Contact Us</h3>
                            <p className="text-[#686868] mb-12 font-roboto text-base font-light text-left leading-relaxed">
                                If you have any questions or concerns about these Terms, please contact us at hello (at) kuky (dot) com.
                            </p>
                        </div>
                    </div>
                </div>

            </main>
            <footer className="mt-auto flex flex-col justify-center items-center border-t border-gray-300 w-full mb-16">

                {/* Centered Logo at the top */}
                <div className="flex justify-center items-start py-6 absolute">
                    <Image src="kuky-logo.svg" alt="Kuky Logo" width={48} height={48} />
                </div>

                {/* Bottom section with social icons on the left and privacy links on the right */}
                <div className="flex justify-between px-4 sm:px-6 lg:px-8 max-w-7xl w-full relative min-h-[120px]">

                    {/* Social Media Icons on the left */}
                    <div className="flex space-x-4 items-end justify-start">
                        {/* Instagram */}
                        <Link className="flex justify-center" href="https://www.instagram.com/kuky_app" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Image src="instagram.svg" alt="Instagram" width={24} height={24} />
                        </Link>

                        {/* Twitter */}
                        <Link className="flex justify-center" href="https://twitter.com/kuky_app" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Image src="twitter.svg" alt="Twitter" width={24} height={24} />
                        </Link>

                        {/* Facebook */}
                        <Link className="flex justify-center" href="https://www.facebook.com/kuky_app" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Image src="facebook.svg" alt="Facebook" width={24} height={24} />
                        </Link>

                        {/* WhatsApp */}
                        <Link className="flex justify-center" href="https://www.whatsapp.com/kuky_app" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <Image src="whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                        </Link>
                    </div>
                    {/* About Us, Terms & Conditions, Privacy Policy on the right */}
                    <div className="flex space-x-4 justify-end items-end text-[#9b9b9b] text-sm">
                        <button onClick={() => setShowAboutUs(true)} className="font-lato text-md font-200 text-center text-[#333333]">About Us</button>
                        <button onClick={() => setShowTnC(true)} className="font-lato text-md font-200 text-center text-[#333333]">Terms & Conditions</button>
                        <button onClick={() => setShowPrivacyPolicy(true)} className="font-lato text-md font-200 text-center text-[#333333]">Privacy Policy</button>
                    </div>
                </div>
            </footer>
        </div >
    )
}