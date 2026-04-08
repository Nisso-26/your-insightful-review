import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className="pt-20">{children}</main>
    <Footer />
  </>
);

export default Layout;
