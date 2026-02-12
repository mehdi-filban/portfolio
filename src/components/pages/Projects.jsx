import { motion } from "framer-motion";

const projects = [
  {
    title: "ShopFlow — Modern Shopping Cart",
    description:
      "A modern e-commerce UI built with React + Redux Toolkit. Includes debounced search, glass-style navbar, scroll progress, and a redesigned cart page.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "React Router", "GitHub Pages"],
    live: "https://mehdi-filban.github.io/shopflow/",
    github: "https://github.com/mehdi-filban/shopflow", 
    highlight: "Live Demo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Projects</h2>
        <p className="mt-3 text-gray-600">
          Selected work showcasing UI engineering, state management, and deployment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-6 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{p.description}</p>
              </div>
              <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {p.highlight}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
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
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
