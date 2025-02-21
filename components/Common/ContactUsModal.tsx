import { useEffect, useState } from "react";
import * as yup from "yup";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { db } from "../../lib/firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import { toast } from "react-toastify";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormValues {
  email: string;
  fullName: string;
  message: string;
  captcha: string;
}

const defaultValues: FormValues = {
  email: "",
  fullName: "",
  message: "",
  captcha: "",
};

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  captcha: yup.string().required("Captcha is required"),
});

const ContactUsModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const [captchInput, setCaptchInput] = useState<string>("");
  const [isRefreshCaptcha, setIsRefreshCaptcha] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit: verifyHandleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  console.log("error", errors);
  const handleSubmit = async (values: FormValues) => {
    if (!validateCaptcha(values.captcha)) {
      toast.error("Invalid Captcha. Please try again.");
      return;
    }

    setLoading(true);
    try {
      const newDoc = {
        id: crypto.randomUUID(), // Generates a unique ID
        createdAt: new Date().toISOString(), // Stores current timestamp in ISO format
        ...values, // Includes form values
      };

      await addDoc(collection(db, "landing_page_contact_us_info"), newDoc);
      toast.success("Your message has been submitted!");
      reset(); // Reset form after successful submission
      onClose()
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Error submitting form! Please try again.");
    } finally {
      setLoading(false);
      setIsRefreshCaptcha(true);
      setCaptchInput(""); // Clear captcha input
    }
  };


  useEffect(() => {
    if (isOpen) {
      loadCaptchaEnginge(6);
      setIsRefreshCaptcha(false);
    }
  }, [isOpen, isRefreshCaptcha]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md transform transition-all">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={verifyHandleSubmit(handleSubmit)}>
          <div className="flex flex-col gap-4">
            <Input
              {...register("fullName")}
              placeholder="Full Name*"
              error={errors.fullName?.message}
              className="w-full border-2 border-[#726E70] rounded-[15px] p-4 bg-white text-black"
            />
            <Input
              {...register("email")}
              placeholder="Email *"
              error={errors.email?.message}
              className="w-full border-2 border-[#726E70] rounded-[15px] p-4 bg-white text-black"
            />
            <textarea
              {...register("message")}
              rows={4}
              className="w-full border-2 border-[#726E70] rounded-[15px] p-4 bg-white text-black"
              placeholder="Message *"
            />
            {errors.message?.message && (
              <p className="mt-1 mb-2 text-xs text-red-500 text-start">
                {errors.message?.message}
              </p>
            )}
            <LoadCanvasTemplate />

            <Input
              {...register("captcha")}
              placeholder="Enter Captcha"
              error={errors.captcha?.message}
              className="w-full border-2 border-[#726E70] rounded-[15px] p-4 bg-white text-black"
            />
            {/* <input
              type="text"
              {...register("captcha")}
              placeholder="Enter Captcha"
              className="w-full border-2 border-[#726E70] rounded-[15px] p-4 bg-white text-black"
              value={captchInput}
              onChange={(e) => setCaptchInput(e.target.value)}
            /> */}
            {/* {errors.captcha?.message && (
              <p className="mt-1 mb-2 text-xs text-red-500 text-start">
                {errors.captcha?.message}
              </p>
            )} */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-full text-lg font-semibold hover:bg-gray-900"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsModal;
