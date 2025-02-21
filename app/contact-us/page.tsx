"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import ContactInfo from "@/components/ContactInfo";
import ContactUsModal from "@/components/Common/ContactUsModal";
import { ToastContainer } from "react-toastify";

export default function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-lato flex flex-col">
      <Header showAmbassadorBtn={true} />

      <main className="flex-grow flex flex-col justify-center items-center mt-[68px] xl:px-0 md:px-6 px-4">
        <div className="w-full  mx-auto flex flex-col gap-8 main-block ">
          {/* Title section at the top */}
          <div className="main-block-title text-black md:p-0 sm:p-2 p-0">
            <div className="max-w-6xl mx-auto ">
              <div className="text-center mt-[65px] sm:mb-[140px] mb-[50px] text-[#e6e6e6]">
                <h2 className="sm:text-5xl text-[35px] font-nunito  font-black ">
                  Contact Us
                </h2>
              </div>
              <div className="grid grid-cols-1 text-[#333333] md:grid-cols-3 lg:px-0 px-2 lg:gap-3 gap-2 xl:mx-0 sm:mx-2 mx-0   mb-[120px]">
                {/* First Column */}
                <div onClick={() => setIsModalOpen(true)}>
                  <ContactInfo
                    title="Help Center"
                    description="Need help navigating our app or want to report a problem?"
                  />
                </div>
                {/* Second Column */}
                <div onClick={() => setIsModalOpen(true)}>
                  <ContactInfo
                    title="Partnerships"
                    description="Are you looking to partner with Kuky?"
                  />
                </div>
                {/* Third Column */}

                <div className="" onClick={() => setIsModalOpen(true)}>
                  <ContactInfo
                    title="Success Story"
                    description="Contact us to submit your story"
                  />
                </div>
              </div>

              {/* Social Media Icons on the left */}
              <div className="flex space-x-4 justify-center items-center sm:gap-1 gap-0 md:mb-[700px] sm:mb[500px] mb-[200px]">
                {/* Instagram */}
                <Link
                  className="flex justify-center"
                  href="https://www.instagram.com/kuky_app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* Twitter */}
                <Link
                  className="flex justify-center"
                  href="https://x.com/kuky_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Image
                    src="/twitter.svg"
                    alt="Twitter"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* Facebook */}
                <Link
                  className="flex justify-center"
                  href="https://facebook.com/kukyapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* WhatsApp */}
                <Link
                  className="flex justify-center"
                  href="https://wa.me/610491711556"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* Tiktok */}
                <Link
                  className="flex justify-center"
                  href="https://www.tiktok.com/@kuky_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiktok"
                >
                  <Image
                    src="/tiktok.svg"
                    alt="Tiktok"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* YouTube */}
                <Link
                  className="flex justify-center"
                  href="https://www.youtube.com/@kuky_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Image
                    src="/youtube.svg"
                    alt="Youtube"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ContactUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

// // modal open for submit story form
// const Modal = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   useEffect(() => {
//     const handleEsc = (event: KeyboardEvent) => {
//       if (event.key === "Escape") onClose();
//     };

//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   if (!isOpen) return null;

//   const validationSchema = yup.object().shape({
//     fullName: yup.string().required("Full Name is required"),
//     email: yup.string().email("Invalid email").required("Email is required"),
//     message: yup.string().required("This field is required"),
//     recaptcha: yup.string().required("Captcha verification is required"),
//   });

//   const handleSubmitForm = (
//     values: any,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
//   ) => {
//     console.log("Form submitted successfully", values);
//     alert("Form successfully sent!");

//     setSubmitting(false);
//   };

//   return (

//   );
// };
