import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full' />
        <div className='w-3 h-3 bg-yellow-500 rounded-full' />
        <div className='w-3 h-3 bg-green-500 rounded-full' />
      </div>

      <nav className='space-y-5 mt-8'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-white'>
          <HomeIcon className='w-5' />
          Home
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-white'>
          <Search className='w-5' />
          Search
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-white'>
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
  )
}
