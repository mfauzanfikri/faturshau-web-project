import BlogPost from "@/components/Blog/BlogPost";

const page = () => {
  return (
    <>
      {/* section-1 */}
      <section className="text-light bg-neutral-700 px-4 py-10">
        <div>
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h1>
          <p className="mb-2 mt-1 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            exercitationem aut autem, illum suscipit esse?
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4">
          <div>
            <input
              className="w-full rounded border border-zinc-400 p-3 text-sm focus:border-zinc-600"
              type="email"
              placeholder=">>> Your Best Email"
            />
          </div>
          <div>
            <button className="text-light w-full rounded border border-zinc-400 bg-zinc-800 py-1.5 font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section className="flex flex-col gap-6 bg-zinc-50 px-4 py-12 align-middle">
        <div>
          <h2 className="text-center text-2xl font-medium">
            Lorem ipsum dolor sit.
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <BlogPost />
        </div>
      </section>
    </>
  );
};

export default page;
