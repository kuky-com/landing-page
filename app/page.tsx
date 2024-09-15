'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { registerUser } from '../store/userSlice'
import { usePathname, useRouter } from 'next/navigation'

import Header from '../components/Header'
import VideoPopup from '../components/VideoPopup'
import ResponsiveBottomImage from '../components/ResponsiveBottomImage'
import PrivacyPolicyPopup from '../components/PrivacyPolicyPopup'
import AboutUsPopup from '../components/AboutUsPopup'
import TnCPopup from '../components/TnCPopup'
import FAQ from '../components/FAQ'
import CustomDropdown from '../components/CustomDropdown'

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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    goal: '',
    routeName: ''
  })

  const goals = [
    { value: "well_balanced_and_consistence", label: "Well balanced and consistence" },
    { value: "lose_belly_fat_and_build_muscle", label: "Lose belly fat and build muscle" },
    { value: "take_a_t_break", label: "Take a T break" },
    { value: "making_a_film_project", label: "Making a film project" },
    { value: "quit_pornography", label: "Quit pornography" },
    { value: "im_not_sure", label: "I'm not sure" },
    { value: "i_am_trying_to_quit_being_depressed_all_the_time", label: "I am trying to quit being depressed all the time" },
    { value: "the_creation_of_a_social_media_platform_to_connect_people", label: "The creation of a social media platform to connect people" },
    { value: "quitting_smoking", label: "Quitting smoking" },
    { value: "learning_to_talk_to_other_people_without_social_anxiety", label: "Learning to talk to other people without social anxiety" },
    { value: "to_lose_50_pounds", label: "To lose 50 pounds" },
    { value: "to_connect_with_people", label: "To connect with people" },
    { value: "gym", label: "Gym" },
    { value: "friendships_for_growth", label: "Friendships for growth" },
    { value: "health", label: "Health" },
    { value: "learning_yoga", label: "Learning yoga" },
    { value: "ultra_long_distance_cycle_touring", label: "Ultra long-distance cycle touring" },
    { value: "fitness", label: "Fitness" },
    { value: "learn_guitar", label: "Learn guitar" },
    { value: "run_a_marathon", label: "Run a marathon" }
  ];

  useEffect(() => {
    const storedRouteName = localStorage.getItem('routeName')
    if (storedRouteName) {
      setFormData(prev => ({ ...prev, routeName: storedRouteName }))
      localStorage.removeItem('routeName')
    }
  }, [])

  const handleDropdownChange = (value: string) => {
    setFormData({ ...formData, goal: value })
  }

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

      <Header setVideoOpen={() => setIsVideoOpen(true)} />

      <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-lexend text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[1.1em] sm:leading-[86px] tracking-[0.002em] text-center mb-6 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#686868] via-[#686868] to-[#202020] px-4 sm:px-0">
          <span className="animation mb-2 sm:mb-0 block leading-[1.2em]">Find Support</span>
          <span className=" block leading-[1.2em] mt-[-0.1em]">Through Shared Experiences</span>
        </h1>
        <h3 className="font-lexend text-2xl sm:text-3xl md:text-2xl lg:text-[40px] font-extrabold leading-[1.1em] sm:leading-[86px] tracking-[0.002em] text-center mb-6 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#686868] via-[#686868] to-[#202020] px-4 sm:px-0"><span className="mb-2 sm:mb-0 block leading-[1.2em]">Sign up for your agent access</span></h3>

        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/YVZUwdbTJUE"
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
          <h3 className="font-lexend text-xl sm:text-xl md:text-xl lg:text-[35] font-extrabold leading-[1.1em] sm:leading-[56px] tracking-[0.002em] text-center mb-6 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#686868] via-[#686868] to-[#202020] px-4 sm:px-0"><span className="mb-2 sm:mb-0 block leading-[1.2em]">Sign up for 3 months FREE access</span></h3>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <CustomDropdown
                options={goals}
                value={formData.goal}
                onChange={handleDropdownChange}
                placeholder="What goal are you looking to achieve?"
              />
            </div>
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
              {status === 'loading' && <p>Submitting...</p>}
              {status === 'failed' && <p className="text-red-500">{error}</p>}
              {status === 'succeeded' && <p className="text-green-500">Registration successful!</p>}
            </div>

          </form>
        </div>
        <p className="text-[#9b9b9b] text-sm text-center max-w-md mt-4">
          By submitting this form, you agree to our <button onClick={() => setShowPrivacyPolicy(true)} className="text-bold underline">Privacy Policy</button>, and allow Kuky to use this information for marketing purposes. We are committed to handling your personal data responsibly.
        </p>


        <VideoPopup
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoId="YVZUwdbTJUE"
        />
        <FAQ />


      </main>
      <footer className="mt-auto">
        <div className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 ">
          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            {/* YouTube */}
            <Link className="flex justify-center" href="https://www.youtube.com/@kuky_app" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </Link>

            {/* Twitter */}
            <Link className="flex justify-center" href="https://twitter.com/kuky_app" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>

            {/* Instagram */}
            <Link className="flex justify-center" href="https://www.instagram.com/kuky_app" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>

            {/* TikTok */}
            <Link className="flex justify-center" href="https://www.tiktok.com/@kuky_app" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="text-[#9b9b9b] text-sm text-center max-w-md mt-4">
            <button onClick={() => setShowAboutUs(true)} className="underline">About us</button><span> | </span>
            <button onClick={() => setShowTnC(true)} className="underline">Terms & Conditions</button><span> | </span>
            <button onClick={() => setShowPrivacyPolicy(true)} className="underline">Privacy Policy</button>
          </div>
        </div>
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
      {
        showTnC && (
          <TnCPopup onClose={() => setShowTnC(false)} />
        )
      }
      {
        showAboutUs && (
          <AboutUsPopup onClose={() => setShowAboutUs(false)} />
        )
      }
    </div >
  )
}
