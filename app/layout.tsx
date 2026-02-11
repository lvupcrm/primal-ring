import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LVUP - Center Operation Solution",
  description: "Data-driven center operation solution proved by 2 direct stores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
