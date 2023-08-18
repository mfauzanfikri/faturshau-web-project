import { RefObject } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  blogPostRef,
}: {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
  currentPage: number;
  blogPostRef: RefObject<HTMLDivElement>;
}) => {
  const pageNumbers = [];
  const totalPage = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6">
      <ul className="flex gap-2">
        <li>
          <button disabled={currentPage === 1}>prev</button>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`${currentPage === number && "text-red-600"}`}
            >
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          );
        })}
        <li>
          <button disabled={currentPage === totalPage}>next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
