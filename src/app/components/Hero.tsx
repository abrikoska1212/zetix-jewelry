"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative grid items-center overflow-hidden"
      style={{
        height: "100vh",
        gridTemplateColumns: "1fr 1fr",
        padding: "0 80px",
        gap: 60,
        marginBottom: 0,
        background: "radial-gradient(ellipse 60% 80% at 70% 50%, #1a1408 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 80%, #120e04 0%, transparent 50%), var(--color-bg)",
      }}
    >
      {/* Левая колонка — текст */}
      <div className="relative z-10">
        <div
          className="hero-text"
          style={{ paddingLeft: 32, borderLeft: "1px solid var(--color-border-gold)" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 block text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Новая коллекция · 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-[48px] leading-[1.1] font-[400] italic md:text-[64px]"
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
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-[320px] text-[15px] font-[300] leading-relaxed text-text-muted"
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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 inline-flex items-center gap-3 border-none bg-transparent pb-1.5 text-[11px] font-[400] uppercase tracking-[0.2em] text-gold transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:gap-5 hover:text-gold-light"
            style={{ fontFamily: "var(--font-body)", borderBottom: "1px solid var(--color-gold)" }}
            data-cursor-pointer
          >
            Смотреть коллекцию
            <span>→</span>
          </motion.a>
        </div>
      </div>

      {/* Правая колонка — фото */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative flex items-center justify-center"
        style={{
          height: "80vh",
          background: "radial-gradient(ellipse 90% 90% at 50% 50%, #1a1208 0%, #0a0906 70%)",
        }}
      >
        <img
          src="/images/solitaire.jpg"
          alt="Кольцо"
          className="relative z-[1] max-h-[80vh] max-w-[80%] object-contain"
          style={{
            filter: "drop-shadow(0 0 60px rgba(201, 168, 76, 0.15))",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskComposite: "intersect",
          }}
        />
      </motion.div>

      {/* Скролл-индикатор */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div
          className="w-px origin-top"
          style={{
            height: 60,
            background: "linear-gradient(to bottom, var(--color-gold), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
