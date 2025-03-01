import React, { FC, ReactNode } from "react";
import { DEMO_EXPERIENCES_LISTINGS } from "@/data/listings";
import { ExperiencesDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import ExperiencesCard from "./ExperiencesCard";

const DEMO_DATA: ExperiencesDataType[] = DEMO_EXPERIENCES_LISTINGS.filter(
  (_, i) => i < 8
);

export interface SectionGridFeaturedPackagesProps {
  experiencesListings?: ExperiencesDataType[];
  gridClass?: string;
  heading?: ReactNode;
  subHeading?: ReactNode;
  headingIsCenter?: boolean;
  tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturedPackages: FC<SectionGridFeaturedPackagesProps> = ({
  experiencesListings = DEMO_DATA,
  gridClass = "",
  heading = "Featured Packages",
  subHeading = "Popular Packages recommended for you",
  headingIsCenter,

  cardType = "card2",
}) => {
  const renderCard = (stay: ExperiencesDataType) => {
    let CardName = ExperiencesCard;
    switch (cardType) {
      case "card1":
        CardName = ExperiencesCard;
        break;
      case "card2":
        CardName = ExperiencesCard;
        break;

      default:
        CardName = ExperiencesCard;
    }

    return <CardName key={stay.id} data={stay} />;
  };

  return (
    <div className="nc-SectionGridFeaturedPackages relative">
      <HeaderFilter subHeading={subHeading} heading={heading} />
      <div
        className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {experiencesListings.map((experiences) => renderCard(experiences))}
      </div>
    </div>
  );
};

export default SectionGridFeaturedPackages;
