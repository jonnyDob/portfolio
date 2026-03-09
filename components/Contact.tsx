"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="contact-col"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
    >
      <div className="col-head">Say hello.</div>
      <a className="c-link" href="mailto:jonathan.dobrowolski01@gmail.com">
        Email <span className="c-arr">→</span>
      </a>
      <a
        className="c-link"
        href="https://www.linkedin.com/in/jonathanDob/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn <span className="c-arr">→</span>
      </a>
      <a
        className="c-link"
        href="https://github.com/jonnyDob"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub <span className="c-arr">→</span>
      </a>
    </motion.div>
  );
}
