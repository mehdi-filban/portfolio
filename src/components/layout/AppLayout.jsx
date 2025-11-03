import Navbar from "../Navbar";
import Intro from "../Intro";
import Footer from "../pages/Footer";

function AppLayout() {
  return (
    <div style={{ backgroundColor: "#f4f4f5" }}>
      <Navbar />
      <Intro />
      <Footer />
    </div>
  );
}

export default AppLayout;
