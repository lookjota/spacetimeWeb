import type { Metadata } from "next";
import { Geist, Geist_Mono, Bai_Jamjuree, Roboto_Flex} from "next/font/google";
import "./globals.css";
import type React from "react";
// import { 
//   Roboto_Flex as Roboto, 
//   Bai_Jamjuree as BaiJamjuree 
// } from 'next/font/google'



// const roboto = Roboto_Flex({
//   variable: "--font-roboto",
//   subsets: ["latin"]
// })
// const baiJamjuree = Bai_Jamjuree({
//   subsets: ['latin'],
//    weight: '700',
//    variable: '--font-bai-jamjuree'
//   })


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NLW Space Time",
  description: "Uma capsula do tempo construida com React, Next.js, typeScript e TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${roboto.variable} font-sans`}
      >
        {children}
      </body> */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
