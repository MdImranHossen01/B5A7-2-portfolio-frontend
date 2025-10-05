import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
      <div className="flex-grow">{children}</div>
      <Footer/>
    </div>
  );
};

export default MenuLayout;
