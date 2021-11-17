import { useRouter } from 'next/router';

function PostDetailPage() {
  const router = useRouter();

  console.log(router.query);

  return <div>Post Detail Page</div>;
}

export default PostDetailPage;
