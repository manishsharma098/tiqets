const PARTNERS = [
  {
    name: "Musée d'Orsay",
    href: "/en/musee-dorsay-tickets-l141867/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_mo.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=d8760ee50ae9e45bd4f3dd5ff848a276",
  },
  {
    name: "Louvre Museum",
    href: "/en/louvre-museum-tickets-l124297/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_louvre.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=8c94ca7f4560d35ff43f8a0b5a51e4e3",
  },
  {
    name: "Universal Orlando Resort",
    href: "/en/universal-orlando-resort-tickets-l145012/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_universal.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=239d0331effc34b2b1d368d44d0dc188",
  },
  {
    name: "Tower of London",
    href: "/en/tower-of-london-tickets-l124320/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_royalpalaces.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=0d954e03692bd5cbc060f8cd2368c76d",
  },
  {
    name: "Van Gogh Museum",
    href: "/en/van-gogh-museum-tickets-l144593/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_vangogh.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=3885f58f7f563449aa1dfaca67f01a33",
  },
  {
    name: "Ngong Ping Cable Car",
    href: "/en/ngong-ping-cable-car-tickets-l146843/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_np360.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=2836eb0b55d7d92f23df796fff3c12ac",
  },
  {
    name: "Singapore Zoo",
    href: "/en/singapore-zoo-tickets-l147599/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_singapore-zoo.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=7fead56578b06e77e4c4ad5f49e5beb2",
  },
  {
    name: "Casa Batlló",
    href: "/en/casa-batllo-tickets-l141895/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_casabatllo.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=ca3bdf186316fcd9eb6172f85b48b6b8",
  },
  {
    name: "The Metropolitan Museum of Art",
    href: "/en/the-metropolitan-museum-of-art-tickets-l145523/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_met.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=5f5d22eb9fd4843999808103cae56c13",
  },
  {
    name: "Heineken Experience",
    href: "/en/heineken-experience-tickets-l126561/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_heineken.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=1284d98706e1a4a0affd0cbb6669b94d",
  },
  {
    name: "SEA LIFE Sydney Aquarium",
    href: "/en/sea-life-sydney-aquarium-tickets-l147771/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_sealifesydney.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=c3818e5e075646721bd6b1c1ec9f809b",
  },
  {
    name: "Old Melbourne Gaol",
    href: "/en/old-melbourne-gaol-tickets-l150298/",
    src: "https://aws-tiqets-cdn.imgix.net/images/trusted-partners/logo_nationaltrust.png?auto=format%2Ccompress&fit=crop&h=100&q=70&w=125&s=9fd6a6729a3b4419ce8448fa9d954021",
  },
] as const;

const LOOP = [...PARTNERS, ...PARTNERS];

export function TrustedPartners() {
  return (
    <section className="mx-auto mb-8 max-w-[1184px] px-4 text-[#1c1c1c] sm:px-6">
      <h2 className="mt-0 mb-1 text-2xl font-medium">
        We are a proud partner of the world’s most-loved venues
      </h2>
      <p className="mt-0 mb-4 text-base text-[#3c3c3c]">
        With more than 3,000 partners worldwide, Tiqets has a ticket for everyone. Not a fan of
        museums? We’ve got rollercoasters, too. Hate heights? Explore ancient ruins instead. With
        Tiqets, you choose your way to culture.
      </p>

      <div className="overflow-x-hidden">
        <ul
          className="trusted-partners-track my-0 flex w-max list-none items-center pl-0"
          aria-label="Trusted partners"
        >
          {LOOP.map((partner, index) => (
            <li key={`${partner.name}-${index}`} className="mx-2 shrink-0">
              <a href={partner.href} className="block">
                <img
                  src={partner.src}
                  alt={partner.name}
                  width={125}
                  height={100}
                  className="block bg-[#e8f4f4]"
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
