import Image from 'next/image';

import {
  githubLogo,
  linkedinLogo,
  logo,
} from '@/assets';

const Header = () => {
  const tes: string = "heaswe";
  return (
    <nav className=" fixed top-0 left-0 right-0 z-20 backdrop-blur bg-gray-800/50">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image className="h-5 w-auto" src={logo} alt="Your Company" />
              <h1 className="text-zinc-50 font-semibold text-2xl ml-2">Jeevva</h1>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end ">
            <a
              className="flex flex-shrink-0  mr-4 cursor-pointer"
              target="_blank"
              href="https://www.linkedin.com/in/harun-al-rosyid-bb5ba2161/"
            >
              <Image className="h-5 w-auto" src={linkedinLogo} alt="Linkedin Logo" />
            </a>
            <a
              className="flex flex-shrink-0 cursor-pointer"
              target="_blank"
              href="https://github.com/jeevva"
            >
              <Image className="h-5 w-auto" src={githubLogo} alt="Github-Logo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
