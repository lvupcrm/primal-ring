import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "pretendard/dist/web/static/pretendard.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gym-agent.ai"),
  title: "LVUP - Center Operation Solution",
  description: "Data-driven center operation solution proved by 2 direct stores.",
  openGraph: {
    title: "LVUP - Center Operation Solution",
    description: "Data-driven center operation solution proved by 2 direct stores.",
    url: "https://gym-agent.ai",
    siteName: "LVUP",
    type: "website",
    locale: "ko_KR",
  },
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
