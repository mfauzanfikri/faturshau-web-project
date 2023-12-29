import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import SignUpButton from "@/components/Home/SignUpButton";
import Image from "next/image";
import Bob from "@/components/Home/Bob";
import Archives from "@/components/Home/Archives";

export const metadata: Metadata = {
  metadataBase: new URL("https://faturshau.com"),
  title: "Fatur Shau - Home",
  description:
    "Hey. I&apos;m Fatur Shau. I&apos;m the Storystylist Copywriter and comedian.",
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
      <Bob />

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
            Hey. I&apos;m Shau. Fatur Shau.
          </h2>

          <p className="font-semibold lg:text-lg">
            I&apos;m the Storystylist Copywriter and aspiring comedian.
          </p>

          <p className="mt-4 lg:text-lg">
            I&apos;m Indonesia&apos;s funniest copywriter in 3 years!
          </p>

          <p className="mt-4 lg:text-lg">
            OR{" "}
            <span className="font-semibold underline">
              you&apos;ll never know about me.
            </span>{" "}
            I&apos;ll make everything about &quot;thestorystylist&quot;
            nonexistent. Just like the bird on X.
          </p>

          <p className="mt-4 text-sm lg:text-base">
            (How does the bird sound? “Chirp! Chirp! Chirp? Tweeeeeettt?
            Exactly! Nothing.)
          </p>

          <p className="mt-4 lg:text-lg">In all seriousness...</p>

          <p className="mt-4 lg:text-lg">
            I&apos;m a Founder of Coppywriting and Co-Founder of a local café.
          </p>

          <p className="mt-4 lg:text-lg">
            In other words: I help businesses sell more with the power of word &
            style.
          </p>

          <p className="mt-4 lg:text-lg">Don&apos;t believe me?</p>

          <p className="mt-4 lg:text-lg">Try it yourself!</p>

          <p className="mt-4 font-semibold lg:text-lg">
            I&apos;m available for work. Contact me here:{" "}
            <a
              href="mailto:shau@faturshau.com"
              className="text-blue-600 underline visited:text-blue-700 hover:text-blue-500"
            >
              shau@faturshau.com
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
            Don&apos;t even understand the{" "}
            <span className="font-semibold underline">
              fundamentals of copywriting?
            </span>
          </p>
          <p className="text-lg font-semibold">I&apos;m available for work. </p>
          <a href="mailto:shau@faturshau.com" className="mt-2">
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
            My email is not for everyone. And it&apos;s neither free
            entertainment/infotainment. It&apos;s email marketing. Meaning? I
            email and sell{" "}
            <span className="font-semibold underline">A LOT!</span>
          </p>
          <p>
            If you&apos;ll just report me as spam on day 2 instead of
            UNSUBSCRIBE to me...{" "}
            <span className="font-semibold uppercase underline">
              don&apos;t
            </span>{" "}
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
            You&apos;ll learn{" "}
            <span className="font-semibold underline">
              everything I know about copywriting
            </span>{" "}
            (the right way). I spent THOUSANDS of dollars and hours of sleepless
            nights for this. And{" "}
            <span className="font-semibold underline">
              you&apos;ll get it for FREE.
            </span>
          </p>
          <a href="https://coppywriting.com/" className="mt-2">
            <button className="text-light rounded-sm bg-black px-5 py-2.5 font-semibold hover:opacity-95">
              Learn more!
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
      <Archives />
    </>
  );
}
