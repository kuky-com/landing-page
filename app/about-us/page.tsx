"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import about from "../about.png";
import shadowimage from "../blur-image.png";
import shadowimagetwo from "../blur-two.png";
import Image from "next/image";
import people1 from "../people1.png";
import icon from "../icon.png";
import people2 from "../people2.png";
import people3 from "../people3.png";
import people4 from "../people4.png";
import people5 from "../people5.png";
import arrowblue from "../arrow-blue.png";
import bettertogether from "../bettertogether.png";
import KukyInfo from "@/components/KukyInfo";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-nunito flex flex-col">
      <Header showAmbassadorBtn={true} />

      <main className="flex-grow flex flex-col justify-center items-center px-0 lg:px-0 mt-[92px]">
        <div className="w-full  mx-auto flex flex-col gap-8 main-block">
          {/* Title section at the top */}
          <div className="main-block-title mt-10 relative overflow-hidden md:p-0 sm:p-2 p-2">
            <div className="max-w-4xl mx-auto ">
              <div className="items-center flex justify-center">
                <Image
                  className="max-h-[100px] w-auto"
                  src={bettertogether}
                  alt="better together"
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 sm:py-16 items-center gap-5 pt-5 lg:px-0 px-2">
                <div className="md:text-start text-center relative">
                  <h2 className="lg:text-5xl text-4xl font-black text-[#e6e6e6] font-nunito mb-3 sm:mt-8 mt-4">
                    About KUKY?
                  </h2>
                  <p className="text-medium lg:text-3xl md:text-2xl text-2xl text-[#333333] font-nunito ">
                    Discover the story behind
                    <br /> <span className="font-extrabold">Kuky</span> and why
                    we&#39;re
                    <br /> passionate about building a
                    <br /> supportive community.
                  </p>
                  <Image
                    className="w-[150px] h-auto absolute -bottom-[150px] sm:block hidden right-0"
                    src={arrowblue}
                    alt="arrow blue"
                  />
                </div>
                <div className="sm:mx-0 mx-auto">
                  <Image
                    className="bg-cover object-fit max-h-[600px] w-auto"
                    src={about}
                    alt="landingimage"
                  />
                </div>
              </div>
            </div>
            <Image
              className="absolute top-0 xl:left-[-150px]  left-[-150px]"
              src={shadowimage}
              alt="landingimage"
            />
            <Image
              className="absolute top-[-170px] xl:right-[-150px]  right-[-100px]"
              src={shadowimagetwo}
              alt="landingimage"
            />
          </div>
        </div>

        {/* section two */}
        <section className="w-full sm:py-16 py-8 font-nunito">
          <div className="w-full max-w-7xl mx-auto bg-[#725ED4] rounded-[10px]">
            <div className="text-center pt-11 sm:pb-[80px] pb-10">
              <div className="items-center justify-center w-full flex flex-row">
                <Image className="max-h-[66px] w-auto" src={icon} alt="icon" />
              </div>

              <h2 className="lg:text-4xl text-3xl font-black text-[#e6e6e6] font-nunito mb-3 sm:mt-8 mt-4">
                The KUKY Journey
              </h2>
              <p className="text-medium lg:text-2xl md:text-xl text-lg text-[#DFD4F0] font-nunito ">
                Kuky was created to foster deeper connections through shared
                experiences,
                <br />
                bringing together people who truly understand your journey.
              </p>
            </div>
          </div>
        </section>

        {/*section three */}
        <section className="w-full sm:py-12 py-8 ">
          <div className="w-full max-w-6xl mx-auto text-center">
            <h2 className="md:text-5xl sm:text-3xl text-3xl font-black text-[#e6e6e6] font-nunito mb-8 sm:mb-16 mt-8">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 text-[#333333] lg:grid-cols-3 lg:px-0 px-2 lg:gap-3 sm:gap-2 gap-0">
              {/* First Column */}
              <KukyInfo
                title="Empathy First"
                description={
                  <>
                    We prioritize understanding and
                    <br />
                    supporting one another in every
                    <br />
                    connection
                  </>
                }
              />

              {/* Second Column */}
              <KukyInfo
                title="Privacy and Security"
                description={
                  <>
                    Our privacy is our top priority.
                    <br />
                    We ensure that all your
                    <br />
                    interactions are safe and secure.
                  </>
                }
              />

              {/* Third Column */}
              <KukyInfo
                title="Diversity & Inclusion"
                description={
                  <>
                    We welcome individuals from all
                    <br />
                    walks of life and strive to create a
                    <br />
                    space where everyone belongs.
                  </>
                }
              />
            </div>
          </div>
        </section>

        {/* section four people behind kuky */}

        <section className="w-full max-w-5xl mx-auto sm:py-24 py-10">
          <h2 className="md:text-5xl sm:text-3xl text-2xl text-center font-black text-[#e6e6e6] font-nunito mb-8 sm:mb-16">
            The People Behind Kuky
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:p-0 p-2">
            <div className="col-span-2 lg:col-start-2 col-start-1 relative overflow-hidden group">
              <div className="border border-solid border-[#725ED4] md:rounded-[12px] sm:rounded-[22px] rounded-[14px]">
                <Image className="bg-cover w-full" src={people1} alt="" />
              </div>
              <div className="bg-[#725ED4] font-nunito rounded-[10px] text-center border border-solid border-[#725ED4] opacity-[0.90] text-white sm:p-2 p-1 absolute left-1/2 lg:-bottom-[-33p%] md:bottom-[-42%] sm:bottom-[-15%] bottom-[-33%] -translate-x-1/2 -translate-y-1/2 w-[90%] transition-all ease-out duration-500 group-hover:sm:bottom-[0%] group-hover:bottom-[-5%] hover:bg-[#433a70] cursor-pointer">
                <h3 className="text-[18px] font-black mb-2">Belinda Agnew</h3>
                <p className="text-base font-medium">Community & Content</p>
              </div>
            </div>
            <div className="col-span-2 relative overflow-hidden group">
              <div className="border border-solid border-[#725ED4] md:rounded-[12px] sm:rounded-[22px] rounded-[14px]">
                <Image className="bg-cover w-full" src={people2} alt="" />
              </div>
              <div className="bg-[#725ED4] font-nunito rounded-[10px] text-center border border-solid border-[#725ED4] opacity-[0.90] text-white sm:p-2 p-1 absolute left-1/2 lg:-bottom-[-33p%] md:bottom-[-42%] sm:bottom-[-15%] bottom-[-33%] -translate-x-1/2 -translate-y-1/2 w-[90%] transition-all ease-out duration-500 group-hover:sm:bottom-[0%] group-hover:bottom-[-5%] hover:bg-[#433a70] cursor-pointer">
                <h3 className="text-[18px] font-black mb-2">Sepideh Salimi</h3>
                <p className="text-base font-medium">User Experience</p>
              </div>
            </div>
            <div className="col-span-2 relative overflow-hidden group">
              <div className="border border-solid border-[#725ED4] md:rounded-[12px] sm:rounded-[22px] rounded-[14px]">
                <Image className="bg-cover w-full" src={people3} alt="" />
              </div>
              <div className="bg-[#725ED4] font-nunito rounded-[10px] text-center border border-solid border-[#725ED4] opacity-[0.90] text-white sm:p-2 p-1 absolute left-1/2 lg:-bottom-[-33p%] md:bottom-[-42%] sm:bottom-[-15%] bottom-[-33%] -translate-x-1/2 -translate-y-1/2 w-[90%] transition-all ease-out duration-500 group-hover:sm:bottom-[0%] group-hover:bottom-[-5%] hover:bg-[#433a70] cursor-pointer">
                <h3 className="text-[18px] font-black mb-2">Armin Nehzat</h3>
                <p className="text-base font-medium">Sales & Marketing</p>
              </div>
            </div>
            <div className="col-span-2 relative overflow-hidden group">
              <div className="border border-solid border-[#725ED4] md:rounded-[12px] sm:rounded-[22px] rounded-[14px]">
                <Image className="bg-cover w-full" src={people4} alt="" />
              </div>
              <div className="bg-[#725ED4] font-nunito rounded-[10px] text-center border border-solid border-[#725ED4] opacity-[0.90] text-white sm:p-2 p-1 absolute left-1/2 lg:-bottom-[-33p%] md:bottom-[-42%] sm:bottom-[-15%] bottom-[-33%] -translate-x-1/2 -translate-y-1/2 w-[90%] transition-all ease-out duration-500 group-hover:sm:bottom-[0%] group-hover:bottom-[-5%] hover:bg-[#433a70] cursor-pointer">
                <h3 className="text-[18px] font-black mb-2">Ben Hong</h3>
                <p className="text-base font-medium">Product & Operations</p>
              </div>
            </div>
            <div className="col-span-2 relative overflow-hidden group">
              <div className="border border-solid border-[#725ED4] md:rounded-[12px] sm:rounded-[22px] rounded-[14px]">
                <Image className="bg-cover w-full" src={people5} alt="" />
              </div>
              <div className="bg-[#725ED4] font-nunito rounded-[10px] text-center border border-solid border-[#725ED4] opacity-[0.90] text-white sm:p-2 p-1 absolute left-1/2 lg:-bottom-[-33p%] md:bottom-[-42%] sm:bottom-[-15%] bottom-[-33%] -translate-x-1/2 -translate-y-1/2 w-[90%] transition-all ease-out duration-500 group-hover:sm:bottom-[0%] group-hover:bottom-[-5%] hover:bg-[#433a70] cursor-pointer">
                <h3 className="text-[18px] font-black mb-2">Tung Mai</h3>
                <p className="text-base font-medium">Engineering</p>
              </div>
            </div>
          </div>
        </section>

        {/* section five play store */}
        <section className="w-full mx-auto bg-[#725ED4] p-16 mb-12">
          <h2 className="text-white text-3xl font-bold text-center mb-6">
            Ready to Find Your Community?
          </h2>
          <p className="text-[#E8FF58] text-center mb-8">
            Connect with Like-Minded Individuals
          </p>
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
                  src="/apple-app-store.png" // Replace with actual path to the App Store image
                  alt="Download on the App Store"
                  className="h-16" // Adjust height responsively
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
                  src="/google-play.png" // Replace with actual path to the Google Play image
                  alt="Get it on Google Play"
                  className="h-16" // Adjust height responsively
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
