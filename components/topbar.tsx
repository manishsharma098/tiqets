"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "ca", label: "Català" },
  { value: "cs", label: "Čeština" },
  { value: "da", label: "Dansk" },
  { value: "de", label: "Deutsch" },
  { value: "el", label: "Ελληνικά" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "ko", label: "한국어" },
  { value: "it", label: "Italiano" },
  { value: "nl", label: "Nederlands" },
  { value: "ja", label: "日本語" },
  { value: "pt", label: "Português" },
  { value: "pl", label: "Polski" },
  { value: "ru", label: "Русский" },
  { value: "sv", label: "Svenska" },
  { value: "zh", label: "中文" },
] as const;

const CURRENCIES = [
  { value: "EUR", label: "EUR (€)" },
  { value: "USD", label: "USD ($)" },
  { value: "GBP", label: "GBP (£)" },
  { value: "AUD", label: "AUD (A$)" },
  { value: "CAD", label: "CAD (CA$)" },
  { value: "CHF", label: "CHF (Fr)" },
  { value: "DKK", label: "DKK (kr)" },
  { value: "NOK", label: "NOK (kr)" },
  { value: "PLN", label: "PLN (zł)" },
  { value: "SEK", label: "SEK (kr)" },
  { value: "AED", label: "AED (د.إ)" },
  { value: "HUF", label: "HUF (Ft) - you'll be charged in EUR" },
  { value: "SGD", label: "SGD (S$) - you'll be charged in USD" },
  { value: "HKD", label: "HKD (HK$) - you'll be charged in USD" },
  { value: "JPY", label: "JPY (¥) - you'll be charged in USD" },
  { value: "COP", label: "COP ($)" },
  { value: "NZD", label: "NZD ($) - you'll be charged in USD" },
  { value: "MYR", label: "MYR (RM) - you'll be charged in USD" },
  { value: "CZK", label: "CZK (Kč) - you'll be charged in EUR" },
  { value: "MXN", label: "MXN ($) - you'll be charged in USD" },
  { value: "INR", label: "INR (₹) - you'll be charged in USD" },
  { value: "THB", label: "THB (฿) - you'll be charged in USD" },
  { value: "BRL", label: "BRL (R$) - you'll be charged in USD" },
] as const;

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="mr-1 block fill-current">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-3.18a15.7 15.7 0 0 0-1.4-5.02A8.03 8.03 0 0 1 19.93 11ZM12 4c.7 1.1 1.55 3.15 1.86 7H10.14C10.45 7.15 11.3 5.1 12 4ZM4.07 13h3.18a15.7 15.7 0 0 0 1.4 5.02A8.03 8.03 0 0 1 4.07 13Zm3.18-2H4.07a8.03 8.03 0 0 1 4.58-5.02A15.7 15.7 0 0 0 7.25 11ZM12 20c-.7-1.1-1.55-3.15-1.86-7h3.72C13.55 16.85 12.7 18.9 12 20Zm4.75-7a15.7 15.7 0 0 0-1.4-5.02A8.03 8.03 0 0 1 19.93 13h-3.18Z" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="block fill-current">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 15.2a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3Zm1.55-6.55-.7.45c-.35.22-.55.5-.55.95v.45h-1.7v-.6c0-.95.45-1.6 1.35-2.15l.55-.35c.4-.25.6-.55.6-.95 0-.7-.55-1.15-1.4-1.15-.9 0-1.5.5-1.6 1.35H8.35C8.5 7.35 9.85 6.1 12 6.1c2.05 0 3.35 1.15 3.35 2.75 0 .85-.4 1.5-1.8 2.4Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="block fill-current">
      <path d="M12 1.2C6.04 1.2 1.2 6.04 1.2 12S6.04 22.8 12 22.8 22.8 17.96 22.8 12 17.96 1.2 12 1.2ZM6.68 18.78C7.14 17.81 9.97 16.86 12 16.86s4.87.95 5.32 1.92A8.52 8.52 0 0 1 12 20.64a8.52 8.52 0 0 1-5.32-1.86Zm12.19-1.57C17.33 15.34 13.58 14.7 12 14.7s-5.32.64-6.87 2.52A8.59 8.59 0 0 1 3.36 12c0-4.76 3.88-8.64 8.64-8.64S20.64 7.24 20.64 12c0 1.97-.67 3.77-1.77 5.21ZM12 5.52A3.77 3.77 0 0 0 8.22 9.3 3.77 3.77 0 0 0 12 13.08a3.77 3.77 0 0 0 3.78-3.78A3.77 3.77 0 0 0 12 5.52Zm0 5.4c-.9 0-1.62-.72-1.62-1.62S11.1 7.68 12 7.68s1.62.72 1.62 1.62-.72 1.62-1.62 1.62Z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 24 24" aria-hidden="true" className="block fill-current">
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3h4.1a2.4 2.4 0 0 0 4.8 0h4.1A1.5 1.5 0 0 1 20 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-4.1a2.4 2.4 0 0 0-4.8 0H5.5A1.5 1.5 0 0 1 4 19.5v-15Zm2 1v3.2h12V5.5h-2.2a3.9 3.9 0 0 1-7.6 0H6Zm0 5.2V18.5h2.2a3.9 3.9 0 0 1 7.6 0H18v-7.8H6Z" />
    </svg>
  );
}

function SignOutIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 24 24" aria-hidden="true" className="block fill-current">
      <path d="M10 3H4.5A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21H10v-1.8H4.8V4.8H10V3Zm8.2 8.1-2.35-2.26 1.27-1.32 4.2 4.05a.9.9 0 0 1 0 1.3l-4.2 4.05-1.27-1.32 2.35-2.26H9.2V11.1h9Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 fill-current"
    >
      <path d="M9.2 5.3 16 12l-6.8 6.7-1.4-1.4L13.2 12 7.8 6.7l1.4-1.4Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="block fill-current">
      <path d="m6.4 5 12.6 12.6-1.4 1.4L5 6.4 6.4 5Zm12.6 1.4L6.4 19l-1.4-1.4L17.6 5l1.4 1.4Z" />
    </svg>
  );
}

export function Topbar() {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("INR");
  const [draftLanguage, setDraftLanguage] = useState("en");
  const [draftCurrency, setDraftCurrency] = useState("INR");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (settingsOpen && !dialog.open) dialog.showModal();
    if (!settingsOpen && dialog.open) dialog.close();
  }, [settingsOpen]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!accountRef.current?.contains(event.target as Node)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function openSettings() {
    setDraftLanguage(language);
    setDraftCurrency(currency);
    setAccountOpen(false);
    setSettingsOpen(true);
  }

  function saveSettings(event: FormEvent) {
    event.preventDefault();
    setLanguage(draftLanguage);
    setCurrency(draftCurrency);
    setSettingsOpen(false);
  }

  return (
    <header className="relative bg-white text-[#1c1c1c] shadow-[0_3px_4px_-2px_rgba(28,28,28,0.16)]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center px-4 sm:h-[72px] sm:px-6">
        <a href="/" className="mt-1 block shrink-0" aria-label="Go to home page">
          <img
            src="https://cdn.tiqets.com/static/assets/logos/tiqets-logo-primary-600.svg"
            alt="Tiqets"
            width={108}
            height={24}
            className="h-6 w-auto sm:h-7 xl:h-[42px]"
          />
        </a>

        <form action="/search" method="GET" className="ml-4 hidden flex-1 items-center rounded-full border border-[#d9d9d9] bg-white px-4 py-2 md:flex xl:max-w-[22.5rem] xl:flex-none">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className="shrink-0 fill-[#5a5a5a]">
            <path d="m22.5 20.8-5.2-5.2a8 8 0 1 0-1.4 1.4l5.2 5.2 1.4-1.4ZM3.6 10.2a6.6 6.6 0 1 1 13.2 0 6.6 6.6 0 0 1-13.2 0Z" />
          </svg>
          <input
            type="search"
            name="q"
            placeholder="Search destinations & experiences"
            className="ml-3 w-full border-0 bg-transparent text-sm text-[#1c1c1c] outline-none placeholder:text-[#b0b0b0]"
          />
        </form>

        <div className="ml-3 mr-2 flex flex-1 items-center justify-end">
          <button
            type="button"
            onClick={openSettings}
            aria-label={`Select language and currency (Currently: ${language} / ${currency})`}
            className="flex items-center p-2 text-sm font-medium uppercase"
          >
            <GlobeIcon />
            <span className="hidden sm:inline">
              {language} / {currency}
            </span>
          </button>

          <a
            href="https://support.tiqets.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Help"
            className="flex items-center p-2 no-underline"
          >
            <HelpIcon />
            <span className="ml-1 hidden font-medium sm:inline">Help</span>
          </a>

          <div className="relative" ref={accountRef}>
            <button
              type="button"
              aria-expanded={accountOpen}
              aria-haspopup="menu"
              aria-label="My profile"
              onClick={() => setAccountOpen((open) => !open)}
              className="relative inline-flex items-center justify-center rounded-lg border border-transparent p-1"
            >
              <UserIcon />
              <span className="sr-only">My profile</span>
            </button>

            <ul
              role="menu"
              className={`absolute right-0 top-full z-10 mt-1 min-w-48 list-none rounded bg-white py-2 text-[#3c3c3c] shadow-[0_8px_24px_rgba(28,28,28,0.16)] ${
                accountOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <li role="none">
                <a
                  role="menuitem"
                  href="/account/tickets"
                  className="flex w-full items-center px-4 py-3 no-underline hover:bg-[#f3f3f3]"
                  onClick={() => setAccountOpen(false)}
                >
                  <TicketIcon />
                  <span className="ml-2">My tickets</span>
                </a>
              </li>
              <li role="none">
                <button
                  role="menuitem"
                  type="button"
                  className="flex w-full items-center px-4 py-3 text-left hover:bg-[#f3f3f3]"
                  onClick={() => setAccountOpen(false)}
                >
                  <SignOutIcon />
                  <span className="ml-2">Sign out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => setSettingsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setSettingsOpen(false);
        }}
        className="m-auto w-[min(100vw-2rem,480px)] rounded-xl p-0 text-[#3c3c3c] backdrop:bg-[rgba(28,28,28,0.75)]"
      >
        <div className="sticky top-0 z-20 flex items-center bg-white shadow">
          <h1 id={titleId} className="my-0 mr-4 grow py-3 pl-4 text-xl font-medium">
            Update your settings
          </h1>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSettingsOpen(false)}
            className="mr-2 rounded-full p-2 leading-none hover:bg-[#f3f3f3]"
          >
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={saveSettings} className="p-4">
          <div className="my-4 space-y-2">
            <label htmlFor="language-options" className="flex items-center text-base font-medium">
              Language
            </label>
            <div className="relative">
              <select
                id="language-options"
                name="language"
                value={draftLanguage}
                onChange={(event) => setDraftLanguage(event.target.value)}
                className="w-full appearance-none rounded-lg border border-[#d9d9d9] bg-white py-3 pr-12 pl-4"
              >
                {LANGUAGES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </div>
          </div>

          <div className="my-4 space-y-2">
            <label htmlFor="currency-options" className="flex items-center text-base font-medium">
              Currency
            </label>
            <div className="relative">
              <select
                id="currency-options"
                name="currency"
                value={draftCurrency}
                onChange={(event) => setDraftCurrency(event.target.value)}
                className="w-full appearance-none rounded-lg border border-[#d9d9d9] bg-white py-3 pr-12 pl-4"
              >
                {CURRENCIES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </div>
          </div>

          <p className="mb-2 text-sm text-[#6b6b6b]">
            Where applicable, prices will be converted and shown in the currency you select. The
            currency you pay in may differ based on your reservation.
          </p>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#111] px-4 py-3 text-base font-medium text-white hover:bg-[#2a2a2a]"
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </header>
  );
}
