import React from 'react';
import Image from 'next/image'

interface AboutUsPopupProps {
    onClose: () => void;
}

const AboutUsPopup: React.FC<AboutUsPopupProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 sm:p-6 md:p-8">
            <div className="relative w-full max-w-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center z-10 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                    style={{
                        transform: 'translate(50%, -50%)'
                    }}
                >
                    <Image src="/close-button.svg" alt="Close button" width={34} height={34} />
                </button>
                <div className="bg-white rounded-lg max-h-[80vh] overflow-y-auto no-scrollbar">
                    <div className="p-6 sm:p-8 md:p-10">
                        <h2 className="text-4xl text-black font-bold mb-4">About Us</h2>

                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            Welcome to Kuky! We are a passionate team dedicated to transforming how people connect and build relationships based on shared interests and hobbies. Our mission is to make meaningful connections easier and more accessible through the power of AI technology.
                        </p>

                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            At Kuky, we believe that the best connections come from shared experiences. Whether you're looking for someone to run with, study with, or simply share your hobbies with, Kuky is here to help you find that perfect match. Our AI-powered app analyzes your video profiles to match you with others who share your passions, making it easier than ever to meet like-minded people.
                        </p>

                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            We're committed to your privacy and security. That's why we've built Kuky with robust privacy controls, ensuring that your personal information and private videos are protected at all times. Our goal is to create a safe and supportive community where you can confidently explore new connections.
                        </p>

                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            Thank you for choosing Kuky. We look forward to helping you connect, share, and grow with others who share your interests. Together, let's make every connection count.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AboutUsPopup;