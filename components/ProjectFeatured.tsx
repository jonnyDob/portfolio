"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectFeaturedProps {
  number: string;
  kicker: string;
  title: React.ReactNode;
  body: React.ReactNode;
  tags: { label: string; accent?: boolean }[];
  link?: { href: string; text: string };
  storeLinks?: { href: string; text: string }[];
  imageSrc?: string;
  imageAlt?: string;
  browserUrl?: string;
  phoneMockup?: {
    large: { src: string; alt: string };
    small: { src: string; alt: string };
    caption?: string;
  };
  stat?: { value: string; label: string };
}

export default function ProjectFeatured({
  number,
  kicker,
  title,
  body,
  tags,
  link,
  storeLinks,
  imageSrc,
  imageAlt,
  browserUrl,
  phoneMockup,
  stat,
}: ProjectFeaturedProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className="featured-project"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, ease: "easeOut" as const }}
    >
      <div>
        <div className="feat-num">{number}</div>
        <div className="feat-kicker">{kicker}</div>
        <h2 className="feat-title">{title}</h2>
        <p className="feat-body">{body}</p>
        <div className="feat-tags">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`f-tag${tag.accent ? " accent" : ""}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        {storeLinks && (
          <div className="store-links">
            {storeLinks.map((sl) => (
              <a key={sl.href} href={sl.href} className="store-link" target="_blank" rel="noopener noreferrer">
                {sl.text}
              </a>
            ))}
          </div>
        )}
        {link && (
          <a href={link.href} className="read-more">
            {link.text}
          </a>
        )}
      </div>
      <div>
        {phoneMockup ? (
          <div className="phone-mockup-wrap">
            <div className="iphone">
              <div className="iphone-screen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={phoneMockup.small.src} alt={phoneMockup.small.alt} />
              </div>
            </div>
            <div className="iphone">
              <div className="iphone-screen">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={phoneMockup.large.src} alt={phoneMockup.large.alt} />
              </div>
            </div>
          </div>
        ) : stat ? (
          <div className="img-block">
            <div className="stat-display">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ) : imageSrc ? (
          <div className="img-block">
            {browserUrl ? (
              <div className="browser-wrap">
                <div className="browser-chrome">
                  <div className="browser-dots">
                    <span /><span /><span />
                  </div>
                  <div className="browser-bar">
                    <span>{browserUrl}</span>
                  </div>
                </div>
                <div className="browser-screen">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageSrc} alt={imageAlt || "Project screenshot"} />
                </div>
              </div>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={imageSrc} alt={imageAlt || "Project screenshot"} />
            )}
          </div>
        ) : (
          <div className="img-block">
            <div className="img-icon">📱</div>
            <div className="img-caption">Add your screenshot</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
