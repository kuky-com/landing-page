"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import profile1 from "./profile1.png";
import profile2 from "./profile2.png";
import curve from "./curve.png";
import profile3 from "./profile3.png";
import profile4 from "./profile4.png";
import profile5 from "./profile5.png";
import insta1 from "./image1.png";
import insta2 from "./image2.png";
import insta3 from "./image3.png";
import shadoimage from "./blur-image.png";
import shadoimagetwo from "./blur-two.png";
import safeSpace from "./safespace.png";
import storyicon from "./storyicon.png";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import KukyInfo from "@/components/KukyInfo";
import playstore from "../public/google-play.png";
import appstore from "../public/apple-app-store.png";
import InstagramFeed from "@/components/InstagramFeed";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF] font-nunito flex flex-col">
      <Header showAmbassadorBtn={true} />

      <main className="flex-grow flex flex-col justify-center items-center px-0 lg:px-0 mt-[92px]">
        <div className="w-full  mx-auto flex flex-col gap-8 main-block">
          {/* Title section at the top */}
          <div className="main-block-title sm:mt-10 mt-0 relative sm:p-0 p-2">
            <div className="max-w-4xl mx-auto lg:px-0 md:px-6 px-2 lg:mt-[75px]">
              <h2
                className="lg:text-4xl text-2xl font-normal text-[#333333] leading-normal mx-3 lg:mx-4 sm:mx-0 mb-4"
                // style={{ textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <span className="font-bold">Kuky</span> helps you find
                meaningful connections <br className="md:block hidden" />{" "}
                through shared experiences.
              </h2>

              {/* youtube shorts video */}
              <div className="flex flex-col md:flex-row md:gap-0 gap-8 mt-10 items-center justify-center lg:gap-2">
                <div className="relative z-[1] sm:w-[38%] w-[100%] pb-[70%] bg-[#715ED4] rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/9V658Z75Ly4"
                    title="YouTube kuky Shorts Video"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mx-auto md:ml-8 md:mr-0 p-2 sm:p-0 relative z-[1]">
                  <h1 className="lg:text-[44px] sm:text-[40px] text-[28px] lg:leading-[55px] sm:leading-[50px] leading-[40px] font-black text-[#725ED4]">
                    Ready to Find&nbsp;
                    <br className="sm:block hidden" />
                    Your Community?
                  </h1>
                  <p className="text-[#725ED4] lg:text-[30px] text-[25px] lg:leading-[45px] leading-[35px] font-medium pt-6">
                    Download Kuky and&nbsp;
                    <br className="md:block hidden" />
                    connect with Like-Minded&nbsp;
                    <br className="md:block hidden" />
                    Individuals
                  </p>
                  <div className="flex items-center lg:justify-start justify-center lg:flex-nowrap flex-wrap gap-3">
                    <a
                      href="https://apps.apple.com/au/app/kuky/id6711341485"
                      className="flex items-center justify-center w-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="bg-cover lg:w-[230px] w-[200px] pt-8"
                        src={appstore}
                        alt="apple app store"
                      />
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.kuky.android"
                      className="flex items-center justify-center w-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="bg-cover  lg:w-[230px] w-[200px] pt-8"
                        src={playstore}
                        alt="google play store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Image
              className="absolute left-[-80px] top-0 select-none pointer-events-none"
              src={shadoimage}
              alt="blur image blue"
            />
            <Image
              className="absolute right-0 top-0 select-none pointer-events-none "
              src={shadoimagetwo}
              alt="blur image blue"
            />
          </div>
        </div>

        {/*section two */}
        <section className="w-full sm:py-16 py-8">
          <div className="w-full max-w-6xl mx-auto text-center xl:px-0 md:px-6 px-4">
            <h2 className="md:text-5xl sm:text-3xl text-3xl font-black text-[#e6e6e6] font-nunito mb-8 sm:mb-16 mt-8">
              Why Kuky?
            </h2>
            <div className="grid grid-cols-1 text-[#333333] lg:grid-cols-3 lg:px-0 px-2 lg:gap-3 sm:gap-2 gap-0">
              {/* First Column */}
              <KukyInfo
                title="Safe and Inclusive Community"
                description={
                  <>
                    Our Advanced AI Understands{" "}
                    <br className="md:block hidden" /> your unique needs and
                    find <br className="md:block hidden" /> people who truly
                    understand <br className="md:block hidden" /> you.
                  </>
                }
              />

              {/* Second Column */}
              <KukyInfo
                title="Video Sharing"
                description={
                  <>
                    Express yourself beyond text-{" "}
                    <br className="md:block hidden" /> show the real you in a{" "}
                    <br className="md:block hidden" /> 30-second video instead
                    of <br className="md:block hidden" /> filling out long
                    forms!
                  </>
                }
              />

              {/* Third Column */}
              <KukyInfo
                title="Personalized Matchmaking"
                description={
                  <>
                    Join diverse support groups and{" "}
                    <br className="md:block hidden" /> communities to connect
                    with others <br className="md:block hidden" /> who share
                    your experiences and <br className="md:block hidden" />{" "}
                    understand your journey.
                  </>
                }
              />
            </div>
          </div>
        </section>

        {/* section three real stories */}

        <section className="mx-auto sm:py-24 sm:py-12 py-8 xl:px-0 md:px-6 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-8 md:gap-4 gap-2 xl:mx-0 mx-0">
            {/* Team Member 1 */}
            <div className="relative z-[10]">
              <Image
                className="w-10 h-10"
                src={storyicon}
                alt="real story icon"
              />
              <h3 className="text-2xl sm:text-6xl font-nunito text-[#725ED4] sm:font-black font-extrabold mb-4">
                Real stories.
                <br />
                Honest Conversations.
                <br />
                Mental wellness.
                <br />
                redefined.
              </h3>
              <p className="text-[#333333] font-medium  text-lg sm:text-2xl">
                Join us as we talk about personal growth, resileence, and{" "}
                <br className="xl:block hidden" />
                the power of human connection. Listen on your favourite{" "}
                <br className="xl:block hidden" />
                platform!
              </p>
              <div className="mt-8 flex flex-col justify-start items-start gap-3">
                <a
                  href="https://open.spotify.com/show/3CkgnjWzvuNeilZBOgOPqs?si=c833d254ee7c465b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="bg-[#333333] text-white md:w-[400px]  w-full sm:h-12 h-10 rounded-[30px]">
                    Listen on Spotify
                  </button>
                </a>
                <a
                  href="/contact-us"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="border-[1px] border-[#333333] border-solid text-[#333333] md:w-[400px] w-full sm:h-12 h-10 rounded-[30px]">
                    Apply to be on the show
                  </button>
                </a>
              </div>
              <Image
                className="absolute z-[-1] top-[-150px] left-[-300px] select-none pointer-events-none"
                src={shadoimage}
                alt="blur image blue"
              />
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="rounded-lg relative ">
                <Image
                  className="h-auto rounded-lg object-cover sm:mb-4 p-6 xl:mx-0 sm:mx-4 mx-0"
                  src={safeSpace}
                  alt="safe space"
                />
                <div className="bg-[#DFD4F0] sm:w-[9px] w-[6px] h-[43px] rounded-[20px] absolute top-[50%] sm:left-3 left-0"></div>
                <div className="bg-[#DFD4F0] sm:w-[9px] w-[6px] h-[90px] rounded-[20px] absolute sm:top-[47%] top-[45%] sm:left-0 left-2"></div>
                <div className="bg-[#DFD4F0] sm:w-[9px] w-[6px] h-[47px] rounded-[20px] absolute top-1/2 sm:-left-3 left-4"></div>
                <div className="bg-[#DFD4F0] sm:w-[9px] w-[6px] h-[64px] rounded-[20px] absolute top-1/2  sm:right-8 right-4"></div>
                <div className="bg-[#DFD4F0] sm:w-[9px] w-[6px] h-[126px] rounded-[20px] absolute top-[40%] sm:top-[45%] sm:right-5 right-2"></div>
                <div className="bg-[#DFD4F0] sm:w-[9px] w-[6px] h-[58px] rounded-[20px] absolute top-1/2  sm:right-2 right-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* section four blue page */}
        <section className=" w-full bg-[#725ED4] xl:p-0 p-4 md:h-[615px] sm:h-[500px] h-[350px] sm:p-16 p-5 relative xl:px-0 md:px-6 px-4">
          <div className="max-w-[1300px]">
            <Image
              src={curve}
              alt="Your experience can make a difference"
              className="max-w-[1200px] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />

            {/* profiles */}
            <div className="absolute  bottom-[25%] 2xl:left-[20%] xl:left-[10%] left-3">
              <Image
                className="rounded-full sm:w-[60px] w-10 sm:h-[60px] h-10 border-[1px] border-white border-solid"
                src={profile1}
                alt="profile1"
              />
              <p className="bg-[#E8FF58] rounded-full sm:mt-2 mt-1 text-[#725ED4] sm:text-sm text-[8px] py-[2px] px-2 inline-block">
                Grief support
              </p>
            </div>
            <div className="absolute sm:top-[36%] top-[25%] 2xl:left-[35%] xl:left-[30%] left-[25%]">
              <p className="bg-[#E8FF58] rounded-full sm:mb-2 mb-1 text-[#725ED4] sm:text-sm text-[8px] py-[2px] px-2 inline-block">
                Empty Nesters
              </p>
              <Image
                className="rounded-full sm:w-[50px] w-8 sm:h-[50px] h-8 border-[1px] border-white border-solid"
                src={profile2}
                alt="profile2"
              />
            </div>
            <div className="absolute  bottom-[25%] sm:left-[50%] left-[45%]">
              <Image
                className="rounded-full sm:w-[60px] w-10 sm:h-[60px] h-10 border-[1px] border-white border-solid"
                src={profile3}
                alt="profile3"
              />
              <p className="bg-[#E8FF58] rounded-full sm:mt-2 mt-1 text-[#725ED4] sm:text-sm text-[8px] py-[2px] px-2 inline-block">
                Devorce Journey
              </p>
            </div>
            <div className="absolute md:top-[25%] sm:top-[20%] top-[14%] 2xl:right-[35%] xl:right-[25%] md:right-[22%] sm:right-[15%] right-[10%]">
              <p className="bg-[#E8FF58] rounded-full sm:mb-2 mb-1 text-[#725ED4] sm:text-sm text-[8px] py-[2px] px-2 inline-block">
                Addiction Recovery
              </p>
              <Image
                className="rounded-full sm:w-[60px] w-10 sm:h-[60px] h-10 border-[1px] border-white border-solid"
                src={profile4}
                alt="profile4"
              />
            </div>
            <div className="absolute bottom-[30%] 2xl:right-[20%] xl:right-[10%] sm:right-[10%] right-1">
              <Image
                className="rounded-full sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] border-[1px] border-white border-solid"
                src={profile5}
                alt="profile5"
              />
              <p className="bg-[#E8FF58] rounded-full sm:mt-2 mt-1 text-[#725ED4] sm:text-sm text-[8px] py-[2px] px-2 inline-block">
                Quitting Smoking
              </p>
            </div>
          </div>
        </section>
        

        {/* section five instagram post */}
        <section className="w-full max-w-[1200px] mx-auto sm:py-16 py-8 xl:px-0 md:px-6 px-4">
          <h1 className="text-[#725ED4] font-black sm:text-4xl text-2xl text-center mb-10 mt-5">
            Share your #safeSpace
          </h1>
          {/* <div className=""> */}
          {/* <div>
              <Image width="400" src={insta1} alt="insagram story1" />
            </div>
            <div>
              <Image width="400" src={insta2} alt="instagram story2" />
            </div>
            <div>
              <Image width="400" src={insta3} alt="instagram story3" />
            </div> */}
          <InstagramFeed />
          {/* </div> */}
        </section>

        {/* section six faq */}
        <section className=" mx-auto md:py-16 sm:py-10 py-3 xl:px-0 md:px-6 px-4">
          <div>
            <FAQ />
          </div>
        </section>

        {/* section seven play store */}
        <section className="w-full mx-auto bg-[#725ED4] sm:p-16 p-8 mb-12">
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
