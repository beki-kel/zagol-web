"use client";

import React, { FC, useState } from "react";
import LocationInput from "../LocationInput";
import RentalCarDatesRangeInput from "./RentalCarDatesRangeInput";

export interface RentalCarSearchFormProps {}

const RentalCarSearchForm: FC<RentalCarSearchFormProps> = ({}) => {
  return (
    <form className="w-full relative mt-8 rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl border-[1px] dark:shadow-2xl bg-white dark:bg-neutral-800 ">
      <div className={`relative flex flex-row`}>
        <LocationInput
          placeHolder="City or Airport"
          desc="Pick up location"
          className="flex-1"
        />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <LocationInput
          placeHolder="City or Airport"
          desc="Drop off location"
          className="flex-1"
          divHideVerticalLineClass="-inset-x-0.5"
        />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <RentalCarDatesRangeInput className="flex-1" />
      </div>
    </form>
  );
};

export default RentalCarSearchForm;
