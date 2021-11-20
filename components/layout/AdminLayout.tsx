import { LayoutProps } from '@/models/common';
import { Auth, Footer, Header } from '../common';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Auth>
      <Header />

      <div>Sidebar</div>

      <main>{children}</main>

      <Footer />
    </Auth>
  );
}
