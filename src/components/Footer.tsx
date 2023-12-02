import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from 'next/image'

export function Footer(){

  return (
  <footer className="bg-zinc-800 border-t border-zinc-700 p-4 grid grid-cols-3 items-center justify-between fixed bottom-0 w-full">
        <div className='flex items-center gap-3'>
          <Image src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"} width={56} height={56} alt='Capa do Álbum do Lionel Richie' />
          <div className='flex flex-col'>
            <strong className='font-normal'>Easy</strong>
            <span className='text-xs text-zinc-400'>Lionel Richie</span>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex gap-6 items-center'>
            <Shuffle size={20} className='text-zinc-600' />

            <SkipBack size={20} className='text-zinc-100' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play size={20} />
            </button>

            <SkipForward size={20} className='text-zinc-100' />
            <Repeat size={20} className='text-zinc-600' />

          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 justify-end">
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className='flex items-center gap-2'>
              <Volume size={20} />
              <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
            </div>
            <Maximize2 size={20} />
          </div>
        </div>
      </footer>
  )
}