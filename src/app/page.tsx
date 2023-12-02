import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1">

          <div className='bg-gradient-to-b from-emerald-700/50 p-6'>
            <div className='flex items-center gap-4'>
              <button className='bg-black/40 p-1 rounded-full'>
                <ChevronLeft />
              </button>
              <button className='bg-black/20 p-1 rounded-full'>
                <ChevronRight />
              </button>
            </div>

            <h1 className='text-3xl font-semibold mt-10'>Good Afternoon</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>
              <a href="#" className='bg-white/10 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"}  alt='Capa do Álbum de Lionel Richie' width={104} height={104} />
                <strong>Lionel Richie</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"}  alt='Capa do Álbum de Lionel Richie' width={104} height={104} />
                <strong>Lionel Richie</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"}  alt='Capa do Álbum de Lionel Richie' width={104} height={104} />
                <strong>Lionel Richie</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"}  alt='Capa do Álbum de Lionel Richie' width={104} height={104} />
                <strong>Lionel Richie</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 flex items-center group gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                <Image src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"}  alt='Capa do Álbum de Lionel Richie' width={104} height={104} />
                <strong>Lionel Richie</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible '>
                  <Play />
                </button>
              </a>
             
            </div>
            
            <h2 className='text-2xl font-semibold mt-10'>Made for Daniel</h2>
          
          </div>

            <div className='grid grid-cols-5 gap-6 px-6 mb-28'>
              <a href="" className="bg-white/10 p-3 rounded flex flex-col gap-2 hover:bg-white/20">
                <Image className='w-full' src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"} width={120} height={120} alt='Capa do Álbum do Lionel Richie' />
                <strong className="font-semibold">Lionel Richie</strong>
                <span className='text-sm text-zinc-400'>Stuck on You, Easy, Hello and more</span>
              </a>
              <a href="" className="bg-white/10 p-3 rounded flex flex-col gap-2 hover:bg-white/20">
                <Image className='w-full' src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"} width={120} height={120} alt='Capa do Álbum do Lionel Richie' />
                <strong className="font-semibold">Lionel Richie</strong>
                <span className='text-sm text-zinc-400'>Stuck on You, Easy, Hello and more</span>
              </a>
              <a href="" className="bg-white/10 p-3 rounded flex flex-col gap-2 hover:bg-white/20">
                <Image className='w-full' src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"} width={120} height={120} alt='Capa do Álbum do Lionel Richie' />
                <strong className="font-semibold">Lionel Richie</strong>
                <span className='text-sm text-zinc-400'>Stuck on You, Easy, Hello and more</span>
              </a>
              <a href="" className="bg-white/10 p-3 rounded flex flex-col gap-2 hover:bg-white/20">
                <Image className='w-full' src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"} width={120} height={120} alt='Capa do Álbum do Lionel Richie' />
                <strong className="font-semibold">Lionel Richie</strong>
                <span className='text-sm text-zinc-400'>Stuck on You, Easy, Hello and more</span>
              </a>
              <a href="" className="bg-white/10 p-3 rounded flex flex-col gap-2 hover:bg-white/20">
                <Image className='w-full' src={"https://seed-mix-image.spotifycdn.com/v6/img/artist/3gMaNLQm7D9MornNILzdSl/pt/default"} width={120} height={120} alt='Capa do Álbum do Lionel Richie' />
                <strong className="font-semibold">Lionel Richie</strong>
                <span className='text-sm text-zinc-400'>Stuck on You, Easy, Hello and more</span>
              </a>
            </div>

        </main>
      </div>

      <Footer />
     
    </div>
  )
}
