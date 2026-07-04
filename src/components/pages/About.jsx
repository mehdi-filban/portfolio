import { motion } from "framer-motion";
import profile from "../../assets/img/mehdi.jpeg";

export default function About({ t, language }) {
  const isFa = language === "fa";

  return (
    <section
      id='about'
      className='min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8'
    >
      <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12'>
        <motion.div
          className='lg:col-span-5'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className='relative mx-auto max-w-sm'>
            <div className='absolute inset-0 rounded-[2.5rem] bg-[#009689]/20 blur-3xl dark:bg-[#009689]/30' />

            <div className='relative rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10'>
              <img
                src={profile}
                alt='Mehdi Filban'
                className='h-80 w-full rounded-[1.5rem] object-cover object-center shadow-sm'
              />

              <div className='mt-4 grid grid-cols-2 gap-3'>
                {t.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className='rounded-2xl bg-zinc-50 p-3 text-center ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10'
                  >
                    <p className='text-xl font-black text-[#009689] dark:text-[#2dd4bf]'>
                      {metric.value}
                    </p>

                    <p className='mt-1 text-[11px] font-semibold leading-4 text-gray-500 dark:text-zinc-400'>
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='lg:col-span-7'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className={[
              "rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8 lg:p-10 dark:bg-white/10 dark:ring-white/10",
              isFa ? "text-right" : "text-left",
            ].join(" ")}
          >
            <div className='inline-flex items-center rounded-full bg-zinc-50 px-3 py-1 text-xs font-bold text-[#009689] ring-1 ring-black/5 dark:bg-white/10 dark:text-[#2dd4bf] dark:ring-white/10'>
              {t.badge}
            </div>

            <h2
              className={[
                "mt-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl",
                isFa ? "fa-heading leading-[1.45]" : "leading-[1.08]",
              ].join(" ")}
            >
              {t.title}
            </h2>

            <div className='mt-6 space-y-4 leading-8 text-gray-600 dark:text-zinc-300'>
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className='mt-8 grid gap-3 sm:grid-cols-2'>
              {t.highlights.map((item) => (
                <div
                  key={item}
                  className='rounded-2xl bg-zinc-50 p-4 text-sm font-bold text-gray-700 ring-1 ring-black/5 dark:bg-white/10 dark:text-zinc-200 dark:ring-white/10'
                >
                  <span className='mx-2 text-[#009689] dark:text-[#2dd4bf]'>
                    ●
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <a
                href='#projects'
                className='inline-flex items-center justify-center rounded-2xl bg-[#009689] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#007f75] hover:shadow-md'
              >
                {t.viewProjects}
              </a>

              <a
                href='https://linkedin.com/in/mehdi-filban'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#009689]/30 hover:text-[#009689] hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-[#2dd4bf]/40 dark:hover:text-[#2dd4bf]'
              >
                {t.linkedin}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
