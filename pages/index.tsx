import { HeroSection } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models/common';
import { Box } from '@mui/system';
import { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
