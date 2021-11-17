import { GetStaticProps, GetStaticPropsContext } from 'next';

export interface PostListPageProps {
  posts: any[];
}

function PostListPage({ posts }: PostListPageProps) {
  console.log(posts);

  return (
    <div>
      <h1>Post List Page</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // run on build time

  const response = await fetch('https://json-server-kctrnn.herokuapp.com/api/posts?_page=1');
  const { data } = await response.json();

  return {
    props: { posts: data.map((post: any) => ({ id: post.id, title: post.title })) },
  };
};

export default PostListPage;
