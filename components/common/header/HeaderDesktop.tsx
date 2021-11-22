import { Container, Link as MuiLink, Stack } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

const NavLink = ({ path, label }: { path: string; label: string }) => {
  const router = useRouter();

  return (
    <Link href={path} key={label} passHref>
      <MuiLink
        sx={{ ml: 2, fontWeight: 500 }}
        className={clsx({ active: path === router.pathname })}
      >
        {label}
      </MuiLink>
    </Link>
  );
};

export function HeaderDesktop() {
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <NavLink key={route.label} path={route.path} label={route.label} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
