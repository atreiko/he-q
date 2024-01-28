import { redirect } from 'next/navigation';
import readUserSession from '@/shared/actions';

export default async function SignIn() {

  const { data } = await readUserSession();

  if (data.session) return redirect('/profile');

  return <div className='container py-10'>Sign In</div>;
}
