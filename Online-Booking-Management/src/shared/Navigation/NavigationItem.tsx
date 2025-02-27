"use client";

import { PathName } from "@/routers/types";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, Fragment, useEffect, useState } from "react";

// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}
export interface NavItemType {
  id: string;
  name: string;
  isNew?: boolean;
  href: PathName;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  type?: "dropdown" | "megaMenu" | "none";
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

type NavigationItemWithRouterProps = NavigationItemProps;

export const NavigationItem: FC<NavigationItemWithRouterProps> = ({
  menuItem,
}) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  // CLOSE ALL MENU OPENING WHEN CHANGE HISTORY
  const locationPathName = usePathname();
  useEffect(() => {
    setMenuCurrentHovers([]);
  }, [locationPathName]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  const renderMainItem = (item: NavItemType) => {
    return (
      <Link
        rel="noopener noreferrer"
        className="
        inline-flex items-center text-xl xl:text-xl font-medium text-neutral-500 hover:bg-gray-50
        dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-[#2995D3]
         dark:hover:bg-neutral-800 dark:hover:text-[#2995D3] transition-all "
        href={item.href || "/"}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <li className="menu-item flex items-center">{renderMainItem(menuItem)}</li>
  );
};
export default NavigationItem;
