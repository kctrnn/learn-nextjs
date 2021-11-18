import { LayoutProps } from '@/models/common';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
