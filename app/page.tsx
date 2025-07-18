/* eslint-disable @next/next/no-img-element */
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
import PrimaryButton from "@/components/Common/PrimaryButton";
import { useEffect, useState } from "react";
import { get } from "../utils/api";
import StoryCard from "@/components/StoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface Match {
  id: number;
  full_name: string;
  profile: {
    full_name: string;
    avatar: string;
  };
  conversation_id: string;
  // Add more fields based on your API response
}
interface MatchResponse {
  data: Match[];
}


export default function Home() {
  const [randomUsers, setRandomUsers] = useState<Match[]>([]);
  const list = [
    {
        "name": "Connect with others who understand what you're going through.",
        "id": 1
    },
    {
        "name": "Share your story in a judgement-free space.",
        "id": 2
    },
    {
        "name": "Learn from personal experiences.",
        "id": 3
    },
    {
        "name": "Find support and motivation for your next chapter.",
        "id": 4
    }
]
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await get<MatchResponse>("/matches/random-by-journey");
        //console.log("Random Matches:", response);
        setRandomUsers(response?.data)
      } catch (error) {
        console.error("Failed to fetch random matches", error);
      }
    };

    fetchMatches();
  }, []);
  //console.log('randomUsers', randomUsers);
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
                <div className="relative z-[1] w-[100%] pb-[70%] bg-[#715ED4] rounded-2xl overflow-hidden">
                  {/* <iframe
                    src="https://www.youtube.com/shorts/-fUOD4kMVs4?feature=share"
                    title="YouTube kuky Shorts Video"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */}
                  <iframe
                    src="https://www.youtube.com/embed/-fUOD4kMVs4" 
                    title="You don’t need to be fixed — just understood 💬"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  >
                    </iframe>
                </div>

                <div className="mx-auto md:ml-8 md:mr-0 p-2 sm:p-0 relative z-[1]">
                  <h1 className="lg:text-[44px] sm:text-[40px] text-[28px] lg:leading-[55px] sm:leading-[50px] leading-[40px] font-black text-[#725ED4]">
                    Discover a&nbsp;
                    <br className="sm:block hidden" />
                    supportive&nbsp;
                    <br className="sm:block hidden" />
                    community just&nbsp;
                    <br className="sm:block hidden" />
                    for <span className="text-black italic">YOU</span>
                  </h1>
                  <p className="text-[#725ED4] lg:text-[30px] text-[25px] lg:leading-[45px] leading-[35px] font-medium pt-6">
                    Connect with a Supportive Community Focused on Mental Wellness and Personal Growth.&nbsp;
                    <br className="md:block hidden" />
                  </p>
                  <div className="flex flex-col items-center lg:items-start gap-5 w-full md:w-[400px] pt-6">
					  {/* App Store & Play Store Buttons */}
					  <div className="flex items-center justify-center lg:justify-start flex-wrap lg:flex-nowrap gap-3 w-full">
					    <a
					      href="https://apps.apple.com/au/app/kuky/id6711341485"
					      className="flex items-center justify-center w-auto"
					      target="_blank"
					      rel="noopener noreferrer"
					    >
					      <Image
					        className="bg-cover w-[200px] lg:w-[230px]"
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
					        className="bg-cover w-[200px] lg:w-[230px]"
					        src={playstore}
					        alt="google play store"
					      />
					    </a>
					  </div>

					  {/* Explore the Community Button */}
					  <a
					    href="https://app.kuky.com/"
					    target="_blank"
					    rel="noopener noreferrer"
					    className="w-full"
					  >
					    <PrimaryButton text="Explore the Community" />
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

        <section className="mx-auto sm:py-24 sm:py-12 py-8 xl:px-0 md:px-6 px-4" style={{display:'none'}}>
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
                Genuine Connections.
                <br />
                Discover people who share your journey.
              </h3>
              <p className="text-[#333333] font-medium  text-lg sm:text-2xl">
                Explore inspiring profiles and conversations about personal growth, resilience, and mental wellbeing.{" "}
                <br className="xl:block hidden" />
                Find others walking a similar path.{" "}
              </p>
              <div className="mt-8 flex flex-col justify-start items-start gap-3">
                <a
                  href="https://app.kuky.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <PrimaryButton text="Explore Users" />
                </a>
                <a
                  href="https://app.kuky.com/signup"
			target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="border-[1px] border-[#333333] border-solid text-[#333333] md:w-[400px] w-full sm:h-12 h-10 rounded-[30px]">
                    Signup to Share Your Story
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

        <section className="w-full sm:py-16 py-8">
          <div className="w-full max-w-6xl mx-auto text-center xl:px-0 md:px-6 px-4">
            <div className="text-center ">
            <>
              <h2 className="md:text-4xl sm:text-2xl text-xl mb-7 text-[#333333] font-bold">
                Real Stories from Real People
              </h2>

              {/* Desktop Grid */}
              <div
                className={` grid grid-cols-1 sm:grid-cols-2 md:grid md:grid-cols-3 sm:gap-6 gap-2 mt-4`}
              >
                {randomUsers?.map((story: Match) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </>
          {/* why join devorce journey */}
          <div className="text-start sm:my-[60px] my-[80px]">
            <h1 className="font-bold mb-3 md:text-2xl md:text-start text-center sm:text-xl text-lg text-[#333333]">
              Real Stories from Real People
            </h1>
            <p className="font-bold text-[20px] mb-3 md:text-2xl md:text-start text-center sm:text-xl text-lg text-[#333333]"></p>
            <div className="ml-7 md:block hidden">
              <ul className="list-disc list-outside sm:mx-0 mx-2 mt-5">
                  <li
                    className="font-medium sm:leading-[40px] leading-[25px] md:text-[20px] sm:text-lg text-sm text-[#333333]"
                  >
                    Connect with others who understand what {`you'`}re going through.
                  </li>
                  <li
                    className="font-medium sm:leading-[40px] leading-[25px] md:text-[20px] sm:text-lg text-sm text-[#333333]"
                  >
                    Share your story in a judgement-free space.
                  </li>
                  <li
                    className="font-medium sm:leading-[40px] leading-[25px] md:text-[20px] sm:text-lg text-sm text-[#333333]"
                  >
                    Learn from personal experiences.
                  </li>
                  <li
                    className="font-medium sm:leading-[40px] leading-[25px] md:text-[20px] sm:text-lg text-sm text-[#333333]"
                  >
                    Find support and motivation for your next chapter.
                  </li>
              </ul>
                </div>
           {/* mobile list slider */}
            <div className="md:hidden relative">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true, el: ".custom-paginations" }}
                modules={[Pagination]}
                className="w-full"
              >
                    {list.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="rounded-[10px] relative overflow-hidden  bg-[#CDB8E266]/40"
                  >
                    <div className="h-[100px] grid place-items-center text-center rounded-[10px] py-4 px-[10px] font-medium sm:leading-[40px] leading-[18px] md:text-[20px] sm:text-lg text-[13px] text-[#333333]">
                      {item.name}
                    </div>
                        </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-paginations absolute transform -translate-x-1/2 md:hidden w-full flex items-center justify-center gap-1"></div>
            </div>
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
                Divorce Journey
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
