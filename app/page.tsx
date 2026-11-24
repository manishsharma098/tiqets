import { AppBanner } from "@/components/app-banner";
import { BenefitCards } from "@/components/benefit-cards";
import { BestPlaces, INDIA_CITIES, PopularThings, StillInterested } from "@/components/best-places";
import { HomeHero } from "@/components/home-hero";
import { HelpBanner } from "@/components/help-banner";
import { PopularPlaces } from "@/components/popular-places";
import { TrustedPartners } from "@/components/trusted-partners";
import { WORLDWIDE_CITIES } from "@/data/worldwide-places";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <HomeHero />
      <BenefitCards />
      <BestPlaces title="Best places to visit in India" cities={INDIA_CITIES} />
      <BestPlaces title="Best places to visit worldwide" cities={WORLDWIDE_CITIES} />
      <StillInterested />
      <PopularThings />
      <AppBanner />
      <TrustedPartners />
      <PopularPlaces />
      <HelpBanner />
    </main>
  );
}
