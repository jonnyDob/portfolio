"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <motion.section
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-left">
        <motion.div className="hero-kicker" variants={itemVariants}>
          Engineering · Product · Scale
        </motion.div>
        <motion.h1 variants={itemVariants}>
          Work that
          <br />
          makes <em>things</em>
          <br />
          possible.
        </motion.h1>
      </div>
      <div className="hero-right">
        <motion.div className="hero-issue" variants={itemVariants}>
          <p>Software Engineer</p>
          <p>Portfolio — 2026</p>
          <p>4 Projects</p>
        </motion.div>
        <motion.p className="hero-pull" variants={itemVariants}>
          &ldquo;The best engineering is invisible — it just works.&rdquo;
        </motion.p>
        <motion.p className="hero-body" variants={itemVariants}>
          Full-stack engineer and founder building across mobile, cloud
          infrastructure, and machine learning. I care about craft and about
          shipping things that hold up in production.
        </motion.p>
      </div>
    </motion.section>
  );
}
