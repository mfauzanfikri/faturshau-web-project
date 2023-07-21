export default function Page() {
  return (
    <>
      {/* hero */}
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
    </>
  );
}
