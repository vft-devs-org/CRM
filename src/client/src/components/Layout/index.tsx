import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <header className="flex items-center justify-center text-2xl font-bold dark:bg-gray-800">
        <Header />
      </header>

      <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
        <Outlet />
      </main>

      <footer className="flex items-center justify-center text-2xl font-bold dark:bg-gray-800">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
