"use client";

import { useMemo, useState } from "react";

const SUGGESTIONS = [
  "Rome",
  "Paris",
  "Amsterdam",
  "Barcelona",
  "London",
  "New York",
  "Colosseum",
  "Eiffel Tower",
  "Vatican Museums",
  "Louvre Museum",
  "Sagrada Familia",
  "Anne Frank House",
];

const SOURCES = [
  {
    media: "(min-width: 1920px)",
    srcSet:
      "https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&fit=crop&q=75&w=2560&s=c37243068eed954ca1eb32b08e8c6dd6 1x, https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&dpr=2&fit=crop&q=60&w=2560&s=42ad10e93516d434f53138cd193c318e 2x",
  },
  {
    media: "(min-width: 1280px)",
    srcSet:
      "https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&fit=crop&q=75&w=1920&s=78ca85bd3c2348758e44861d53caddde 1x, https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&dpr=2&fit=crop&q=60&w=1920&s=7ba3018d61427292c2b420aac219fa7a 2x",
  },
  {
    media: "(min-width: 960px)",
    srcSet:
      "https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&fit=crop&q=75&w=1280&s=52f8f382464bb170b76c331ff5273aec 1x, https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&dpr=2&fit=crop&q=60&w=1280&s=166aa65709c05d82d7597a04f249352c 2x",
  },
  {
    media: "(min-width: 600px)",
    srcSet:
      "https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&fit=crop&q=75&w=960&s=33b8330e4ce1ba2ab73a9f7c1cd8007b 1x, https://aws-tiqets-cdn.imgix.net/images/content/86ab69c5ef184c60a414ccd52934e9e1.jpg?auto=format%2Ccompress&dpr=2&fit=crop&q=60&w=960&s=b9527eb7af20dda89f2c6403dd87f935 2x",
  },
] as const;

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 fill-[#3c3c3c]">
      <path d="M10.5 3a7.5 7.5 0 0 1 5.97 12.06l4.24 4.23-1.42 1.42-4.23-4.24A7.5 7.5 0 1 1 10.5 3Zm0 1.8a5.7 5.7 0 1 0 0 11.4 5.7 5.7 0 0 0 0-11.4Z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 mr-2 shrink-0 fill-white">
      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v2.2a2.2 2.2 0 0 0 0 4.6v2.2a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-2.2a2.2 2.2 0 0 0 0-4.6V7.5Zm8.1 1.2v1.6H9.3V8.7h1.8Zm0 3.2v1.6H9.3v-1.6h1.8Zm0 3.2v1.6H9.3v-1.6h1.8Z" />
    </svg>
  );
}

export function HomeHero() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return SUGGESTIONS.filter((item) => item.toLowerCase().includes(needle)).slice(0, 6);
  }, [query]);

  const showSuggestions = open && query.trim().length > 0;

  return (
    <section className="relative mb-4 flex min-h-[480px] items-end">
      <picture className="absolute inset-0 h-full w-full">
        {SOURCES.map((source) => (
          <source key={source.media} media={source.media} height={480} srcSet={source.srcSet} />
        ))}
        <img
          src="https://aws-tiqets-cdn.imgix.net/images/content/fc35da42937342b28f9ee43d986b5cd6.jpg?auto=format%2Ccompress&fit=crop&h=480&q=75&s=c57c3a65a9acefb80a10e83ac5d85425"
          alt=""
          height={480}
          fetchPriority="high"
          className="block h-full w-full bg-[#3c3c3c] object-cover"
        />
      </picture>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.18) 42%, rgba(0,0,0,0.62) 100%)",
        }}
      />

      <div className="relative w-full">
        <div className="relative mx-auto mt-4 w-full max-w-[1184px] px-4 py-4 sm:px-6">
          <div className="mb-4 text-white">
            <h1 className="mt-0 mb-1 max-w-[480px] text-[2rem] leading-tight font-medium md:text-[2.75rem]">
              Discover the world’s best experiences
            </h1>
          </div>

          <div className="md:min-w-[500px] md:w-3/5">
            <div className="relative my-3 md:my-6">
              <search>
                <form
                  className="flex items-center rounded-full border border-[#d9d9d9] bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-black/20"
                  action="/search"
                  method="get"
                >
                  <SearchIcon />
                  <input
                    className="ml-3 w-full grow appearance-none border-0 bg-transparent p-0 text-[#3c3c3c] shadow-none outline-none placeholder:text-[#9a9a9a]"
                    placeholder="Search destinations & experiences"
                    type="search"
                    name="q"
                    value={query}
                    autoComplete="off"
                    role="combobox"
                    aria-expanded={showSuggestions}
                    aria-controls="search-suggestions"
                    aria-autocomplete="list"
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    onBlur={() => {
                      window.setTimeout(() => setOpen(false), 150);
                    }}
                  />
                </form>

                <ul
                  id="search-suggestions"
                  role="listbox"
                  className={`absolute top-full right-0 left-0 z-10 mt-2 list-none overflow-hidden rounded-xl border border-[#d9d9d9] bg-white shadow-md ${
                    showSuggestions ? "block" : "hidden"
                  }`}
                >
                  {matches.length === 0 ? (
                    <li className="px-4 py-3 text-sm text-[#6b6b6b]">No matches</li>
                  ) : (
                    matches.map((item) => (
                      <li key={item} role="option">
                        <a
                          href={`/search?q=${encodeURIComponent(item)}`}
                          className="block px-4 py-3 text-[#3c3c3c] no-underline hover:bg-[#f3f3f3]"
                        >
                          {item}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </search>
            </div>
          </div>

          <div className="flex">
            <TicketIcon />
            <p className="m-0 text-sm font-medium text-white">
              More than 70 million happy travelers booked with Tiqets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
