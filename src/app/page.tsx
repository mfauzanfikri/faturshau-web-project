import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* section-1 hero */}
      <section className="flex flex-col gap-4 bg-black px-5 pb-12 pt-8 text-white">
        <div>
          <h1 className="text-3xl font-bold capitalize">
            killer copy <br /> comedic flair <br /> own your style
          </h1>
          <p className="mb-2.5 mt-3 max-w-xs font-semibold">
            Join the <b>1% stylish copywriters</b>. IF my DAILY emails don’t
            give you a single{" "}
            <b>
              “<u>Haha Moment</u>“
            </b>{" "}
            … Call me a fraud* and unsubscribe.
          </p>
          <p className="font-semibold italic">Always join for free below.</p>
        </div>
        <div className="flex flex-col gap-1">
          <input
            className="border border-transparent border-b-slate-400 bg-black p-3 text-sm focus:outline-none"
            type="email"
            placeholder=">>> Your Best Email"
          />
          <button className="mt-4 rounded border border-white bg-zinc-800 py-1.5 font-bold text-white">
            Subscribe
          </button>
        </div>
        <div className="pt-10">
          <p className="text-[8px]">
            *NO <u>PLEASE DON’T</u>! <br /> Just unsubscribe and go away in
            peace.
          </p>
        </div>
      </section>

      {/* section-2 */}
      <section className="bg-zinc-800 py-8 text-center text-white">
        <p className="uppercase tracking-[0.3em]">freebies</p>
        <h2 className="pb-1 text-4xl font-bold">Best of Blog</h2>
        <p>Best post on copywriting and mindset</p>
      </section>

      {/* section-3 */}
      <section className="flex flex-col gap-14 px-5 pb-5 pt-3">
        <div>
          <div className="aspect-square w-full bg-zinc-700"></div>
          <h3 className="mb-2 mt-4 text-lg font-semibold">Service 1</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            inventore.
          </p>
        </div>
        <div>
          <div className="aspect-square w-full bg-zinc-700"></div>
          <h3 className="mb-2 mt-4 text-lg font-semibold">Service 1</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            inventore.
          </p>
        </div>
        <div>
          <div className="aspect-square w-full bg-zinc-700"></div>
          <h3 className="mb-2 mt-4 text-lg font-semibold">Service 1</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            inventore.
          </p>
        </div>
      </section>

      {/* section-4 */}
      <section className="bg-zinc-800 py-8 text-center text-white">
        <p className="uppercase tracking-[0.3em]">story</p>
        <h2 className="pb-1 text-4xl font-bold">Who is Fatur Shau?</h2>
        <p>Direct-response copywriter and mindset diver.</p>
      </section>

      {/* section-5 */}
      <section className="mb-12 mt-6">
        <div className="flex flex-col items-center">
          <div className="aspect-square w-72">
            <Image
              src="/images/fatur_shau.png"
              width={500}
              height={500}
              alt="Fatur Shau"
              className="mx-auto w-full rounded-full"
            />
          </div>
          <p className="mt-4 font-semibold">Hey. I’m Shau. Fatur Shau.</p>
        </div>
      </section>

      {/* section-6 */}
      <section className="bg-zinc-800 px-1.5 py-8 text-center text-white">
        <h2 className="pb-1 text-3xl font-bold capitalize">
          3 ways i can help you
        </h2>
      </section>

      {/* section-7 */}
      <section className="flex flex-col gap-12 px-8 py-20">
        {/* child-1 */}
        <div className="flex flex-col items-center gap-2 text-center">
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
        <div className="flex flex-col items-center gap-2 text-center">
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
        <div className="flex flex-col items-center gap-2 text-center">
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

      {/* section-8 */}
      <section className="bg-zinc-800 py-8 text-center text-white">
        <p className="uppercase tracking-[0.3em]">writing</p>
        <h2 className="pb-1 text-4xl font-bold">Read The Archives</h2>
        <p>Dives down on copywriting & comedy.</p>
      </section>
    </>
  );
}
