import BlogPost from "@/components/Blog/BlogPost";

/**
 * A temp function to print blog post cards
 * @param i Number of blog post to be printed
 * @returns Blog post cards
 */
const printBlogPost = (i: number) => {
  let arr: React.JSX.Element[] = [];
  for (let index = 0; index < i; index++) {
    arr.push(
      <a href="" className="hover:bg-zinc-100 focus:bg-zinc-100">
        <article className="border-b border-zinc-400 py-5 lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
          <div className="mb-2 px-8 ">
            <p className="mb-1 text-xs text-zinc-500">Category</p>
            <h4 className="mb-2.5 text-xl font-bold text-zinc-600">
              Test {i + 1}
            </h4>
            <p className="text-sm text-zinc-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem eius praesentium ullam atque ducimus dolores quas
              tenetur maiores itaque. Quos.
            </p>
          </div>
        </article>
      </a>,
    );
  }

  return arr;
};

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
