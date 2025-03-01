"use client";
import React, { FC, useEffect, useState } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import ListingStayLoadingSkeleton from "../listingStayAndCarLoadingSkeleton";

export interface ListingStayPageProps {}

const ListingStayPage: FC<ListingStayPageProps> = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // 2 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showContent ? (
        <SectionGridFilterCard className="container pb-24 lg:pb-28" />
      ) : (
        <div className="container flex flex-col items-center pb-20">
          <ListingStayLoadingSkeleton />
        </div>
      )}
    </>
  );
};

export default ListingStayPage;
