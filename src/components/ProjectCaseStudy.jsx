import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

function SectionHeading({ children }) {
  return (
    <h4 className='text-sm font-bold text-[#dc2626] dark:text-[#f87171]'>
      {children}
    </h4>
  );
}

function StatusPill({ label }) {
  return (
    <span className='inline-flex shrink-0 items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#dc2626] ring-1 ring-[#dc2626]/20 dark:bg-[#dc2626]/10 dark:text-[#f87171] dark:ring-[#dc2626]/30'>
      <span className='relative flex h-2 w-2'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dc2626] opacity-60 dark:bg-[#f87171]' />
        <span className='relative inline-flex h-2 w-2 rounded-full bg-[#dc2626] dark:bg-[#f87171]' />
      </span>
      {label}
    </span>
  );
}

function CaseStudyImage({ image, eager = false }) {
  return (
    <figure className='overflow-hidden rounded-3xl ring-1 ring-black/5 dark:ring-white/10'>
      <img
        src={assetUrl(image.src)}
        alt={image.alt}
        loading={eager ? "eager" : "lazy"}
        decoding='async'
        className='w-full'
      />
      {image.caption && (
        <figcaption className='bg-zinc-50 px-4 py-2.5 text-xs font-semibold text-gray-500 dark:bg-white/5 dark:text-zinc-400'>
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function BulletItem({ children }) {
  return (
    <li className='flex items-start gap-3 rounded-2xl bg-zinc-50 px-4 py-3 text-sm font-semibold text-gray-700 ring-1 ring-black/5 dark:bg-white/10 dark:text-zinc-200 dark:ring-white/10'>
      <span
        className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#dc2626] dark:bg-[#f87171]'
        aria-hidden='true'
      />
      {children}
    </li>
  );
}

export default function ProjectCaseStudy({ project, onClose }) {
  const caseStudy = project?.caseStudy;

  useEffect(() => {
    if (!caseStudy) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6'>
          <motion.div
            className='absolute inset-0 bg-zinc-950/60 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
            aria-hidden='true'
          />

          <motion.div
            role='dialog'
            aria-modal='true'
            aria-label={`${project.title} case study`}
            className='relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white text-left shadow-2xl ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10'
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <button
              type='button'
              onClick={onClose}
              aria-label='Close case study'
              autoFocus
              className='absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white hover:text-gray-950 dark:bg-zinc-800/90 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-zinc-800 dark:hover:text-white'
            >
              <XMarkIcon className='h-5 w-5' aria-hidden='true' />
            </button>

            <div className='p-6 sm:p-8'>
              <div className='flex items-start justify-between gap-4 pr-12'>
                <div>
                  <p className='text-sm font-bold text-[#dc2626] dark:text-[#f87171]'>
                    Case Study
                  </p>

                  <h3 className='mt-3 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl'>
                    {project.title}
                  </h3>

                  <p className='mt-1 text-sm font-bold text-gray-500 dark:text-zinc-400'>
                    {project.subtitle}
                  </p>
                </div>

                <StatusPill label={project.status} />
              </div>

              <p className='mt-4 leading-7 text-gray-600 dark:text-zinc-300'>
                {caseStudy.tagline}
              </p>

              <div className='mt-6'>
                <CaseStudyImage image={caseStudy.hero} eager />
              </div>

              <section className='mt-8 grid gap-6 border-t border-black/5 pt-8 lg:grid-cols-3 dark:border-white/10'>
                <div>
                  <SectionHeading>Overview</SectionHeading>
                  <p className='mt-2 text-sm leading-7 text-gray-600 dark:text-zinc-300'>
                    {caseStudy.overview}
                  </p>
                </div>

                <div>
                  <SectionHeading>The Problem</SectionHeading>
                  <p className='mt-2 text-sm leading-7 text-gray-600 dark:text-zinc-300'>
                    {caseStudy.problem}
                  </p>
                </div>

                <div>
                  <SectionHeading>The Vision</SectionHeading>
                  <p className='mt-2 text-sm leading-7 text-gray-600 dark:text-zinc-300'>
                    {caseStudy.vision}
                  </p>
                </div>
              </section>

              <section className='mt-8 border-t border-black/5 pt-8 dark:border-white/10'>
                <SectionHeading>Key Features</SectionHeading>

                <div className='mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                  {caseStudy.features.map((feature) => (
                    <div
                      key={feature.title}
                      className='rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10'
                    >
                      <p className='text-sm font-bold text-gray-900 dark:text-white'>
                        {feature.title}
                      </p>

                      <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-zinc-300'>
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className='mt-8 grid gap-6 border-t border-black/5 pt-8 lg:grid-cols-2 dark:border-white/10'>
                <div>
                  <SectionHeading>My Role</SectionHeading>

                  <ul className='mt-4 grid gap-2'>
                    {caseStudy.role.map((item) => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </ul>
                </div>

                <div>
                  <SectionHeading>Technical Highlights</SectionHeading>

                  <ul className='mt-4 grid gap-2'>
                    {caseStudy.highlights.map((item) => (
                      <BulletItem key={item}>{item}</BulletItem>
                    ))}
                  </ul>
                </div>
              </section>

              <section className='mt-8 border-t border-black/5 pt-8 dark:border-white/10'>
                <SectionHeading>Stack</SectionHeading>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='rounded-full border border-black/5 bg-white px-3 py-1 text-xs font-bold text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-zinc-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className='mt-8 border-t border-black/5 pt-8 dark:border-white/10'>
                <SectionHeading>Product Screens</SectionHeading>

                <div className='mt-4 grid gap-4 sm:grid-cols-2'>
                  <CaseStudyImage image={caseStudy.gallery.dashboardLight} />
                  <CaseStudyImage image={caseStudy.gallery.dashboardDark} />
                </div>

                <div className='mt-4 grid gap-4'>
                  <CaseStudyImage image={caseStudy.gallery.register} />
                  <CaseStudyImage image={caseStudy.gallery.responsive} />
                </div>
              </section>

              <div className='mt-8 flex flex-col gap-4 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10'>
                <p className='text-xs font-semibold leading-5 text-gray-500 dark:text-zinc-400'>
                  {caseStudy.note}
                </p>

                <button
                  type='button'
                  onClick={onClose}
                  className='inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#dc2626] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#b91c1c] hover:shadow-md active:scale-[0.98]'
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
