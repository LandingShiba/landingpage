import ActionButton from "./ActionButton";
import ContactInfo from "./ContactInfo";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InnerHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden md:flex h-full items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-5">
            <ContactInfo />
            <ActionButton type="mail" />
            <ActionButton type="line" />
          </div>
        </div>
      </div>

      {/* Mobile Header - Hidden on desktop */}
      <div className="md:hidden flex h-full items-center justify-between max-[420px]:px-2 px-2 sm:px-3 w-full">
        <div className="flex items-center justify-between w-full gap-0 sm:gap-2">
          {/* Logo section */}
          <div className="flex items-center">
            <div className="flex items-end">
              <div className="relative max-[370px]:w-[100px] w-[134px] sm:w-[128px] h-[25px] sm:h-[25px] max-[370px]:h-[20px]">
                <Image
                  src="/images/header/logo-mb.png"
                  alt="Logo"
                  width={134}
                  height={25}
                  className="absolute top-0 left-[2px] sm:left-[4px] w-auto h-full"
                />
              </div>
            </div>
          </div>

          {/* Phone and discount section */}
          <div className="flex items-center justify-end gap-1 sm:gap-3">
            {/* Phone section - hide on very small screens */}
            <div className="flex flex-col gap-[2.5px]">
              <ContactInfo />
            </div>

            {/* Menu button */}
            <button
              className="p-1 sm:p-2 focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <Image
                src="/images/header/menu-icon.svg"
                alt="Menu"
                width={22}
                height={18}
                className="w-[18px] h-[15px] sm:w-[22px] sm:h-[18px]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-[#00A842]">メニュー</h2>
            <button
              className="p-2 focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-lg font-medium text-gray-800 hover:text-[#00A842]"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 text-lg font-medium text-gray-800 hover:text-[#00A842]"
                >
                  サービス
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block py-2 text-lg font-medium text-gray-800 hover:text-[#00A842]"
                >
                  料金
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="block py-2 text-lg font-medium text-gray-800 hover:text-[#00A842]"
                >
                  事例
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block py-2 text-lg font-medium text-gray-800 hover:text-[#00A842]"
                >
                  よくある質問
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-lg font-medium text-gray-800 hover:text-[#00A842]"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-8 space-y-4">
            <Link
              href="/contact"
              className="block w-full py-2 px-4 bg-[#00A842] text-white text-center rounded-lg font-medium hover:bg-[#008a37]"
            >
              メールでお問い合わせ
            </Link>
            <Link
              href="/line"
              className="block w-full py-2 px-4 bg-[#06C755] text-white text-center rounded-lg font-medium hover:bg-[#05a748]"
            >
              LINEでお問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
