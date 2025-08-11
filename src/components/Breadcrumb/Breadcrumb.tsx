import React from "react";
import Image from "next/image";
import Link from "next/link";
interface BreadcrumbItem {
  label: string;
  href: string;
}
export default function Breadcrumb({
  items = [],
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <nav className="ml-1 h-11 sm:h-22 lg:h-fit flex items-center space-x-2 leading-[30px]">
      {/* Home icon */}
      <div className="relative size-6 sm:size-10 lg:size-[30px] ">
        <Link
          href="/"
          className="flex items-center text-green-600 hover:text-green-700 cursor-pointer"
        >
          <Image
            src="/home-icon.svg"
            alt="Home Icon"
            fill
            className="object-contain"
            unoptimized
          />
        </Link>
      </div>

      {/* Home text */}
      <a
        href={items[0]?.href}
        className="font-bold text-[#019543] text-[12px] sm:text-[22px] lg:text-[20px] hover:text-green-700 font-medium cursor-pointer"
      >
        {items[0]?.label}
      </a>

      {/* Separator */}
      <span className="font-bold text-[#019543]">|</span>

      {/* Breadcrumb items */}
      {items.slice(1).map((item, index) => (
        <React.Fragment key={index + 1}>
          {item.href ? (
            <a
              href={item.href}
              className="font-bold text-gray-600 text-[12px] sm:text-[22px] lg:text-[20px] hover:text-gray-800 cursor-pointer"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[12px] sm:text-[22px] lg:text-[20px] text-black/30 font-bold">
              {item.label}
            </span>
          )}

          {/* Add separator if not the last item */}
          {index < items.length - 1 && <span className="text-gray-400"></span>}
        </React.Fragment>
      ))}
    </nav>
  );
}
