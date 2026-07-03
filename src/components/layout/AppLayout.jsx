import Navbar from "../Navbar";
import Intro from "../Intro";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

function AppLayout() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-zinc-100 text-gray-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-white'>
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
