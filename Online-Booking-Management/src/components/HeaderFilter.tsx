"use client";

import React, { FC, useEffect, useState, ReactNode } from "react";
import Heading from "@/shared/Heading";
import Nav from "@/shared/Nav";
import NavItem from "@/shared/NavItem";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export interface HeaderFilterProps {
  tabActive?: string;
  tabs?: string[];
  heading: ReactNode;
  subHeading?: ReactNode;
  onClickTab?: (item: string) => void;
}

const HeaderFilter: FC<HeaderFilterProps> = ({
  tabActive,
  subHeading = "",
  heading = "Latest Articles 🎈",
  onClickTab = () => {},
}) => {
  const [tabActiveState, setTabActiveState] = useState(tabActive);

  useEffect(() => {
    setTabActiveState(tabActive);
  }, [tabActive]);

  const handleClickTab = (item: string) => {
    onClickTab(item);
    setTabActiveState(item);
  };

  return (
    <div className="flex flex-col mb-8 relative">
      <Heading desc={subHeading}>{heading}</Heading>
      <div className="flex items-center justify-end">
        <span className="hidden sm:block flex-shrink-0">
          <ButtonSecondary
            href="/experience-listings/listing-experiences"
            className="!leading-none border-[#2995D3] "
          >
            <div className="flex items-center justify-center">
              <span>View all</span>
              <ArrowRightIcon className="w-5 h-5 ml-3 text-[#2995D3] " />
            </div>
          </ButtonSecondary>
        </span>
      </div>
    </div>
  );
};

export default HeaderFilter;
