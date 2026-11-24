import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/experience-detail";
import { getAllExperienceSlugs, getExperience } from "@/data/experiences";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return { title: "Tiqets" };
  return {
    title: `${experience.heroTitle} | Tiqets`,
    description: experience.heroDescription,
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();
  return <ExperienceDetail experience={experience} />;
}
