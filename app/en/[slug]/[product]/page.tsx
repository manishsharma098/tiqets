import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getAllProductParams, getProduct } from "@/data/products";

type Props = {
  params: Promise<{ slug: string; product: string }>;
};

export function generateStaticParams() {
  return getAllProductParams().map(({ city, product }) => ({
    slug: city,
    product,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug, product: productSlug } = await params;
  const product = getProduct(slug, productSlug);
  if (!product) return { title: "Tiqets" };
  return {
    title: `${product.title} | Tiqets`,
    description: product.subtitle,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug, product: productSlug } = await params;
  const product = getProduct(slug, productSlug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
