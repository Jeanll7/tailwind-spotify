import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-8'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon className='w-5' />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search className='w-5' />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library className='w-5' />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">Hot Hits Brasil</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">Aniver Funk</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">My Playlist #13</a>
            <a className='text-sm text-zinc-400 hover:text-zinc-100' href="">Top Brasil</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white/10'>Playlist</div>
            <div className='bg-white/10'>Playlist</div>
            <div className='bg-white/10'>Playlist</div>
            <div className='bg-white/10'>Playlist</div>
            <div className='bg-white/10'>Playlist</div>
            <div className='bg-white/10'>Playlist</div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
