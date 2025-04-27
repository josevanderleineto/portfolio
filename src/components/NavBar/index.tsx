'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface NavItem {
  url: string;
  label: string;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locale, setLocale] = useState<'en' | 'pt'>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');

  useEffect(() => {
    const cookieLocale = document.cookie.match(/locale=(pt|en)/);
    if (cookieLocale) setLocale(cookieLocale[1] as 'pt' | 'en');
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleLocale = () => {
    const next = locale === 'pt' ? 'en' : 'pt';
    document.cookie = `locale=${next}; path=/;`;
    setLocale(next);
    router.refresh();
  };

  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    setIsDarkMode(root.classList.contains('dark'));
  };

  const items: NavItem[] = [
    { url: '/',        label: t('home') },
    { url: '/about',   label: t('about') },
    { url: '/services',label: t('services') },
    { url: '/blog',    label: t('blog') },
    { url: '/contact', label: t('contact') },
  ];

  return (
    <header className="bg-background text-text border-b border-border shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Idioma + Tema */}
        <div className="flex items-center gap-4">
          {/* Botão de idioma sem fundo */}
          <button
            onClick={toggleLocale}
            className="bg-transparent p-1 hover:scale-105 transition-transform cursor-pointer"
          >
            <Image
              src={locale === 'en' ? '/brasil.svg' : '/united_kingdom.svg'}
              alt={locale === 'en' ? 'PT' : 'EN'}
              width={28}
              height={18}
            />
          </button>

          {/* Botão de tema sem fundo */}
          <button
            onClick={toggleDarkMode}
            className="bg-transparent px-3 py-1 rounded-md text-text hover:text-primary hover:scale-105 transition-transform cursor-pointer"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          {items.map(item => (
            <li key={item.url}>
              <Link
                href={item.url}
                className={`text-lg hover:text-accent transition ${
                  pathname === item.url ? 'text-primary font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Mobile */}
        <button
          onClick={() => setIsMenuOpen(v => !v)}
          className="md:hidden p-2 focus:outline-none bg-transparent"
        >
          <svg
            className="w-6 h-6 text-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16m-7 6h7'
              }
            />
          </svg>
        </button>

        {/* Overlay + Menu Mobile */}
        {isMenuOpen && (
          <>
            <div
              className="menu-mobile-overlay md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <aside
              className={`fixed top-0 left-0 h-full w-64 menu-mobile-panel transform transition-transform duration-300 md:hidden ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <ul className="flex flex-col p-6 space-y-4">
                {items.map(item => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-lg hover:text-accent transition ${
                        pathname === item.url
                          ? 'text-primary font-semibold'
                          : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </>
        )}
      </nav>
    </header>
  );
}
