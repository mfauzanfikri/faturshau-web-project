import BlogPost from "@/components/Blog/BlogPost";
import Hero from "@/components/Blog/Hero";

const page = () => {
  return (
    <>
      {/* section-1 */}
      <Hero />

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
