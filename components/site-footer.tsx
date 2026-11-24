"use client";

import { useState } from "react";

type FooterLink = { label: string; href: string; external?: boolean };

const MENUS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Barcelona", href: "/en/barcelona-attractions-c66342/" },
      { label: "London", href: "/en/london-attractions-c67458/" },
      { label: "New York", href: "/en/new-york-attractions-c260932/" },
      { label: "Paris", href: "/en/things-to-do-in-paris-c66746/" },
      { label: "Rome", href: "/en/rome-attractions-c71631/" },
      { label: "All Destinations", href: "/en/all-destinations/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Tiqets Blog", href: "https://www.tiqets.com/blog/", external: true },
      { label: "About us", href: "/en/about-tiqets/" },
      { label: "Jobs", href: "https://tiqets.homerun.co/", external: true },
      { label: "Responsible Disclosure", href: "/en/responsible-disclosure/", external: true },
      { label: "Newsroom", href: "https://www.tiqetsnews.com/en/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "https://support.tiqets.com", external: true },
      { label: "Help Center for Suppliers", href: "https://suppliers.tiqets.com/", external: true },
      { label: "Terms & Conditions", href: "/en/terms-and-conditions/" },
      { label: "Customer Reviews Policy", href: "/en/customer-reviews-policy/" },
      { label: "Privacy Policy", href: "/en/privacy-policy/" },
      { label: "Tiqets App", href: "/en/tiqets-app-download/" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { label: "Become a Supplier", href: "https://tiqets.com/venues/" },
      { label: "Become a Distributor", href: "https://www.tiqets.com/partner-program/" },
    ],
  },
];

const LANGUAGES = [
  { label: "English", href: "/en/", current: true },
  { label: "Català", href: "/ca/" },
  { label: "Čeština", href: "/cs/" },
  { label: "Dansk", href: "/da/" },
  { label: "Deutsch", href: "/de/" },
  { label: "Ελληνικά", href: "/el/" },
  { label: "Español", href: "/es/" },
  { label: "Français", href: "/fr/" },
  { label: "한국어", href: "/ko/" },
  { label: "Italiano", href: "/it/" },
  { label: "Nederlands", href: "/nl/" },
  { label: "日本語", href: "/ja/" },
  { label: "Português", href: "/pt/" },
  { label: "Polski", href: "/pl/" },
  { label: "Русский", href: "/ru/" },
  { label: "Svenska", href: "/sv/" },
  { label: "中文", href: "/zh/" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/tiqets/", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" },
  { label: "TikTok", href: "https://www.tiktok.com/@tiqets", path: "M14.5 3h2.1c.2 1.7 1.3 3.1 3 3.7v2.2c-1.1-.1-2.1-.5-3-1.1v5.7A5.8 5.8 0 1 1 10 8v2.2a3.6 3.6 0 1 0 2.5 3.4V3Z" },
  { label: "Facebook", href: "https://www.facebook.com/Tiqets/", path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.5L16 12h-3v-2c0-.6.4-1 1-1Z" },
  { label: "Twitter", href: "https://twitter.com/tiqets", path: "M4 4h4.3l3.4 4.6L16.4 4H20l-6.1 7.1L20.5 20h-4.3l-3.9-5.3L7.1 20H3.5l6.6-7.7L4 4Z" },
  { label: "LinkedIn", href: "https://nl.linkedin.com/company/tiqets", path: "M6.5 9.5H3.8V20h2.7V9.5ZM5.1 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.2 20h-2.7v-5.3c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20h-2.7s0-8.7 0-9.6h2.7v1.4c.4-.6 1.1-1.6 2.8-1.6 2 0 3.6 1.3 3.6 4.2V20Z" },
];

const APP_LINK =
  "https://www.tiqets.com/en/dynamic-links?deep_link_url=https://www.tiqets.com/app/discover&utm_campaign=Footer+App+Banner&utm_source=tiqetscom&utm_medium=web&link_tag=footer";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`fill-current md:hidden ${open ? "-rotate-90" : "rotate-90"}`}
    >
      <path d="M9.2 5.3 16 12l-6.8 6.7-1.4-1.4L13.2 12 7.8 6.7l1.4-1.4Z" />
    </svg>
  );
}

function FooterMenu({ title, links }: { title: string; links: FooterLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="block group md:flex-1">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer border-b border-[#5a5a5a] bg-transparent py-4 pr-2.5 pl-0 text-left md:pointer-events-none md:cursor-auto md:border-b-0 md:pt-0"
      >
        <span className="flex-1 text-sm font-medium">{title}</span>
        <ChevronIcon open={open} />
      </button>
      <ul
        className={`my-0 list-none divide-y divide-[#5a5a5a] pl-4 text-sm leading-4 md:block md:divide-y-0 md:pl-0 ${
          open ? "block" : "hidden md:block"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block py-4 text-current no-underline transition-colors hover:text-[#cfcfcf] md:py-2"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#3c3c3c] text-white md:pt-4">
      <div className="mx-auto max-w-[1184px] px-4 py-4 sm:px-6">
        <div className="flex flex-wrap xl:items-start">
          <div className="mb-4 w-full md:mb-6 md:flex md:space-x-4 xl:flex-1">
            {MENUS.map((menu) => (
              <FooterMenu key={menu.title} title={menu.title} links={menu.links} />
            ))}
          </div>

          <div className="mb-4 flex w-full flex-wrap items-center justify-center xl:w-auto xl:justify-start xl:pl-4">
            <div className="mb-4 px-1">
              <div className="flex justify-center sm:justify-start">
                <a href={`${APP_LINK}&utm_content=appstore_button`} target="_blank" rel="noopener noreferrer" className="mb-3 ml-1 block">
                  <img
                    src="https://cdn.tiqets.com/static/assets/img/apps/app-store-badge@2x.png"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="block h-10"
                  />
                </a>
                <a href={`${APP_LINK}&utm_content=playstore_button`} target="_blank" rel="noopener noreferrer" className="mb-3 ml-1 block">
                  <img
                    src="https://cdn.tiqets.com/static/assets/img/apps/google-play-badge-320.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="block h-10"
                  />
                </a>
              </div>
              <div className="text-center text-sm sm:text-left">
                Downloaded by over <b>5,000,000 travellers</b>
              </div>
              <a
                href="https://www.trustpilot.com/review/tiqets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center text-sm underline sm:text-left"
              >
                See our Trustpilot reviews
              </a>
            </div>
          </div>

          <div className="flex w-full grow justify-center border-t border-[#555] pt-4">
            <ul className="my-0 flex list-none flex-wrap gap-1 pl-0">
              {LANGUAGES.map((language) => (
                <li key={language.href}>
                  <a
                    href={language.href}
                    className={`block p-2 text-sm no-underline hover:text-[#cfcfcf] ${
                      language.current ? "text-[#cfcfcf]" : "text-white"
                    }`}
                  >
                    {language.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#2f2f2f]">
        <div className="mx-auto flex max-w-[1184px] flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6">
          <a href="/" className="mt-1 block leading-none">
            <img
              src="https://cdn.tiqets.com/static/assets/logos/tiqets-logo-white.svg"
              alt="Go to Tiqets home page"
              height={34}
              className="h-[34px] md:h-[42px]"
            />
          </a>
          <div className="flex items-center text-sm">
            © 2014-2026 Tiqets
            <img
              src="https://cdn.tiqets.com/static/assets/img/tulip.svg"
              alt="Tiqets Amsterdam"
              width={15}
              height={22}
              className="mx-1 align-middle"
            />
            Amsterdam
          </div>
          <div className="flex space-x-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 transition hover:bg-[#3c3c3c]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="block fill-current">
                  <path d={social.path} />
                </svg>
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
