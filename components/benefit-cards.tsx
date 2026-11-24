const BENEFITS = [
  {
    title: "Stay flexible",
    body: "Flexible cancellation options on all venues",
    icon: "https://cdn.tiqets.com/static/assets/webpack/v-refund.svg",
  },
  {
    title: "Book with confidence",
    body: "Easy booking and skip-the-line entry on your phone",
    icon: "https://cdn.tiqets.com/static/assets/webpack/v-trust.svg",
  },
  {
    title: "Enjoy culture your way",
    body: "The best experiences at museums and attractions worldwide",
    icon: "https://cdn.tiqets.com/static/assets/webpack/v-exhibition.svg",
  },
] as const;

export function BenefitCards() {
  return (
    <section className="overflow-x-auto pb-4">
      <ul className="mx-auto my-0 flex max-w-[1184px] list-none gap-3 px-4 py-0 sm:px-6">
        {BENEFITS.map((benefit) => (
          <li key={benefit.title} className="w-[86vw] max-w-80 shrink-0 md:w-auto md:max-w-none md:flex-1">
            <div className="flex h-full items-start rounded-xl bg-[#f2f2f2] p-4 text-sm text-[#3c3c3c]">
              <div className="relative mr-3 h-10 w-10 shrink-0">
                <img
                  src={benefit.icon}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  className="absolute top-0 left-0 h-full w-full"
                />
              </div>
              <div className="flex min-h-10 flex-1 flex-col justify-center">
                <h2 className="mb-1 text-base font-medium">{benefit.title}</h2>
                <p className="my-0">{benefit.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
