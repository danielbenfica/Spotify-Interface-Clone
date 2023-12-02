import { Home, Library, Search } from "lucide-react";

export function Sidebar(){
  return (
  <aside className="w-64 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 font-semibold text-zinc-100'>
              <Home />
              Home
            </a>
            <a href="" className='flex items-center gap-2 font-semibold text-zinc-400 hover:text-zinc-100'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-2 font-semibold text-zinc-400 hover:text-zinc-100'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='flex flex-col mt-6 pt-6 border-t border-zinc-800 gap-2'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>My Playlist#3</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>This is Vitor & Leo</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
          </nav>
        </aside>
  )
}