"use client";

import { useState, useRef, useEffect } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";

let posts: { id: number }[] = [];

for (let index = 0; index < 10; index++) {
  posts.push({ id: index + 1 });
}

const BlogPost = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const blogPostRef = useRef<HTMLDivElement>(null);
  const postsPerPage = 10;
  const totalPosts = blogPosts.length;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const fetchBlogs = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL +
        "/blogs?api_key=" +
        process.env.NEXT_PUBLIC_API_KEY,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const resData = await res.json();
    setBlogPosts(resData.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // if (blogPostRef && blogPostRef.current) {
    //   window.scrollTo({
    //     behavior: "smooth",
    //     top:
    //       blogPostRef.current.getBoundingClientRect().top -
    //       document.body.getBoundingClientRect().top -
    //       150,
    //   });
    // }
  };

  let loaders = [];
  for (let i = 0; i < 5; i++) {
    loaders.push(
      <li
        key={i}
        className="group animate-pulse border-b border-zinc-400 hover:bg-zinc-100 focus:bg-zinc-100"
      >
        <article className="px-2.5 py-5">
          <div className="mb-2 text-zinc-700">
            <div className="mb-1 text-xs text-zinc-500">
              <div className=" h-2.5 w-8 rounded-xl bg-zinc-300"></div>
            </div>
            <h4 className="mb-2 text-xl font-bold">
              <div className=" h-3 w-1/3 rounded-xl bg-zinc-300"></div>
            </h4>
            <div className="text-[0.6rem]">
              <div className=" h-2.5 w-8 rounded-xl bg-zinc-300"></div>
            </div>
            <div className="mt-1.5 text-sm lg:text-base">
              <div className=" h-20 w-full rounded-xl bg-zinc-300"></div>
            </div>
          </div>
        </article>
      </li>,
    );
  }

  return (
    <div className="flex flex-col items-center" ref={blogPostRef}>
      {isLoading ? (
        <ul className="w-full max-w-4xl">
          {loaders.map((loader) => {
            return loader;
          })}
        </ul>
      ) : (
        <>
          <Posts posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default BlogPost;
