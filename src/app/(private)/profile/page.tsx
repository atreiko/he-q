import { redirect } from 'next/navigation';
// import DashboardTables from '@/features/dashboard-tables/DashboardTables';
// import readUserSession from '@/lib/actions';
import readUserSession from '@/shared/actions';
import { getServerSession } from 'next-auth';

// import { readPosts } from '../input-data/actions';
// import Pagination from '@/components/ui/pagination/Pagination';

export default async function Profile({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const posts = [{ id: '121213131', title: 'Subscribe' }];
  const { data } = await readUserSession();
  // const session = await getServerSession(authOptions);
  console.log(data);

  if (!data.session) return redirect('/auth/sign-in');

  // const { data: posts } = await readPosts();

  // if (!posts) {
  //   return <p>There are no posts PAGE.</p>;
  // }

  // console.log(posts);

  // const page = searchParams['page'] ?? '1';
  // const per_page = searchParams['per_page'] ?? '2';
  // const start = (Number(page) - 1) * Number(per_page);
  // const end = start + Number(per_page);
  // const entries = posts.slice(start, end);
  // const hasNextPage = end < posts.length;
  // const hasPrevPage = start > 0;

  return (
    <main>
      <div className='container'>
        PROFILE
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab porro vel! Atque, amet quo! Quasi esse fuga delectus perferendis? Sapiente neque dolorem ullam porro, aliquid dolorum natus molestias hic.
        {/* <DashboardTables posts={entries} />
        <Pagination
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          page={page}
          per_page={per_page}
        /> */}
      </div>
    </main>
  );
}
