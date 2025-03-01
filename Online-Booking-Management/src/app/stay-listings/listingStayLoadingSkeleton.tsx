import React, { FC } from "react";

export interface listingStayLoadingSkeletonProps {
  className?: string;
}

const listingStayLoadingSkeleton: FC<listingStayLoadingSkeletonProps> = ({
  className = "",
}) => {
  return (
    <div role="status" className="max-w-sm animate-pulse ">
      <div className=" bg-gray-200 dark:bg-gray-700 w-48 h-12 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
  );
};

export default listingStayLoadingSkeleton;
