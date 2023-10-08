import { redirect } from "next/navigation";
import moment from "moment";

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

  const date = moment(post.uploadedAt).calendar();

  return (
    <div className="flex justify-center bg-white">
      <article className="mb-4 mt-6 w-full max-w-7xl rounded p-5 lg:mt-8">
        <div>
          <p className="mb-2">{post?.title}</p>
          <h1 className="text-center text-2xl font-bold xl:text-4xl">
            {post?.title}
          </h1>
        </div>
        <div className="mt-1 text-sm text-zinc-600">
          <p>{date as string}</p>
        </div>
        <div className="mt-5">
          <div dangerouslySetInnerHTML={{ __html: post?.content! }}></div>
        </div>
      </article>
    </div>
  );
};
export default BlogPost;
