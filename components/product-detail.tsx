"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden className={`fill-[#b0b0b0] ${open ? "-rotate-90" : "rotate-90"}`}>
      <path d="M7.4 21.6 16 12 7.4 2.4l1.4-1.4L18.8 12 8.8 23z" />
    </svg>
  );
}

function Accordion({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#d9d9d9]">
      <button type="button" className="flex w-full items-center py-6 text-left md:py-8" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <h2 className="my-0 flex-1 pr-4 text-lg font-medium">{title}</h2>
        <Chevron open={open} />
      </button>
      {open ? <div className="pb-6 md:pb-8">{children}</div> : null}
    </div>
  );
}

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden className="mr-1 fill-[#f5b400]">
      <path d="m12 2.8 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 16.9 6.4 19.8l1.2-6.2L3 9.3l6.3-.8L12 2.8Z" />
    </svg>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const imgs = product.images;

  return (
    <div className="mx-auto w-full max-w-[1200px] bg-white px-4 text-[#1c1c1c]">
      <nav className="my-4">
        <ol className="m-0 flex list-none overflow-x-auto p-0 text-xs text-[#5a5a5a]">
          {product.breadcrumbs.map((c, i) => (
            <li key={c.name} className="flex items-center whitespace-nowrap">
              {c.href ? <a href={c.href} className="no-underline hover:underline">{c.name}</a> : <span className="text-[#8a8a8a]">{c.name}</span>}
              {i < product.breadcrumbs.length - 1 ? <span className="mx-1">›</span> : null}
            </li>
          ))}
        </ol>
      </nav>

      {/* Gallery: 1 big + side stack */}
      <section className="relative mb-6">
        <div className="hidden gap-2 md:grid" style={{ gridTemplateColumns: "62% 1fr", gridTemplateRows: "1fr 1fr" }}>
          <img src={imgs[0]?.url} alt={imgs[0]?.alt ?? ""} className="row-span-2 h-full max-h-[420px] w-full rounded-l-lg object-cover bg-[#ececec]" />
          <img src={imgs[1]?.url} alt={imgs[1]?.alt ?? ""} className="h-[206px] w-full rounded-tr-lg object-cover bg-[#ececec]" />
          <img src={imgs[2]?.url} alt={imgs[2]?.alt ?? ""} className="h-[206px] w-full rounded-br-lg object-cover bg-[#ececec]" />
        </div>
        <div className="flex snap-x overflow-x-auto md:hidden">
          {imgs.map((im) => (
            <img key={im.url} src={im.url} alt={im.alt} className="w-full shrink-0 snap-start object-cover" />
          ))}
        </div>
        <span className="absolute right-3 bottom-3 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-medium shadow">Gallery</span>
      </section>

      <main className="xl:grid xl:grid-cols-3 xl:gap-6">
        <div className="col-span-2">
          <h1 className="m-0 text-2xl font-bold md:text-[28px]">{product.title}</h1>
          <p className="mt-1 mb-6 text-base">{product.subtitle}</p>

          <ul className="mb-6 list-none space-y-4 p-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-4 md:space-y-0">
            {product.details.map((d) => (
              <li key={d.label} className="flex gap-3">
                <span className="mt-0.5 text-[#5a5a5a]">◉</span>
                <div>
                  <div className="font-medium">{d.label}</div>
                  <div className="text-sm text-[#8a8a8a]">{d.value}</div>
                </div>
              </li>
            ))}
          </ul>

          <hr className="m-0 border-[#d9d9d9]" />

          <Accordion title="What's included" defaultOpen>
            <div className="space-y-6">
              <div>
                <h3 className="mt-0 mb-3 text-base font-medium">Included</h3>
                <ul className="m-0 list-none space-y-2 p-0">
                  {product.included.map((x) => (
                    <li key={x} className="flex gap-3 text-base">
                      <span className="text-[#0a7a3e]">✓</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mt-0 mb-3 text-base font-medium">Not included</h3>
                <ul className="m-0 list-none space-y-2 p-0">
                  {product.excluded.map((x) => (
                    <li key={x} className="flex gap-3 text-base">
                      <span className="text-[#d32f2f]">✕</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Accordion>

          <Accordion title="Description">
            <div className="space-y-3 text-base">
              {product.description.map((p) => (
                <p key={p} className="m-0">{p}</p>
              ))}
            </div>
          </Accordion>
          <Accordion title="Instructions">
            <ul className="m-0 list-disc space-y-2 pl-5 text-base">
              {product.instructions.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Accordion>
          <Accordion title="Additional info">
            <p className="m-0 text-base text-[#5a5a5a]">Provider details available after booking.</p>
          </Accordion>
          <Accordion title="Reschedule and cancellation policy">
            <ul className="m-0 list-disc space-y-2 pl-5 text-base">
              {product.cancellation.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Accordion>
        </div>

        {/* Sticky checkout */}
        <div className="col-span-1 mt-6 xl:mt-0">
          <div className="sticky top-4 space-y-4 rounded-xl border border-[#e0e0e0] bg-white p-4 shadow-lg">
            <div>
              <div className="text-sm text-[#8a8a8a]">From</div>
              <div className="text-2xl font-medium">{product.price}</div>
            </div>
            <label className="block text-sm font-medium" htmlFor="visit-date">
              Select a date
            </label>
            <input id="visit-date" type="date" className="w-full rounded-lg border border-[#d9d9d9] px-3 py-3" />
            <button type="button" className="w-full rounded-lg bg-[#5b4fc7] py-3 text-center font-medium text-white hover:bg-[#4a3fb0]">
              Check availability
            </button>
            <div className="rounded-lg bg-[#f0f0f0] p-3 text-sm">
              <div className="mb-1 font-medium">Cancellation policy</div>
              Cancel for free up to 24 hours before your visit
            </div>
            {product.important?.length ? (
              <div>
                <div className="mb-2 font-medium">Important information</div>
                <ul className="m-0 list-disc space-y-1 pl-5 text-sm text-[#5a5a5a]">
                  {product.important.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </main>

      <section className="mt-10 mb-6">
        <h2 className="mt-0 mb-4 text-xl font-bold">More ways to experience Agra Walking Tours</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {product.moreWays.map((c) => (
            <a key={c.href} href={c.href} className="flex gap-3 rounded-xl border border-[#ececec] bg-white p-3 no-underline text-inherit hover:shadow-md lg:flex-col lg:p-0 lg:overflow-hidden">
              <img src={c.image} alt={c.alt} className="h-20 w-24 rounded-lg object-cover lg:h-40 lg:w-full lg:rounded-none" />
              <div className="flex flex-1 flex-col justify-between lg:p-4">
                <div>
                  <div className="text-xs tracking-wider text-[#8a8a8a] uppercase">Agra</div>
                  <div className="line-clamp-2 font-bold">{c.title}</div>
                  <div className="line-clamp-2 text-sm text-[#8a8a8a]">{c.description}</div>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-sm font-medium text-[#5a5a5a]">New</span>
                  <div className="text-right text-xs text-[#8a8a8a]">
                    From
                    <div className="text-base font-medium text-[#1c1c1c]">{c.price}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <a href={product.venueHref} className="mt-4 inline-flex rounded-lg border border-[#d9d9d9] px-4 py-3 font-medium no-underline text-inherit hover:bg-[#f5f5f5]">
          Show all options
        </a>
      </section>

      <section className="-mx-4 bg-[#f0f0f0] px-4 py-8 md:mx-0 md:rounded-xl">
        <h2 className="mt-0 mb-4 text-xl font-bold">Customers also bought</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {product.related.map((c) => (
            <a key={c.href} href={c.href} className="overflow-hidden rounded-xl bg-white no-underline text-inherit shadow-sm hover:shadow-md">
              <div className="relative aspect-[2/1]">
                <img src={c.image} alt={c.alt} className="absolute inset-0 h-full w-full object-cover" />
                {c.discount ? <span className="absolute top-2 left-2 rounded-full bg-[#e31c3d] px-2 py-0.5 text-[10px] font-medium tracking-wider text-white uppercase">{c.discount}</span> : null}
              </div>
              <div className="p-4">
                <div className="text-xs tracking-wider text-[#8a8a8a] uppercase">{c.city}</div>
                <div className="font-bold">{c.title}</div>
                <div className="line-clamp-2 text-sm text-[#8a8a8a]">{c.description}</div>
                <div className="mt-3 flex items-end justify-between">
                  {c.rating ? (
                    <span className="flex items-center text-xs">
                      <Star />
                      {c.rating}
                    </span>
                  ) : (
                    <span />
                  )}
                  <div className="text-right text-xs text-[#8a8a8a]">
                    From
                    <div className="text-lg font-medium text-[#1c1c1c]">{c.price}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
