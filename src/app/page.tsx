import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronLeft width={30} height={30} />
            </button>
            <button className='rounded-full bg-black/40 p-2'>
              <ChevronRight width={30} height={30} />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum Wasting Light da banda Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum Wasting Light da banda Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum Wasting Light da banda Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum Wasting Light da banda Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum Wasting Light da banda Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded-md flex items-center gap-4 
            
            
             hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="Capa álbum Wasting Light da banda Foo Fighters" />
              <strong>Wasting Light</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Jean Carlo</h2>

          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa álbum Wasting Light da banda Foo Fighters" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa álbum Wasting Light da banda Foo Fighters" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa álbum Wasting Light da banda Foo Fighters" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa álbum Wasting Light da banda Foo Fighters" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Capa álbum Wasting Light da banda Foo Fighters" />
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
            </button>
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
