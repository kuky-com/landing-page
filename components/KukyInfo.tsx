import React from "react";
import Image from "next/image";

interface KukyInfoProps {
  title: string;
  description: JSX.Element;
}

const KukyInfo: React.FC<KukyInfoProps> = ({ title, description }) => {
  return (
    <div className="text-center bg-[#DFD4F0] rounded-[10px] xl:p-8 p-4 md:m-0 m-2">
      <h3 className="text-xl font-black  mb-4">{title}</h3>
      <span className="text-base sm:text-lg font-medium leading-relaxed">
        {description}
      </span>
    </div>
  );
};

export default KukyInfo;
