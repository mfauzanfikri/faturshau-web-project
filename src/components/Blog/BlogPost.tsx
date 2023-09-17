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
    console.log(resData);
    setBlogPosts(resData.data);
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

  return (
    <div className="flex flex-col items-center" ref={blogPostRef}>
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BlogPost;
