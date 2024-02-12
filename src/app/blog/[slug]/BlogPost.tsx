import { notFound, redirect } from "next/navigation";
import moment from "moment";
import {
  HiCalendar,
  HiChevronLeft,
  HiChevronRight,
  HiFolder,
  HiTag,
} from "react-icons/hi";
import { Metadata, ResolvingMetadata } from "next";

type Blog = {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  content: string;
  thumbnail: string;
  uploadedAt?: Date;
  status?: boolean;
  category: { category: string };
  BlogTags: { id: number; tagId: number; tag: { id: number; tag: string } }[];
};

const fetchBlogBySlug = async (slug: string) => {
  const res = await fetch(
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
  );

  const resData = await res.json();

  if (!resData.success || !resData.data) {
    redirect("/blog");
  }

  return resData.data;
};

const fetchBlogById = async (id: number) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      "/blogs/" +
      id +
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
  );

  const resData = await res.json();

  if (!resData.success || !resData.data) {
    return null;
  }

  return resData.data;
};

const BlogPost = async ({ slug }: { slug: string }) => {
  const post = await fetchBlogBySlug(slug);
  const prevPost = await fetchBlogById(post.id - 1);
  const nextPost = await fetchBlogById(post.id + 1);
  const blogTagsLength = post.BlogTags.length;
  const date = moment(post.uploadedAt).calendar();

  return (
    <div className="flex justify-center bg-white">
      <article className="mb-4 mt-6 w-full max-w-2xl rounded p-5 lg:mt-8">
        <div>
          <h1 className="text-center text-3xl font-bold xl:text-4xl">
            {post?.title}
          </h1>
        </div>
        <div className="mb-24 mt-16">
          <div dangerouslySetInnerHTML={{ __html: post?.content! }}></div>
        </div>

        <div className="font-cardo font-semibold">
          <div className="mt-8">
            <p className="flex items-center gap-2">
              <HiCalendar /> {date as string}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <HiFolder /> {post?.category.category}
            </p>
          </div>
          <div className="mb-4 flex gap-2">
            <p className="flex items-center">
              <HiTag />
            </p>
            <div className="flex flex-wrap gap-2">
              {post?.BlogTags?.map((tag: any, index: number) => {
                return (
                  <div
                    key={tag.id}
                    className="flex items-center justify-center"
                  >
                    {tag.tag.tag}
                    {index === blogTagsLength - 1 ? "" : ", "}
                  </div>
                );
              })}
            </div>
          </div>
          {prevPost && (
            <div className="w-max">
              <a
                href={`/blog/${prevPost.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("%", "%25")}`}
                className="flex flex-wrap items-center gap-2 hover:opacity-80"
              >
                <HiChevronLeft /> {prevPost.title}
              </a>
            </div>
          )}
          {nextPost && (
            <div className="w-max">
              <a
                href={`/blog/${nextPost.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("%", "%25")}`}
                className="flex flex-wrap items-center gap-2 hover:opacity-80"
              >
                <HiChevronRight /> {nextPost.title}
              </a>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};
export default BlogPost;
