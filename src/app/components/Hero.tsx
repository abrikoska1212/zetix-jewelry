"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="hero-section relative grid items-center overflow-hidden"
      style={{
        height: "100vh",
        gridTemplateColumns: "1fr 1fr",
        padding: "0 80px",
        gap: 80,
        background: "radial-gradient(ellipse 60% 80% at 70% 50%, #1a1408 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 80%, #120e04 0%, transparent 50%), var(--color-bg)",
      }}
    >
      {/* Левая колонка — текст */}
      <div className="hero-content relative z-10">
        <div
          className="hero-text"
          style={{ paddingLeft: 40, borderLeft: "1px solid rgba(201, 168, 76, 0.3)" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-subtitle mb-8 block text-[10px] font-[400] uppercase tracking-[0.35em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Новая коллекция · 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8 text-[56px] leading-[1.05] font-[400] italic md:text-[76px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Украшения,
            <br />
            которые
            <br />
            остаются.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 max-w-[340px] text-[15px] font-[300] leading-[1.9] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Каждое изделие — ручная работа.
            <br />
            Золото, серебро, натуральные камни.
          </motion.p>

          <motion.a
            href="#collections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 inline-flex items-center gap-3 text-[11px] font-[400] uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:gap-5 hover:text-gold-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Смотреть коллекцию
            <span className="text-[14px]">→</span>
          </motion.a>
        </div>
      </div>

      {/* Правая колонка — фото */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="hero-image-wrap relative flex items-center justify-center"
        style={{
          height: "80vh",
          background: "var(--color-bg)",
        }}
      >
        <img
          src="/images/solitaire.jpg"
          alt="Кольцо"
          loading="eager"
          className="relative z-[1] max-h-[65vh] max-w-[65%] object-contain"
          style={{
            filter: "drop-shadow(0 0 80px rgba(201, 168, 76, 0.12))",
            WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 35%, transparent 72%)",
            maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 35%, transparent 72%)",
            willChange: "transform",
          }}
        />
      </motion.div>

      {/* Скролл-индикатор */}
      <motion.div
        className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div
          className="w-px origin-top"
          style={{
            height: 50,
            background: "linear-gradient(to bottom, var(--color-gold), transparent)",
            animation: "scrollPulse 2.5s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
