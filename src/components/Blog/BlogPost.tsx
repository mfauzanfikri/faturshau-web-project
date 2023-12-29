"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";
import { HiSearch } from "react-icons/hi";

let posts: { id: number }[] = [];

for (let index = 0; index < 10; index++) {
  posts.push({ id: index + 1 });
}

const BlogPost = () => {
  const [defaultBlogPosts, setDefaultBlogPosts] = useState([]);
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
    if (!resData) {
      return;
    }

    setDefaultBlogPosts(resData.data);
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

  const searchInputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);

    if (value === "") {
      setBlogPosts(defaultBlogPosts);
      return;
    }

    const filterdBlogPosts = defaultBlogPosts.filter(
      (val: {
        title: string;
        description: string;
        category: { category: string };
      }) => {
        if (
          val.title.toLowerCase().includes(value.toLowerCase()) ||
          val.category.category.toLowerCase().includes(value.toLowerCase()) ||
          val.description.toLowerCase().includes(value.toLowerCase())
        ) {
          return true;
        }

        return false;
      },
    );

    setBlogPosts(filterdBlogPosts);
  };

  return (
    <div className="flex flex-col items-center" ref={blogPostRef}>
      <div className="mb-8 flex items-center justify-center gap-1.5 rounded outline outline-[0.2px] outline-zinc-400 focus:outline-zinc-500">
        <HiSearch className="ps-1.5 text-2xl" color="gray" />
        <input
          className="h-5 w-40 px-2.5 py-4 focus:outline-none lg:w-48"
          type="text"
          placeholder="search blog"
          onChange={searchInputHandle}
        />
      </div>

      {isLoading ? (
        <ul className="w-full max-w-4xl">
          {loaders.map((loader) => {
            return loader;
          })}
        </ul>
      ) : blogPosts.length === 0 ? (
        <div className="flex w-full flex-1 items-center justify-center px-5 text-center">
          <div className="text-dark flex h-96 flex-col items-center justify-center gap-2 xl:h-[30rem]">
            {/* loading */}
            <div>
              <svg
                aria-hidden="true"
                className={`mb-2 h-auto w-16 animate-spin fill-blue-500 text-zinc-400 md:w-20 lg:w-24`}
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
            <h2 className="max-w-2xl text-4xl font-bold lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Action Speaks Louder <br className="hidden xl:block" /> Than
              Words!
            </h2>
            <p className="mt-4 max-w-md text-zinc-600 md:text-lg lg:mt-6 lg:max-w-xl lg:text-xl xl:text-2xl">
              Dear Homie…
            </p>
            <p className="mt-2 max-w-2xl text-zinc-600 md:text-lg lg:mt-3 lg:max-w-4xl lg:text-xl xl:text-2xl">
              Come back soon as Mr. White and I (now with a little help from
              Pinkman) cook the ins and outs of copywriting Ice Copy just for
              you.
            </p>
          </div>
        </div>
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
