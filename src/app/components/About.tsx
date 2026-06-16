"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="flex flex-col items-center px-10 py-24 text-center md:px-16 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative py-20"
      >
        {/* Линия сверху */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to bottom, transparent, var(--color-border-gold))",
          }}
        />

        <h2
          className="max-w-[600px] text-[36px] leading-[1.2] font-[400] italic md:text-[48px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          «Каждое украшение —
          <br />
          это история»
        </h2>

        {/* Линия снизу */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to top, transparent, var(--color-border-gold))",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mb-12 max-w-[560px] text-[16px] font-[300] leading-relaxed text-text-muted"
        style={{ fontFamily: "var(--font-body)" }}
      >
        ZETIX основан на убеждении что украшение
        <br className="hidden md:block" /> должно переживать своего владельца.
        <br className="hidden md:block" />
        Мы работаем только с сертифицированными
        <br className="hidden md:block" /> материалами и не гонимся за количеством.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {["С 2019 года", "Ручная работа", "Москва"].map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            <span
              className="text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item}
            </span>
            {i < 2 && (
              <div className="h-[1px] w-4 bg-gold/30" />
            )}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
