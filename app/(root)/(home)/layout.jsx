import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex container mx-auto min-h-screen flex-1 flex-col px-6 py-6 pt-28 max-md:pb-10 sm:px-10">
          {children}
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
