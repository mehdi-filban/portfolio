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
import { motion } from "framer-motion";
import mehdiLogo from "../assets/img/mehdifilban.svg";

const navigation = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        if (section.offsetTop - 120 <= window.scrollY) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.08, duration: 0.35, ease: "easeOut" },
    }),
  };

  return (
    <Disclosure
      as='nav'
      className='sticky top-0 z-50 border-b border-black/5 bg-zinc-50/75 backdrop-blur-xl transition-colors duration-300 supports-[backdrop-filter]:bg-zinc-50/60 dark:border-white/10 dark:bg-zinc-950/75 dark:supports-[backdrop-filter]:bg-zinc-950/60'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between gap-4'>
              <a
                href='#home'
                aria-label='Go to home section'
                className='group inline-flex items-center gap-3'
              >
                <span className='rounded-2xl bg-white p-2 shadow-sm ring-1 ring-black/5 transition group-hover:-translate-y-0.5 group-hover:shadow-md dark:bg-white/10 dark:ring-white/10'>
                  <img
                    alt='Mehdi Filban logo'
                    src={mehdiLogo}
                    className='h-7 w-auto dark:brightness-0 dark:invert'
                  />
                </span>

                <span className='hidden text-sm font-bold text-gray-900 dark:text-white sm:block'>
                  Mehdi Filban
                </span>
              </a>

              <div className='hidden items-center gap-1 rounded-full bg-white/80 p-1 shadow-sm ring-1 ring-black/5 backdrop-blur md:flex dark:bg-white/10 dark:ring-white/10'>
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      custom={index}
                      initial='hidden'
                      animate='visible'
                      variants={itemVariants}
                      className={classNames(
                        "rounded-full px-4 py-2 text-sm font-semibold transition",
                        isActive
                          ? "bg-[#009689] text-white shadow-sm"
                          : "text-gray-600 hover:bg-zinc-100 hover:text-gray-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
                      )}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>

              <div className='hidden items-center gap-3 md:flex'>
                <button
                  type='button'
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#009689]/30 hover:text-[#009689] hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-[#009689]/40'
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
                  className='rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#009689]/30 hover:text-[#009689] hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:border-[#009689]/40 dark:hover:text-[#2dd4bf]'
                >
                  Resume
                </a>
              </div>

              <div className='flex items-center gap-2 md:hidden'>
                <button
                  type='button'
                  onClick={toggleTheme}
                  aria-label={`Switch to ${
                    theme === "dark" ? "light" : "dark"
                  } mode`}
                  className='inline-flex items-center justify-center rounded-2xl bg-white p-2.5 text-gray-700 shadow-sm ring-1 ring-black/5 transition hover:text-[#009689] focus:outline-none focus:ring-2 focus:ring-[#009689]/30 dark:bg-white/10 dark:text-zinc-100 dark:ring-white/10'
                >
                  {theme === "dark" ? (
                    <SunIcon className='h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MoonIcon className='h-6 w-6' aria-hidden='true' />
                  )}
                </button>

                <DisclosureButton className='inline-flex items-center justify-center rounded-2xl bg-white p-2.5 text-gray-700 shadow-sm ring-1 ring-black/5 transition hover:text-[#009689] focus:outline-none focus:ring-2 focus:ring-[#009689]/30 dark:bg-white/10 dark:text-zinc-100 dark:ring-white/10'>
                  <span className='sr-only'>Open main menu</span>

                  {open ? (
                    <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                  ) : (
                    <Bars3Icon aria-hidden='true' className='h-6 w-6' />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className='border-t border-black/5 bg-zinc-50/95 px-4 pb-5 pt-2 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-zinc-950/95'>
            <div className='mx-auto flex max-w-7xl flex-col gap-2'>
              {navigation.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <DisclosureButton
                    key={item.name}
                    as='a'
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={classNames(
                      "rounded-2xl px-4 py-3 text-base font-semibold transition",
                      isActive
                        ? "bg-[#009689] text-white shadow-sm"
                        : "bg-white text-gray-700 ring-1 ring-black/5 hover:text-[#009689] dark:bg-white/10 dark:text-zinc-200 dark:ring-white/10 dark:hover:text-[#2dd4bf]",
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}

              <DisclosureButton
                as='a'
                href={`${
                  import.meta.env.BASE_URL
                }assets/Mehdi-Filban-Resume.pdf`}
                download
                className='mt-2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-base font-semibold text-gray-800 shadow-sm transition hover:text-[#009689] dark:border-white/10 dark:bg-white/10 dark:text-zinc-100 dark:hover:text-[#2dd4bf]'
              >
                Download Resume
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
