import { motion } from "framer-motion";

export function AnimatedName() {
  const text = "Agasya Butolia";
  const letters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.h1
      className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6"
      data-testid="text-hero-name"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
