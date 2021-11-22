import { Box } from '@mui/system';
import Link from 'next/link';

export function Header() {
  return (
    <Box component="header" py={2}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/works">
        <a>Works</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </Box>
  );
}
