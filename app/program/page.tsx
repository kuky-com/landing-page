"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import kukyicon from "../../public/white logo.png";
import Image from "next/image";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "@/components/Common/Input";
import { db } from "../../lib/firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import { toast } from "react-toastify";

export interface ProgramInput {
  email: string;
  name: string;
  schoolType?: string; // Optional field
  state: string;
  schoolName: string;
  schoolYear?: string; // Optional field
  joiningReason: string;
  aboutKuky: string;
  captcha: string;
}

const defaultValues = {
  email: "",
  name: "",
  schoolType: "", // Default empty string
  state: "",
  schoolName: "",
  schoolYear: "", // Default empty string
  joiningReason: "",
  aboutKuky: "",
  captcha: "",
};

const formValidationSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  schoolName: yup.string().required("School name is required"),
  state: yup.string().required("State is required"),
  email: yup.string().email().required("Email is required"),
  joiningReason: yup.string().required("Share reason to join the program"),
  aboutKuky: yup.string().required("Please write something about Kuky"),
  captcha: yup.string().required("Captcha is required"),
});

export default function Home() {
  const [captchInput, setCaptchInput] = useState<string>("");

  useEffect(() => {
    loadCaptchaEnginge(6); // Load CAPTCHA with 6 characters
  }, []);

  const handleSubmit = async (values: ProgramInput) => {
    if (!validateCaptcha(values.captcha)) {
      toast.error("Invalid Captcha. Please try again.");
      return;
    }

    try {
      // console.log("data>>", values);
      // console.log("Selected schoolYear:", values.schoolYear);

      // Ensure optional fields default to empty strings if not provided
      const ambassadorData = {
        ...values,
        schoolType: values.schoolType || "", // Ensure empty string for optional field
        schoolYear: values.schoolYear || "", // Ensure empty string for optional field
        createdAt: new Date().toISOString(), // Timestamp for when the form was submitted
        id: crypto.randomUUID(), // Generates a unique ID
      };

      // Add the form data to the Firestore collection
      await addDoc(
        collection(db, "landing_page_ambassadors_info"),
        ambassadorData
      );

      toast.success("Your application has been submitted!");
      // Optionally reset the form and captcha
      reset();
      setCaptchInput(""); // Clear captcha input
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting application. Please try again.");
    }
  };

  const {
    register,
    handleSubmit: verifyHandleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProgramInput>({
    // shouldUnregister: true,
    //@// eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    defaultValues: defaultValues,
    resolver: yupResolver(formValidationSchema),
  });

  return (
    <div className="min-h-screen bg-[#FFF] font-lato flex flex-col">
      <Header showAmbassadorBtn={true} />

      <main className="flex-grow flex flex-col justify-center items-center px-0 lg:px-0 mt-[72px]">
        <div className="w-full  mx-auto flex flex-col gap-8 main-block ">
          {/* Title section at the top */}
          <div className="main-block-title bg-[#725ED4] font-lato md:p-0 sm:p-2 p-0">
            <div className="max-w-7xl mx-auto ">
              <div className="flex justify-center flex-col items-center sm:py-[100px] py-12">
                <Image
                  className="bg-cover object-fit sm:w-11 w-8 sm:h-11 h-8"
                  src={kukyicon}
                  alt="kuky logo"
                />
                <h2 className="sm:text-[48px] text-center text-[24px] sm:font-semibold font-medium text-white sm:leading-[80px] leading-[40px]">
                  Kuky Ambassador Program
                  {/* <br />
                  Fall 2025 */}
                </h2>
                {/* <h2 className="sm:text-[48px] text-[44px] sm:font-semibold font-medium text-white">
                  Fall 2025
                </h2> */}
              </div>
            </div>
          </div>
        </div>

        {/* section two what is kuky */}
        <section className="w-full sm:py-16 py-8 font-nunito ">
          <div className="w-full max-w-5xl mx-auto rounded-[10px]">
            <div className="bg-[#F1F1F1] text-black font-lato rounded-[20px] sm:py-[50px] py-8 md:px-[68px] sm:px-10 px-3 lg:mx-0 mx-2">
              <div>
                <h1 className=" font-semibold sm:text-[24px] text-[20px] md:leading-[86px] sm:leading-[70px] leading-[40px] ">
                  What is Kuky, and How Can You Make a Difference?
                </h1>
                <p className="font-normal text-[16px] leading-[30px] sm:pt-0 pt-5">
                  Kuky is a supportive community designed to connect people on
                  similar life journeys. As a Kuky Ambassador, you&apos;ll play
                  a key role in spreading awareness, fostering connections, and
                  making a positive impact on mental health.
                </p>
              </div>
              <div className="sm:mt-10 mt-5">
                <h1 className="font-semibold sm:text-[24px] text-[20px] md:leading-[86px] sm:leading-[60px] leading-[40px] ">
                  Your Role as an Ambassador
                </h1>
                <ul className="font-normal text-[16px] leading-[30px] list-outside list-disc ms-5 sm:pt-0 pt-5">
                  <li>
                    Share Kuky with your community through social media, word of
                    mouth, or events.
                  </li>
                  <li>Encourage meaningful conversations and connections.</li>
                  <li>Inspire others to prioritize their mental well-being.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*section form submit*/}
        <section className="w-full sm:py-16 py-8 font-nunito mb-[100px]">
          <div className="w-full max-w-5xl mx-auto rounded-[10px]">
            <div className="bg-[#F1F1F1] text-black font-lato rounded-[20px] sm:py-[50px] py-6 lg:px-10  sm:px-5 px-3  lg:mx-0 mx-2">
              <form onSubmit={verifyHandleSubmit(handleSubmit)} id="verifyForm">
                <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-[100px] md:gap-[70px] gap-2">
                  {/* name & email */}
                  <Input
                    {...register("name")}
                    label="Full Name *"
                    placeholder="Full Name*"
                    error={errors?.name?.message}
                  />
                  <Input
                    {...register("email")}
                    label="Email *"
                    placeholder="Email *"
                    error={errors?.email?.message}
                  />

                  {/* school select */}
                  <div className="sm:mt-0 mt-4">
                    <h1 className="md:text-[24px] text-[20px] font-semibold mb-2">
                      What school do you go to?
                    </h1>
                    <div
                      className="rounded-[15px] bg-[#f5f5f5] h-[55px] flex items-center justify-between px-5 mb-4"
                      style={{ boxShadow: "0 4px 4px #00000040" }}
                    >
                      <label
                        className="text-[16px] font-medium"
                        htmlFor="school"
                      >
                        School
                      </label>
                      <input
                        type="radio"
                        value="School" // The value that will be captured when this radio is selected
                        {...register("schoolYear")} // Register this radio button with react-hook-form
                        className="text-[#7B65E8] border-[2px] border-solid rounded-full border-[#7B65E8] size-4 bg-white"
                      />
                    </div>
                    <div
                      className="rounded-[15px] bg-[#f5f5f5] h-[55px] flex items-center justify-between px-5 mb-4"
                      style={{ boxShadow: "0 4px 4px #00000040" }}
                    >
                      <label
                        className="text-[16px] font-medium"
                        htmlFor="college"
                      >
                        College
                      </label>
                      <input
                        type="radio"
                        value="College" // The value that will be captured when this radio is selected
                        {...register("schoolYear")} // Register this radio button with react-hook-form
                        className="text-[#7B65E8] border-[2px] border-solid rounded-full border-[#7B65E8] size-4 bg-white"
                      />
                    </div>
                    <div
                      className="rounded-[15px] bg-[#f5f5f5] h-[55px] flex items-center justify-between px-5 mb-4"
                      style={{ boxShadow: "0 4px 4px #00000040" }}
                    >
                      <label
                        className="text-[16px] font-medium"
                        htmlFor="university"
                      >
                        University
                      </label>
                      <input
                        type="radio"
                        value="University" // The value that will be captured when this radio is selected
                        {...register("schoolYear")} // Register this radio button with react-hook-form
                        className="text-[#7B65E8] border-[2px] border-solid rounded-full border-[#7B65E8] size-4 bg-white"
                      />
                    </div>
                  </div>

                  <div className="sm:mt-0 mt-4">
                    <Input
                      {...register("state")}
                      label="In which State? *"
                      placeholder="type here"
                      error={errors?.state?.message}
                    />
                    <div className="mt-10">
                      <Input
                        {...register("schoolName")}
                        label="Full school name *"
                        placeholder="type here..."
                        error={errors?.schoolName?.message}
                      />
                    </div>
                  </div>

                  {/* year of school */}
                  {/* <div className="sm:mt-0 mt-4">
                    <h1 className="md:text-[24px] text-[20px] font-semibold mb-2">
                      What year are you in school?
                    </h1>

                    <div
                      className="rounded-[15px] bg-[#f5f5f5] h-[55px] flex items-center justify-between px-5 mb-4"
                      style={{ boxShadow: "0 4px 4px #00000040" }}
                    >
                      <label
                        className="text-[16px] font-medium"
                        htmlFor="college"
                      >
                        College
                      </label>
                      <input
                        type="radio"
                        value="College" // This value will be sent when this radio button is selected
                        {...register("schoolType")} // Register it with react-hook-form
                        className="text-[#7B65E8] border-[2px] border-solid rounded-full border-[#7B65E8] size-4 bg-white"
                      />
                    </div>

                    <div
                      className="rounded-[15px] bg-[#f5f5f5] h-[55px] flex items-center justify-between px-5 mb-4"
                      style={{ boxShadow: "0 4px 4px #00000040" }}
                    >
                      <label
                        className="text-[16px] font-medium"
                        htmlFor="highSchool"
                      >
                        High school
                      </label>
                      <input
                        type="radio"
                        value="High school" // This value will be sent when this radio button is selected
                        {...register("schoolType")} // Register it with react-hook-form
                        className="text-[#7B65E8] border-[2px] border-solid rounded-full border-[#7B65E8] size-4 bg-white"
                      />
                    </div>

                    <div
                      className="rounded-[15px] bg-[#f5f5f5] h-[55px] flex items-center justify-between px-5 mb-4"
                      style={{ boxShadow: "0 4px 4px #00000040" }}
                    >
                      <label
                        className="text-[16px] font-medium"
                        htmlFor="middleSchool"
                      >
                        Middle school
                      </label>
                      <input
                        type="radio"
                        value="Middle school" // This value will be sent when this radio button is selected
                        {...register("schoolType")} // Register it with react-hook-form
                        className="text-[#7B65E8] border-[2px] border-solid rounded-full border-[#7B65E8] size-4 bg-white"
                      />
                    </div>
                  </div> */}
                </div>
                {/* why became ambassador */}
                <div className="sm:mt-10 mt-4">
                  <h1 className="sm:text-[24px] text-[20px] font-semibold mb-3">
                    Why do you want to become an ambassador? *
                  </h1>
                  <textarea
                    {...register("joiningReason")}
                    id=""
                    rows={6}
                    className="text-[#333333] text-[16px] w-full border-[2px] resize-none focus:outline-none border-[1px] border-solid rounded-[15px] border-[#726E70] p-4 bg-white"
                    placeholder="Share a brief reason for joining the program"
                  />
                  {errors?.joiningReason?.message && (
                    <p className="my-2 text-xs text-red-500 text-start">
                      {errors?.joiningReason?.message}
                    </p>
                  )}
                </div>
                {/* how would you spread the word about Kuky? */}
                <div className="sm:mt-10 mt-4">
                  <h1 className="sm:text-[24px] text-[20px] font-semibold mb-3">
                    How would you spread the word about Kuky? *
                  </h1>
                  <textarea
                    {...register("aboutKuky")}
                    id=""
                    rows={6}
                    className="text-[#333333] text-[16px] w-full border-[2px] resize-none focus:outline-none border-[1px] border-solid rounded-[15px] border-[#726E70] p-4 bg-white"
                    placeholder="tell us how you'll share Kuky with your community"
                  />
                  {errors?.aboutKuky?.message && (
                    <p className="my-2 text-xs text-red-500 text-start">
                      {errors?.aboutKuky?.message}
                    </p>
                  )}
                </div>

                {/* Styled CAPTCHA Canvas */}
                <div className="captcha-container flex justify-center p-4 bg-gray-200 rounded-lg">
                  <LoadCanvasTemplate />
                </div>
                {/* Input Field */}
                <Input
                  {...register("captcha")}
                  placeholder="Enter Captcha"
                  error={errors.captcha?.message}
                  className="w-full border-2 border-[#726E70] rounded-[15px] p-4 bg-white text-black"
                />

                {/* submit button */}
                <div className="grid place-items-center sm:mt-10 mt-4 sm:mx-0 mx-2">
                  <button
                    style={{ boxShadow: "0 4px 10px 0 #00000040" }}
                    className="bg-[#333333] font-comforta text-[20px] my-8 font-bold text-white md:w-[500px] w-full sm:h-14 h-12 rounded-[30px]"
                  >
                    Submit your form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
