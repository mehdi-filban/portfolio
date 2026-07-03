import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    title: "ShopFlow",
    subtitle: "Modern E-Commerce UI",
    description:
      "A polished e-commerce experience built with React and Redux Toolkit. The project focuses on product discovery, cart flow, responsive layouts and performance-friendly component structure.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "GitHub Pages"],
    impact: ["Cart workflow", "Debounced search", "Mobile-first UI"],
    live: "https://mehdi-filban.github.io/shopflow/",
    github: "https://github.com/mehdi-filban/shopflow",
  },
  {
    title: "Slick React Form",
    subtitle: "Form UX & Validation Flow",
    description:
      "A clean form experience designed to demonstrate practical validation logic, structured components and user-friendly input handling in a real-world interface.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "React Router"],
    impact: ["Validation UX", "Reusable fields", "Responsive layout"],
    live: "https://mehdi-filban.github.io/slick-react-form/",
    github: "https://github.com/mehdi-filban/slick-react-form",
  },
];

const AUTO_SLIDE_MS = 6000;

export default function Projects() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = projects[active];

  const stack = useMemo(() => {
    const next1 = projects[(active + 1) % projects.length];
    const next2 = projects[(active + 2) % projects.length];

    return [current, next1, next2].filter(Boolean);
  }, [active, current]);

  const goPrev = () =>
    setActive((index) => (index - 1 + projects.length) % projects.length);

  const goNext = () => setActive((index) => (index + 1) % projects.length);

  useEffect(() => {
    if (projects.length <= 1 || isPaused) return;

    const id = setInterval(goNext, AUTO_SLIDE_MS);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPaused]);

  return (
    <section
      id='projects'
      dir='ltr'
      className='min-h-screen overflow-hidden px-4 py-20 text-left sm:px-6 lg:px-8'
    >
      <div className='mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12'>
        <motion.div
          className='lg:col-span-4'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className='inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold text-[#009689] shadow-sm ring-1 ring-black/5 dark:bg-zinc-900 dark:text-[#2dd4bf] dark:ring-white/10'>
            Selected Work
          </div>

          <h2 className='mt-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl'>
            Projects that show product thinking, not just UI.
          </h2>

          <p className='mt-4 leading-7 text-gray-600 dark:text-zinc-300'>
            A focused selection of projects built around component architecture,
            state management, responsive layouts and smooth user flows.
          </p>

          <div className='mt-7 rounded-[1.5rem] bg-white/80 p-2 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/90 dark:ring-white/10'>
            {projects.map((project, index) => {
              const isActive = index === active;

              return (
                <button
                  key={project.title}
                  type='button'
                  onClick={() => setActive(index)}
                  className={[
                    "group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition",
                    isActive
                      ? "bg-zinc-950 text-white shadow-sm dark:bg-[#009689]"
                      : "text-gray-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white",
                  ].join(" ")}
                >
                  <span>
                    <span className='block text-sm font-bold'>
                      {project.title}
                    </span>

                    <span
                      className={[
                        "mt-0.5 block text-xs",
                        isActive
                          ? "text-zinc-300 dark:text-white/80"
                          : "text-gray-500 dark:text-zinc-400",
                      ].join(" ")}
                    >
                      {project.subtitle}
                    </span>
                  </span>

                  <span
                    className={[
                      "h-2 w-2 rounded-full transition",
                      isActive
                        ? "bg-[#009689] dark:bg-white"
                        : "bg-gray-300 group-hover:bg-[#009689]/60 dark:bg-white/20 dark:group-hover:bg-[#2dd4bf]",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>

          <div className='mt-5 flex items-center gap-2'>
            <button
              type='button'
              onClick={goPrev}
              className='rounded-2xl bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:text-[#009689] dark:bg-zinc-900 dark:text-zinc-100 dark:ring-white/10 dark:hover:text-[#2dd4bf]'
            >
              Prev
            </button>

            <button
              type='button'
              onClick={goNext}
              className='rounded-2xl bg-[#009689] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#007f75]'
            >
              Next
            </button>

            <button
              type='button'
              onClick={() => setIsPaused((value) => !value)}
              className='ml-auto rounded-2xl bg-white px-4 py-2 text-sm font-bold text-gray-800 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:text-[#009689] dark:bg-zinc-900 dark:text-zinc-100 dark:ring-white/10 dark:hover:text-[#2dd4bf]'
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
          </div>

          <div
            className='mt-4 flex items-center gap-2'
            aria-label='Project slider status'
          >
            {projects.map((project, index) => (
              <button
                key={project.title}
                type='button'
                onClick={() => setActive(index)}
                aria-label={`Show ${project.title}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  index === active
                    ? "w-8 bg-[#009689]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-white/20 dark:hover:bg-white/40",
                ].join(" ")}
              />
            ))}

            <span className='ml-2 text-xs font-semibold text-gray-500 dark:text-zinc-400'>
              {active + 1} / {projects.length}
            </span>
          </div>
        </motion.div>

        <div className='lg:col-span-8'>
          <div
            className='relative mx-auto w-full max-w-2xl sm:h-[500px] lg:h-[460px]'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {stack
              .slice(1)
              .reverse()
              .map((project, index) => (
                <div
                  key={`background-${project.title}-${index}`}
                  className='pointer-events-none absolute inset-0 hidden sm:block'
                  style={{
                    transform: `translateY(${14 + index * 12}px) scale(${
                      0.98 - index * 0.025
                    })`,
                    opacity: 0.22 - index * 0.08,
                  }}
                >
                  <ProjectCard project={project} dim />
                </div>
              ))}

            <AnimatePresence mode='wait'>
              <motion.div
                key={current.title}
                className='relative sm:absolute sm:inset-0'
                initial={{ opacity: 0, x: 40, rotate: 1 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -40, rotate: -1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag={projects.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={(_, info) => {
                  if (projects.length <= 1) return;
                  if (info.offset.x > 80) goPrev();
                  if (info.offset.x < -80) goNext();
                }}
              >
                <ProjectCard project={current} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, dim = false }) {
  return (
    <article
      className={[
        "flex h-auto flex-col rounded-[2rem] bg-white p-6 text-left shadow-xl ring-1 ring-black/5 transition sm:h-full sm:p-8 dark:bg-zinc-900 dark:ring-white/10",
        dim ? "dark:bg-zinc-900" : "hover:-translate-y-1 hover:shadow-2xl",
      ].join(" ")}
    >
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='text-sm font-bold text-[#009689] dark:text-[#2dd4bf]'>
            Featured Project
          </p>

          <h3 className='mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white'>
            {project.title}
          </h3>

          <p className='mt-1 text-sm font-bold text-gray-500 dark:text-zinc-400'>
            {project.subtitle}
          </p>
        </div>

        <span className='rounded-full bg-zinc-50 px-3 py-1 text-xs font-bold text-gray-600 ring-1 ring-black/5 dark:bg-white/10 dark:text-zinc-300 dark:ring-white/10'>
          UI Case
        </span>
      </div>

      <p className='mt-6 leading-7 text-gray-600 dark:text-zinc-300'>
        {project.description}
      </p>

      <div className='mt-6 grid gap-3 sm:grid-cols-3'>
        {project.impact.map((item) => (
          <div
            key={item}
            className='rounded-2xl bg-zinc-50 p-3 text-sm font-semibold text-gray-700 ring-1 ring-black/5 dark:bg-white/10 dark:text-zinc-200 dark:ring-white/10'
          >
            {item}
          </div>
        ))}
      </div>

      <div className='mt-6 flex flex-wrap gap-2'>
        {project.tech.map((tech) => (
          <span
            key={tech}
            className='rounded-full border border-black/5 bg-white px-3 py-1 text-xs font-bold text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-zinc-200'
          >
            {tech}
          </span>
        ))}
      </div>

      <div className='mt-8 flex flex-col gap-3 sm:mt-auto sm:flex-row sm:pt-8'>
        <a
          href={project.live}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center justify-center rounded-2xl bg-[#009689] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#007f75] hover:shadow-md'
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-bold text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#009689]/30 hover:text-[#009689] hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-[#2dd4bf]/40 dark:hover:text-[#2dd4bf]'
        >
          GitHub Repo
        </a>
      </div>
    </article>
  );
}
