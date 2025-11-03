import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  // Define animation variants for the words
  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" }, // stagger
    }),
  };

  return (
    <section className="h-[87vh] flex flex-col justify-center items-center text-black text-center px-4">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        <Typewriter
          words={[
            "Hey, I’m Mehdi — turning your ideas",
            "into websites that transform your business",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h1>

      {/* Subheading with each word highlighted animating separately */}

      <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl flex flex-wrap justify-center gap-1">
        I craft{" "}
        <motion.span
          className="green"
          custom={0}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
        >
          modern
        </motion.span>
        ,
        <motion.span
          className="green"
          custom={1}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
        >
          responsive
        </motion.span>
        web experiences that
        <motion.span
          className="green"
          custom={2}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
        >
          grow your business online
        </motion.span>
        .
      </p>

      {/* Call to Action Button */}
      <motion.a
        href="#portfolio"
        className="bg-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 link"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
      >
        see my work
      </motion.a>
    </section>
  );
}
