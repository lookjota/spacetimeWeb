import type { Metadata } from "next";
import { Geist, Geist_Mono, Bai_Jamjuree, Roboto_Flex} from "next/font/google";
import "./globals.css";
import type React from "react";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Copyright } from "@/components/Copyright";
import { cookies } from "next/headers";
import { Sign } from "@/components/Sign";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isAuthenticated = (await cookies()).has('token')
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
        
        <main className="grid grid-cols-2 min-h-screen">
              {/* Left */}
              <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
              {/* Blur */}
                <div className="absolute right-0 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 top-1/2 translate-x-1/2 rounded-full blur-full"/>
                {/* Stripe */}
                <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        
                {isAuthenticated ? <Profile/> : <Sign />}
        
                <Hero/>
                
        
                <Copyright />
              </div>
        
              {/* Right */}
              <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
                {children}
              </div>
            </main>
      </body>
    </html>
  );
}
