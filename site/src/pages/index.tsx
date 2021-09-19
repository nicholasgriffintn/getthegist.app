import { useSession } from 'next-auth/client';

import { Home } from '@/layout/Home';
import { Loading } from '@/layout/Loading';
import { SignIn } from '@/layout/SignIn';
import { Sidebar } from '@/common/Sidebar';
import { Layout } from '@/common/Layout';

const HomePage = () => {
  const [session, loading] = useSession();

  return (
    <div className={`AppWrap Session_${!!session?.user?.email}`}>
      {session?.user ? (
        <div className="AppWrap_Side">
          <Sidebar />
        </div>
      ) : null}
      <div className="AppWrap_Main">
        <Layout>
          {typeof window === 'undefined' || loading ? (
            <Loading />
          ) : session?.user?.email ? (
            <Home />
          ) : (
            <SignIn />
          )}
        </Layout>
      </div>
    </div>
  );
};

export default HomePage;
