"use client";

import { PathName } from "@/routers/types";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { FC, Fragment, useEffect, useState } from "react";

export interface NavItemType {
  id: string;
  name: string;
  isNew?: boolean;
  href: PathName;
  targetBlank?: boolean;
  children?: NavItemType[];

  type?: "dropdown" | "megaMenu" | "none";
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: PathName
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(href);
    }
  };

  const renderMainItem = (item: NavItemType) => {
    return (
      <Link
        href={item.href || "/"}
        rel="noopener noreferrer"
        className="
        inline-flex items-center text-xl xl:text-xl font-medium text-neutral-500 hover:bg-gray-50
        dark:text-neutral-300 py-2 px-4 xl:px-5 rounded-full hover:text-[#2995D3]
         dark:hover:bg-neutral-800 dark:hover:text-[#2995D3] transition-all "
        onClick={(e) => handleScroll(e, item.href)}
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
