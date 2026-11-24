"use client";

import { useState } from "react";
import type { Experience } from "@/data/experiences";

const DATES = [
  { label: "Today", day: "24", month: "Nov 2026", disabled: true, key: "2026-11-24" },
  { label: "Wed", day: "25", month: null, disabled: false, key: "2026-11-25" },
  { label: "Thu", day: "26", month: null, disabled: false, key: "2026-11-26" },
  { label: "Fri", day: "27", month: null, disabled: false, key: "2026-11-27" },
  { label: "Sat", day: "28", month: null, disabled: false, key: "2026-11-28" },
  { label: "Sun", day: "29", month: null, disabled: false, key: "2026-11-29" },
  { label: "Mon", day: "30", month: null, disabled: false, key: "2026-11-30" },
  { label: "Tue", day: "1", month: "Dec 2026", disabled: false, key: "2026-12-01" },
  { label: "Wed", day: "2", month: null, disabled: false, key: "2026-12-02" },
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden className="mr-1 shrink-0 fill-current">
      <path d="M9.2 17.4 4.5 12.7l1.4-1.4 3.3 3.3 8.9-8.9 1.4 1.4z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden className="mr-1 fill-[#f5b400]">
      <path d="m12 2.8 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 16.9 6.4 19.8l1.2-6.2L3 9.3l6.3-.8L12 2.8Z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden
      className={`fill-[#b0b0b0] transition ${open ? "-rotate-90" : "rotate-90"}`}
    >
      <path d="M7.4 21.6 16 12 7.4 2.4l1.4-1.4L18.8 12 8.8 23z" />
    </svg>
  );
}

export function ExperienceDetail({ experience }: { experience: Experience }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[1200px] bg-white px-4 text-[#1c1c1c]">
      <div className="relative my-4">
        <ol className="m-0 flex list-none overflow-x-auto whitespace-nowrap p-0 text-xs text-[#5a5a5a]">
          <li className="flex items-center">
            <a href={experience.country.href} className="no-underline hover:underline">
              {experience.country.name}
            </a>
            <span className="mx-1 text-[#b0b0b0]">›</span>
          </li>
          <li className="flex items-center">
            <a href={experience.city.href} className="no-underline hover:underline">
              {experience.city.name}
            </a>
            <span className="mx-1 text-[#b0b0b0]">›</span>
          </li>
          <li className="text-[#8a8a8a]">{experience.venueName}</li>
        </ol>
      </div>

      <section className="relative mb-4 overflow-hidden text-white md:mb-8 md:rounded-xl">
        <div className="relative min-h-[256px] md:min-h-[336px] lg:h-[360px]">
          <img
            src={experience.heroImage}
            alt={experience.heroAlt}
            className="absolute inset-0 h-full w-full object-cover md:rounded-xl"
          />
          <div
            className="absolute inset-0 z-[1] md:rounded-xl"
            style={{
              background:
                "linear-gradient(0deg, rgba(4, 9, 26, 0.60) 35.01%, rgba(4, 9, 26, 0.00) 80.15%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 z-[2] box-border p-4 md:p-8">
            <h1 className="mt-1 mb-2 text-[32px] leading-tight font-bold md:text-5xl">
              {experience.heroTitle}
            </h1>
            <p className="my-0 text-sm font-medium md:text-base">{experience.heroDescription}</p>
          </div>
        </div>
      </section>

      <main className="mb-8">
        <h2 className="mt-0 mb-2 text-base font-bold xl:text-xl">Check availability</h2>

        <div className="mb-8">
          <div className="relative mb-4 flex gap-2 overflow-x-auto pb-1">
            {DATES.map((d, i) => (
              <div key={d.key} className="flex w-12 min-w-12 flex-1 flex-col self-end">
                {d.month ? (
                  <div className="mb-2 text-xs font-medium text-[#8a8a8a] uppercase">{d.month}</div>
                ) : i === 1 || (DATES[i - 1]?.month && !d.month) ? (
                  <div className="mb-2 h-[16px]" />
                ) : null}
                <button
                  type="button"
                  disabled={d.disabled}
                  onClick={() => setSelectedDate(d.key)}
                  className={`h-[68px] w-full rounded-lg border bg-white text-center transition ${
                    d.disabled
                      ? "pointer-events-none border-[#d9d9d9] opacity-50"
                      : selectedDate === d.key
                        ? "border-[#00818a] bg-[#e6f5f6]"
                        : "border-[#d9d9d9] hover:bg-[#f5f5f5]"
                  }`}
                >
                  <div
                    className={`truncate px-1 text-xs font-medium uppercase ${
                      d.disabled ? "text-[#8a8a8a]" : "text-[#8a8a8a]"
                    }`}
                  >
                    {d.label}
                  </div>
                  <div className="text-2xl font-medium text-[#1c1c1c]">{d.day}</div>
                </button>
              </div>
            ))}
            <div className="flex w-12 min-w-12 flex-1 flex-col self-end">
              <div className="mb-2 h-[16px]" />
              <button
                type="button"
                className="flex h-[68px] w-full flex-col items-center justify-center rounded-lg border border-[#d9d9d9] p-2 hover:bg-[#f5f5f5]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="fill-current">
                  <path d="M20.4 3H18V2.4a1.2 1.2 0 1 0-2.4 0V3H8.4V2.4a1.2 1.2 0 0 0-2.4 0V3H3.6A2.4 2.4 0 0 0 1.2 5.4V20.4A2.4 2.4 0 0 0 3.6 22.8h16.8a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 20.4 3zm.6 6.6v10.2a1.2 1.2 0 0 1-1.2 1.2H4.2a1.2 1.2 0 0 1-1.2-1.2V9.6A1.2 1.2 0 0 1 4.2 8.4h15.6A1.2 1.2 0 0 1 21 9.6z" />
                </svg>
                <span className="text-xs font-medium">More dates</span>
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <span className="flex-1 text-left text-sm">
              <strong>{experience.offerings.length} options</strong>
              <span className="ml-1">• from {experience.fromPrice}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {experience.offerings.map((offering) => (
              <article key={offering.title} className="rounded-xl md:inline-block">
                <div className="relative flex h-full flex-wrap rounded-xl bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,.12)] transition hover:-translate-y-0.5 hover:shadow-md md:flex-col">
                  <a
                    href={offering.href}
                    className="absolute inset-0 z-[1] rounded-xl"
                    aria-label={offering.title}
                  />
                  <div className="mb-4 mr-4 w-[72px] shrink-0 md:mr-0 md:w-full">
                    <div className="aspect-[315/170] overflow-hidden rounded-lg">
                      <img
                        src={offering.image}
                        alt={offering.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex min-w-0 grow flex-col">
                    <div className="mb-1 flex flex-wrap gap-1">
                      <span className="inline-block rounded-3xl bg-[#ececec] px-2 py-0.5 text-xs font-medium tracking-wider text-[#1c1c1c] uppercase">
                        Day Trips
                      </span>
                      <span className="inline-block rounded-3xl bg-[#d8f5e6] px-2 py-0.5 text-xs font-medium tracking-wider text-[#0a7a3e] uppercase">
                        Free cancellation
                      </span>
                    </div>
                    <h3 className="mt-0 mb-1 text-base font-bold md:mb-2 md:text-lg">
                      <span className="text-inherit">{offering.title}</span>
                    </h3>
                    <div className="mb-1 flex items-center text-sm font-medium">
                      <CheckIcon />
                      Available tomorrow
                    </div>
                    <ul className="mt-0 mb-2 list-disc pl-3 text-sm text-[#8a8a8a]">
                      {offering.takeaways.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex">
                      <div className="ml-auto mt-auto text-right">
                        <span className="block text-xs text-[#8a8a8a] md:text-sm">From</span>
                        <span className="text-base leading-none font-medium md:text-lg">
                          {offering.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2" id="about">
            <h3 className="my-4 text-xl font-bold">About: {experience.venueName}</h3>
            <div className="my-4 border-t border-[#e0e0e0]">
              <div className="border-b border-[#e0e0e0]">
                <button
                  type="button"
                  className="flex w-full items-center py-4 text-left"
                  onClick={() => setAboutOpen((v) => !v)}
                  aria-expanded={aboutOpen}
                >
                  <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#f0f0f0]">
                    <span className="text-xl">ℹ</span>
                  </div>
                  <h4 className="my-0 flex-1 pr-4 text-base font-medium">Description</h4>
                  <ChevronIcon open={aboutOpen} />
                </button>
                {aboutOpen ? (
                  <div className="pb-4">
                    <div className="mb-3 overflow-hidden rounded-lg">
                      <img
                        src={experience.heroImage}
                        alt={experience.heroAlt}
                        className="h-auto w-full max-w-[320px] rounded-lg object-cover"
                      />
                    </div>
                    {experience.about.map((p) => (
                      <p key={p} className="mb-3 text-[#1c1c1c]">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="mb-8">
        <h2 className="mt-0 mb-4 text-xl font-bold">
          {experience.venueName} customers also bought
        </h2>
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {experience.related.map((card) => (
            <article
              key={card.title}
              className="relative isolate overflow-hidden rounded-xl border border-[#ececec] bg-white"
            >
              <a href={card.href} className="absolute inset-0 z-10" aria-label={card.title} />
              <div className="flex h-full flex-row lg:flex-col">
                <div className="relative w-24 shrink-0 lg:aspect-[2/1] lg:w-full">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {card.discount ? (
                    <span className="absolute bottom-0 left-0 w-full bg-[#e31c3d] p-1 text-center text-[10px] font-medium tracking-wider text-white uppercase lg:top-2 lg:bottom-auto lg:left-2 lg:w-auto lg:rounded-full lg:px-2 lg:py-0.5">
                      {card.discount}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col justify-between gap-3 p-3 lg:p-4">
                  <div className="space-y-1">
                    <p className="m-0 text-xs font-medium tracking-wider text-[#8a8a8a] uppercase">
                      {card.city}
                    </p>
                    <h3 className="my-0 line-clamp-2 text-base font-bold">{card.title}</h3>
                    <p className="my-0 line-clamp-2 text-xs text-[#8a8a8a] lg:text-sm">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex items-end justify-between">
                    {card.rating ? (
                      <div className="flex items-center text-xs">
                        <StarIcon />
                        <span className="font-medium">{card.rating.split(" ")[0]}</span>
                        <span className="ml-1 text-[#8a8a8a]">
                          {card.rating.includes("(") ? card.rating.slice(card.rating.indexOf("(")) : ""}
                        </span>
                      </div>
                    ) : (
                      <span />
                    )}
                    <div className="ml-auto text-right leading-tight text-[#8a8a8a]">
                      <span className="text-xs">From</span>
                      <br />
                      <span className="text-sm font-medium text-[#1c1c1c] lg:text-lg">{card.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <div className="mb-12">
          <h2 className="mt-0">Top things to do in {experience.city.name}</h2>
          <ul className="my-0 mb-2 flex list-none flex-wrap gap-2 p-0">
            {experience.topThings.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex items-center rounded-lg border border-[#d9d9d9] bg-white px-3 py-2 text-sm font-medium text-[#1c1c1c] no-underline hover:bg-[#f5f5f5]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={experience.city.href}
            className="inline-flex h-6 items-center font-medium text-[#00818a] underline"
          >
            Explore {experience.city.name} ›
          </a>
        </div>

        <div className="mb-12">
          <h2 className="mt-0">Cities in India</h2>
          <ul className="my-0 mb-2 flex list-none flex-wrap gap-2 p-0">
            {experience.cities.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex items-center rounded-lg border border-[#d9d9d9] bg-white px-3 py-2 text-sm font-medium text-[#1c1c1c] no-underline hover:bg-[#f5f5f5]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={experience.country.href}
            className="inline-flex h-6 items-center font-medium text-[#00818a] underline"
          >
            Explore India ›
          </a>
        </div>
      </section>
    </div>
  );
}
