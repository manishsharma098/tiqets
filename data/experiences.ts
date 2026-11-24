export type Offering = {
  title: string;
  href: string;
  image: string;
  alt: string;
  price: string;
  takeaways: string[];
  tag?: string;
};

export type Experience = {
  slug: string;
  country: { name: string; href: string };
  city: { name: string; href: string };
  venueName: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  about: string[];
  fromPrice: string;
  offerings: Offering[];
  related: {
    title: string;
    city: string;
    description: string;
    price: string;
    rating?: string;
    href: string;
    image: string;
    alt: string;
    discount?: string;
  }[];
  topThings: { label: string; href: string }[];
  cities: { label: string; href: string }[];
};

const AGRA_OFFERINGS: Offering[] = [
  {
    title: "Agra: Private Taj Mahal and Agra Fort Sunrise Tour from Delhi",
    href: "/en/agra-attractions-c186/tickets-for-agra-private-taj-mahal-and-agra-fort-sunrise-tour-from-delhi-p1085502/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/79af9d9101bf478d966d39102842917b.jpeg?auto=format%2Ccompress&fit=crop&h=215&q=40&w=350",
    alt: "Morning view of Baby Taj",
    price: "₹23,000.00",
    takeaways: [
      "Live guide in English, Chinese, German, French, Hindi, Japanese, Russian",
      "Group of max. 15 people",
    ],
  },
  {
    title: "Agra: Guided Tour + Roundtrip Transfer",
    href: "/en/agra-attractions-c186/tickets-for-agra-guided-tour-roundtrip-transfer-p1102408/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/a56749b8b423464a946d51d7768c7e64.jpeg?auto=format%2Ccompress&fit=crop&h=215&q=40&w=350",
    alt: "Same Day Agra Tour",
    price: "₹5,000.00",
    takeaways: ["Duration: 12h 30mins", "Live guide in English, Chinese, German, Hindi, Japanese"],
  },
  {
    title: "Agra: Guided Day Tour + Roundtrip Transfer",
    href: "/en/agra-attractions-c186/tickets-for-agra-guided-day-tour-roundtrip-transfer-p1103599/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/7cf88d9935f047f0bfd7fd2dfe8c072f.jpeg?auto=format%2Ccompress&fit=crop&h=215&q=40&w=350",
    alt: "Taj Mahal",
    price: "₹10,124.39",
    takeaways: ["Duration: 12h", "Live guide in English, Hindi"],
  },
  {
    title: "Agra: Guided Day Tour from Delhi",
    href: "/en/agra-attractions-c186/tickets-for-agra-guided-day-tour-from-delhi-p1103600/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/50d145bbef5d4798aa1b4d05a33a38dd.jpeg?auto=format%2Ccompress&fit=crop&h=215&q=40&w=350",
    alt: "Taj Mahal: 7 Wonders of the World",
    price: "₹10,124.39",
    takeaways: ["Duration: 9h", "Live guide in English, Hindi"],
  },
  {
    title: "Agra: Guided Sunrise Tour from Delhi",
    href: "/en/agra-attractions-c186/tickets-for-agra-guided-sunrise-tour-from-delhi-p1103753/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/338e9e72160848029837c02ff9b95bbc.jpeg?auto=format%2Ccompress&fit=crop&h=215&q=40&w=350",
    alt: "Taj Mahal",
    price: "₹10,833.09",
    takeaways: ["Duration: 12h", "Live guide in English, Hindi"],
  },
];

const INDIA_CITIES_CHIPS = [
  { label: "Mumbai", href: "/en/mumbai-attractions-c70657/" },
  { label: "Agra", href: "/en/agra-attractions-c186/" },
  { label: "New Delhi", href: "/en/new-delhi-attractions-c69484/" },
  { label: "Jodhpur", href: "/en/jodhpur-attractions-c70096/" },
  { label: "Jaipur", href: "/en/jaipur-attractions-c70171/" },
  { label: "Gurgaon", href: "/en/gurgaon-attractions-c70285/" },
];

const RELATED_DEFAULT = [
  {
    title: "Alcatraz",
    city: "San Francisco",
    description: "Learn about the history of a former offshore prison and its inmates",
    price: "₹4,449.48",
    rating: "4.3 (166)",
    href: "/en/alcatraz-tickets-l147792/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/144c8a3949564317aa3bba2a24b0f4a7.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "A weathered lighthouse on a cliff",
    discount: "up to -10%",
  },
  {
    title: "California Academy of Sciences",
    city: "San Francisco",
    description: "Combine marine life, planets, tropical biomes and natural history in San Francisco",
    price: "₹2,412.65",
    rating: "4.7 (671)",
    href: "/en/california-academy-of-sciences-tickets-l145965/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/975ee1e82acb4fefb99b3fe54d325e12.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "People watch a large aquarium tank",
    discount: "up to -19%",
  },
  {
    title: "Universal Studios Hollywood",
    city: "Los Angeles",
    description: "Ride roller coasters, see movie characters, and learn how films are made",
    price: "₹9,181.04",
    rating: "4.6 (1,222)",
    href: "/en/universal-studios-hollywood-tickets-l133194/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/022eacfd472e47728a3d110e2d63c34d.JPG?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Universal Studios globe",
  },
  {
    title: "Heritage Transport Museum",
    city: "Gurgaon",
    description: "Journey through India's transport history from vintage cars to trains and planes",
    price: "₹500.00",
    rating: "4.6 (5)",
    href: "/en/heritage-transport-museum-tickets-l146591/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/cdd16a894a544ffaad103550d53a4978.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Traffic lights outside the Heritage Transport Museum",
  },
];

function makeSimpleExperience(input: {
  slug: string;
  cityName: string;
  cityHref: string;
  venueName: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  fromPrice: string;
  about: string[];
  offeringTitle?: string;
}): Experience {
  return {
    slug: input.slug,
    country: { name: "India", href: "/en/india-attractions-z50104/" },
    city: { name: input.cityName, href: input.cityHref },
    venueName: input.venueName,
    heroTitle: input.heroTitle,
    heroDescription: input.heroDescription,
    heroImage: input.heroImage,
    heroAlt: input.heroAlt,
    about: input.about,
    fromPrice: input.fromPrice,
    offerings: [
      {
        title: input.offeringTitle ?? input.heroTitle,
        href: `/en/${input.slug}/`,
        image: input.heroImage,
        alt: input.heroAlt,
        price: input.fromPrice,
        takeaways: ["Available tomorrow", "Instant ticket delivery"],
      },
    ],
    related: RELATED_DEFAULT,
    topThings: [{ label: input.venueName, href: `/en/${input.slug}/` }],
    cities: INDIA_CITIES_CHIPS,
  };
}

export const EXPERIENCES: Record<string, Experience> = {
  "agra-city-tours-tickets-l233183": {
    slug: "agra-city-tours-tickets-l233183",
    country: { name: "India", href: "/en/india-attractions-z50104/" },
    city: { name: "Agra", href: "/en/agra-attractions-c186/" },
    venueName: "Agra Walking Tours",
    heroTitle: "Agra City Tours",
    heroDescription: "Explore the city and witness the grandeur of the Taj Mahal",
    heroImage:
      "https://aws-tiqets-cdn.imgix.net/images/content/e27c2c1331e847dabcfa5086257f0bfb.jpeg?auto=format%2Ccompress&fit=crop&h=360&q=40&w=1200",
    heroAlt: "Morning view of Baby Taj",
    about: [
      "Join a city tour of Agra to explore the city and discover the magic of India.",
      "Admire one of the world's seven wonders, the Taj Mahal. It's a sacred shrine made of pure white marble. Visit the Agra Red Fort, Itimad-ud-daulah, and many more renowned spots in the city. Furthermore, stroll through the neighborhood's vibrant markets to get lovely souvenirs.",
    ],
    fromPrice: "₹5,000.00",
    offerings: AGRA_OFFERINGS,
    related: RELATED_DEFAULT,
    topThings: [
      { label: "Agra Walking Tours", href: "/en/agra-city-tours-tickets-l233183/" },
    ],
    cities: INDIA_CITIES_CHIPS,
  },
  "heritage-transport-museum-tickets-l146591": makeSimpleExperience({
    slug: "heritage-transport-museum-tickets-l146591",
    cityName: "Gurgaon",
    cityHref: "/en/gurgaon-attractions-c70285/",
    venueName: "Heritage Transport Museum",
    heroTitle: "Heritage Transport Museum",
    heroDescription:
      "The Heritage Transport Museum takes visitors on a journey through India's transport history from vintage cars to trains, planes, and maritime memorabilia.",
    heroImage:
      "https://aws-tiqets-cdn.imgix.net/images/content/cdd16a894a544ffaad103550d53a4978.jpg?auto=format%2Ccompress&fit=crop&h=360&q=40&w=1200",
    heroAlt: "Traffic lights outside the Heritage Transport Museum",
    fromPrice: "₹500.00",
    about: [
      "The Heritage Transport Museum takes visitors on a journey through India's transport history from vintage cars to trains, planes, and maritime memorabilia.",
      "Heritage Transport Museum is located in Gurgaon (Haryana) and is easy to get to by car.",
    ],
  }),
  "mumbai-walking-tours-l233450": makeSimpleExperience({
    slug: "mumbai-walking-tours-l233450",
    cityName: "Mumbai",
    cityHref: "/en/mumbai-attractions-c70657/",
    venueName: "Mumbai Walking Tours",
    heroTitle: "Mumbai Walking Tours",
    heroDescription: "View landmark sites, see local markets, and learn about Mumbai's history",
    heroImage:
      "https://aws-tiqets-cdn.imgix.net/images/content/10c9ef4158934b7aa6b5eb1059095e25.jpeg?auto=format%2Ccompress&fit=crop&h=360&q=40&w=1200",
    heroAlt: "I love Mumbai sign by the waterfront",
    fromPrice: "₹4,758.46",
    about: [
      "View landmark sites, see local markets, and learn about Mumbai's history on a guided walking tour.",
    ],
  }),
  "mumbai-airport-transfers": makeSimpleExperience({
    slug: "mumbai-airport-transfers",
    cityName: "Mumbai",
    cityHref: "/en/mumbai-attractions-c70657/",
    venueName: "Mumbai Airport Transfers",
    heroTitle: "Mumbai Airport Transfers",
    heroDescription: "Ride in comfort and visit local attractions",
    heroImage:
      "https://aws-tiqets-cdn.imgix.net/images/content/a93d07d27f6f430c9b810208cfb4036d.jpeg?auto=format%2Ccompress&fit=crop&h=360&q=40&w=1200",
    heroAlt: "Mumbai airport transfer",
    fromPrice: "₹2,024.88",
    about: ["Ride in comfort from Mumbai airport and visit local attractions along the way."],
  }),
  "new-delhi-day-trips-l234385": makeSimpleExperience({
    slug: "new-delhi-day-trips-l234385",
    cityName: "New Delhi",
    cityHref: "/en/new-delhi-attractions-c69484/",
    venueName: "New Delhi Day Trips",
    heroTitle: "New Delhi Day Trips",
    heroDescription: "Explore India's capital city and visit the famous Taj Mahal in Agra",
    heroImage:
      "https://aws-tiqets-cdn.imgix.net/images/content/6327855cb32c402f9093a423c75be17f.jpeg?auto=format%2Ccompress&fit=crop&h=360&q=40&w=1200",
    heroAlt: "Visit to Taj Mahal during a day trip",
    fromPrice: "₹4,462.83",
    about: [
      "Explore India's capital city and visit the famous Taj Mahal in Agra on a full-day trip from New Delhi.",
    ],
  }),
  "jodhpur-walking-tours-l252320": makeSimpleExperience({
    slug: "jodhpur-walking-tours-l252320",
    cityName: "Jodhpur",
    cityHref: "/en/jodhpur-attractions-c70096/",
    venueName: "Jodhpur Walking Tours",
    heroTitle: "Jodhpur Walking Tours",
    heroDescription: "Visit Mehrangarh Fort and shop at the bustling local markets",
    heroImage:
      "https://aws-tiqets-cdn.imgix.net/images/content/93970988d26b4a979f8643c45fe8bd9e.jpeg?auto=format%2Ccompress&fit=crop&h=360&q=40&w=1200",
    heroAlt: "Jodhpur",
    fromPrice: "₹7,145.79",
    about: ["Visit Mehrangarh Fort and shop at the bustling local markets on a walking tour of Jodhpur."],
  }),
};

export function getExperience(slug: string): Experience | undefined {
  return EXPERIENCES[slug];
}

export function getAllExperienceSlugs(): string[] {
  return Object.keys(EXPERIENCES);
}
