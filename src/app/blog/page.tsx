/**
 * A temp function to print blog post cards
 * @param i Number of blog post to be printed
 * @returns Blog post cards
 */
const printBlogPost = (i: number) => {
  let arr: React.JSX.Element[] = [];
  for (let index = 0; index < i; index++) {
    arr.push(
      <article>
        <h3>test {index + 1}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          quia necessitatibus incidunt consequuntur voluptatum sed sunt quis
          esse eius. Perspiciatis!
        </p>
        <a href="">Read More</a>
      </article>,
    );
  }

  return arr;
};

const page = () => {
  return (
    // section-1
    <section className="bg-zinc-200 px-4 py-12">
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
            className="w-full rounded border border-zinc-400 bg-transparent p-3 text-sm focus:border-zinc-600"
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
  );
};

export default page;
