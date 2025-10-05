import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navbar/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default MenuLayout;
