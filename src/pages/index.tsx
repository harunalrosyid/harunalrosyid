import { Inter } from 'next/font/google';
import Image from 'next/image';

import { hero1 } from '@/assets';
import Header from '@/components/layouts/Header';

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <div className="flex h-25 mt-20 p-24 ">
        <div className="w-4/6 z-10">
          <h2 className="text-zinc-400 text-base">Let me introduce you to jeevva,</h2>

          <p className="mt-5 text-zinc-400 text-5xl text-left font-semibold">
            Jeevva is the personal branding of a Front End Developer
          </p>
          <p className="text-zinc-50 text-5xl text-left font-semibold">
            {/* Let's call him "Harun Al Rosyid" */}
          </p>
        </div>
        <div>
          <Image className='w-96 ' src={hero1} alt="hero1" />
        </div>
      </div>
    </main>
  );
}
