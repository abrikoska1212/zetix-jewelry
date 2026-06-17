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
      className="flex flex-col items-center px-5 py-24 md:px-16 md:py-32"
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
        className="contact-title mb-6 max-w-[500px] text-center text-[40px] leading-[1.1] font-[400] italic md:text-[56px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Есть вопрос?
        <br />
        Мы ответим.
      </motion.h2>

      {/* Тонкая поэтическая строка */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mb-20 max-w-[400px] text-center text-[14px] font-[300] text-text-muted"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Расскажем об украшении, подберём размер, ответим на любой вопрос.
      </motion.p>

      {/* Три колонки информации */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="contact-grid mb-20 flex w-full max-w-[900px] flex-col gap-16 md:flex-row md:grid-cols-3"
      >
        {/* Адрес */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 h-[1px] w-8 bg-gold/30" />
          <span
            className="mb-4 text-[10px] font-[400] uppercase tracking-[0.25em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Шоурум
          </span>
          <p
            className="text-[15px] font-[300] leading-[1.9] text-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Москва,
            <br />
            ул. Кузнецкий Мост, 7
          </p>
        </div>

        {/* График */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 h-[1px] w-8 bg-gold/30" />
          <span
            className="mb-4 text-[10px] font-[400] uppercase tracking-[0.25em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Время работы
          </span>
          <p
            className="text-[15px] font-[300] leading-[1.9] text-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Пн-Сб
            <br />
            11:00–20:00
          </p>
        </div>

        {/* Соцсети */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 h-[1px] w-8 bg-gold/30" />
          <span
            className="mb-4 text-[10px] font-[400] uppercase tracking-[0.25em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Онлайн
          </span>
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://t.me/zetixx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-[300] text-text transition-colors duration-300 hover:text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Telegram @zetixx
            </a>
            <a
              href="https://instagram.com/zetixjewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-[300] text-text transition-colors duration-300 hover:text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Instagram @zetixjewelry
            </a>
          </div>
        </div>
      </motion.div>

      {/* CTA — кнопка */}
      <motion.a
        href="https://t.me/zetixx"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="telegram-btn group relative mb-20 flex w-full max-w-[500px] items-center justify-center gap-4 overflow-hidden border border-border-gold bg-transparent py-5 text-[12px] font-[400] uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold hover:text-bg"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <span className="relative z-[1]">Написать в Telegram</span>
        <span className="relative z-[1] text-[16px] transition-transform duration-500 group-hover:translate-x-2">→</span>
      </motion.a>

      {/* Декоративный элемент снизу — координаты */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="h-[1px] w-[1px] bg-gold/40" />
        <span
          className="text-[9px] font-[300] uppercase tracking-[0.4em] text-text-muted/40"
          style={{ fontFamily: "var(--font-body)" }}
        >
          55.7618° N, 37.6225° E
        </span>
      </motion.div>
    </section>
  );
}
