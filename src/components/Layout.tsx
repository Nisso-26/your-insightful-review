import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:font-body focus:text-xs focus:font-bold focus:uppercase focus:tracking-wider focus:text-primary focus:outline-none focus:ring-2 focus:ring-accent/60"
    >
      Aller au contenu
    </a>
    <Navbar />
    <main id="main-content" className="pt-20">{children}</main>
    <Footer />
  </>
);

export default Layout;
