import React from 'react';
import Image from 'next/image'

interface TnCPopupProps {
    onClose: () => void;
}

const TnCPopup: React.FC<TnCPopupProps> = ({ onClose }) => {
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
                        <h2 className="text-4xl text-black font-bold mb-4">Terms and Conditions</h2>

                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            Welcome to Kuky! These Terms and Conditions ("Terms") govern your use of the Kuky application ("App") and any related services provided by Kuky ("we", "us", "our"). By accessing or using the App, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the App.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">1. Acceptance of Terms</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            By creating an account or using the App, you agree to these Terms and our Privacy Policy. We may update these Terms from time to time, and your continued use of the App constitutes your acceptance of any changes.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">2. User Accounts</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>Registration:</strong> You must create an account to use the App. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                        </p>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>Eligibility:</strong> You must be at least 18 years old to create an account and use the App. By registering, you represent that you meet this age requirement.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">3. Use of the App</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>License:</strong> We grant you a limited, non-exclusive, non-transferable license to access and use the App for personal, non-commercial purposes.
                        </p>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>Prohibited Activities:</strong> You agree not to:
                            <ul className="list-disc list-inside">
                                <li>Use the App for any unlawful or unauthorized purpose.</li>
                                <li>Upload, post, or share any content that is defamatory, obscene, or infringes on others' rights.</li>
                                <li>Attempt to interfere with the operation of the App or gain unauthorized access to our systems.</li>
                            </ul>
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">4. Video Uploads and Content</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>Public and Private Videos:</strong> You may upload two types of videos:
                            <ul className="list-disc list-inside">
                                <li>A <strong>Public Video</strong> visible to the Kuky community.</li>
                                <li>A <strong>Private Video</strong> used solely for our AI matching process and not shared with others.</li>
                            </ul>
                        </p>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>Content Ownership:</strong> You retain ownership of any content you upload to the App. By uploading content, you grant us a license to use, modify, and display it as necessary for the operation of the App.
                        </p>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>Content Responsibility:</strong> You are solely responsible for the content you upload. We reserve the right to remove any content that violates these Terms or is otherwise objectionable.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">5. Privacy</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            Your privacy is important to us. Please refer to our <a href="#" className="text-[#686868] font-medium">Privacy Policy</a> for information on how we collect, use, and protect your personal information.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">6. Intellectual Property</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            All intellectual property rights in the App, including but not limited to software, designs, logos, and trademarks, are owned by us or our licensors. You may not use, copy, or distribute any content from the App without our prior written permission.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">7. Limitation of Liability</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>No Warranties:</strong> The App is provided "as is" without any warranties, express or implied. We do not guarantee that the App will be error-free or uninterrupted.
                        </p>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            <strong>Liability Cap:</strong> To the maximum extent permitted by law, our liability for any claim arising from your use of the App is limited to the amount you paid us, if any, for access to the App.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">8. Termination</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            We may terminate or suspend your access to the App at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">9. Governing Law</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            These Terms are governed by the laws of New South Wales, Australia, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts of New South Wales.
                        </p>

                        <h3 className="text-[#686868] font-roboto text-base font-medium leading-[18.75px] text-left mb-2">10. Contact Us</h3>
                        <p className="text-[#686868] mb-4 font-roboto text-base font-light leading-[18.75px] text-left">
                            If you have any questions or concerns about these Terms, please contact us at hello (at) kuky (dot) com.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TnCPopup;