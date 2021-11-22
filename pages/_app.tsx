import axiosClient from '@/api/axios-client';
import { AppPropsWithLayout } from '@/models/common';
import { createEmotionCache, theme } from '@/utils/index';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <SWRConfig
          value={{
            fetcher: (url) => axiosClient.get(url),
            shouldRetryOnError: false,
          }}
        >
          {getLayout(<Component {...pageProps} />)}
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

// https://nextjs.org/docs/basic-features/layouts#with-typescript
