'use client'

import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { registerUser } from '../store/userSlice'
import { usePathname, useRouter } from 'next/navigation'

import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoPopup from '../components/VideoPopup'
import FAQ from '../components/FAQ'

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()

  const { status, error } = useSelector((state: RootState) => state.user)
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
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
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">

      <Header />

      <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 main-block">
          {/* Title section at the top */}
          <div className="main-block-title">
            <h2 className="text-lg font-normal text-gray-700 leading-normal mb-2">Connect with Like-Minded Individuals</h2>
            <h1 className="text-2xl font-bold text-gray-900 leading-snug">
              <span className="font-bold">Kuky</span> helps you find meaningful connections through<br />
              shared experiences.
            </h1>
          </div>

          {/* Video and signup form side by side below the title */}
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:justify-between">
            {/* Video on the left */}
            <div className="w-full lg:w-1/2 main-block-video">
              <div className="relative pb-[70%] h-0 overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.youtube.com/embed/dRXtD3-lJDw"
                  title="Kuky Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Signup form on the right */}
            <div className="w-full lg:w-1/2 main-block-signup">
              <h3 className="ml-8 text-5xl font-600 text-[#5A2C90] text-left leading-normal">
                Sign up today and<br /> Get <span className="text-5xl font-bold">3 months free!</span>
              </h3>
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-[20px] rounded-lg bg-[#F5F5F5] text-[#717171] focus:outline-none focus:ring-2 focus:ring-[#5A2C90] focus:border-transparent  shadow-[0px_4px_2.5px_0px_rgba(0,0,0,0.15)]"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-[20px] rounded-8lg bg-[#F5F5F5] text-[#717171] focus:outline-none focus:ring-2 focus:ring-[#5A2C90] focus:border-transparent  shadow-[0px_4px_2.5px_0px_rgba(0,0,0,0.15)]"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-[20px] bg-[#F5F5F5] text-[#717171] focus:outline-none focus:ring-2 focus:ring-[#5A2C90] focus:border-transparent  shadow-[0px_4px_2.5px_0px_rgba(0,0,0,0.15)]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white font-semibold rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-gray-900 transition-all duration-300"
                  disabled={status === 'loading'}
                >
                  Sign up free
                </button>
                <p className="text-sm text-[#969696] text-center mt-6">
                  By submitting this form, you agree to our{' '}
                  <button onClick={() => setShowPrivacyPolicy(true)} className="underline">
                    <span className="font-bold">Privacy Policy</span>
                  </button>
                  , and allow kuky to use this information for marketing purposes. We are committed to handling your personal data responsibly.
                </p>

              </form>
            </div>
          </div>
        </div>

        <section className="w-full">
          <img
            src="/ad-block.png"
            alt="Background Image"
            className="w-full h-auto"
          />
        </section>

        <section className="w-full max-w-4xl mx-auto m-24">
          <h2 className="font-lexend text-[#333333] text-3xl font-bold text-center mb-8">Why Kuky?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4 text-[#333333]">AI-Based Connections</h3>
              <p className="font-200 leading-relaxed text-[#333333]">Our advanced AI understands your unique needs and helps you find the right connections faster.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4 text-[#333333]">Shared Experiences</h3>
              <p className="font-200 leading-relaxed text-[#333333]">Kuky connects you with others who share similar life experiences, creating meaningful bonds.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4 text-[#333333]">Diverse Communities</h3>
              <p className="font-200 leading-relaxed text-[#333333]">Join a variety of support groups and communities, from cancer survivors to new parents.</p>
            </div>
          </div>
        </section>

        <section className="w-full mx-auto bg-[#725ED4] p-16">
          <h2 className="font-lexend text-3xl font-bold text-center mb-6">Ready to Find Your Community?</h2>
          <p className="text-[#E8FF58] text-center mb-16">Connect with Like-Minded Individuals</p>
          <div className="flex justify-center">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-200 py-3 px-6 rounded-[20px] w-1/3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              Sign up free
            </button>
          </div>
        </section>

        <VideoPopup
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoId="dRXtD3-lJDw"
        />
        <FAQ />

      </main>
      <Footer />
    </div >
  )
}
