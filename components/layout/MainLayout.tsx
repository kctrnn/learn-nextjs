import { LayoutProps } from '@/models/common';
import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
          SM
        </Container>

        <Container sx={{ bgcolor: 'secondary.main' }}>MD</Container>

        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
