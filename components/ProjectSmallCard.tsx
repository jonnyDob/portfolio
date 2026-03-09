"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ProjectSmallCardProps {
  number: string;
  kicker: string;
  title: string;
  body: string;
  link?: { href: string; text: string };
  imageSrc?: string;
  imageAlt?: string;
  icon?: string;
  stat?: { value: string; label: string };
  delay?: number;
}

export default function ProjectSmallCard({
  number,
  kicker,
  title,
  body,
  link,
  imageSrc,
  imageAlt,
  icon,
  stat,
  delay = 0,
}: ProjectSmallCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="small-card"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: delay * 0.15 }}
    >
      <div className="sc-num">{number}</div>
      <div className="sc-img">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || "Project screenshot"}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        ) : stat ? (
          <div style={{ textAlign: "center" }}>
            <div className="stat-display">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ) : (
          icon
        )}
      </div>
      <div className="sc-kicker">{kicker}</div>
      <div className="sc-title">{title}</div>
      <p className="sc-body">{body}</p>
      {link && (
        <>
          <br />
          <a href={link.href} className="read-more sc-link">
            {link.text}
          </a>
        </>
      )}
      {!link && stat && (
        <>
          <br />
          <span className="sc-link">Internal Project</span>
        </>
      )}
    </motion.div>
  );
}
