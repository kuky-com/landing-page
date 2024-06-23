'use client'

import Image from 'next/image'
import { useState, FormEvent, ChangeEvent, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { registerUser } from '../store/userSlice'

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const { status, error } = useSelector((state: RootState) => state.user)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'register' })
      const dataToSend = { ...formData, recaptchaToken: token };
      dispatch(registerUser(dataToSend));
    } catch (error) {
      console.error('reCAPTCHA error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <Image src="/kuky-icon.svg" alt="Kuky Icon" width={34} height={34} />
        <Image src="/menu-icon.svg" alt="Menu Icon" width={114} height={34} />
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-lexend text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-[86px] tracking-[0.002em] text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#686868] via-[#686868] to-[#202020] mb-12">
          <span className="block leading-[1.2em]">We're launching</span>
          <span className="block leading-[1.2em] mt-[-0.1em]">soon, get ready</span>
        </h1>

        <p className="font-roboto text-base font-light leading-[26px] text-center text-[rgba(102,102,102,1)] max-w-3xl mx-auto mb-12">
          Hold tight! Kuky is on its way to revolutionize how you meet and connect with people who share your interests. Whether it's finding a jogging buddy or a study partner, Kuky's got you covered.
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
          By submitting this form, you agree to our Privacy Policy, and allow Kuky to use this information for marketing purposes. We are committed to handling your personal data responsibly.
        </p>
      </main>
    </div>
  )
}