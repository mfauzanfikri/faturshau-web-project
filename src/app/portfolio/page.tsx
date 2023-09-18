const page = () => {
  return (
    <>
      <section className="mt-8 lg:mt-8 lg:flex lg:justify-center lg:py-8">
        <h1 className="text-center text-4xl font-bold">Portfolio</h1>
      </section>
      <section className="flex flex-col items-center py-8 lg:mt-8 lg:flex-row lg:justify-center lg:gap-10 lg:px-5">
        <div className="max-w-md border-b border-zinc-400 pb-4 lg:overflow-hidden lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
          <img className="mb-5" src="/images/fatur_shau.png" alt="" />
          <div className="mb-3 px-8 ">
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Blog Title</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
            <a href="https://coppywriting.com/" className="mt-2">
              <button className="text-light rounded-sm bg-black px-5 py-2.5 font-semibold hover:opacity-95">
                Read Now
              </button>
            </a>
          </div>
        </div>

        <div className="max-w-md border-b border-zinc-400 pb-4 lg:-translate-y-10 lg:overflow-hidden lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
          <img className="mb-5" src="/images/fatur_shau.png" alt="" />
          <div className="mb-3 px-8 ">
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Blog Title</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
            <a href="https://coppywriting.com/" className="mt-2">
              <button className="text-light rounded-sm bg-black px-5 py-2.5 font-semibold hover:opacity-95">
                Read Now
              </button>
            </a>
          </div>
        </div>

        <div className="max-w-md border-b border-zinc-400 pb-4 lg:overflow-hidden lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
          <img className="mb-5" src="/images/fatur_shau.png" alt="" />
          <div className="mb-3 px-8 ">
            <h4 className="mb-4 text-xl font-bold text-zinc-600">Blog Title</h4>
            <p className="mb-4 text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
            <a href="https://coppywriting.com/" className="mt-2">
              <button className="text-light rounded-sm bg-black px-5 py-2.5 font-semibold hover:opacity-95">
                Read Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
