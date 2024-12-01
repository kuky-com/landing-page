'use client'

import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { registerUser } from '../store/userSlice'

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

      <main className="flex-grow flex flex-col justify-center items-center sm:px-4 sm:px-6 lg:px-0 mt-[92px]">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 main-block lg:px-8">
          <div className="main-block-title mx-8 sm:mx-0 mt-8 sm:mt-0">
            <h2 className="text-xl font-normal text-[#333333] leading-normal mb-2">Connect with people on the same journey as you</h2>
            <h1 className="text-3xl font-700 text-[#494949] leading-release">
              <span className="font-700 text-black">Kuky</span> helps you find meaningful connections through<br />
              shared experiences.
            </h1>
          </div>

          {/* Video and signup form side by side below the title */}
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:justify-between">
            {/* Video on the left */}
            <div className="w-full lg:w-1/2 main-block-video">
              <div className="relative pb-[70%] h-0 overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.youtube.com/embed/og6vAOkE83c"
                  title="Kuky Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Signup form on the right */}
            <div className="w-full lg:w-1/2 main-block-signup">
              <div className="ml-8 text-4xl lg:text-5xl font-medium text-[#5A30C1] text-left leading-normal">
                <div className="mb-4">Sign up today and</div>
                <div> Get <span className="text-4xl lg:text-5xl font-bold">3 months free!</span></div>
              </div>

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
                  className="w-full py-4 bg-black text-white font-light text-xl rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-gray-900 transition-all duration-300"
                  disabled={status === 'loading'}
                >
                  Sign up free
                </button>
                {/* Notification section */}
                {status === 'succeeded' && (
                  <div className="my-2 p-4 text-green-400">
                    Registration successful! Welcome aboard.
                  </div>
                )}
                {status === 'failed' && (
                  <div className="my-8 p-4 text-red-400">
                    Registration failed: {error}
                  </div>
                )}
                <p className="text-sm font-light text-[#969696] text-center mt-6">
                  By submitting this form, you agree to our{' '}
                  <button onClick={() => setShowPrivacyPolicy(true)} >
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
          <h2 className="font-lexend text-[#333333] text-3xl font-bold text-center mb-16">Connect with others on the same journey as you</h2>
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg p-4 sm:p-0"
              src="https://www.youtube.com/embed/peVUvZqr49A?si=pVNF2y-s4JyBcQZx"
              title="Kuky Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="w-full bg-[#f5f5f5] mx-auto p-16">
          <div className="w-full max-w-4xl bg-[#f5f5f5] mx-auto m-24">
            <h2 className="font-lexend text-[#333333] text-3xl font-bold text-center mb-16 sm:mb-16">Why Kuky?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 sm:mx-4">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-4 text-[#333333]">AI-Based Connections</h3>
                <p className="font-200 leading-relaxed  text-[#333333]">Our advanced AI understands your unique needs and helps you find the right connections faster.</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-4 text-[#333333]">Shared Experiences</h3>
                <p className="font-200 leading-relaxed text-[#333333]">Kuky connects you with others who share similar life experiences, creating meaningful bonds.</p>
              </div>
              <div className="text-center" id="download-app">
                <h3 className="font-bold text-xl mb-4 text-[#333333]">Diverse Communities</h3>
                <p className="font-200 leading-relaxed text-[#333333]">Join a variety of support groups and communities, from cancer survivors to new parents.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mx-auto bg-[#725ED4] p-16"  >
          <h2 className="text-white text-3xl font-bold text-center mb-6">Ready to Find Your Community?</h2>
          <p className="text-[#E8FF58] text-center mb-8">Connect with Like-Minded Individuals</p>
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
                  src="/apple-app-store.png"
                  alt="Download on the App Store"
                  className="h-16"
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
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  className="h-16"
                />
              </a>
            </div>
          </div>
        </section>

        <VideoPopup
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoId="og6vAOkE83c"
        />
        <FAQ />

      </main>
      <Footer />
    </div >
  )
}
