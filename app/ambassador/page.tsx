"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import kukyicon from "../../public/white logo.png";
import blue_line from "../../public/blue line (1).png";
import ambasaddor_main from "../../public/ambasaddor main.png";
import ambasaddor_program from "../../public/ambasaddor program.png";
import arrow_yellow from "../../public/arrow-yellow.png";
import connection from "../../public/connection.png";
import journey from "../../public/journey.png";
import support from "../../public/support.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#FFF] font-lato flex flex-col">
      <Header showAmbassadorBtn={true} />

      <main className="flex-grow flex flex-col justify-center items-center px-0 lg:px-0 mt-[68px]">
        <div className="w-full  mx-auto flex flex-col gap-8 main-block ">
          {/* Title section at the top */}
          <div className="main-block-title bg-[#725ED4] xl:px-0 md:px-6 px-4">
            <div className="max-w-7xl mx-auto ">
              <div className="grid lg:grid-cols-2 grid-cols-1  items-center gap-5 pt-5 xl:px-0 px-2">
                <div className="lg:mb-0 mb-8 pb-4 p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Image
                      className="bg-cover object-fit w-5 h-5"
                      src={kukyicon}
                      alt="kuky logo"
                    />
                    <h2 className="lg:text-xl text-lg sm:font-semibold font-medium text-white">
                      Kuky Ambassador Program
                    </h2>
                  </div>
                  <div className="">
                    <h1 className="xl:text-[45px] lg:text-[32px] text-[26px] text-white mb-7">
                      Become a Kuky &nbsp;
                      <span className="relative">
                        Ambassador!
                        <Image
                          className="xl:w-[300px] lg:w-[220px] w-[200px] absolute left-0 bottom-[-15px]"
                          src={blue_line}
                          alt="blue line"
                        />
                      </span>
                    </h1>
                  </div>

                  <p className="font-comforta text-white sm:text-[20px] xl:text-[22px] text-base lg:leading-[40px] sm:leading-[30px] leading-[25px] font-normal">
                    Join our mission to connect people on their mental health
                    journey. Inspire, and make a difference in your community.
                  </p>
                  <div className="lg:mt-10 mt-5 flex lg:flex-col md:flex-row flex-col font-comforta justify-start items-start gap-5">
                    <a
                      href="/program"
                      target="_self"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <button
                        style={{ boxShadow: "0 4px 10px 0 #00000040" }}
                        className="bg-[#333333] text-[20px] font-bold text-white md:w-[400px] w-full sm:h-14 h-12 rounded-[30px]"
                      >
                        Apply Now
                      </button>
                    </a>
                    <a
                      href=""
                      target="_self"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                     <button
						  className="border-[1px] border-[#F1F1F3] text-[18px] font-bold border-solid text-[#F1F1F3] lg:w-[400px] w-full sm:h-14 h-12 rounded-[30px]"
						  hidden
						>

                        Learn more
                      </button>
                    </a>
                  </div>
                </div>
                <div className="lg:mx-0 mx-auto lg:pt-[63px]">
                  <Image
                    className="bg-cover object-fit w-auto"
                    src={ambasaddor_main}
                    alt="ambasaddor main"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section two ambasaddor program */}
        <section className="w-full sm:py-16 py-8 font-nunito xl:px-0 md:px-6 px-4">
          <div className="w-full max-w-7xl mx-auto rounded-[10px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-0 gap-8 items-center">
              <div className="">
                <Image
                  className=""
                  src={ambasaddor_program}
                  alt="ambasaddor program"
                />
              </div>
              <div>
                <h2 className="font-lato lg:text-[44px] sm:text-[30px] text-[24px] xl:leading-[40px] sm:leading-[60px] leading-[30px]  font-bold text-[#333333]  mb-8 sm:mt-8 mt-4">
                  Why Join the Kuky Ambassador &nbsp;
                  <br className="xl:block hidden" />
                  Program?
                </h2>
                <ul className="font-comforta sl:mt-10 mt-6">
                  <li className="flex items-center sm:gap-5 gap-2 xl:my-4 sm:my-2 my-3">
                    <div className="bg-[#725ED4] rounded-[18px] flex justify-center items-center sm:min-w-12 min-w-10 sm:h-9 h-7">
                      <Image
                        className="sm:w-5 w-3 sm:h-5 h-3"
                        src={arrow_yellow}
                        alt="yellow arrow"
                      />
                    </div>
                    <p className="text-[#333333] font-semibold sm:text-[24px] sm:text-xl text-base sm:leading-[40px] leading-[20px]">
                      Ambassadors are advocates for mental health and the Kuky
                      app.
                    </p>
                  </li>
                  <li className="flex items-center sm:gap-5 gap-2 xl:my-4 sm:my-2 my-3">
                    <div className="bg-[#725ED4] rounded-[18px] flex justify-center items-center sm:min-w-12 min-w-10 sm:h-9 h-7">
                      <Image
                        className="sm:w-5 w-3 sm:h-5 h-3"
                        src={arrow_yellow}
                        alt="yellow arrow"
                      />
                    </div>
                    <p className="text-[#333333] font-semibold sm:text-[24px] sm:text-xl text-base sm:leading-[40px] leading-[20px]">
                      Help spread awareness, organisze events, and connect
                      people in their communities.
                    </p>
                  </li>
                  <li className="flex items-center sm:gap-5 gap-2 xl:my-4 sm:my-2 my-3">
                    <div className="bg-[#725ED4] rounded-[18px] flex justify-center items-center sm:min-w-12 min-w-10 sm:h-9 h-7">
                      <Image
                        className="sm:w-5 w-3 sm:h-5 h-3"
                        src={arrow_yellow}
                        alt="yellow arrow"
                      />
                    </div>
                    <p className="text-[#333333] font-semibold sm:text-[24px] sm:text-xl text-base sm:leading-[40px] leading-[20px]">
                      Gain exclusive benefits and resources as a Kuky
                      Ambassador.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*section three connection journey and support */}
        <section className="w-full sm:py-16 py-8 xl:px-0 md:px-6 px-4">
          <div className="w-full max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 text-[#333333] lg:grid-cols-3 md:grid-cols-2 xl:px-0 lg:px-1 px-2 lg:gap-4 sm:gap-2 gap-0">
              {/* First Column */}
              <div className="bg-[#726F701A] rounded-[25px] sm:h-[630px] h-[350px]  relative md:mb-[100px] mb-[80px]">
                <h1 className="text-center text-[#614BCE] font-black sm:text-[22px] lg:text-[28px] text-[20px] sm:leading-[40px] leading-[30px] text-lato sm:pt-10 pt-6">
                  Heart left Connections <br className="" /> in Action
                </h1>
                <Image
                  className="w-auto mx-auto sm:h-[623px] h-[350px]  absolute left-1/2 -translate-x-1/2 translate-y-0 sm:top-[122px] top-[70px]"
                  src={connection}
                  alt="connection image"
                />
              </div>

              {/* Second Column */}
              <div className="bg-[#726F701A] rounded-[25px] sm:h-[630px] h-[350px] relative md:mb-[100px] mb-[80px]">
                <h1 className="text-center text-[#614BCE] font-black sm:text-[30px] text-[25px] sm:leading-[40px] leading-[30px] text-lato sm:pt-10 pt-6">
                  Your Journey <br /> Your Story
                </h1>
                <Image
                  className="w-auto mx-auto sm:h-[623px] h-[350px]  absolute left-1/2 -translate-x-1/2 translate-y-0 sm:top-[122px] top-[80px]"
                  src={journey}
                  alt="journey image"
                />
              </div>

              {/* Third Column */}
              <div className="bg-[#726F701A] rounded-[25px] sm:h-[630px] h-[350px] relative md:mb-[100px] mb-[80px]">
                <h1 className="text-center text-[#614BCE] font-black sm:text-[30px] text-[25px] sm:leading-[40px] leading-[30px] text-lato sm:pt-10 pt-6">
                  Real-Time support <br /> Just a Call Away
                </h1>
                <Image
                  className="w-auto mx-auto sm:h-[623px] h-[350px]  absolute left-1/2 -translate-x-1/2 translate-y-0 sm:top-[122px] top-[80px]"
                  src={support}
                  alt="support image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* section four how it work */}

        <section className="w-full max-w-7xl mx-auto sm:py-15 py-5 sm:mb-[250px] mb-[100px] xl:px-0 md:px-6 px-4">
          <div className="bg-[#F0F0F0] rounded-[20px] lg:mx-0 mx-2 md:py-5 sm:py-3 py-2 grid place-items-center sm:mb-10 mb-7">
            <h2 className="md:text-5xl sm:text-3xl text-2xl text-center font-bold text-[#725ED4] font-lato">
              How It Works
            </h2>
          </div>
          <div className="font-comforta text-black flex items-center justify-center flex-col text-center mb-4">
            <div className="bg-[#725ED4] rounded-[18px] flex justify-center items-center sm:min-w-12 min-w-10 sm:h-9 h-7 sm:mb-4 mb-2">
              <p className="text-white">1</p>
            </div>
            <h1 className="sm:text-[30px] text-[24px] text-[#333333] font-semibold sm:leading-[40px] leading-[30px]">
              Apply
            </h1>
            <p className="text-[#333333] text-normal sm:text-[20px] text-[14px] sm:leading-[40px] leading-[25px]">
              Fill out a form to get started on your{" "}
              <br className="sm:block hidden" /> ambassador journey.
            </p>
          </div>
          <div className="font-comforta text-black flex items-center justify-center flex-col text-center mb-4">
            <div className="bg-[#725ED4] rounded-[18px] flex justify-center items-center sm:min-w-12 min-w-10 sm:h-9 h-7 sm:mb-4 mb-2">
              <p className="text-white">2</p>
            </div>
            <h1 className="sm:text-[30px] text-[24px] text-[#333333] font-semibold sm:leading-[40px] leading-[30px]">
              Engage
            </h1>
            <p className="text-[#333333] text-normal sm:text-[20px] text-[14px] sm:leading-[40px] leading-[25px]">
              Share Kuky with your network and encourage &nbsp;
              <br className="sm:block hidden" />
              meaningful connections.
            </p>
          </div>
          <div className="font-comforta text-black flex items-center justify-center flex-col text-center mb-4">
            <div className="bg-[#725ED4] rounded-[18px] flex justify-center items-center sm:min-w-12 min-w-10 sm:h-9 h-7 sm:mb-4 mb-2">
              <p className="text-white">3</p>
            </div>
            <h1 className="sm:text-[30px] text-[24px] text-[#333333] font-semibold sm:leading-[40px] leading-[30px]">
              Earn Rewards
            </h1>
            <p className="text-[#333333] text-normal sm:text-[20px] text-[14px] sm:leading-[40px] leading-[25px]">
              Receive exclusive rewards as you make a impact.
            </p>
          </div>
          <div className="grid place-items-center mt-10 sm:mx-0 mx-2">
            <button
              style={{ boxShadow: "0 4px 10px 0 #00000040" }}
              className="bg-[#333333] font-comforta text-[20px] font-bold text-white md:w-[400px] w-full sm:h-14 h-12 rounded-[30px]"
              onClick={() => router.push("/program")}
            >
              Apply Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
