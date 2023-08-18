import BlogPost from "@/components/Blog/BlogPost";

const page = () => {
  return (
    <>
      {/* section-1 */}
      <section className="text-light bg-neutral-700 px-4 py-10 md:px-10 md:py-16 xl:py-24">
        <div className="mx-auto md:flex lg:max-w-7xl">
          <div className="md:w-[55%] md:p-6">
            <div>
              <h1 className="text-3xl font-bold lg:text-4xl xl:text-6xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="mb-2 mt-1 text-xl lg:text-2xl xl:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="lg:text-lg xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                exercitationem aut autem, illum suscipit esse?
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div>
                <input
                  className="w-full rounded border border-zinc-400 p-3 text-sm focus:border-zinc-600 xl:text-lg"
                  type="email"
                  placeholder=">>> Your Best Email"
                />
              </div>
              <div>
                <button className="text-light w-full rounded border border-zinc-400 bg-zinc-800 py-1.5 font-bold lg:py-2 lg:text-lg xl:py-3 xl:text-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-[45%] md:p-6">
            <div className="h-24 w-24 bg-black"></div>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="flex flex-col gap-6 bg-zinc-50 px-4 py-12 align-middle md:px-10">
        <div>
          <h2 className="text-center text-2xl font-medium lg:text-3xl">
            Lorem ipsum dolor sit.
          </h2>
        </div>

        <BlogPost />
      </section>
    </>
  );
};

export default page;
