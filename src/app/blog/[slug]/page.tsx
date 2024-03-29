import { notFound, redirect } from "next/navigation";
import BlogPost from "./BlogPost";
import { Metadata, ResolvingMetadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://faturshau.com"),
//   title: "Blog | Fatur Shau",
//   description:
//     "Hey. I’m Fatur Shau. I’m the Storystylist Copywriter and comedian.",
//   openGraph: {
//     title: "",
//     description: "",
//     url: "https://faturshau.com",
//     siteName: "Fatur Shau",
//     // images: "",
//     locale: "id_ID",
//     type: "website",
//   },
//   twitter: {
//     card: "summary",
//     title: "",
//     description: "",
//     siteId: "",
//     creator: "",
//     creatorId: "",
//     // images: "",
//   },
// };

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;

  const blog = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      "/blogs/slug/" +
      slug +
      "?api_key=" +
      process.env.NEXT_PUBLIC_API_KEY,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      next: { revalidate: 10 },
    },
  )
    .then((res) => res.json())
    .catch(() => {
      redirect("/blog");
    });

  return {
    title: blog.data?.title || "",
    description: blog.data?.description || "",
    openGraph: {
      title: blog.data?.title || "",
      description: blog.data?.description || "",
      url: `${process.env.BASE_URL}/blog/${
        blog.data?.title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("%", "%25") || ""
      }`,
      siteName: "Fatur Shau",
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: blog.data?.title || "",
      description: blog.data?.description || "",
      siteId: "1576028678462394368",
      creator: "thestorystylist",
      creatorId: "1576028678462394368",
      // images: "",
    },
  };
}

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <BlogPost slug={params.slug} />
    </>
  );
};

export default page;
