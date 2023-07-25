import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* section-1 hero */}
      {/* //TODO make xxl screen adjustment */}
      <section className="bg-black px-5 pb-12 pt-8 text-white md:flex md:gap-4 lg:px-12 lg:pb-28 xl:px-20 xl:pb-52 xl:pt-24 2xl:pb-80">
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold capitalize md:text-5xl xl:text-6xl xl:leading-tight">
              killer copy <br /> comedic flair <br /> own your style
            </h1>
            <p className="mb-2.5 mt-3 max-w-xs font-semibold md:max-w-sm md:text-xl lg:mb-5 lg:mt-8 lg:max-w-2xl">
              Join the <b>1% stylish copywriters</b>. IF my DAILY emails don’t
              give you a single{" "}
              <b>
                “<u>Haha Moment</u>“
              </b>{" "}
              … Call me a fraud* and unsubscribe.
            </p>
            <p className="font-semibold italic md:text-xl">
              Always join for free below.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:max-w-md lg:max-w-xl lg:flex-row">
            <input
              className="border border-transparent border-b-slate-400 bg-black p-3 text-sm focus:outline-none md:text-lg lg:w-3/5"
              type="email"
              placeholder=">>> Your Best Email"
            />
            <button className="mt-4 rounded border border-white bg-zinc-800 py-1.5 font-bold text-white md:text-lg lg:mt-0 lg:px-8">
              Subscribe
            </button>
          </div>
          <div className="pt-10">
            <p className="text-[8px] lg:text-sm">
              *NO <u>PLEASE DON’T</u>! <br className="md:hidden" /> Just
              unsubscribe and go away in peace.
            </p>
          </div>
        </div>
        {/* hero image */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <Image
            src="/images/fatur_shau.png"
            width={500}
            height={500}
            alt="Fatur Shau"
            className="mx-auto w-64 rounded-full lg:w-72 xl:w-80"
          />
        </div>
      </section>

      {/* section-2 divider 1 */}
      <section className="bg-zinc-800 py-8 text-center text-white">
        <p className="uppercase tracking-[0.3em]">freebies</p>
        <h2 className="mb-1 text-4xl font-bold">Best of Blog</h2>
        <p>Best post on copywriting and mindset</p>
      </section>

      {/* section-3 services cards */}
      <section className="flex flex-col gap-14 px-5 pb-5 pt-3 text-slate-600 md:flex-row md:flex-wrap md:justify-center lg:gap-32 lg:pb-24 lg:pt-8">
        <div className="md:w-[45%] lg:w-[22%]">
          {/* //TODO make img(div) and heading clickable */}
          <div className="aspect-square w-full bg-zinc-700"></div>
          <h3 className="mb-2 mt-4 text-lg font-semibold">Service 1</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            inventore.
          </p>
        </div>

        <div className="md:w-[45%] lg:w-[22%]">
          <div className="aspect-square w-full bg-zinc-700"></div>
          <h3 className="mb-2 mt-4 text-lg font-semibold">Service 1</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            inventore.
          </p>
        </div>

        <div className="md:w-[45%] lg:w-[22%]">
          <div className="aspect-square w-full bg-zinc-700"></div>
          <h3 className="mb-2 mt-4 text-lg font-semibold">Service 1</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            inventore.
          </p>
        </div>

        {/* //TODO make button that links to /blog */}
      </section>

      {/* section-4 divider */}
      <section className="bg-zinc-800 py-8 text-center text-white">
        <p className="uppercase tracking-[0.3em]">story</p>
        <h2 className="pb-1 text-4xl font-bold">Who is Fatur Shau?</h2>
        <p>Direct-response copywriter and mindset diver.</p>
      </section>

      {/* section-5 author */}
      <section className="mb-12 mt-6 px-5">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap">
          <div className="relative aspect-square w-64 md:flex md:w-1/2 md:items-center md:justify-center">
            <Image
              src="/images/fatur_shau.png"
              width={500}
              height={500}
              alt="Fatur Shau"
              className="mx-auto w-full rounded-full md:w-1/2"
            />
            {/* //TODO buat garis setinggi gambar tarok di tengah agak ngiri */}
            <div className="absolute right-6 top-1/2 hidden h-1/2 w-1 -translate-y-1/2 bg-black md:block"></div>
          </div>
          <div className="md:w-1/2 md:justify-start md:self-stretch">
            <p className="mt-4 font-semibold md:text-lg lg:text-xl">
              Hey. I’m Shau. Fatur Shau.
            </p>
          </div>
        </div>
      </section>

      {/* section-6 divider */}
      <section className="bg-zinc-800 px-1.5 py-8 text-center text-white">
        <p className="uppercase tracking-[0.3em]">3 ways i can help you</p>
        <h2 className="mt-2 pb-1 text-4xl font-bold">
          Hire me. <span className="hidden md:inline"> </span>
          <br className="md:hidden" />
          Join my list. <span className="hidden md:inline"> </span>
          <br className="md:hidden" /> Coppywriting
        </h2>
      </section>

      {/* section-7 offers cards */}
      <section className="flex flex-col gap-12 px-8 py-20 md:flex-row md:flex-wrap md:justify-center md:gap-16 lg:gap-14">
        {/* child-1 */}
        <div className="flex flex-col items-center gap-2 text-center md:w-[45%] lg:w-[30%]">
          <div className="aspect-square w-24 rounded-full bg-zinc-700"></div>
          <h3 className="text-2xl font-semibold">Work with me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad
            perferendis libero odit totam obcaecati!
          </p>
          <p className="mt-2">
            <span className="border-b-2 border-b-gray-500 font-semibold italic">
              Read More
            </span>
          </p>
        </div>
        {/* child-2 */}
        <div className="flex flex-col items-center gap-2 text-center md:w-[45%] lg:w-[30%]">
          <div className="aspect-square w-24 rounded-full bg-zinc-700"></div>
          <h3 className="text-2xl font-semibold">Join my email list</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad
            perferendis libero odit totam obcaecati!
          </p>
          <p className="mt-2">
            <span className="border-b-2 border-b-gray-500 font-semibold italic">
              Read More
            </span>
          </p>
        </div>
        {/* child-3 */}
        <div className="flex flex-col items-center gap-2 text-center md:w-[45%] lg:w-[30%]">
          <div className="aspect-square w-24 rounded-full bg-zinc-700"></div>
          <h3 className="text-2xl font-semibold">Coppywriting</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad
            perferendis libero odit totam obcaecati!
          </p>
          <p className="mt-2">
            <span className="border-b-2 border-b-gray-500 font-semibold italic">
              Read More
            </span>
          </p>
        </div>
      </section>

      {/* section-8 divider */}
      <section className="bg-zinc-800 py-8 text-center text-white">
        <p className="uppercase tracking-[0.3em]">writing</p>
        <h2 className="pb-1 text-4xl font-bold">Read The Archives</h2>
        <p>Dives down on copywriting & comedy.</p>
      </section>

      {/* section-9 cards  */}
      <section className="mb-10 mt-20 flex flex-col items-center justify-center gap-8 p-2.5 md:flex-row md:flex-wrap">
        {/* child-1 */}
        <div className="max-w-md rounded border border-solid border-zinc-200 bg-white py-4 shadow-lg">
          <div className="mb-3 px-8 ">
            {/* //TODO make small category text */}
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Test 1</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
            {/* //TODO delete this */}
            <a href="#">Read More »</a>
          </div>
          {/* //TODO delete this */}
          <div className="border-t px-8 pt-3 text-xs text-zinc-400">
            <time>June 17, 2023</time>
            <span className="mx-1 font-bold">•</span>
            <span>No Comments</span>
          </div>
        </div>
        {/* child-2 */}
        <div className="max-w-md border border-solid border-zinc-200 bg-white py-4 shadow-lg">
          <div className="mb-3 px-8 ">
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Test 1</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
            <a href="#">Read More »</a>
          </div>
          <div className="border-t px-8 pt-3 text-xs text-zinc-400">
            <time>June 17, 2023</time>
            <span className="mx-1 font-bold">•</span>
            <span>No Comments</span>
          </div>
        </div>
        {/* child-3 */}
        <div className="max-w-md border border-solid border-zinc-200 bg-white py-4 shadow-lg">
          <div className="mb-3 px-8 ">
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Test 1</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
            <a href="#">Read More »</a>
          </div>
          <div className="border-t px-8 pt-3 text-xs text-zinc-400">
            <time>June 17, 2023</time>
            <span className="mx-1 font-bold">•</span>
            <span>No Comments</span>
          </div>
        </div>
      </section>
    </>
  );
}
