'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuProps } from '~types/index';

const Menu: React.FC<MenuProps> = ({ menuData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-background sticky left-0 top-0 z-50 flex w-full items-center justify-center">
      <nav className="w-full max-w-[1440px]">
        <div className="relative z-10 flex h-16 items-center justify-between lg:h-20">
          <Link href={'/'}>
            <Image
              src={menuData?.image?.image}
              alt={menuData?.image?.alt}
              width="0"
              height="0"
              sizes="100vw"
              className="h-10 w-full lg:h-auto"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link
              className="lg:text-20 hidden hover:opacity-80 lg:block"
              href={`/${menuData.link?.pageReference?.slug?.current}`}
            >
              {menuData.link?.title}
            </Link>
            <div className="relative">
              <button
                className="text-16 lg:text-20 flex h-10 w-20 items-center justify-center rounded-lg border-2 border-black bg-white font-medium text-black active:-translate-x-[2px] active:translate-y-[2px] lg:h-12 lg:w-24"
                onClick={handleClick}
              >
                {menuOpen ? 'Close' : menuData.title}
              </button>
              <div className="bg-main-green absolute left-0 top-0 -z-[1] h-full w-full -translate-x-1 translate-y-1 rounded-lg" />
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="absolute left-0 top-0 flex h-full w-full justify-center">
            <div className="bg-background fixed flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-4">
              <ul className="text-center">
                {menuData.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-36 lg:text-96 text-stroke font-black uppercase leading-tight"
                      href={`/${link?.pageReference?.slug?.current}`}
                    >
                      {link?.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="absolute bottom-4 left-4 flex w-full gap-3 lg:bottom-10 lg:left-[72px]">
                {menuData.socialLinks.map((socialLink, index) => (
                  <li key={index}>
                    <Link
                      className="text-16 lg:text-20 whitespace-nowrap uppercase underline underline-offset-4"
                      href={socialLink.url}
                    >
                      {socialLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Menu;
