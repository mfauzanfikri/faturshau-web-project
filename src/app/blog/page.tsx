import BlogPost from "@/components/Blog/BlogPost";
import Hero from "@/components/Blog/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://faturshau.com"),
  title: "Blog | Fatur Shau",
  description: "Blog to help you learn the copywriting fundamentals",
  openGraph: {
    title: "",
    description: "Blog to help you learn the copywriting fundamentals",
    url: "https://faturshau.com/blog",
    siteName: "Fatur Shau",
    // images: "",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog | Fatur Shau",
    description: "Blog to help you learn the copywriting fundamentals",
    siteId: "1576028678462394368",
    creator: "thestorystylist",
    creatorId: "1576028678462394368",
    // images: "",
  },
};

const page = () => {
  return (
    <>
      {/* section-1 */}
      <Hero />

      {/* section-2 */}
      <section className="flex flex-col gap-6 bg-zinc-50 px-4 py-12 align-middle md:px-10">
        <div>
          <h2 className="text-center text-2xl font-medium lg:text-3xl">
            Blog Posts
          </h2>
        </div>

        <BlogPost />
      </section>
    </>
  );
};

export default page;
