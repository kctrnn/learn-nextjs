import { LayoutProps } from '@/models/common';
import { Footer, Header } from '../common';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <div>Sidebar</div>

      <main>{children}</main>

      <Footer />
    </>
  );
}
