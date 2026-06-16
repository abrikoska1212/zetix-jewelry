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
      className="flex flex-col items-center text-center"
      style={{ padding: "160px 80px" }}
    >
      {/* Лейбл */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-10 flex items-center gap-6"
      >
        <div className="h-[1px] w-12 bg-gold/30" />
        <span
          className="text-[11px] font-[400] uppercase tracking-[0.3em] text-gold"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Связаться
        </span>
        <div className="h-[1px] w-12 bg-gold/30" />
      </motion.div>

      {/* Заголовок */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-20 max-w-[600px] text-[40px] leading-[1.1] font-[400] italic md:text-[56px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Есть вопрос?
        <br />
        Мы ответим.
      </motion.h2>

      {/* Две колонки — без рамок, через пространство */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20 grid w-full max-w-[800px] grid-cols-1 gap-20 md:grid-cols-2"
      >
        {/* Левая — адрес */}
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-6 text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Шоурум
          </span>
          <p
            className="text-[16px] font-[300] leading-[2] text-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Москва,
            <br />
            ул. Кузнецкий Мост, 7
          </p>
          <div className="my-5 h-[1px] w-8 bg-gold/20" />
          <p
            className="text-[13px] font-[300] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Пн-Сб 11:00–20:00
          </p>
        </div>

        {/* Правая — соцсети */}
        <div className="flex flex-col items-center text-center">
          <span
            className="mb-6 text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Социальные сети
          </span>
          <div className="flex flex-col items-center gap-4">
            <a
              href="#"
              className="group/link text-[16px] font-[300] text-text transition-colors duration-300 hover:text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Telegram
              <span className="ml-2 text-text-muted/40 transition-colors duration-300 group-hover/link:text-gold/60">@zetixx</span>
            </a>
            <div className="h-[1px] w-8 bg-gold/20" />
            <a
              href="#"
              className="group/link text-[16px] font-[300] text-text transition-colors duration-300 hover:text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Instagram
              <span className="ml-2 text-text-muted/40 transition-colors duration-300 group-hover/link:text-gold/60">@zetixjewelry</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* CTA — крупная кнопка */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="group flex w-full max-w-[800px] items-center justify-between py-8 text-[12px] font-[400] uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:tracking-[0.35em]"
        style={{
          fontFamily: "var(--font-body)",
          borderTop: "1px solid var(--color-border-gold)",
          borderBottom: "1px solid var(--color-border-gold)",
        }}
      >
        <span>Написать в Telegram</span>
        <span className="text-[18px] transition-transform duration-500 group-hover:translate-x-3">
          →
        </span>
      </motion.a>
    </section>
  );
}
