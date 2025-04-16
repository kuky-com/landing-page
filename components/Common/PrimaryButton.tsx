import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        height: "50px",
        boxShadow: "0 4px 10px 0 #00000040",
      }}
      className="bg-[#333333] text-[20px] font-bold text-white md:w-[400px] w-full rounded-[30px]"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
