interface IBlog {
  id: number;
  title: string;
  description: string;
  content: string;
}

interface IBob {
  id: number;
  blogId: number;
  thumbnail: string;
  blog: IBlog;
}

const fetchBob = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      "/best_of_blogs?api_key=" +
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
  return resData.data;
};

const Bob = async () => {
  const bob: IBob[] = await fetchBob();
  return (
    <section className="mb-8 mt-5">
      <div className="flex justify-center">
        <div className="mx-5 flex max-w-md flex-col items-start justify-center gap-5 lg:mt-4 lg:max-w-6xl lg:flex-row lg:justify-center lg:gap-10 lg:px-5">
          {bob && bob.length > 0 ? (
            bob.map((el) => {
              return (
                <div
                  key={el.id}
                  className="rounded border border-b border-solid border-zinc-200 pb-4 shadow-lg lg:max-w-md lg:overflow-hidden"
                >
                  <img
                    className="mb-5 aspect-square w-full object-cover"
                    src={el.thumbnail}
                    alt=""
                  />
                  <div className="mb-3 px-8">
                    <h4 className="mb-4 text-xl font-bold text-zinc-600">
                      {el.blog.title}
                    </h4>
                    <p className="mb-4 text-sm text-zinc-500">
                      {el.blog.description}
                    </p>
                    <a
                      href={
                        process.env.NEXT_PUBLIC_BASE_URL +
                        "/blog/" +
                        el.blog.title
                          .toLowerCase()
                          .replaceAll(" ", "-")
                          .replaceAll("%", "%25")
                      }
                      className="mt-2 hover:opacity-80"
                    >
                      <button className="text-light rounded-sm bg-black px-2 py-1.5 text-sm font-semibold hover:opacity-95">
                        Read Now
                      </button>
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
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
                  Pinkman) cook the ins and outs of copywriting Ice Copy just
                  for you.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <a
          href={process.env.NEXT_PUBLIC_BASE_URL + "/blog"}
          className="hover:opacity-90"
        >
          <button className="text-light rounded-sm bg-black px-2.5 py-2 text-lg font-semibold hover:opacity-95">
            See Blog
          </button>
        </a>
      </div>
    </section>
  );
};

export default Bob;
