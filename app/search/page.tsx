export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = Array.isArray(params.q) ? params.q[0] : params.q;

  return (
    <main className="flex-1 bg-white px-4 py-10 text-[#1c1c1c] sm:px-6">
      <div className="mx-auto max-w-[1184px]">
        <h1 className="text-3xl font-medium">
          {query ? `Results for “${query}”` : "Search"}
        </h1>
        <p className="mt-3 text-[#6b6b6b]">
          {query
            ? "Experiences for this search will show up here."
            : "Search destinations and experiences from the homepage."}
        </p>
      </div>
    </main>
  );
}
