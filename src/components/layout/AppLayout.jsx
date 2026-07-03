import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Intro from "../Intro";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import { translations } from "../i18n";

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";

  const savedLanguage = window.localStorage.getItem("language");

  if (savedLanguage === "fa" || savedLanguage === "en") {
    return savedLanguage;
  }

  return "en";
}

function AppLayout() {
  const [language, setLanguage] = useState(getInitialLanguage);

  const t = translations[language];
  const isFa = language === "fa";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isFa ? "rtl" : "ltr";
    window.localStorage.setItem("language", language);
  }, [language, isFa]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "fa" ? "en" : "fa"));
  };

  return (
    <div className='min-h-screen overflow-x-hidden bg-zinc-100 text-gray-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-white'>
      <Navbar t={t} language={language} onToggleLanguage={toggleLanguage} />

      <main>
        <Intro t={t.intro} language={language} />

        {/* Projects intentionally stays English */}
        <Projects />

        <About t={t.about} language={language} />
        <Contact t={t.contact} language={language} />
      </main>

      <Footer t={t.footer} language={language} />
    </div>
  );
}

export default AppLayout;
