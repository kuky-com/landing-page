'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
            <Image
                src="/kuky-icon.svg"
                alt="Kuky Logo"
                width={100}
                height={100}
                className="mb-8"
            />
            <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl">
                <h2 className="text-4xl text-black font-bold mb-4">Privacy Policy</h2>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    At Kuky, we are committed to protecting your privacy and complying with the Australian Privacy Principles (APPs) outlined in the Privacy Act 1988 (Cth). This Privacy Policy explains how we collect, use, and manage your personal information.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Collection of Personal Information</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    We collect personal information that is reasonably necessary for our functions and activities. This may include your name, email address, and other details provided through interactions with our website.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Purpose of Collection</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    We collect personal information to provide you with information, updates, and services related to Kuky. Your information may also be used for communication and marketing purposes, but only with your explicit consent.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Use and Disclosure</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    We will only use or disclose your personal information for the purposes for which it was collected, unless you give us permission or the use or disclosure is required by law.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Data Security</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    We take reasonable steps to protect your personal information from unauthorized access, modification, or disclosure. Our security measures include encryption, access controls, and regular security reviews.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Access and Correction</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    You have the right to access and correct the personal information we hold about you. If you wish to do so, please contact us using the details provided below.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Cookies and Analytics</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    Our website may use cookies to improve user experience and gather non-identifiable information about your browsing behavior. We may also use analytics tools to analyze website traffic and usage patterns.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Third Parties</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    We may share your personal information with trusted third-party service providers to assist us in delivering our services. These providers are contractually bound to handle your information confidentially and securely.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Direct Marketing</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    We may use your personal information for direct marketing purposes, such as sending you newsletters or promotional emails. You have the option to opt out of such communications at any time.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Changes to Privacy Policy</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this policy regularly.
                </p>
                <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">Contact Us</h3>
                <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                    If you have questions, concerns, or wish to access or correct your personal information, please contact our Privacy Officer at: hello (at) kuky (dot) com. Our Privacy Officer will respond to your inquiries promptly and assist you with any privacy-related matters.
                </p>
            </div>
        </div>
    )
}