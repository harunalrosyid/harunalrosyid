import { Inter } from 'next/font/google';
import Image from 'next/image';

import { logo } from '@/assets';
import Header from '@/components/layouts/Header';

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <div className="flex h-25 flex-col items-center justify-between p-24 ">
        <Image src={logo} alt="logo" />
      </div>
    </main>
  );
}
