import React, { FC } from "react";
import imagePng from "@/images/Group 1.svg";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="text-[#1f88c5] font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Hotel, car & experiences
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </span>
        </div>
        <div className="flex-grow lg:justify-center lg:pb-52">
          <Image className="w-full" src={imagePng} alt="hero" priority />
        </div>
      </div>

      <div
        id="searchForm"
        className="scroll-mt-24 hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full"
      >
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
