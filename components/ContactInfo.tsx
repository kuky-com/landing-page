import React from "react";

interface KukyInfoProps {
  title: string;
  description: string;
}

const ContactInfo: React.FC<KukyInfoProps> = ({ title, description }) => {
  return (
    <div className=" bg-[#DFD4F0] cursor-pointer h-full rounded-[10px] font-nunito xl:p-10 lg:p-8 md:p-4 sm:p-10 p-5 md:my-0 my-2">
      <h3 className="text-center lg:text-[24px] text-[20px] font-black font-[#333333] underline underline-offset-8  mb-4">
        {title}
      </h3>
      <span className="text-[16px] lg:text-[20px]  font-medium md:leading-relaxed leading-normal">
        {description}
      </span>
    </div>
  );
};

export default ContactInfo;
