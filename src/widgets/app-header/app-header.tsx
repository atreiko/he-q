import { ModeToggle } from '@/features/theme/toggle-theme';
import { Layout } from './_ui/layout';
import { Logo } from './_ui/logo';
import { MainNav } from './_ui/main-nav';
import { Profile } from './_ui/profile';

// import readUserSession from '@/shared/actions';

type AppHeaderVariantType = 'auth' | 'private' | 'public';

export async function AppHeader({ variant }: { variant: AppHeaderVariantType }) {
  const isProfile = variant !== 'auth';
  // const session = await readUserSession();
  // console.log('SESSION ----->', session);

  return (
    <Layout 
      logo={<Logo />} 
      nav={<MainNav />} 
      profile={isProfile && <Profile />} 
      actions={<ModeToggle />} 
    />
  );
}
