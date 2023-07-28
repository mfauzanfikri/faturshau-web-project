type Post = { id: number }[];

const Posts = ({ posts }: { posts: Post }) => {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <a href="" className="hover:bg-zinc-100 focus:bg-zinc-100">
              <article className="border-b border-zinc-400 py-5 lg:rounded lg:border lg:border-solid lg:border-zinc-200 lg:shadow-lg">
                <div className="mb-2 px-8 ">
                  <p className="mb-1 text-xs text-zinc-500">Category</p>
                  <h4 className="mb-2.5 text-xl font-bold text-zinc-600">
                    Test {post.id}
                  </h4>
                  <p className="text-sm text-zinc-500">
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
