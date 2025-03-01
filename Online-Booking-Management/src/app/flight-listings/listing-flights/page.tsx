"use client";
import SectionHeroArchivePage from "@/app/(server-components)/SectionHeroArchivePage";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { FC, useEffect, useState } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import ListingFlightLoadingSkeleton from "../listingFlightLoadingSkeleton";

export interface ListingFlightsPageProps {}

const ListingFlightsPage: FC<ListingFlightsPageProps> = ({}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showContent ? (
        <div className="container relative">
          <SectionGridFilterCard className="pb-24 lg:pb-28" />
        </div>
      ) : (
        <div className="container">
          <ListingFlightLoadingSkeleton />
        </div>
      )}
    </>
  );
};

export default ListingFlightsPage;
