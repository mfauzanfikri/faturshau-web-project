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
    <div className="mx-auto my-5 px-[5vw] lg:px-[8vw]">
      {/* page header */}
      <header className="flex h-72 flex-col items-center justify-center bg-slate-100 p-10 text-center text-slate-700">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consequuntur exercitationem vero ducimus eaque.
          </p>
        </div>
      </header>

      {/* section-1 blog posts */}
      <section className="mt-14">{printBlogPost(4)}</section>
    </div>
  );
};

export default page;
