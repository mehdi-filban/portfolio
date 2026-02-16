import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
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
              src="/mehdi.jpeg"
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
              درباره من
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              من <span className="font-semibold">مهدی </span> ام
              توسعه‌دهنده فرانت‌اند با تمرکز روی ساخت تجربه‌های کاربری{" "}
              <span className="green">سریع</span>،{" "}
              <span className="green">قابل اعتماد</span> و{" "}
              <span className="green">مقیاس‌پذیر</span>.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              برای من خلق ارزش یعنی فقط یک رابط کاربری زیبا نسازم،
              بلکه سیستمی طراحی کنم که با رشد محصول پایدار بماند و
              از نظر فنی قابل توسعه و نگهداری باشد.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              در پروژه‌ها روی معماری کامپوننت‌محور، مدیریت اصولی state
              و بهینه‌سازی عملکرد تمرکز دارم تا هم کاربر تجربه‌ای روان داشته باشد
              و هم تیم توسعه با ساختاری تمیز و مهندسی روبه‌رو باشد.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl text-white font-semibold transition active:scale-[0.98]"
                style={{ backgroundColor: "#009689" }}
              >
                مشاهده پروژه‌ها
              </a>

              <a
                href="https://linkedin.com/in/mehdi-filban"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-gray-200 bg-white link"
              >
                ارتباط در لینکدین
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
