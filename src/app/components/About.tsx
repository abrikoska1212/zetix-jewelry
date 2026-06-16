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
      className="flex flex-col items-center px-10 text-center md:px-16"
      style={{ paddingTop: 60, paddingBottom: 80 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative py-16"
        style={{ width: "80%" }}
      >
        {/* Линия сверху */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: 1,
            height: 50,
            background: "linear-gradient(to bottom, transparent, var(--color-border-gold))",
          }}
        />

        <h2
          className="mx-auto max-w-[650px] text-[36px] leading-[1.2] font-[400] italic md:text-[48px]"
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
            height: 50,
            background: "linear-gradient(to top, transparent, var(--color-border-gold))",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.15 }}
        className="mb-10 max-w-[560px] text-[15px] font-[300] leading-[2] text-text-muted"
        style={{ fontFamily: "var(--font-body)" }}
      >
        ZETIX основан на убеждении что украшение
        <br className="hidden md:block" /> должно переживать своего владельца.
        <br className="hidden md:block" />
        Мы работаем только с сертифицированными
        <br className="hidden md:block" /> материалами и не гонимся за количеством.
      </motion.p>

      {/* Факты — элегантная линейка */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {[
          { number: "2019", label: "Год основания" },
          { number: "100%", label: "Ручная работа" },
          { number: "585°", label: "Золото проб" },
        ].map((stat, i) => (
          <span key={stat.label} className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <span
                className="text-[28px] font-[400] italic text-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.number}
              </span>
              <span
                className="mt-2 text-[9px] font-[400] uppercase tracking-[0.2em] text-text-muted/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </span>
            </div>
            {i < 2 && (
              <div className="h-8 w-[1px] bg-border-gold/20" />
            )}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
