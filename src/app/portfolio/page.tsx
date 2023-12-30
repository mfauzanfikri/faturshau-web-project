import { FaArrowRight } from "react-icons/fa";

const page = async () => {
  const getBlog = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/1?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  );

  const res = await getBlog.json();
  console.log(res);
  const blog = res.data;

  return (
    <div className="bg-white px-5 py-8">
      <section className="pt-3 lg:flex lg:justify-center lg:py-8 lg:pt-5">
        <h1 className="text-center text-4xl font-bold">Portfolio</h1>
      </section>

      <section className="mt-2">
        <div className="lg:mx-auto lg:flex lg:max-w-7xl">
          <div className="w-full overflow-hidden rounded-lg bg-[url('/images/fatur_shau.png')] lg:h-auto lg:w-1/2"></div>
          <div className="mt-2 lg:mt-0 lg:w-1/2 lg:px-3.5 lg:py-3.5">
            <p className="text-sm uppercase">{blog.category.category}</p>
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="mt-1.5 text-zinc-700">{blog.description}</p>
            <div className="mt-2.5 lg:mt-1.5">
              <a
                href={`${process.env.BASE_URL}/blog/${blog.id}`}
                className="flex items-center justify-center gap-1 text-sm font-semibold text-zinc-500 hover:cursor-pointer hover:text-zinc-600 lg:justify-end"
              >
                Continue Reading <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
