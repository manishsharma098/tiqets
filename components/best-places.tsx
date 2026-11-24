"use client";

import { useEffect, useRef, useState } from "react";

export type PlaceCard = {
  title: string;
  city: string;
  description: string;
  price: string;
  rating: string;
  reviews?: string;
  discount?: string;
  href: string;
  image: string;
  alt: string;
};

export type City = {
  name: string;
  explore: string;
  tabImage?: string;
  cards: PlaceCard[];
};

export const INDIA_CITIES: City[] = [
  {
    name: "Agra",
    explore: "/en/agra-attractions-c186/",
    cards: [
      {
        title: "Agra Walking Tours",
        city: "Agra",
        description: "Explore the city and witness the grandeur of the Taj Mahal",
        price: "₹4,958.93",
        rating: "New",
        href: "/en/agra-city-tours-tickets-l233183/",
        image:
          "https://aws-tiqets-cdn.imgix.net/images/content/e27c2c1331e847dabcfa5086257f0bfb.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
        alt: "Morning view of Baby Taj",
      },
    ],
  },
  {
    name: "Gurgaon",
    explore: "/en/gurgaon-attractions-c70285/",
    tabImage:
      "https://aws-tiqets-cdn.imgix.net/images/content/ac2f87098561411eaee7ec17a8e8914e.jpg?auto=format%2Ccompress&fit=crop&h=64&q=70&w=64&s=406fbfd418cac96f994f3360b19c89e5",
    cards: [
      {
        title: "Heritage Transport Museum",
        city: "Gurgaon",
        description:
          "The Heritage Transport Museum takes visitors on a journey through India's transport history from vintage cars to trains, planes, and maritime memorabilia.",
        price: "₹500.00",
        rating: "",
        href: "/en/heritage-transport-museum-tickets-l146591/",
        image:
          "https://aws-tiqets-cdn.imgix.net/images/content/cdd16a894a544ffaad103550d53a4978.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
        alt: "Traffic lights outside the Heritage Transport Museum",
      },
    ],
  },
  {
    name: "Mumbai",
    explore: "/en/mumbai-attractions-c70657/",
    cards: [
      {
        title: "Mumbai Walking Tours",
        city: "Mumbai",
        description: "View landmark sites, see local markets, and learn about Mumbai's history",
        price: "₹4,758.46",
        rating: "",
        href: "/en/mumbai-walking-tours-l233450/",
        image:
          "https://aws-tiqets-cdn.imgix.net/images/content/10c9ef4158934b7aa6b5eb1059095e25.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
        alt: "I love Mumbai sign by the waterfront",
      },
      {
        title: "Mumbai Airport Transfers",
        city: "Mumbai",
        description: "Ride in comfort and visit local attractions",
        price: "₹2,024.88",
        rating: "New",
        href: "/en/mumbai-airport-transfers/",
        image:
          "https://aws-tiqets-cdn.imgix.net/images/content/a93d07d27f6f430c9b810208cfb4036d.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
        alt: "Mumbai airport transfer",
      },
    ],
  },
  {
    name: "New Delhi",
    explore: "/en/new-delhi-attractions-c69484/",
    cards: [
      {
        title: "New Delhi Day Trips",
        city: "New Delhi",
        description: "Explore India's capital city and visit the famous Taj Mahal in Agra",
        price: "₹4,462.83",
        rating: "New",
        href: "/en/new-delhi-day-trips-l234385/",
        image:
          "https://aws-tiqets-cdn.imgix.net/images/content/6327855cb32c402f9093a423c75be17f.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
        alt: "Visit to Taj Mahal during a day trip",
      },
    ],
  },
  {
    name: "Jodhpur",
    explore: "/en/jodhpur-attractions-c70096/",
    cards: [
      {
        title: "Jodhpur Walking Tours",
        city: "Jodhpur",
        description: "Visit Mehrangarh Fort and shop at the bustling local markets",
        price: "₹7,145.79",
        rating: "New",
        href: "/en/jodhpur-walking-tours-l252320/",
        image:
          "https://aws-tiqets-cdn.imgix.net/images/content/93970988d26b4a979f8643c45fe8bd9e.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
        alt: "Jodhpur",
      },
    ],
  },
];

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" className="me-1 fill-[#f5b400]">
      <path d="m12 2.8 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 16.9 6.4 19.8l1.2-6.2L3 9.3l6.3-.8L12 2.8Z" />
    </svg>
  );
}

function ArrowIcon({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`fill-white ${flip ? "rotate-180" : ""}`}
    >
      <path d="M9.2 5.3 16 12l-6.8 6.7-1.4-1.4L13.2 12 7.8 6.7l1.4-1.4Z" />
    </svg>
  );
}

function ExperienceCard({ card, className = "" }: { card: PlaceCard; className?: string }) {
  return (
    <article
      className={`relative isolate overflow-hidden rounded-xl border border-[#ececec] bg-white ${className}`}
    >
      <a href={card.href} className="absolute inset-0 z-10" aria-label={card.title} />
      <div className="flex h-full flex-row lg:flex-col">
        <div className="relative w-24 shrink-0 lg:aspect-[2/1] lg:w-full">
          <img src={card.image} alt={card.alt} className="absolute inset-0 h-full w-full object-cover" />
          {card.discount ? (
            <span className="absolute bottom-0 left-0 w-full bg-[#e31c3d] p-1 text-center text-[10px] font-medium tracking-wider text-white uppercase lg:top-2 lg:bottom-auto lg:left-2 lg:w-auto lg:rounded-full lg:px-2 lg:py-0.5">
              {card.discount}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col justify-between gap-3 p-3 lg:p-4">
          <div className="space-y-1">
            <p className="m-0 text-xs font-medium tracking-wider text-[#8a8a8a] uppercase">{card.city}</p>
            <h3 className="my-0 line-clamp-2 text-base font-bold lg:line-clamp-3">{card.title}</h3>
            <p className="my-0 line-clamp-2 text-xs text-[#8a8a8a] lg:text-sm">{card.description}</p>
          </div>
          <footer className="mt-2 flex flex-wrap items-end justify-between gap-x-3 gap-y-1">
            {card.rating ? (
              <div className="flex min-w-0 items-center text-xs">
                <StarIcon />
                <span className="font-medium">{card.rating}</span>
                {card.reviews ? <span className="ml-1 text-[#8a8a8a]">({card.reviews})</span> : null}
              </div>
            ) : (
              <span />
            )}
            <div className="ml-auto shrink-0 text-right leading-tight text-[#8a8a8a]">
              <span className="text-xs">From</span>
              <br />
              <span className="text-sm font-medium text-[#1c1c1c] lg:text-lg">{card.price}</span>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}

function PlaceSlider({ cards, resetKey, className = "" }: { cards: PlaceCard[]; resetKey?: string; className?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  function updateArrows() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    setCanPrev(scroller.scrollLeft > 4);
    setCanNext(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 4);
  }

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollLeft = 0;
    updateArrows();
    scroller.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      scroller.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [resetKey]);

  function scrollByCard(direction: 1 | -1) {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector("article");
    if (!scroller || !card) return;
    const gap = 12;
    scroller.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  }

  return (
    <div className={`relative mb-6 ${className}`}>
      <div
        ref={scrollerRef}
        className="-mx-4 grid snap-x grid-flow-col gap-3 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:[grid-auto-columns:calc((100%-1.5rem)/3)] max-md:[grid-auto-columns:80vw] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <ExperienceCard key={card.href} card={card} className="snap-center md:snap-start" />
        ))}
      </div>

      {canPrev ? (
        <button
          type="button"
          title="Previous"
          onClick={() => scrollByCard(-1)}
          className="absolute top-1/2 left-0 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1c1c1c] shadow md:flex"
        >
          <ArrowIcon flip />
          <span className="sr-only">Previous</span>
        </button>
      ) : null}
      {canNext ? (
        <button
          type="button"
          title="Next"
          onClick={() => scrollByCard(1)}
          className="absolute top-1/2 right-0 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1c1c1c] shadow md:flex"
        >
          <ArrowIcon />
          <span className="sr-only">Next</span>
        </button>
      ) : null}
    </div>
  );
}

const LAST_VIEWED: PlaceCard[] = [
  {
    title: "Anakeesta",
    city: "Gatlinburg",
    description: "Walk among the treetops and glide down a mountain coaster",
    price: "₹3,716.40",
    rating: "4.3",
    reviews: "396",
    href: "/en/anakeesta-tickets-l263382/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/92a69917ff7a4f38a9a37dd45ebf4417.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Two red Anakeesta gondolas ride above a forested hillside, with mountains and a town in the background.",
  },
  {
    title: "Mumbai Airport Transfers",
    city: "Mumbai",
    description: "Ride in comfort and visit local attractions",
    price: "₹2,024.88",
    rating: "New",
    href: "/en/mumbai-airport-transfers/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/a93d07d27f6f430c9b810208cfb4036d.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Travelers on an airport transfer",
  },
];

export function StillInterested() {
  return (
    <section className="mx-auto mb-8 max-w-[1184px] px-4 text-[#1c1c1c] sm:px-6">
      <h2 className="mt-0 mb-3 text-2xl font-medium">Still interested in these attractions?</h2>
      <PlaceSlider cards={LAST_VIEWED} />
    </section>
  );
}

const POPULAR: PlaceCard[] = [
  {
    title: "Vatican Museums",
    city: "Rome",
    description:
      "Catch a glimpse of one of the greatest art collections in the world, including Michelangelo’s famed Sistine Chapel",
    price: "₹2,834.83",
    rating: "4.3",
    reviews: "83,084",
    discount: "up to -21%",
    href: "/en/vatican-museums-tickets-l145158/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/23648952627642dfac94a1707ed2c19d.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Tourists relax on benches in a courtyard with a large bronze sculpture and historic building.",
  },
  {
    title: "Sagrada Familia",
    city: "Barcelona",
    description: "Get your Sagrada Familia tickets to see inside Gaudí's crowning masterpiece in Barcelona",
    price: "₹3,422.04",
    rating: "4.7",
    reviews: "93,767",
    discount: "up to -40%",
    href: "/en/sagrada-familia-tickets-l133161/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/adc9997bae4d45f6aae1ffadd9881a15.JPG?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "A large unfinished cathedral with cranes, viewed from a park with trees and a reflective pond.",
  },
  {
    title: "Colosseum",
    city: "Rome",
    description:
      "Visit Rome’s impressive Colosseum, once home to gladiators and chariots; book admission online early due to high demand",
    price: "₹2,328.61",
    rating: "4",
    reviews: "51,656",
    discount: "up to -21%",
    href: "/en/colosseum-tickets-l145769/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/57e551b7fc954928a135cd6494e91bd9.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "The Colosseum and Arch of Constantine in Rome under a clear blue sky.",
  },
  {
    title: "Anakeesta",
    city: "Gatlinburg",
    description: "Walk among the treetops and glide down a mountain coaster",
    price: "₹3,716.40",
    rating: "4.3",
    reviews: "396",
    href: "/en/anakeesta-tickets-l263382/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/92a69917ff7a4f38a9a37dd45ebf4417.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Two red Anakeesta gondolas ride above a forested hillside.",
  },
  {
    title: "Duomo di Milano",
    city: "Milan",
    description: "Visit Italy’s largest church with instant digital tickets to skip the line and access Milan Duomo’s famous rooftops",
    price: "₹1,265.55",
    rating: "4.4",
    reviews: "25,078",
    href: "/en/duomo-di-milano-tickets-l145637/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/4dd7f189be7f4a1b85e0b8f947398670.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "People gather in front of an ornate Gothic cathedral with intricate spires.",
  },
  {
    title: "Belvedere Palace",
    city: "Vienna",
    description: "Witness the unmatched elegance of Vienna's historic palace",
    price: "₹1,214.93",
    rating: "4.6",
    reviews: "6,036",
    discount: "up to -12%",
    href: "/en/belvedere-palace-tickets-l145892/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/d9517f8d370b4da0b6627a09e597cbe9.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "An ornate palace with green domes, fountains, statues, and gardens.",
  },
];

export function PopularThings() {
  return (
    <section className="mx-auto mb-10 max-w-[1184px] px-4 text-[#1c1c1c] sm:px-6">
      <h2 className="mt-0 mb-4 text-2xl font-medium">Most popular things to do</h2>
      <div className="grid gap-3 lg:grid-cols-3">
        {POPULAR.map((card) => (
          <ExperienceCard key={card.href} card={card} />
        ))}
      </div>
    </section>
  );
}

export function BestPlaces({ title, cities }: { title: string; cities: City[] }) {
  const [cityName, setCityName] = useState(cities[0].name);
  const city = cities.find((item) => item.name === cityName) ?? cities[0];

  return (
    <section className="mx-auto mb-8 max-w-[1184px] px-4 text-[#1c1c1c] sm:px-6">
      <h2 className="mt-0 mb-3 text-2xl font-medium">{title}</h2>

      <div className="-mx-4 overflow-x-auto sm:-mx-6" role="tablist" aria-label={title}>
        <div className="flex w-max min-w-full border-b border-[#e6e6e6] px-4 sm:px-6">
          {cities.map((item) => {
            const selected = item.name === city.name;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setCityName(item.name)}
                className={`flex shrink-0 items-center border-b-2 p-4 font-medium outline-none ${
                  selected
                    ? "border-[#1c1c1c] text-[#1c1c1c]"
                    : "border-transparent text-[#6b6b6b] hover:text-[#1c1c1c]"
                }`}
              >
                {item.tabImage ? (
                  <img
                    src={item.tabImage}
                    alt=""
                    width={32}
                    height={32}
                    className="mr-2 h-8 w-8 shrink-0 rounded-full object-cover"
                  />
                ) : null}
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <PlaceSlider cards={city.cards} resetKey={city.name} className="mt-4" />

      <a
        href={city.explore}
        className="inline-flex w-full items-center justify-center rounded-lg border border-[#d9d9d9] px-4 py-3 font-medium text-[#1c1c1c] no-underline hover:bg-[#f6f6f6] sm:w-auto"
      >
        Explore {city.name}
      </a>
    </section>
  );
}
