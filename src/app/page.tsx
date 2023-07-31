import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* section-1 hero */}
      <Hero />

      {/* section-2 divider 1 */}
      <section className="text-light bg-zinc-800 py-8 text-center">
        <p className="uppercase tracking-[0.3em]">freebies</p>
        <h2 className="mb-1 text-4xl font-bold">Best of Blog</h2>
        <p>Best post on Copywriting • Comedy • Style</p>
      </section>

      {/* section-3 services cards */}
      <section className="flex flex-col gap-8 px-5 pb-8 pt-3 text-slate-600 lg:pb-16 lg:pt-8">
        {/* coming soon */}
        <div className="flex w-full flex-1 items-center justify-center text-center">
          <div className="text-dark flex h-96 flex-col items-center justify-center gap-2">
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
            <h2 className="max-w-2xl text-xl font-bold md:text-2xl lg:text-5xl lg:leading-tight xl:text-6xl">
              I’m cooking with <br className="hidden xl:block" /> Mr. White
              right now!
            </h2>
            <p className="text-sm text-zinc-600 md:text-lg lg:text-xl 2xl:text-2xl">
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
        <p className="uppercase tracking-[0.3em]">story</p>
        <h2 className="pb-1 text-4xl font-bold">Who is Fatur Shau?</h2>
        <p>Direct-response copywriter and aspiring comedian.</p>
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
              className="-z-10 mx-auto w-full rounded-full md:w-1/2"
            />
            <div className="absolute right-12 top-1/2 hidden h-1/2 w-[0.1rem] -translate-y-1/2 bg-black md:block"></div>
          </div>
          <div className="md:w-1/2 md:justify-start md:self-stretch">
            <p className="mt-4 font-semibold md:text-lg lg:text-xl">
              Hey. I’m Shau. Fatur Shau.
            </p>
          </div>
        </div>
      </section>

      {/* section-6 divider */}
      <section className="text-light bg-zinc-800 px-1.5 py-8 text-center">
        <p className="uppercase tracking-[0.3em]">3 ways i can help you</p>
        <h2 className="mt-2 pb-1 text-4xl font-bold">
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
      <section className="text-light bg-zinc-800 py-8 text-center">
        <p className="uppercase tracking-[0.3em]">writing</p>
        <h2 className="pb-1 text-4xl font-bold">Read The Archives</h2>
        <p>Dives down on copywriting & comedy.</p>
      </section>

      {/* section-9 cards  */}
      {/* mb-10 flex flex-col items-center justify-center gap-8 bg-zinc-50 px-2.5 py-12 md:flex-row md:flex-wrap */}
      <section className="mb-10 flex items-center justify-center gap-8 bg-white px-2.5 py-12">
        {/* coming soon */}
        <div className="flex w-full flex-1 items-center justify-center text-center">
          <div className="text-dark flex h-96 flex-col items-center justify-center gap-2">
            {/* loading */}
            <svg
              aria-hidden="true"
              className={`mb-2 h-16 w-16 animate-spin fill-blue-500 text-zinc-400`}
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
            <h2 className="text-xl font-bold md:text-2xl lg:text-5xl lg:leading-tight xl:text-6xl">
              Action Speaks Louder <br className="hidden xl:block" /> Than
              Words!
            </h2>
            <p className="max-w-md text-sm text-zinc-600 md:text-lg lg:max-w-xl lg:text-xl 2xl:text-2xl">
              Dear Homie… <br />
              Come back soon as Mr. White and I (now with a little help from
              Pinkman) cook the ins and outs of copywriting Ice Copy just for
              you.
            </p>
          </div>
        </div>
        {/* <div className="max-w-md border-b border-zinc-400 py-4 lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
          <div className="mb-3 px-8 ">
            <p className="mb-1 text-xs text-zinc-500">Category</p>
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Blog Title</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
          </div>
        </div>

        <div className="max-w-md border-b border-zinc-400 py-4 lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
          <div className="mb-3 px-8 ">
            <p className="mb-1 text-xs text-zinc-500">Category</p>
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Blog Title</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
          </div>
        </div>

        <div className="max-w-md border-b border-zinc-400 py-4 lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
          <div className="mb-3 px-8 ">
            <p className="mb-1 text-xs text-zinc-500">Category</p>
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Blog Title</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
          </div>
        </div> */}
      </section>
    </>
  );
}
