import moment from "moment";

type Blog = {
  id: number;
  title: string;
  description: string;
  categoryId: number;
  content: string;
  thumbnail: string;
  uploadedAt?: Date;
  status?: boolean;
  category: { category: string };
  BlogTags: { id: number; tagId: number; tag: { id: number; tag: string } }[];
};

const Posts = ({ posts }: { posts: Blog[] }) => {
  return (
    <ul className="w-full max-w-4xl">
      {posts.map((post) => {
        return (
          <li
            key={post.id}
            className="group border-b border-zinc-400 hover:bg-zinc-100 focus:bg-zinc-100"
          >
            <a href={`/blog/${post.id}`}>
              <article className="px-2.5 py-5">
                <div className="mb-2 text-zinc-700">
                  <p className="mb-1 text-xs text-zinc-500">
                    {post.category.category}
                  </p>
                  <h4 className="mb-2 text-xl font-bold">{post.title}</h4>
                  <p className="text-[0.6rem]">
                    {moment(post.uploadedAt).calendar()}
                  </p>
                  <p className="mt-1.5 text-sm lg:text-base">
                    {post.description}
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
