import BlogPost from "@/components/Blog/BlogPost";
import Hero from "@/components/Blog/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://faturshau.com"),
  title: "Fatur Shau - Blog",
  description:
    "Hey. I’m Fatur Shau. I’m the Storystylist Copywriter and comedian.",
  openGraph: {
    title: "",
    description: "",
    url: "https://faturshau.com",
    siteName: "",
    // images: "",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "",
    description: "",
    siteId: "",
    creator: "",
    creatorId: "",
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
