type Post = { id: number }[];

const Posts = ({ posts }: { posts: Post }) => {
  return (
    <ul className="w-full max-w-4xl">
      {posts.map((post) => {
        return (
          <li key={post.id} className="border-b border-zinc-400">
            <a href="" className="hover:bg-zinc-100 focus:bg-zinc-100">
              <article className="px-2.5 py-5">
                <div className="mb-2">
                  <p className="mb-1 text-xs text-zinc-500">Category</p>
                  <h4 className="mb-2.5 text-xl font-bold text-zinc-600">
                    Test {post.id}
                  </h4>
                  <p className="text-sm text-zinc-500 lg:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem eius praesentium ullam atque ducimus dolores
                    quas tenetur maiores itaque. Quos.
                  </p>
                </div>
              </article>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
