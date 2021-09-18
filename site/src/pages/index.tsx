import { Home } from '@/layout/Home';
import { Loading } from '@/layout/Loading';
import { SignIn } from '@/layout/SignIn';
import { useSession } from 'next-auth/client';

import { Header } from '@/common/Header';
import { Footer } from '@/common/Footer';

const HomePage = () => {
  const [session, loading] = useSession();
  {
    console.log(session, loading);
  }

  return (
    <div className={`AppWrap Session_${!!session?.user?.email}`}>
      <div className="AppWrap_Side">Sidebar!</div>
      <div className="AppWrap_Main">
        <main className="AppWrap_Main_Content">
          <Header />
          {typeof window === 'undefined' || loading ? (
            <Loading />
          ) : session?.user?.email ? (
            <Home />
          ) : (
            <SignIn />
          )}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
