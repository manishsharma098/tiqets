export function HelpBanner() {
  return (
    <div className="mx-auto w-full max-w-[1184px] px-4 pt-4 pb-8 sm:px-6">
      <div className="rounded-xl bg-indigo-100 px-0 pt-8 text-[#1c1c1c] sm:px-8">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center">
          <div className="relative mx-auto my-0 h-[183px] w-[294px] max-w-[90%] shrink-0 overflow-hidden sm:mx-1">
            <img
              src="https://cdn.tiqets.com/static/assets/webpack/v-cs-girl.svg"
              alt=""
              className="absolute top-1/2 left-1/2 h-[200%] w-[200%] max-w-none -translate-x-1/2 -translate-y-1/2"
              loading="lazy"
            />
          </div>
          <div className="px-8">
            <h2 className="mt-0 mb-4 text-2xl font-medium xl:text-[2rem]">Need some help?</h2>
            <p className="mt-0 mb-4">
              Visit our Help Center for quick answers or chat with our support team – we&apos;re here
              24 hours a day
            </p>
            <a
              href="https://support.tiqets.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 mr-2 inline-flex items-center justify-center rounded-lg bg-[#1c1c1c] px-3 py-2 text-base font-medium text-white no-underline hover:bg-[#2a2a2a]"
            >
              Get support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
