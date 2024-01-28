import { AppHeader } from '@/widgets/app-header/app-header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader variant='public' />
      {children}
    </>
  );
}
