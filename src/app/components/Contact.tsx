"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 80px",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-10 block text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Связаться с нами
      </motion.span>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-16 text-[40px] leading-[1.1] font-[400] italic md:text-[56px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Есть вопрос?
        <br />
        Мы ответим.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 gap-16 py-16 md:grid-cols-2"
        style={{
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          margin: "60px 0",
        }}
      >
        <div>
          <h3
            className="mb-5 text-[11px] font-[400] uppercase tracking-[0.15em] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Шоурум
          </h3>
          <p
            className="text-[15px] font-[300] leading-[1.8] text-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Москва,
            <br />
            ул. Кузнецкий Мост, 7
          </p>
          <p
            className="mt-4 text-[15px] font-[300] leading-[1.8] text-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Пн-Сб 11:00–20:00
          </p>
        </div>

        <div>
          <h3
            className="mb-5 text-[11px] font-[400] uppercase tracking-[0.15em] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Социальные сети
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-[15px] font-[300] text-gold transition-colors duration-300 hover:text-gold-light"
              style={{ fontFamily: "var(--font-body)" }}
              data-cursor-pointer
            >
              Telegram
              <span className="ml-3 text-text-muted/40">@zetixx</span>
            </a>
            <a
              href="#"
              className="text-[15px] font-[300] text-gold transition-colors duration-300 hover:text-gold-light"
              style={{ fontFamily: "var(--font-body)" }}
              data-cursor-pointer
            >
              Instagram
              <span className="ml-3 text-text-muted/40">@zetixjewelry</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="group flex w-full items-center justify-between py-10 text-[11px] font-[400] uppercase tracking-[0.2em] text-gold transition-colors duration-[400ms] hover:text-gold-light"
        style={{
          fontFamily: "var(--font-body)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <span>Написать в Telegram</span>
        <span className="transition-transform duration-[400ms] group-hover:translate-x-2">
          →
        </span>
      </motion.a>
    </section>
  );
}
