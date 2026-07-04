import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { LayoutGroup, motion } from "framer-motion";
import mehdiLogo from "../assets/img/mehdifilban.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar({ t, language, onToggleLanguage }) {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);
  const [isScrolled, setIsScrolled] = useState(false);

  const isFa = language === "fa";

  const navigation = [
    { name: t.nav.home, href: "#home", id: "home" },
    { name: t.nav.projects, href: "#projects", id: "projects" },
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "home";
      const sections = ["home", "projects", "about", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (section.offsetTop - 140 <= window.scrollY) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const navTransition = {
    type: "spring",
    stiffness: 420,
    damping: 34,
    mass: 0.8,
  };

  return (
    <Disclosure
      as='nav'
      dir='ltr'
      className='pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-4 sm:py-5'
    >
      {({ open }) => (
        <>
          <motion.div
            layout
            animate={{
              y: isScrolled ? 14 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
              mass: 0.7,
            }}
            className={classNames(
              "pointer-events-auto mx-auto max-w-7xl transition-all duration-300",
              isScrolled
                ? "rounded-[2rem] border border-black/10 bg-white/65 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/65 dark:shadow-black/40"
                : "rounded-none border border-transparent bg-transparent shadow-none backdrop-blur-0",
            )}
          >
            <div
              className={classNames(
                "flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8",
                isScrolled ? "h-[4.15rem]" : "h-[4.25rem]",
              )}
            >
              <div className='flex items-center gap-3'>
                <a
                  href='#home'
                  aria-label={t.nav.logoLabel}
                  className='group inline-flex items-center'
                >
                  <span className='rounded-2xl bg-white/90 p-2 shadow-sm ring-1 ring-black/5 transition group-hover:-translate-y-0.5 group-hover:shadow-md dark:bg-white/10 dark:ring-white/10'>
                    <img
                      alt='Mehdi Filban logo'
                      src={mehdiLogo}
                      className='h-7 w-auto dark:brightness-0 dark:invert'
                    />
                  </span>
                </a>

                <button
                  type='button'
                  onClick={onToggleLanguage}
                  aria-label='Toggle language'
                  className='inline-flex items-center gap-1 rounded-full bg-white/90 p-1 text-xs font-black shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/10 dark:ring-white/10'
                >
                  <span
                    className={classNames(
                      "rounded-full px-2.5 py-1 transition",
                      language === "fa"
                        ? "bg-[#009689] text-white"
                        : "text-gray-500 hover:text-[#009689] dark:text-zinc-400 dark:hover:text-[#2dd4bf]",
                    )}
                  >
                    FA
                  </span>

                  <span
                    className={classNames(
                      "rounded-full px-2.5 py-1 transition",
                      language === "en"
                        ? "bg-[#009689] text-white"
                        : "text-gray-500 hover:text-[#009689] dark:text-zinc-400 dark:hover:text-[#2dd4bf]",
                    )}
                  >
                    EN
                  </span>
                </button>
              </div>

              <LayoutGroup id='desktop-navigation'>
                <motion.div
                  layout
                  dir={isFa ? "rtl" : "ltr"}
                  transition={navTransition}
                  className={classNames(
                    "hidden items-center gap-1 rounded-full bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur md:flex dark:bg-white/10 dark:ring-white/10",
                    isScrolled ? "p-1.5" : "p-1",
                  )}
                >
                  {navigation.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.a
                        layout
                        key={item.id}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        transition={navTransition}
                        className={classNames(
                          "relative rounded-full text-sm font-semibold transition-colors duration-200",
                          isScrolled ? "px-4 py-2.5" : "px-4 py-2",
                          isActive
                            ? "text-white"
                            : "text-gray-600 hover:bg-zinc-100 hover:text-gray-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId='active-nav-pill'
                            className='absolute inset-0 rounded-full bg-[#009689] shadow-sm'
                            transition={navTransition}
                          />
                        )}

                        <motion.span
                          layout
                          key={item.name}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.18 }}
                          className='relative z-10 block'
                        >
                          {item.name}
                        </motion.span>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </LayoutGroup>

              <div className='hidden items-center gap-3 md:flex'>
                <button
                  type='button'
                  onClick={toggleTheme}
                  aria-label={
                    theme === "dark" ? t.nav.switchLight : t.nav.switchDark
                  }
                  className={classNames(
                    "inline-flex items-center justify-center rounded-full border border-black/10 bg-white/90 text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#009689]/30 hover:text-[#009689] hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-[#009689]/40",
                    isScrolled ? "h-11 w-11" : "h-10 w-10",
                  )}
                >
                  {theme === "dark" ? (
                    <SunIcon className='h-5 w-5' aria-hidden='true' />
                  ) : (
                    <MoonIcon className='h-5 w-5' aria-hidden='true' />
                  )}
                </button>

                <a
                  href={`${
                    import.meta.env.BASE_URL
                  }assets/Mehdi-Filban-Resume.pdf`}
                  download
                  className={classNames(
                    "rounded-full border border-black/10 bg-white/90 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#009689]/30 hover:text-[#009689] hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-[#009689]/40 dark:hover:text-[#2dd4bf]",
                    isScrolled ? "px-4 py-2.5" : "px-4 py-2",
                  )}
                >
                  {t.nav.resume}
                </a>
              </div>

              <div className='flex items-center gap-2 md:hidden'>
                <button
                  type='button'
                  onClick={toggleTheme}
                  aria-label={
                    theme === "dark" ? t.nav.switchLight : t.nav.switchDark
                  }
                  className='inline-flex items-center justify-center rounded-2xl bg-white/90 p-2.5 text-gray-700 shadow-sm ring-1 ring-black/5 transition hover:text-[#009689] focus:outline-none focus:ring-2 focus:ring-[#009689]/30 dark:bg-white/10 dark:text-zinc-100 dark:ring-white/10'
                >
                  {theme === "dark" ? (
                    <SunIcon className='h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MoonIcon className='h-6 w-6' aria-hidden='true' />
                  )}
                </button>

                <DisclosureButton className='inline-flex items-center justify-center rounded-2xl bg-white/90 p-2.5 text-gray-700 shadow-sm ring-1 ring-black/5 transition hover:text-[#009689] focus:outline-none focus:ring-2 focus:ring-[#009689]/30 dark:bg-white/10 dark:text-zinc-100 dark:ring-white/10'>
                  <span className='sr-only'>{t.nav.openMenu}</span>

                  {open ? (
                    <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                  ) : (
                    <Bars3Icon aria-hidden='true' className='h-6 w-6' />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </motion.div>

          <DisclosurePanel
            dir={isFa ? "rtl" : "ltr"}
            className='pointer-events-auto mx-auto mt-6 max-w-7xl rounded-[1.5rem] border border-black/5 bg-white/90 px-4 pb-5 pt-3 shadow-xl shadow-black/5 backdrop-blur-2xl md:hidden dark:border-white/10 dark:bg-zinc-950/90 dark:shadow-black/30'
          >
            <LayoutGroup id='mobile-navigation'>
              <motion.div
                layout
                className='mx-auto flex max-w-7xl flex-col gap-2'
                transition={navTransition}
              >
                {navigation.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.div layout key={item.id} transition={navTransition}>
                      <DisclosureButton
                        as='a'
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={classNames(
                          "block rounded-2xl px-4 py-3 text-base font-semibold transition",
                          isFa ? "text-right" : "text-left",
                          isActive
                            ? "bg-[#009689] text-white shadow-sm"
                            : "bg-white text-gray-700 ring-1 ring-black/5 hover:text-[#009689] dark:bg-white/10 dark:text-zinc-200 dark:ring-white/10 dark:hover:text-[#2dd4bf]",
                        )}
                      >
                        {item.name}
                      </DisclosureButton>
                    </motion.div>
                  );
                })}

                <DisclosureButton
                  as='a'
                  href={`${
                    import.meta.env.BASE_URL
                  }assets/Mehdi-Filban-Resume.pdf`}
                  download
                  className={classNames(
                    "mt-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-base font-semibold text-gray-800 shadow-sm transition hover:text-[#009689] dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:text-[#2dd4bf]",
                    isFa ? "text-right" : "text-center",
                  )}
                >
                  {t.nav.downloadResume}
                </DisclosureButton>
              </motion.div>
            </LayoutGroup>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
