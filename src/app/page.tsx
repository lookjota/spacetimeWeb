import { User } from 'lucide-react'

import Image from 'next/image';
import { Copyright } from '../components/Copyright';
import { Hero } from '@/components/Hero';
import { Sign } from '@/components/Sign';
import { EmptyMemories } from '@/components/EmptyMemories';

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
      {/* Blur */}
        <div className="absolute right-0 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 top-1/2 translate-x-1/2 rounded-full blur-full"/>
        {/* Stripe */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <Sign />

        <Hero/>

        <Copyright />
      </div>

      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories/>
      </div>
    </main>
  );
}








