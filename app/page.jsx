"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // شناسایی اندازه صفحه برای حالت موبایل
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);

      // در حالت دسکتاپ، سایدبار همیشه باز باشد
      if (!isNowMobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false); // در حالت موبایل پیش‌فرض بسته باشد
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative bg-custom-image-main min-h-screen transition-all duration-300 ${
        isMobile
          ? "flex flex-col" // در حالت موبایل، چینش عمودی
          : "grid grid-cols-[16rem,1fr]" // در حالت دسکتاپ، چینش دو ستونی
      }`}
    >
      <Head>
        <title>رزومه من</title>
        <meta
          name="description"
          content="رزومه شخصی من شامل مهارت‌ها و پروژه‌ها."
        />
      </Head>

      {/* سایدبار */}
      <div
        className={`bg-white/70 backdrop-blur-lg transition-all duration-300 ${
          isMobile
            ? `fixed top-0 left-0 h-full z-40 w-full ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "static h-full w-64" // در حالت دسکتاپ، عرض مشخص
        }`}
      >
        <Sidebar className=" " isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* دکمه ضربدر برای بستن سایدبار */}
        {isMobile && isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-full z-50"
          >
            ✕
          </button>
        )}
      </div>

      {/* محتوای اصلی */}
      <main
        className={`transition-all duration-300 p-4 relative ${
          isMobile && isSidebarOpen ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* دکمه باز کردن سایدبار */}
        {isMobile && !isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50"
          >
            باز کردن سایدبار
          </button>
        )}

        {/* انیمیشن پس‌زمینه */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-96 h-96 bg-blue-400 rounded-full opacity-30 animate-ping absolute top-10 left-20"></div>
          <div className="w-72 h-72 bg-purple-500 rounded-full opacity-30 animate-ping absolute top-40 right-20"></div>
          <div className="w-64 h-64 bg-teal-400 rounded-full opacity-30 animate-ping absolute bottom-20 left-40"></div>
        </div>

        {/* محتوای کامپوننت‌ها */}
        <div>
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
