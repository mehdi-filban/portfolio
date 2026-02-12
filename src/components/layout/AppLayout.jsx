import Navbar from "../Navbar";
import Intro from "../Intro";
import Footer from "../pages/Footer";
import Projects from "../pages/Projects"

function AppLayout() {
  return (
    <div style={{ backgroundColor: "#f4f4f5" }}>
      <Navbar />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}


export default AppLayout;
