import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Intro({ t, language }) {
  const isFa = language === "fa";

  return (
    <section
      id='home'
      className='relative isolate min-h-[calc(100vh-4rem)] overflow-hidden px-4 py-20 sm:px-6 lg:px-8'
    >
      <div className='absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#009689]/10 blur-3xl dark:bg-[#009689]/20' />
      <div className='absolute right-0 top-1/3 -z-10 h-64 w-64 rounded-full bg-black/5 blur-3xl dark:bg-white/10' />

      <div className='mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-12 lg:grid-cols-12'>
        <motion.div
          className={[
            "lg:col-span-7",
            isFa ? "text-right" : "text-center lg:text-left",
          ].join(" ")}
        >
          <div
            className={[
              "inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold text-[#009689] shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:text-[#2dd4bf] dark:ring-white/10",
              isFa ? "mr-0" : "mx-auto lg:mx-0",
            ].join(" ")}
          >
            {t.badge}
          </div>

          <h1 className='mt-6 text-4xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-7xl'>
            <span className='block'>{t.titleTop}</span>

            <span className='block text-[#009689] dark:text-[#2dd4bf]'>
              <Typewriter
                words={t.words}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1400}
              />
            </span>
          </h1>

          <p
            className={[
              "mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-zinc-300 sm:text-lg",
              isFa ? "mr-0 ml-auto" : "mx-auto lg:mx-0",
            ].join(" ")}
          >
            {t.description}
          </p>

          <div
            dir={isFa ? "rtl" : "ltr"}
            className={[
              "mt-8 flex w-full max-w-2xl flex-wrap gap-3",
              isFa ? "justify-start" : "justify-center lg:justify-start",
            ].join(" ")}
          >
            <a
              href='#projects'
              className='inline-flex items-center justify-center rounded-2xl bg-[#009689] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#007f75] hover:shadow-lg active:scale-[0.98]'
            >
              {t.viewProjects}
            </a>

            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#009689]/30 hover:text-[#009689] hover:shadow-md active:scale-[0.98] dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-[#2dd4bf]/40 dark:hover:text-[#2dd4bf]'
            >
              {t.contactMe}
            </a>
          </div>

          <div
            dir={isFa ? "rtl" : "ltr"}
            className={[
              "mt-8 flex w-full max-w-2xl flex-wrap gap-2",
              isFa ? "justify-start" : "justify-center lg:justify-start",
            ].join(" ")}
          >
            {t.skills.map((skill) => (
              <span
                key={skill}
                className='rounded-full border border-black/5 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-zinc-200'
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className='lg:col-span-5'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className='relative mx-auto max-w-md rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10'>
            <div
              dir='ltr'
              className='rounded-[1.5rem] border border-black/5 bg-zinc-950 p-5 text-left text-sm text-zinc-100 shadow-inner dark:border-white/10'
            >
              <div className='mb-5 flex items-center gap-2'>
                <span className='h-3 w-3 rounded-full bg-red-400' />
                <span className='h-3 w-3 rounded-full bg-yellow-400' />
                <span className='h-3 w-3 rounded-full bg-green-400' />

                <span className='ml-auto text-xs font-semibold text-zinc-500'>
                  {t.codeTitle}
                </span>
              </div>

              <pre className='overflow-x-auto whitespace-pre-wrap leading-7'>
                <code>
                  {`const engineer = {
                    name: "Mehdi Filban",
                    role: "Front-End Engineer",
                    focus: ["UI Architecture", "Performance", "UX"],
                    stack: ["React", "Next.js", "Redux", "Zustand"]
                  };`}
                </code>
              </pre>
            </div>

            <div className='mt-4 grid grid-cols-3 gap-3'>
              {t.stats.map((item) => (
                <div
                  key={item.label}
                  className='rounded-2xl bg-zinc-50 p-4 text-center ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10'
                >
                  <p className='text-2xl font-black text-[#009689] dark:text-[#2dd4bf]'>
                    {item.value}
                  </p>

                  <p className='mt-1 text-[11px] font-semibold leading-4 text-gray-500 dark:text-zinc-400'>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
