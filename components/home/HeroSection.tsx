import avatar from '@/images/avatar.png';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 16 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={{ xs: 4, md: 14 }}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>
              Hi, I am kctrnn <br />
              Frontend Developer
            </Typography>

            <Typography mb={{ xs: 3.5, md: 5 }}>
              I am trying to be a software engineer focusing on the front-end development. I love
              building products and learning much knowledge.
            </Typography>

            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={avatar} alt="avatar" layout="responsive" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
