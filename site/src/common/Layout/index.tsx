import { Footer } from '@/common/Footer';

export const Layout = ({ children }) => {
  return (
    <main className="AppWrap_Main_Content">
      {children}
      <Footer />
    </main>
  );
};
