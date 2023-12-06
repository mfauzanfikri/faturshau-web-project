import Image from "next/image";

const page = () => {
  return (
    <section className="bg-white py-8 lg:py-12 2xl:pb-24 2xl:pt-16">
      <h1 className="my-2 text-center text-2xl font-bold lg:text-3xl 2xl:text-4xl">
        About Me
      </h1>
      <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center px-5 lg:max-w-7xl lg:flex-row lg:flex-wrap">
        {/* image */}
        <div className="relative w-full self-stretch lg:flex lg:w-[35%] lg:items-center lg:justify-center">
          <Image
            src="/images/fatur_shau.png"
            width={500}
            height={500}
            alt="Fatur Shau"
            className="mx-auto w-56 rounded-full lg:w-56 xl:w-72"
          />
          <div className="absolute right-[7%] top-1/2 hidden h-[95%] w-[0.1rem] -translate-y-1/2 bg-black lg:block"></div>
        </div>
        {/* contents */}
        <div className="mt-4 py-2 lg:mt-0 lg:w-[65%] lg:justify-start lg:self-stretch">
          <h2 className="text-xl font-bold lg:text-2xl">
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
      </div>
    </section>
  );
};

export default page;
