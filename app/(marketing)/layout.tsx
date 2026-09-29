import Navbar from "./../../components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function homeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
