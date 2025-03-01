import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { ReactNode } from "react";
import SectionHeroArchivePage from "../(server-components)/SectionHeroArchivePage";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container relative">
        <SectionHeroArchivePage
          currentPage="Flights"
          currentTab="Flights"
          listingType={
            <>
              <i className="text-2xl las la-plane-departure"></i>
              <span className="ml-2.5">1599 flights</span>
            </>
          }
          className="pt-10 pb-24 lg:pb-28 lg:pt-16 "
        />
      </div>

      {children}
    </div>
  );
};

export default Layout;
