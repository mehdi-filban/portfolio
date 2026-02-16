import Navbar from "../Navbar";
import Intro from "../Intro";
import Footer from "../pages/Footer";
import Projects from "../pages/Projects"
import About from "../pages/About";


function AppLayout() {
  return (
    <div style={{ backgroundColor: "#f4f4f5" }}>
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}


export default AppLayout;
