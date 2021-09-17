import { Home } from '@/layout/Home';
import { Loading } from '@/layout/Loading';
import { SignIn } from '@/layout/SignIn';
import { useSession } from 'next-auth/client';

const HomePage = () => {
  const [session, loading] = useSession();

  if (typeof window !== 'undefined' && loading) {
    return <Loading />;
  }

  if (!session) {
    return <SignIn />;
  } else if (session) {
    return <Home />;
  }

  return <Loading />;
};

export default HomePage;
