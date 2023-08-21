const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
  currentPage: number;
}) => {
  const pageNumbers = [];
  const totalPage = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6">
      <ul className="flex text-center">
        <li className="flex h-10 items-center rounded-s border border-zinc-500 px-2 py-1">
          <button disabled={currentPage === 1}>prev</button>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`${
                currentPage === number && "text-red-600"
              } flex h-10 w-10 items-center justify-center border border-zinc-500 p-1`}
            >
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          );
        })}
        <li className="flex h-10 items-center justify-center rounded-e border border-zinc-500 px-2 py-1">
          <button disabled={currentPage === totalPage}>next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
