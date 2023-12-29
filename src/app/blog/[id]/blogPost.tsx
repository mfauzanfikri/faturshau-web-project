import { redirect } from "next/navigation";
import moment from "moment";
import { HiTag } from "react-icons/hi";

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

const BlogPost = async ({ blogId }: { blogId: string }) => {
  const fetchBlog = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        "/blogs/" +
        blogId +
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

    if (!resData.success || !resData.data.status) {
      redirect("/blog");
    }

    return resData.data;
  };

  const post = await fetchBlog();
  const blogTagsLength = post.BlogTags.length;
  const date = moment(post.uploadedAt).calendar();

  return (
    <div className="flex justify-center bg-white">
      <article className="mb-4 mt-6 w-full max-w-7xl rounded p-5 lg:mt-8">
        <div>
          <h1 className="text-center text-3xl font-bold xl:text-4xl">
            {post?.title}
          </h1>
        </div>
        <div className="mt-8 font-cardo text-sm italic text-zinc-600">
          <p>{date as string}</p>
        </div>
        <div className="my-24">
          <div dangerouslySetInnerHTML={{ __html: post?.content! }}></div>
        </div>

        <div className="font-cardo font-semibold">
          <div>
            <p className="mt-8">Category: {post?.category.category}</p>
          </div>
          <div className="flex gap-2">
            <p className="flex items-center">
              <HiTag /> Tags:
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
        </div>
      </article>
    </div>
  );
};
export default BlogPost;
