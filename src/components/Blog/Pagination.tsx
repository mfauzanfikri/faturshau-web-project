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
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            prev
          </button>
        </li>
        {pageNumbers.map((number) => {
          return (
            <button key={number} onClick={() => paginate(number)}>
              <li
                className={`${
                  currentPage === number && "bg-black text-white"
                } flex h-10 w-10 items-center justify-center border border-zinc-500 p-1`}
              >
                {number}
              </li>
            </button>
          );
        })}
        <li className="flex h-10 items-center justify-center rounded-e border border-zinc-500 px-2 py-1">
          <button
            disabled={currentPage === totalPage}
            onClick={() => paginate(currentPage + 1)}
          >
            next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
