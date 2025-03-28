

import { EmptyMemories } from '@/components/EmptyMemories';
import { api } from '@/lib/api';
import { cookies } from 'next/headers';
import ptBr from 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const cookiesData = await cookies();
  const isAuthenticated = cookiesData.has('token')
  if (!isAuthenticated) {
    return (
      <EmptyMemories/>
    );
  }

  const token = cookiesData.get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

  const memories: Memory[] = response.data

  if (memories.length === 0 ) {
    return <EmptyMemories />
  }

  return <div className="flex flex-col gap-10 p-8">
    {memories.map(memory => {
      return (
        <div key={memory.id} className="space-y-4">
          <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:gb-gray-50">
            {dayjs(memory.createdAt).format('DD/MM/YYYY')}
          </time>
          <Image 
            src={memory.coverUrl} 
            alt="" 
            width={592} 
            height={280} 
            className=" w-full aspect-video rounded-lg object-cover"/>
            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>
            <Link 
              href={`/memories/${memory.id}`} 
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="w-4 h-4"/>
            </Link>
        </div>
      )
    })}
  </div>
}








