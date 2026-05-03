import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
