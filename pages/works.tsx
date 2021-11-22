import { MainLayout } from '@/components/layout';
import { Box } from '@mui/system';
import { ReactElement } from 'react';

function WorksPage() {
  return <Box>Works</Box>;
}

WorksPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default WorksPage;
