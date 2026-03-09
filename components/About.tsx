"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="about-col"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="col-head">About me.</div>
      <p>
        I&apos;m a full-stack engineer and founder based in Toronto. I built
        Common from zero — designed it, engineered it, launched it on iOS and
        Android, and scaled it to 37,000+ supported monthly users. I&apos;ve
        worked across mobile, AWS cloud infrastructure, machine learning, and
        systems engineering at AMD.
      </p>
      <p>
        I care about building things well — engineering that holds up when real
        users hit it, design that gets out of the way, and products that
        actually ship.
      </p>
    </motion.div>
  );
}
