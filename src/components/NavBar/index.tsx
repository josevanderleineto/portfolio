"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface NavItemInterface {
  url: string;
  label: string;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locale, setLocale] = useState("en");
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  // Função para alternar idioma
  const toggleLocale = () => {
    const newLocale = locale === "pt" ? "en" : "pt";
    document.cookie = `locale=${newLocale}; path=/;`;
    setLocale(newLocale);
    router.refresh(); // Atualiza a página para carregar nova tradução
  };

  // Ler cookie no carregamento
  useEffect(() => {
    if (typeof document !== "undefined") {
      const isPt = document.cookie.includes("locale=pt");
      setLocale(isPt ? "pt" : "en");
    }
  }, []);

  const items: NavItemInterface[] = [
    { url: "/", label: t("home") },
    { url: "/about", label: t("about") },
    { url: "/services", label: t("services") },
    { url: "/blog", label: t("blog") },
    { url: "/contact", label: t("contact") },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-slate-600 shadow-xl">
      <nav className="flex justify-between items-center p-4">
      

        {/* Botão de bandeira */}
        <button onClick={toggleLocale} className="ml-4">
          <Image
            src={locale === "en" ? "/brasil.svg" : "/united_kingdom.svg"}
            alt={locale === "pt" ? "Português" : "English"}
            width={30}
            height={20}
            className="object-cover"
          />
        </button>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Overlay e Menu Hambúrguer */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>
        )}

        {/* Menu Mobile */}
        <div
          className={`fixed top-0 left-0 w-64 bg-slate-600 shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <button
            onClick={closeMenu}
            className="text-gray-200 absolute top-4 right-4 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <ul className="flex flex-col gap-4 p-6">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`block text-lg font-medium ${
                    pathname === item.url ? "text-blue-400" : "text-gray-200"
                  } hover:text-blue-300`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex md:items-center">
          <ul className="flex gap-8 items-center">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className={`text-white text-lg ${
                    pathname === item.url ? "font-bold" : "font-normal"
                  } hover:text-blue-300`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
