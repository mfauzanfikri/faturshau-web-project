"use client";

import { useState, useRef } from "react";
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
  const postsPerPage = 4;
  const totalPosts = posts.length;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (blogPostRef && blogPostRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top:
          blogPostRef.current.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          150,
      });
    }
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
