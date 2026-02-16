import { motion } from "framer-motion";
import profile from "../../assets/img/mehdi.jpeg"


export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex items-center"
    >
      <div className="grid gap-16 lg:grid-cols-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="lg:col-span-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ backgroundColor: "#009689" }}
            />

            <img
              src={profile}
              alt="Mehdi Filban"
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover shadow-xl ring-4 ring-white"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-black/5 p-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white ring-1 ring-black/5">
              <span className="green">About Me</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              About Me
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              I’m <span className="font-semibold">Mehdi Filban</span>, a Front-End
              Developer focused on building{" "}
              <span className="green">fast</span>,{" "}
              <span className="green">reliable</span>, and{" "}
              <span className="green">scalable</span> web experiences using React
              and modern JavaScript.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              For me, creating value is not only about clean UI — it’s about
              designing systems that stay maintainable as products grow. I care
              about clear component structure, consistent patterns, and code that
              teams can confidently extend.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              I’ve built and shipped production-ready projects such as{" "}
              <span className="font-semibold">ShopFlow</span> (an e-commerce UI)
              and other React applications, working with{" "}
              <span className="font-semibold">Redux Toolkit</span>, REST API
              integration, and performance optimization to reduce unnecessary
              re-renders and keep the user experience smooth across devices.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl text-white font-semibold transition active:scale-[0.98]"
                style={{ backgroundColor: "#009689" }}
              >
                View Projects
              </a>

              <a
                href="https://linkedin.com/in/mehdi-filban"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-gray-200 bg-white link"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
