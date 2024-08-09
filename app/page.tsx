'use client'

import Image from 'next/image'
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { registerUser } from '../store/userSlice'
import { usePathname, useRouter } from 'next/navigation'

import Header from '../components/Header'
import VideoPopup from '../components/VideoPopup';
import ResponsiveBottomImage from '../components/ResponsiveBottomImage';
import PrivacyPolicyPopup from '../components/PrivacyPolicyPopup'
import FAQ from '../components/FAQ'

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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    routeName: ''
  })

  useEffect(() => {
    const storedRouteName = localStorage.getItem('routeName')
    if (storedRouteName) {
      setFormData(prev => ({ ...prev, routeName: storedRouteName }))
      localStorage.removeItem('routeName')
    }
  }, [])


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

      <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-lexend text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.1em] sm:leading-[86px] tracking-[0.002em] text-center mb-6 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#686868] via-[#686868] to-[#202020] px-4 sm:px-0">
          <span className="animation mb-2 sm:mb-0 block leading-[1.2em]">Find Support</span>
          <span className=" block leading-[1.2em] mt-[-0.1em]">Through Shared Experiences</span>
        </h1>
        <h3 className="font-lexend text-2xl sm:text-3xl md:text-2xl lg:text-[40px] font-extrabold leading-[1.1em] sm:leading-[86px] tracking-[0.002em] text-center mb-6 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#686868] via-[#686868] to-[#202020] px-4 sm:px-0"><span className="mb-2 sm:mb-0 block leading-[1.2em]">Sign up for your AI agent access</span></h3>

        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/Ie4G3c1Ag9M"
              title="Kuky Video"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p className="font-roboto text-base font-light leading-[26px] text-center text-[rgba(102,102,102,1)] max-w-3xl mx-auto mb-16 sm:mb-12 px-6 sm:px-4">
          Hold tight! Kuky is on its way to revolutionize how you meet and connect with people who share your interests. Whether it&apos;s finding a jogging buddy or a study partner, Kuky&apos;s got you covered.
        </p>
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-white rounded-lg shadow-inset-custom text-base font-roboto font-light leading-6 text-[rgba(102,102,102,1)]"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-white rounded-lg shadow-inset-custom text-base font-roboto font-light leading-6 text-[rgba(102,102,102,1)]"
                required
              />
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 pr-12 border border-white rounded-lg shadow-inset-custom text-base font-roboto font-light leading-6 text-[rgba(102,102,102,1)]"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                disabled={status === 'loading'}
              >
                <Image src="/submit-icon.svg" alt="Submit" width={40} height={38} />
              </button>
            </div>
            <div className="mb-4">

            </div>
            {status === 'loading' && <p>Submitting...</p>}
            {status === 'failed' && <p className="text-red-500">{error}</p>}
            {status === 'succeeded' && <p className="text-green-500">Registration successful!</p>}
          </form>
        </div>
        <p className="text-[#9b9b9b] text-sm text-center max-w-md mt-4">
          By submitting this form, you agree to our <button onClick={() => setShowPrivacyPolicy(true)} className="text-bold underline">Privacy Policy</button>, and allow Kuky to use this information for marketing purposes. We are committed to handling your personal data responsibly.
        </p>


        <VideoPopup
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoId="Ie4G3c1Ag9M"
        />
        <FAQ />
      </main>
      <footer className="mt-auto">
        <ResponsiveBottomImage
          src="/bottom-background.png"
          alt="Bottom image description"
        />
      </footer>
      {
        showPrivacyPolicy && (
          <PrivacyPolicyPopup onClose={() => setShowPrivacyPolicy(false)} />
        )
      }
    </div >
  )
}
