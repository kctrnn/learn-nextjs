import { MainLayout } from '@/components/layout';
import { Box } from '@mui/system';
import { ReactElement } from 'react';

function BlogPage() {
  return <Box>Blog</Box>;
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default BlogPage;
