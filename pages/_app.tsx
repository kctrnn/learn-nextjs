import axiosClient from '@/api/axios-client';
import { AppPropsWithLayout } from '@/models/common';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // https://nextjs.org/docs/basic-features/layouts#with-typescript
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      {getLayout(<Component {...pageProps} />)}
    </SWRConfig>
  );
}

export default MyApp;
