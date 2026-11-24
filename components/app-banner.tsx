const BENEFITS = [
  "Access your tickets, even offline",
  "Find the best things to do nearby",
  "Hassle-free cancellations and rescheduling",
];

const APP_LINK =
  "https://www.tiqets.com/en/dynamic-links?deep_link_url=https://www.tiqets.com/app/discover&utm_campaign=Home+App+Banner&utm_source=tiqetscom&utm_medium=web&link_tag=app_block";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="mr-2 shrink-0 fill-[#1c1c1c]">
      <path d="M9.2 16.2 4.8 11.8l1.4-1.4 3 3 8.6-8.6 1.4 1.4-10 10Z" />
    </svg>
  );
}

export function AppBanner() {
  return (
    <section className="mx-auto mb-8 max-w-[1184px] overflow-hidden rounded-xl bg-indigo-100 px-4 text-[#1c1c1c] xl:mb-12 xl:flex xl:justify-between xl:px-12">
      <div className="relative z-10 mt-8 mb-6 xl:my-12 xl:self-center">
        <h2 className="mt-0 mb-4 text-2xl font-bold text-balance text-[#1c1c1c] xl:text-[2rem]">
          Make your trip easier with the Tiqets app
        </h2>
        <ul className="my-0 list-none space-y-2 pb-6 pl-0">
          {BENEFITS.map((benefit) => (
            <li key={benefit} className="flex items-center">
              <CheckIcon />
              {benefit}
            </li>
          ))}
        </ul>
        <div className="mb-4 flex max-xl:justify-center">
          <a href={`${APP_LINK}&utm_content=appstore_button`} target="_blank" rel="noopener noreferrer" className="mr-4">
            <img
              src="https://cdn.tiqets.com/static/assets/img/apps/app-store-badge@2x.png"
              alt="Download on the App Store"
              width={135}
              height={40}
            />
          </a>
          <a href={`${APP_LINK}&utm_content=playstore_button`} target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.tiqets.com/static/assets/img/apps/google-play-badge-320.png"
              alt="Get it on Google Play"
              width={135}
              height={40}
            />
          </a>
        </div>
        <div className="flex items-center max-xl:justify-center">
          <img src="https://cdn.tiqets.com/static/assets/icons/leaf.svg" width={16} height={32} alt="" className="mr-2" />
          <p className="my-0 text-center text-balance">
            Downloaded by over <b>5 million+ travellers</b>
          </p>
          <img
            src="https://cdn.tiqets.com/static/assets/icons/leaf.svg"
            width={16}
            height={32}
            alt=""
            className="ml-2 -scale-x-100"
          />
        </div>
      </div>

      <div className="relative shrink-0">
        <picture>
          <source media="(min-width: 900px)" srcSet="https://cdn.tiqets.com/static/assets/img/apps/swirl-l.svg" height={250} />
          <img
            src="https://cdn.tiqets.com/static/assets/img/apps/swirl-s.svg"
            alt=""
            width={204}
            height={100}
            className="absolute bottom-0 z-0 block min-w-fit"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="https://cdn.tiqets.com/static/assets/img/apps/app-screen-l.png"
            width={280}
            height={360}
          />
          <img
            src="https://cdn.tiqets.com/static/assets/img/apps/app-screen-s.png"
            alt=""
            width={180}
            height={230}
            className="relative z-10 mx-auto block h-auto max-w-full xl:mt-8"
          />
        </picture>
      </div>
    </section>
  );
}
