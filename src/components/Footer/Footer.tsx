const Footer = () => {
  return (
    <footer className="mt-auto">
      {/* subscribe card container */}
      <div className="hidden w-full items-center justify-center py-20 lg:flex">
        {/* subscribe card content  */}
        <div className="flex w-4/5 max-w-2xl flex-col gap-2 rounded border border-slate-300 bg-gray-50 px-8 py-20 text-center shadow-md shadow-slate-600">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-xl text-slate-500">Train with the best</h2>
            <h2 className="text-4xl font-bold">Stay Tuned</h2>
            <p className="text-base text-slate-400">
              Subscribe to our newsletter to hear the latest news
            </p>
          </div>
          {/* subscribe input */}
          <div className="mt-2 flex items-center justify-center gap-1.5">
            <input
              type="email"
              placeholder="Email"
              className="w-3/4 min-w-[5rem] max-w-[18rem] rounded-md border border-slate-400 px-2 py-1 text-base"
            />
            <button className="w-auto min-w-min rounded-md bg-black px-2.5 py-1.5 text-base text-white hover:bg-opacity-80">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="my-2 flex justify-center">
        <a
          href="https://twitter.com/thestorystylist"
          target="_blank"
          className="flex aspect-square items-center rounded-full bg-black p-3 hover:cursor-pointer hover:bg-opacity-95 md:p-4"
        >
          <svg
            className="w-6 fill-white md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 248 204"
          >
            <path d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z" />
          </svg>
        </a>
      </div>

      {/* mobile subsribe form */}
      <div className="mb-8 flex flex-col gap-1.5 px-8 py-2 lg:hidden">
        <div className="py-2 text-center">
          <h2 className="mb-1.5 text-xl font-bold">
            1 online growth tip in less than 4 minutes.
          </h2>
          <p className="mb-1 text-base">
            Every Saturday morning, you&apos;ll get 1 actionable tip to help
            launch, grow, and monetize your internet business.
          </p>
          <p>Join 115k subscribers below.</p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="rounded border border-transparent border-b-slate-400 p-3 text-sm focus:border-slate-400 focus:outline-0"
            type="email"
            placeholder=">>> Your Best Email"
          />
          <button className="rounded bg-black py-1.5 text-white">
            Subscribe
          </button>
        </div>
      </div>

      {/* bottom footer */}
      <div className="flex justify-center bg-black py-1.5 text-center text-sm text-white md:py-3 md:text-base">
        <p>&#169; 2023 The Storystylist | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
