import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "ShopFlow — Modern Shopping Cart",
    description:
      "A modern e-commerce UI built with React + Redux Toolkit. Includes debounced search, glass navbar, scroll progress, and a redesigned cart page.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "React Router", "GitHub Pages"],
    live: "https://mehdi-filban.github.io/shopflow/",
    github: "https://github.com/mehdi-filban/shopflow",
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
    setActive((i) => (i - 1 + projects.length) % projects.length);
  const goNext = () => setActive((i) => (i + 1) % projects.length);

  // ✅ Auto slide
  useEffect(() => {
    if (projects.length <= 1) return;
    if (isPaused) return;

    const id = setInterval(goNext, AUTO_SLIDE_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, active]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12"
    >
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left column */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="sticky top-24"
          >
            {/* Pill using your green */}
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white ring-1 ring-black/5">
              <span className="green">Selected Work</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Projects
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Selected builds focused on UI engineering, state management, and clean component architecture.
            </p>

            {/* Current project info */}
            <div className="mt-6 rounded-2xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4">
              <p className="text-xs font-semibold text-gray-500">Now showing</p>
              <p className="mt-1 font-semibold text-gray-900">{current.title}</p>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {current.description}
              </p>
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={goPrev}
                className="rounded-2xl px-4 py-2 text-sm font-semibold bg-white ring-1 ring-black/5 hover:bg-gray-50 transition"
              >
                Prev
              </button>

              <button
                onClick={goNext}
                className="rounded-2xl px-4 py-2 text-sm font-semibold text-white transition"
                style={{ backgroundColor: "#009689" }}
              >
                Next
              </button>

              <button
                onClick={() => setIsPaused((v) => !v)}
                className="ml-auto rounded-2xl px-4 py-2 text-sm font-semibold bg-white ring-1 ring-black/5 hover:bg-gray-50 transition"
                title="Pause / Resume auto slide"
              >
                {isPaused ? "Resume" : "Pause"}
              </button>
            </div>

            <div className="mt-3 text-xs text-gray-500">
              {projects.length > 1 ? (
                <>
                  Auto-slide is <span className="font-semibold">{isPaused ? "paused" : "on"}</span>.{" "}
                  Hover the cards to pause.
                </>
              ) : (
                <>Add more projects to enable sliding.</>
              )}
            </div>

            <div className="mt-2 text-sm text-gray-500">
              {active + 1}/{projects.length}
            </div>
          </motion.div>
        </div>

        {/* Right column: stacked slider */}
        <div className="lg:col-span-8">
          <div
            className="relative h-[420px] sm:h-[380px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* background stack cards */}
            {stack
              .slice(1)
              .reverse()
              .map((p, idx) => (
                <div
                  key={`bg-${p.title}-${idx}`}
                  className="absolute inset-0"
                  style={{
                    transform: `translateY(${12 + idx * 10}px) scale(${0.98 - idx * 0.02})`,
                    opacity: 0.45 - idx * 0.15,
                  }}
                >
                  <Card project={p} dim />
                </div>
              ))}

            {/* top active card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 30, rotate: 1 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -30, rotate: -1 }}
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
                <Card project={current} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ project, dim = false }) {
  return (
    <div
      className={[
        "h-full rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-6 sm:p-7 transition-shadow",
        dim ? "" : "hover:shadow-md",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">{project.description}</p>
        </div>

        <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold ring-1 ring-black/5">
          <span className="green">Featured</span>
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold text-white transition"
          style={{ backgroundColor: "#009689" }}
        >
          Live Demo
        </a>

        {/* از کلاس link خودت استفاده می‌کنیم */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold border border-gray-200 bg-white link"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
