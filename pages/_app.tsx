import { AppPropsWithLayout } from '@/models/common';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // https://nextjs.org/docs/basic-features/layouts#with-typescript

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
