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
    <section className="mb-8 mt-5 flex justify-center">
      <div className="flex max-w-4xl flex-col items-center justify-center gap-5 lg:mt-4 lg:flex-row lg:justify-center lg:gap-10 lg:px-5">
        {bob.map((el) => {
          return (
            <div
              key={el.id}
              className="max-w-[18rem] rounded border border-b border-solid border-zinc-200 pb-4 shadow-lg lg:max-w-md lg:overflow-hidden"
            >
              <img
                className="mb-5 aspect-square w-full object-cover"
                src="/images/fatur_shau.png"
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
                  href={process.env.NEXT_PUBLIC_BASE_URL + "/" + el.id}
                  className="mt-2"
                >
                  <button className="text-light rounded-sm bg-black px-2 py-1.5 text-sm font-semibold hover:opacity-95">
                    Read Now
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Bob;
