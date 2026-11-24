"use client";

import { useState } from "react";

type LinkItem = { label: string; href: string };

const VENUES: LinkItem[] = [
  { label: "Acropolis of Athens", href: "/en/acropolis-of-athens-tickets-l146438/" },
  { label: "Alhambra", href: "/en/alhambra-tickets-l145851/" },
  { label: "Amsterdam Canal Cruises", href: "/en/amsterdam-canal-cruises-tickets-l200073/" },
  { label: "Burj Khalifa", href: "/en/burj-khalifa-tickets-l145628/" },
  { label: "Casa Batlló", href: "/en/casa-batllo-tickets-l141895/" },
  { label: "Colosseum", href: "/en/colosseum-tickets-l145769/" },
  { label: "Disneyland® Paris", href: "/en/disneyland-paris-tickets-l133192/" },
  { label: "Doge's Palace", href: "/en/doges-palace-tickets-venice-l143993/" },
  { label: "Duomo di Milano", href: "/en/duomo-di-milano-tickets-l145637/" },
  { label: "Edge NYC", href: "/en/edge-at-hudson-yards-tickets-l162673/" },
  { label: "Eiffel Tower", href: "/en/eiffel-tower-tickets-l144586/" },
  { label: "Keukenhof", href: "/en/keukenhof-tickets-l145517/" },
  { label: "Kew Gardens", href: "/en/kew-gardens-tickets-l145747/" },
  { label: "London Eye", href: "/en/london-eye-tickets-l133176/" },
  { label: "Moco Museum Amsterdam", href: "/en/moco-museum-tickets-l145764/" },
  { label: "Mount Vesuvius", href: "/en/mount-vesuvius-tickets-l146329/" },
  { label: "National Palace of Pena & Park", href: "/en/national-palace-of-pena-park-tickets-l145615/" },
  { label: "New York Attraction Passes", href: "/en/new-york-attraction-passes-l200067/" },
  { label: "Oceanogràfic de Valencia", href: "/en/oceanografic-de-valencia-tickets-l147867/" },
  { label: "Palace of Versailles", href: "/en/palace-of-versailles-tickets-l141873/" },
  { label: "Park Güell", href: "/en/park-guell-tickets-l141902/" },
  { label: "Pompeii", href: "/en/pompeii-tickets-l145740/" },
  { label: "SUMMIT One Vanderbilt", href: "/en/summit-one-vanderbilt-tickets-l188454/" },
  { label: "Sagrada Familia", href: "/en/sagrada-familia-tickets-l133161/" },
  { label: "Seine River Cruises", href: "/en/seine-river-cruises-tickets-l202155/" },
  { label: "St. Peter's Basilica", href: "/en/st-peters-basilica-tickets-l144143/" },
  { label: "Tower of London", href: "/en/tower-of-london-tickets-l124320/" },
  { label: "Van Gogh Museum", href: "/en/van-gogh-museum-tickets-l144593/" },
  { label: "Vatican Museums", href: "/en/vatican-museums-tickets-l145158/" },
];

const CITIES: LinkItem[] = [
  { label: "Amsterdam", href: "/en/amsterdam-attractions-c75061/" },
  { label: "Barcelona", href: "/en/barcelona-attractions-c66342/" },
  { label: "Dubai", href: "/en/dubai-attractions-c60005/" },
  { label: "Florence", href: "/en/florence-attractions-c71854/" },
  { label: "Las Vegas", href: "/en/las-vegas-attractions-c82073/" },
  { label: "Lisbon", href: "/en/lisbon-attractions-c76528/" },
  { label: "London", href: "/en/london-attractions-c67458/" },
  { label: "Madrid", href: "/en/madrid-attractions-c66254/" },
  { label: "Milan", href: "/en/milan-attractions-c71749/" },
  { label: "New York", href: "/en/new-york-attractions-c260932/" },
  { label: "Paris", href: "/en/things-to-do-in-paris-c66746/" },
  { label: "Rome", href: "/en/rome-attractions-c71631/" },
  { label: "San Francisco", href: "/en/san-francisco-attractions-c1772/" },
  { label: "Venice", href: "/en/venice-attractions-c71510/" },
  { label: "Vienna", href: "/en/vienna-attractions-c60335/" },
];

const COUNTRIES: LinkItem[] = [
  { label: "Australia", href: "/en/australia-attractions-z50012/" },
  { label: "Austria", href: "/en/austria-attractions-z50011/" },
  { label: "France", href: "/en/things-to-do-in-france-z50074/" },
  { label: "Germany", href: "/en/germany-attractions-z50056/" },
  { label: "Greece", href: "/en/greece-attractions-z50088/" },
  { label: "Iceland", href: "/en/iceland-attractions-z50108/" },
  { label: "Italy", href: "/en/italy-attractions-z50109/" },
  { label: "Portugal", href: "/en/portugal-attractions-z50184/" },
  { label: "Spain", href: "/en/spain-attractions-z50067/" },
  { label: "The Netherlands", href: "/en/the-netherlands-attractions-z50166/" },
  { label: "United Arab Emirates", href: "/en/united-arab-emirates-attractions-z50001/" },
  { label: "United Kingdom", href: "/en/united-kingdom-attractions-z50076/" },
  { label: "United States", href: "/en/united-states-attractions-z50233/" },
];

const CATEGORIES: LinkItem[] = [
  { label: "Attractions in San Diego", href: "/en/san-diego-attractions-c81920/attractions-t2966/" },
  { label: "Attractions in Dubai", href: "/en/dubai-attractions-c60005/attractions-t2966/" },
  { label: "Attractions in London", href: "/en/london-attractions-c67458/attractions-t2966/" },
  { label: "Attractions in Dublin", href: "/en/dublin-attractions-c68616/attractions-t2966/" },
  { label: "Attractions in Orlando", href: "/en/orlando-attractions-c79889/attractions-t2966/" },
  { label: "Attractions in Barcelona", href: "/en/barcelona-attractions-c66342/attractions-t2966/" },
  { label: "City Tours in Rome", href: "/en/rome-attractions-c71631/city-tours-t1040/" },
  { label: "Cruises & Boat Tours in Paris", href: "/en/things-to-do-in-paris-c66746/cruises-boat-tours-t1035/" },
  { label: "Cruises & Boat Tours in Amsterdam", href: "/en/amsterdam-attractions-c75061/cruises-boat-tours-t1035/" },
  {
    label: "Historical & Archaeological Sites in Barcelona",
    href: "/en/barcelona-attractions-c66342/historical-archaeological-sites-t2967/",
  },
  {
    label: "Historical & Archaeological Sites in Rome",
    href: "/en/rome-attractions-c71631/historical-archaeological-sites-t2967/",
  },
  {
    label: "Historical & Archaeological Sites in Lisbon",
    href: "/en/lisbon-attractions-c76528/historical-archaeological-sites-t2967/",
  },
  {
    label: "Historical & Archaeological Sites in Seville",
    href: "/en/seville-attractions-c65870/historical-archaeological-sites-t2967/",
  },
  { label: "Museums in Vienna", href: "/en/vienna-attractions-c60335/museums-t2968/" },
  { label: "Museums in Paris", href: "/en/things-to-do-in-paris-c66746/museums-t2968/" },
  { label: "Museums in New York", href: "/en/new-york-attractions-c260932/museums-t2968/" },
  { label: "Museums in Amsterdam", href: "/en/amsterdam-attractions-c75061/museums-t2968/" },
  { label: "Museums in Florence", href: "/en/florence-attractions-c71854/museums-t2968/" },
  { label: "Shows & Theatres in London", href: "/en/london-attractions-c67458/shows-theatres-t2596/" },
  { label: "Shows & Theatres in New York", href: "/en/new-york-attractions-c260932/shows-theatres-t2596/" },
];

const TABS = [
  { id: "venues", label: "Top things to do" },
  { id: "destinations", label: "Top destinations" },
  { id: "categories", label: "Top categories" },
] as const;

function Chip({ item, compact = false }: { item: LinkItem; compact?: boolean }) {
  return (
    <a
      href={item.href}
      className={`mb-2 mr-2 inline-flex items-center justify-center rounded-lg border border-[#d9d9d9] no-underline hover:bg-[#f6f6f6] ${
        compact ? "px-3 py-1 text-xs" : "px-3 py-2 text-sm"
      }`}
    >
      {item.label}
    </a>
  );
}

function ChipGroup({ items, compact = false }: { items: LinkItem[]; compact?: boolean }) {
  return (
    <div className="inline-flex flex-wrap">
      {items.map((item) => (
        <Chip key={item.href} item={item} compact={compact} />
      ))}
    </div>
  );
}

export function PopularPlaces() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("venues");

  return (
    <section className="mx-auto mb-8 max-w-[1184px] px-4 text-[#1c1c1c] sm:px-6">
      <h2 className="mt-0 mb-3 text-2xl font-medium">Discover Tiqets&apos; most popular places to visit</h2>

      <div className="-mx-4 overflow-x-auto sm:-mx-6" role="tablist" aria-label="Popular places">
        <div className="flex w-max min-w-full border-b border-[#e6e6e6] px-4 sm:px-6">
          {TABS.map((item) => {
            const selected = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setTab(item.id)}
                className={`shrink-0 border-b-2 p-4 font-medium outline-none ${
                  selected
                    ? "border-[#1c1c1c] text-[#1c1c1c]"
                    : "border-transparent text-[#6b6b6b] hover:text-[#1c1c1c]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3">
        {tab === "venues" ? <ChipGroup items={VENUES} /> : null}

        {tab === "destinations" ? (
          <>
            <h3 className="mb-3 text-lg font-medium">Top cities to visit</h3>
            <ChipGroup items={CITIES} />
            <h3 className="mt-4 mb-3 text-lg font-medium">Top countries to visit</h3>
            <ChipGroup items={COUNTRIES} />
          </>
        ) : null}

        {tab === "categories" ? <ChipGroup items={CATEGORIES} compact /> : null}
      </div>
    </section>
  );
}
