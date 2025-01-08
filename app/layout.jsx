import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "اولین سایت اختصاصی من❤️",
  description: "ساخته شده توسط A.h.h.81",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" >
      <head>
        <title>رزومه من</title>
        <meta name="description" content="رزومه شخصی من شامل مهارت‌ها و پروژه‌ها." />
        <link
          rel="stylesheet"
          href="/fonts/fontawesome/css/all.min.css"
        />
      </head>
      <body className=" ">

        {children}
      </body>
    </html>
  );
}
