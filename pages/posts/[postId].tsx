import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface PostPageProps {
  post: any;
}

function PostDetailPage({ post }: PostPageProps) {
  if (!post) return null;

  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get all posts
  const response = await fetch('https://json-server-kctrnn.herokuapp.com/api/posts?_page=1');
  const { data: posts } = await response.json();

  return {
    paths: posts.map((post: any) => ({ params: { postId: post.id } })),

    // return 404 if /posts/postId is not match
    fallback: false,
  };

  // paths.length === trigger getStaticProps
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(`https://json-server-kctrnn.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();

  return {
    props: { post: data },
  };
};

export default PostDetailPage;
