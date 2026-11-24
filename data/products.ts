export type Product = {
  slug: string;
  citySlug: string;
  title: string;
  subtitle: string;
  price: string;
  images: { url: string; alt: string }[];
  breadcrumbs: { name: string; href?: string }[];
  details: { label: string; value: string }[];
  included: string[];
  excluded: string[];
  meetingPoint: { name: string; address: string; mapsUrl: string };
  description: string[];
  instructions: string[];
  cancellation: string[];
  important?: string[];
  venueHref: string;
  moreWays: {
    title: string;
    description: string;
    price: string;
    href: string;
    image: string;
    alt: string;
  }[];
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
};

const RELATED = [
  {
    title: "Alcatraz",
    city: "San Francisco",
    description: "Learn about the history of a former offshore prison and its inmates",
    price: "₹4,449.48",
    rating: "4.3 (166)",
    href: "/en/alcatraz-tickets-l147792/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/144c8a3949564317aa3bba2a24b0f4a7.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Lighthouse on a cliff",
    discount: "up to -10%",
  },
  {
    title: "California Academy of Sciences",
    city: "San Francisco",
    description: "Combine marine life, planets, tropical biomes and natural history",
    price: "₹2,412.65",
    rating: "4.7 (671)",
    href: "/en/california-academy-of-sciences-tickets-l145965/",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/975ee1e82acb4fefb99b3fe54d325e12.jpg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Aquarium tank",
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
];

const VENUE = "/en/agra-city-tours-tickets-l233183/";
const CITY = "agra-attractions-c186";

const MORE_WAYS = [
  {
    title: "Agra: Private Taj Mahal and Agra Fort Sunrise Tour from Delhi",
    description: "Witness the magnificence of some iconic attractions in the city",
    price: "₹23,000.00",
    href: `/en/${CITY}/tickets-for-agra-private-taj-mahal-and-agra-fort-sunrise-tour-from-delhi-p1085502/`,
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/79af9d9101bf478d966d39102842917b.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Morning view of Baby Taj",
  },
  {
    title: "Agra: Guided Tour + Roundtrip Transfer",
    description: "Explore Agra's top attractions and learn about their historical significance",
    price: "₹5,000.00",
    href: `/en/${CITY}/tickets-for-agra-guided-tour-roundtrip-transfer-p1102408/`,
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/a56749b8b423464a946d51d7768c7e64.jpeg?auto=format%2Ccompress&fit=crop&h=192&q=40&w=384",
    alt: "Same Day Agra Tour",
  },
];

function crumbs(title: string) {
  return [
    { name: "India", href: "/en/india-attractions-z50104/" },
    { name: "Agra", href: "/en/agra-attractions-c186/" },
    { name: "Agra Walking Tours", href: VENUE },
    { name: title },
  ];
}

export const PRODUCTS: Record<string, Product> = {
  "tickets-for-agra-guided-sunrise-tour-from-delhi-p1103753": {
    slug: "tickets-for-agra-guided-sunrise-tour-from-delhi-p1103753",
    citySlug: CITY,
    title: "Agra: Guided Sunrise Tour from Delhi",
    subtitle: "Witness the sunrise and learn historical insights",
    price: "₹10,833.09",
    images: [
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/338e9e72160848029837c02ff9b95bbc.jpeg?auto=format%2Ccompress&fit=crop&h=420&q=40&w=747",
        alt: "Taj Mahal",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/7193e7167d734cf381d6b066402b20f8.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Agra Fort",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/ef4631139eb04d8897615d4c627ea301.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Tomb of Akbar",
      },
    ],
    breadcrumbs: crumbs("Agra: Guided Sunrise Tour from Delhi"),
    details: [
      { label: "Start time", value: "08:30" },
      { label: "Duration", value: "12h" },
      { label: "Audio guide", value: "English, Hindi" },
      { label: "Live guide", value: "English, Hindi" },
      { label: "Max group size", value: "5" },
    ],
    included: ["Live guide", "Hotel pickup and drop-off", "Water"],
    excluded: ["Food and drinks", "Entrance fees", "Tips"],
    meetingPoint: {
      name: "Starting point",
      address: "Agra Airport, 282008, Agra",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Agra%20Airport%20282008%20Agra",
    },
    description: [
      "Take a full-day guided tour of Agra after being picked up from your hotel or the airport in Delhi, Gurgaon, or Noida. Travel comfortably in an air-conditioned vehicle.",
      "Start your city tour of Agra early in the morning to see the sunrise at the Taj Mahal. As the sunlight reflects off the white marble, observe the beauty of this architectural masterpiece.",
      "Listen as your guide shares historical details about the Taj Mahal, its construction, and the story of the Mughal emperor Shah Jahan and his wife, Mumtaz Mahal.",
    ],
    instructions: ["Show your smartphone ticket to the guide at the meeting point"],
    cancellation: [
      "Cancel for free until 24 hours before your visit date and get a full refund",
      "Rescheduling is possible until 24 hours before your visit date",
    ],
    venueHref: VENUE,
    moreWays: MORE_WAYS,
    related: RELATED,
  },
  "tickets-for-agra-private-taj-mahal-and-agra-fort-sunrise-tour-from-delhi-p1085502": {
    slug: "tickets-for-agra-private-taj-mahal-and-agra-fort-sunrise-tour-from-delhi-p1085502",
    citySlug: CITY,
    title: "Agra: Private Taj Mahal and Agra Fort Sunrise Tour from Delhi",
    subtitle: "Witness the magnificence of some iconic attractions in the city",
    price: "₹23,000.00",
    images: [
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/79af9d9101bf478d966d39102842917b.jpeg?auto=format%2Ccompress&fit=crop&h=420&q=40&w=747",
        alt: "Morning view of Baby Taj",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/cb957a53a7354d07b3b04f135ae43dc7.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Sunrise view of Taj Mahal",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/7972293e08f448bfa538ddf92db2f399.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Agra Fort",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/9ae32e182ac64e078be232965c136621.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Agra Fort",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/162dbbc8d873475f804dda02c44b545f.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Baby Taj",
      },
    ],
    breadcrumbs: crumbs("Agra: Private Taj Mahal and Agra Fort Sunrise Tour from Delhi"),
    details: [
      { label: "Live guide", value: "English and 5 other languages" },
      { label: "Max group size", value: "10" },
      { label: "Pickup and drop-off", value: "Choose your pickup and drop-off location" },
    ],
    included: [
      "Pickup and drop-off assistance",
      "All transfers and sightseeing by air-conditioned private vehicle",
      "Live licensed tour guide",
      "Entrance fee to the Agra Fort (if you choose this option)",
      "Entrance fee to the Itimad-ud-daulah (Baby Taj) (if you choose this option)",
      "Entrance fee to the Taj Mahal (if you choose this option)",
      "Buffet breakfast at a famous restaurant (if the all-inclusive option is booked)",
      "Live demonstration of marble craftsmanships",
    ],
    excluded: ["Food and beverages", "Gratuities (recommended)"],
    meetingPoint: {
      name: "Starting point",
      address: "Delhi hotel pickup",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Delhi",
    },
    description: [
      "Witness the magnificence of iconic attractions in Agra on a private sunrise tour from Delhi.",
    ],
    instructions: ["Show your smartphone ticket to the guide at the meeting point"],
    cancellation: ["Cancel for free until 24 hours before your visit date and get a full refund"],
    important: [
      "Carry a valid ID",
      "Taj Mahal is closed on Fridays",
      "Pickup time will be shared after booking",
    ],
    venueHref: VENUE,
    moreWays: MORE_WAYS.filter((m) => !m.href.includes("p1085502")),
    related: RELATED,
  },
  "tickets-for-agra-guided-tour-roundtrip-transfer-p1102408": {
    slug: "tickets-for-agra-guided-tour-roundtrip-transfer-p1102408",
    citySlug: CITY,
    title: "Agra: Guided Tour + Roundtrip Transfer",
    subtitle: "Explore Agra's top attractions and learn about their historical significance",
    price: "₹5,000.00",
    images: [
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/a56749b8b423464a946d51d7768c7e64.jpeg?auto=format%2Ccompress&fit=crop&h=420&q=40&w=747",
        alt: "Same Day Agra Tour",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/c68d80b352674db49c8c755dff4253fe.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Same Day Agra Tour",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/8816e1e6da9947c58d70f8096cc89472.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Same Day Agra Tour",
      },
    ],
    breadcrumbs: crumbs("Agra: Guided Tour + Roundtrip Transfer"),
    details: [
      { label: "Duration", value: "12h 30mins" },
      { label: "Live guide", value: "English, Chinese, German, Hindi, Japanese" },
      { label: "Max group size", value: "15" },
    ],
    included: ["Monument tickets (with chosen option)", "Live guide", "Roundtrip transportation"],
    excluded: ["Alcoholic beverages", "Tips or gratuities"],
    meetingPoint: {
      name: "Starting point",
      address: "Agra, India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Agra",
    },
    description: [
      "Explore Agra's top attractions and learn about their historical significance on a guided day tour with roundtrip transfer.",
    ],
    instructions: ["Show your smartphone ticket to the guide at the meeting point"],
    cancellation: ["Free cancellation up to 24 hours in advance"],
    venueHref: VENUE,
    moreWays: MORE_WAYS,
    related: RELATED,
  },
  "tickets-for-agra-guided-day-tour-roundtrip-transfer-p1103599": {
    slug: "tickets-for-agra-guided-day-tour-roundtrip-transfer-p1103599",
    citySlug: CITY,
    title: "Agra: Guided Day Tour + Roundtrip Transfer",
    subtitle: "Visit the Taj Mahal and explore the historic Agra Fort",
    price: "₹10,124.39",
    images: [
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/7cf88d9935f047f0bfd7fd2dfe8c072f.jpeg?auto=format%2Ccompress&fit=crop&h=420&q=40&w=747",
        alt: "Taj Mahal",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/de0b2d6879c143ecbaa657481aa71080.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Agra Fort",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/fdafe937b5164f8d98b6a6e3bee0e9ae.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Tomb of Akbar",
      },
    ],
    breadcrumbs: crumbs("Agra: Guided Day Tour + Roundtrip Transfer"),
    details: [
      { label: "Duration", value: "12h" },
      { label: "Live guide", value: "English, Hindi" },
      { label: "Audio guide", value: "English, Hindi" },
      { label: "Max group size", value: "5" },
    ],
    included: ["Hotel pickup and drop-off", "Live guide", "Water"],
    excluded: ["Tips", "Food and drinks"],
    meetingPoint: {
      name: "Starting point",
      address: "Agra, India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Agra",
    },
    description: ["Visit the Taj Mahal and explore the historic Agra Fort on a guided day tour."],
    instructions: ["Show your smartphone ticket to the guide at the meeting point"],
    cancellation: ["Free cancellation up to 24 hours in advance"],
    venueHref: VENUE,
    moreWays: MORE_WAYS,
    related: RELATED,
  },
  "tickets-for-agra-guided-day-tour-from-delhi-p1103600": {
    slug: "tickets-for-agra-guided-day-tour-from-delhi-p1103600",
    citySlug: CITY,
    title: "Agra: Guided Day Tour from Delhi",
    subtitle: "Visit the Taj Mahal and the Agra Fort, and learn about their history",
    price: "₹10,124.39",
    images: [
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/50d145bbef5d4798aa1b4d05a33a38dd.jpeg?auto=format%2Ccompress&fit=crop&h=420&q=40&w=747",
        alt: "Taj Mahal",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/f189c2676b864b478d046a88f039cc39.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Agra Fort",
      },
      {
        url: "https://aws-tiqets-cdn.imgix.net/images/content/e2aa338933684cbf86e401b4e3bedce2.jpeg?auto=format%2Ccompress&fit=crop&h=206&q=40&w=445",
        alt: "Tomb of Akbar",
      },
    ],
    breadcrumbs: crumbs("Agra: Guided Day Tour from Delhi"),
    details: [
      { label: "Start time", value: "08:00" },
      { label: "Duration", value: "9h" },
      { label: "Live guide", value: "English, Hindi" },
      { label: "Max group size", value: "5" },
    ],
    included: ["Hotel pickup and drop-off", "Live guide", "Water", "Umbrella"],
    excluded: ["Tips", "Food and drinks", "Camera fees"],
    meetingPoint: {
      name: "Starting point",
      address: "Delhi hotel pickup",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Delhi",
    },
    description: [
      "Visit the Taj Mahal and the Agra Fort, and learn about their history on a guided day tour from Delhi.",
    ],
    instructions: ["Show your smartphone ticket to the guide at the meeting point"],
    cancellation: ["Free cancellation up to 24 hours in advance"],
    venueHref: VENUE,
    moreWays: MORE_WAYS,
    related: RELATED,
  },
};

export function getProduct(citySlug: string, productSlug: string): Product | undefined {
  const product = PRODUCTS[productSlug];
  if (!product || product.citySlug !== citySlug) return undefined;
  return product;
}

export function getAllProductParams() {
  return Object.values(PRODUCTS).map((p) => ({
    city: p.citySlug,
    product: p.slug,
  }));
}
