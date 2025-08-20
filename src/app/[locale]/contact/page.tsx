"use client";

import React from "react";
// import { useContact, useNavigation, useCommon } from "@/hooks/useTranslations";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import BannerSection from "@/components/Banner/BannerSection";

const ContactPage = () => {
  // We'll add translations later

  return (
    <>
      <BannerSection title={"お問い合わせ"} />

      <div className="flex flex-col items-center w-full">
        {/* Breadcrumb */}
        <div className="flex items-center py-4 self-start px-4 md:px-8 lg:px-16 xl:px-40">
          <Link href="/" className="flex items-center text-green-800">
            <Image src="/home-icon.svg" alt="Home" width={30} height={30} />
            <span className="ml-2 font-bold text-xl">ホーム</span>
          </Link>
          <div className="mx-2 border-l border-2 border-green-800 h-6 w-0"></div>
        </div>

        {/* Free consultation banner */}
        <div className="w-full flex justify-center my-2">
          <div className="border border-dashed border-green-500 bg-green-50 rounded-xl p-3">
            <h2 className="text-green-800 text-[20px] md:text-3xl font-bold">
              無料相談・無料見積もりはこちら!!
            </h2>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
