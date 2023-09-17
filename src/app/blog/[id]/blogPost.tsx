"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

const BlogPost = ({ blogId }: { blogId: string }) => {
  const router = useRouter();

  const [post, setPost] = useState<Blog | null>(null);
  //   const [date, setDate] = useState<string|Date|null>(null)

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
      },
    );

    const resData = await res.json();
    // console.log(resData);
    if (!resData.data) {
      router.push("/blogs");
    }
    setPost(resData.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="flex justify-center">
      <article className="mx-5 mb-2 mt-6 w-full max-w-7xl rounded bg-white p-5 shadow-lg lg:mt-8">
        <div className="rounded p-3 outline outline-[0.1rem] outline-zinc-200">
          <div>
            <h1 className="text-center text-2xl font-bold">{post?.title}</h1>
          </div>
          <hr className="mt-4 h-px border-0 bg-gray-200 dark:bg-zinc-300"></hr>
          <div className="mt-1 flex flex-wrap gap-1 text-sm text-zinc-600">
            <p>{post?.category.category}</p>
            <p>・</p>
            <p>{moment(post?.uploadedAt).calendar()}</p>
            <p>・</p>
            <p>by Faturshau</p>
          </div>
          <div className="mt-2.5">
            <div dangerouslySetInnerHTML={{ __html: post?.content! }}></div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default BlogPost;
