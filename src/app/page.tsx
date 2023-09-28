import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import SignUpButton from "@/components/Home/SignUpButton";
import Image from "next/image";
import Bob from "@/components/Home/Bob";

export const metadata: Metadata = {
  metadataBase: new URL("https://faturshau.com"),
  title: "Fatur Shau - Home",
  description:
    "Hey. I’m Fatur Shau. I’m the Storystylist Copywriter and comedian.",
  openGraph: {
    title: "",
    description: "",
    url: "https://faturshau.com",
    siteName: "",
    // images: "",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "",
    description: "",
    siteId: "",
    creator: "",
    creatorId: "",
    // images: "",
  },
};

export default function HomePage() {
  return (
    <>
      {/* section-1 hero */}
      <Hero />

      {/* section-2 divider 1 */}
      <section className="text-light bg-zinc-800 py-8 text-center">
        <p className="font-tenor uppercase tracking-[0.3em] xl:mb-1 xl:text-lg">
          HALL OF FAME
        </p>
        <h2 className="mb-1 text-4xl font-bold xl:mb-2">Best of Blog</h2>
        <p className="xl:text-lg">Best post on Copywriting • Comedy • Style</p>
      </section>

      {/* section-3 services cards */}
      <section className="flex flex-col gap-9 px-5 pb-8 pt-3 text-slate-600 lg:pb-16 lg:pt-8">
        {/* coming soon */}
        <div className="flex w-full flex-1 items-center justify-center px-3 text-center">
          <div className="text-dark flex h-96 flex-col items-center justify-center gap-2 xl:h-[30rem]">
            {/* loading */}
            <svg
              aria-hidden="true"
              className={`mb-2 h-auto w-16 animate-spin fill-blue-500 text-zinc-400 md:w-20 lg:w-24`}
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <h2 className="max-w-2xl text-4xl font-bold lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight">
              I’m cooking with <br className="hidden xl:block" /> Mr. White
              right now!
            </h2>
            <p className="mt-4 text-zinc-600 md:text-lg lg:mt-6 lg:text-xl xl:text-2xl">
              We’ll come back with the purest Ice Copy you’ve ever tasted.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col gap-14 md:flex-row md:flex-wrap md:justify-center lg:gap-32">
          <div className="md:w-[45%] lg:w-[22%]">
            <div className="group hover:cursor-pointer">
              <div className="aspect-square w-full bg-zinc-700"></div>
              <h3 className="mb-2 mt-4 text-lg font-semibold group-hover:opacity-90">
                Service 1
              </h3>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              inventore.
            </p>
          </div>
          <div className="md:w-[45%] lg:w-[22%]">
            <div className="group hover:cursor-pointer">
              <div className="aspect-square w-full bg-zinc-700"></div>
              <h3 className="mb-2 mt-4 text-lg font-semibold group-hover:opacity-90">
                Service 1
              </h3>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              inventore.
            </p>
          </div>
          <div className="md:w-[45%] lg:w-[22%]">
            <div className="group hover:cursor-pointer">
              <div className="aspect-square w-full bg-zinc-700"></div>
              <h3 className="mb-2 mt-4 text-lg font-semibold group-hover:opacity-90">
                Service 1
              </h3>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              inventore.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <a href="/blog" className="group">
            <button
              disabled={true}
              className="text-light rounded border border-white bg-zinc-800 px-2 py-1.5 font-semibold disabled:text-zinc-400 group-hover:opacity-95 disabled:group-hover:opacity-100"
            >
              See More
            </button>
          </a>
        </div> */}
      </section>

      {/* section-4 divider */}
      <section className="text-light bg-zinc-800 py-8 text-center">
        <p className="font-tenor uppercase tracking-[0.3em] xl:mb-1 xl:text-lg">
          story
        </p>
        <h2 className="mb-1 text-4xl font-bold xl:mb-2">Who is Fatur Shau?</h2>
        <p className="xl:text-lg">Direct-response copywriter and comedian.</p>
      </section>

      {/* section-5 author */}
      <section className="mx-auto my-12 flex max-w-xl flex-col items-center justify-center px-5 lg:max-w-7xl lg:flex-row lg:flex-wrap">
        {/* image */}
        <div className="relative w-full self-stretch lg:flex lg:w-[35%] lg:items-center lg:justify-center">
          <Image
            src="/images/fatur_shau.png"
            width={500}
            height={500}
            alt="Fatur Shau"
            className="-z-10 mx-auto w-56 rounded-full lg:w-56 xl:w-72"
          />
          <div className="absolute right-[7%] top-1/2 hidden h-[95%] w-[0.1rem] -translate-y-1/2 bg-black lg:block"></div>
        </div>
        {/* contents */}
        <div className="mt-4 py-2 lg:mt-0 lg:w-[65%] lg:justify-start lg:self-stretch">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Hey. I’m Shau. Fatur Shau.
          </h2>

          <p className="font-semibold lg:text-lg">
            I’m the Storystylist Copywriter and aspiring comedian.
          </p>

          <p className="mt-4 lg:text-lg">
            I’m Indonesia’s funniest copywriter in 3 years!
          </p>

          <p className="mt-4 lg:text-lg">
            OR{" "}
            <span className="font-semibold underline">
              you’ll never know about me.
            </span>{" "}
            I’ll make everything about &quot;thestorystylist&quot; nonexistent.
            Just like the bird on X.
          </p>

          <p className="mt-4 text-sm lg:text-base">
            (How does the bird sound? “Chirp! Chirp! Chirp? Tweeeeeettt?
            Exactly! Nothing.)
          </p>

          <p className="mt-4 lg:text-lg">Out of seriousness...</p>

          <p className="mt-4 lg:text-lg">
            I’m a Founder of Coppywriting and Co-Founder of a local café.
          </p>

          <p className="mt-4 lg:text-lg">
            In other words: I help businesses sell more with the power of word &
            style.
          </p>

          <p className="mt-4 lg:text-lg">Don’t believe me?</p>

          <p className="mt-4 lg:text-lg">Try it yourself!</p>

          <p className="mt-4 font-semibold lg:text-lg">
            I’m available for work. Contact me here:{" "}
            <a
              href="mailto:shau@coppywriting.com"
              className="text-blue-600 underline visited:text-blue-700 hover:text-blue-500"
            >
              shau@coppywriting.com
            </a>
          </p>
        </div>
      </section>

      {/* section-6 divider */}
      <section className="text-light bg-zinc-800 px-1.5 py-8 text-center">
        <p className="font-tenor uppercase tracking-[0.3em] xl:mb-1 xl:text-lg">
          3 ways i can help you
        </p>
        <h2 className="text-4xl font-bold">
          Hire me. <span className="hidden md:inline"> </span>
          <br className="md:hidden" />
          Join my list. <span className="hidden md:inline"> </span>
          <br className="md:hidden" /> Coppywriting
        </h2>
      </section>

      {/* section-7 offers cards */}
      <section className="flex flex-col gap-12 px-8 py-12 md:flex-row md:flex-wrap md:justify-center md:gap-16 lg:gap-14">
        {/* child-1 */}
        <div className="flex flex-col items-center gap-2 text-center md:w-[45%] lg:w-[30%]">
          <div className="relative mb-4">
            <div className="absolute left-[70%] top-0 h-[0.16rem] w-6 -translate-x-1/2 bg-zinc-600"></div>
            <p className="pt-1.5 text-2xl font-bold italic">1</p>
          </div>
          <h3 className="text-2xl font-bold">Work with me</h3>
          <p>
            Tired of spending on copywriters who knows nothing about your
            business <span className="font-semibold underline">context?</span>
          </p>
          <p>
            Don’t even understand the{" "}
            <span className="font-semibold underline">
              fundamentals of copywriting?
            </span>
          </p>
          <p className="text-lg font-semibold">I’m available for work. </p>
          <a href="mailto:shau@coppywriting.com" className="mt-2">
            <button className="text-light rounded-sm bg-black px-5 py-2.5 font-semibold hover:opacity-95">
              Contact
            </button>
          </a>
        </div>
        {/* child-2 */}
        <div className="flex flex-col items-center gap-2 text-center md:w-[45%] lg:w-[30%]">
          <div className="relative mb-4">
            <div className="absolute left-[70%] top-0 h-[0.16rem] w-6 -translate-x-1/2 bg-zinc-600"></div>
            <p className="pt-1.5 text-2xl font-bold italic">2</p>
          </div>
          <h3 className="text-2xl font-bold">Join my email list</h3>
          <p>
            My email is not for everyone. And it’s neither free
            entertainment/infotainment. It’s email marketing. Meaning? I email
            and sell <span className="font-semibold underline">A LOT!</span>
          </p>
          <p>
            If you’ll just report me as spam on day 2 instead of UNSUBSCRIBE to
            me...{" "}
            <span className="font-semibold uppercase underline">don’t</span>{" "}
            click the button.
          </p>
          <p>
            If you cool about it and{" "}
            <span className="font-semibold underline">GUARANTEED</span> to have
            a daily laugh in the copywriting business? Then:
          </p>
          <SignUpButton />
        </div>
        {/* child-3 */}
        <div className="flex flex-col items-center gap-2 text-center md:w-[45%] lg:w-[30%]">
          <div className="relative mb-4">
            <div className="absolute left-[70%] top-0 h-[0.16rem] w-6 -translate-x-1/2 bg-zinc-600"></div>
            <p className="pt-1.5 text-2xl font-bold italic">3</p>
          </div>
          <h3 className="text-2xl font-bold">Coppywriting</h3>
          <p>
            You’ll learn{" "}
            <span className="font-semibold underline">
              everything I know about copywriting
            </span>{" "}
            (the right way). I spent THOUSANDS of dollars and hours of sleepless
            nights for this. And{" "}
            <span className="font-semibold underline">
              you’ll get it for FREE.
            </span>
          </p>
          <a href="https://coppywriting.com/" className="mt-2">
            <button className="text-light rounded-sm bg-black px-5 py-2.5 font-semibold hover:opacity-95">
              Coming Soon!
            </button>
          </a>
        </div>
      </section>

      {/* section-8 divider */}
      <section className="text-light bg-zinc-800 py-8 text-center">
        <p className="font-tenor uppercase tracking-[0.3em] xl:mb-1 xl:text-lg">
          writing
        </p>
        <h2 className="mb-1 text-4xl font-bold xl:mb-2">Read The Archives</h2>
        <p className="xl:text-lg">Dives down on Copywriting • Comedy • Style</p>
      </section>

      {/* section-9 cards  */}
      {/* mb-10 flex flex-col items-center justify-center gap-8 bg-zinc-50 px-2.5 py-12 md:flex-row md:flex-wrap */}
      <Bob />
    </>
  );
}
