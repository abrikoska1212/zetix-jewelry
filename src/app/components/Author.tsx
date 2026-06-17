"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const skills = [
  {
    icon: "</>",
    title: "Веб-разработка",
    desc: "Лендинги, SPA, Telegram Mini Apps. React, Next.js, TypeScript. От идеи до продакшена.",
  },
  {
    icon: "◈",
    title: "Дизайн",
    desc: "UI/UX интерфейсы, прототипы, дизайн-системы. Figma от макета до готового компонента.",
  },
  {
    icon: "✦",
    title: "EdTech",
    desc: "Образовательные платформы, геймификация, интерактивные курсы. Удобный UX для учеников.",
  },
];

const services = [
  "Лендинги и корпоративные сайты",
  "Веб-приложения (React / Next.js)",
  "Telegram-боты и Mini Apps",
  "EdTech-платформы",
  "UI/UX дизайн интерфейсов",
  "Интеграция с API и базами данных",
];

export default function Author() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const greeting = "Привет, я";
  const [typed, setTyped] = useState("");
  const [showName, setShowName] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(greeting.slice(0, i));
      if (i >= greeting.length) {
        clearInterval(timer);
        setTimeout(() => setShowName(true), 400);
        setTimeout(() => setShowDesc(true), 1200);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section id="author" ref={ref}>
      {/* Герой — приветствие */}
      <div
        className="author-hero relative flex items-center justify-center overflow-hidden px-5 md:px-16"
        style={{
          minHeight: "90vh",
          background: "radial-gradient(ellipse 50% 60% at 30% 40%, rgba(26, 20, 8, 0.5) 0%, transparent 60%), var(--color-bg)",
        }}
      >
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 900, width: "100%" }}>

          {/* Золотая точка-акцент */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 6, height: 6, borderRadius: "50%", background: "#C9A84C" }}
          />

          {/* Лейбл "Обо мне" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 48 }}
          >
            <div style={{ height: 1, width: 48, background: "rgba(201,168,76,0.3)" }} />
            <span style={{ fontSize: 10, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.4em", color: "#C9A84C", fontFamily: "var(--font-body)" }}>
              Обо мне
            </span>
            <div style={{ height: 1, width: 48, background: "rgba(201,168,76,0.3)" }} />
          </motion.div>

          {/* "Привет, я" — печатается */}
          <div style={{ overflow: "hidden", marginBottom: 0 }}>
            <h2 style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              lineHeight: 1.05,
              fontWeight: 400,
              fontStyle: "italic",
              color: "#F0EDE8",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}>
              {typed}
              {typed.length < greeting.length && (
                <span style={{
                  display: "inline-block",
                  width: 3,
                  height: "0.85em",
                  background: "#C9A84C",
                  marginLeft: 4,
                  verticalAlign: "baseline",
                  animation: "blink 1s step-end infinite",
                }} />
              )}
            </h2>
          </div>

          {/* "ZETIXX" — огромный курсив, слегка наезжает на строку выше */}
          <div style={{ overflow: "hidden", marginTop: showName ? -20 : 10, transition: "margin-top 0.8s cubic-bezier(0.76, 0, 0.24, 1)" }}>
            <AnimatePresence>
              {showName && (
                <motion.h2
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    fontSize: "clamp(72px, 14vw, 180px)",
                    lineHeight: 0.95,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#C9A84C",
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 120px rgba(201,168,76,0.15)",
                  }}
                >
                  ZETIXX
                </motion.h2>
              )}
            </AnimatePresence>
          </div>

          {/* Описание — выезжает снизу */}
          <div style={{ overflow: "hidden", marginTop: 40 }}>
            <AnimatePresence>
              {showDesc && (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                  <p style={{
                    maxWidth: 520,
                    margin: "0 auto",
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 2,
                    color: "#6B6560",
                    fontFamily: "var(--font-body)",
                  }}>
                    Разработчик, который превращает сложные вещи в простые и
                    красивые продукты. «Зетикс» — мой личный проект, созданный с
                    вниманием к каждой детали.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Декоративная линия снизу */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to top, var(--color-border-gold), transparent)",
          }}
        />
      </div>

      {/* Чем я занимаюсь */}
      <div
        className="px-5 md:px-16"
        style={{ paddingTop: 80, paddingBottom: 100 }}
      >
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-6 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-gold/30" />
            <span
              className="text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Навыки
            </span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-[42px] font-[400] italic text-text md:text-[52px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Чем я занимаюсь
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
              className="group relative p-10 transition-all duration-600"
              style={{
                background: "linear-gradient(135deg, rgba(17, 16, 9, 0.6) 0%, rgba(10, 9, 6, 0.8) 100%)",
                border: "1px solid rgba(139, 115, 85, 0.12)",
              }}
            >
              {/* Золотая линия сверху при hover */}
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />

              <span
                className="mb-8 block text-center text-[32px] text-gold/70 transition-colors duration-500 group-hover:text-gold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {skill.icon}
              </span>
              <h4
                className="mb-5 text-center text-[22px] font-[400] text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {skill.title}
              </h4>
              <p
                className="text-center text-[15px] font-[300] leading-[1.9] text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Проекты */}
      <div
        className="px-5 md:px-16"
        style={{ paddingBottom: 100 }}
      >
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-6 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-gold/30" />
            <span
              className="text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Проекты
            </span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>
        </div>

        <div className="author-projects-grid grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              name: "DISCIPLINE",
              desc: "Платформа для трекинга привычек и целей. Современный UX, геймификация, статистика.",
              url: "https://discipline-eosin-one.vercel.app/",
            },
            {
              name: "Грамотей",
              desc: "Образовательная платформа с интерактивными уроками и системой достижений.",
              url: "https://gramotey-five.vercel.app/",
            },
          ].map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
              className="group relative block p-10 text-center transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(17, 16, 9, 0.6) 0%, rgba(10, 9, 6, 0.8) 100%)",
                border: "1px solid rgba(139, 115, 85, 0.12)",
                textDecoration: "none",
              }}
            >
              {/* Золотая линия сверху при hover */}
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />

              <div className="mb-6 flex flex-col items-center">
                <h4
                  className="text-[24px] font-[400] text-text transition-colors duration-500 group-hover:text-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.name}
                </h4>
                <span className="mt-2 text-gold text-[14px] opacity-0 transition-all duration-500 group-hover:opacity-100">→</span>
              </div>
              <p
                className="text-[15px] font-[300] leading-[1.9] text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {project.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Работы на заказ */}
      <div
        className="px-5 md:px-16"
        style={{ paddingBottom: 100 }}
      >
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-6 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-gold/30" />
            <span
              className="text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Услуги
            </span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>
        </div>

        <div
          className="relative p-8 md:p-14"
          style={{
            background: "linear-gradient(135deg, rgba(17, 16, 9, 0.5) 0%, rgba(10, 9, 6, 0.7) 100%)",
            border: "1px solid rgba(139, 115, 85, 0.12)",
          }}
        >
          {/* Золотая линия сверху */}
          <div className="absolute top-0 left-0 h-[1px] w-20 bg-gradient-to-r from-gold to-transparent" />

          <div className="mb-10 flex flex-col items-center text-center">
            <h3
              className="mb-5 text-[28px] font-[400] italic text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Работы на заказ
            </h3>
            <p
              className="max-w-[600px] text-[15px] font-[300] leading-[2] text-text-muted"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Лендинги, веб-приложения, SPA, образовательные платформы, Telegram-боты.
              Работаю от прототипа до финального продукта. Чистый код, адаптив, анимации.
            </p>
          </div>

          <div className="author-services-grid grid grid-cols-1 gap-3 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-4 px-6 py-5 text-[14px] font-[300] text-text-muted transition-all duration-400 hover:text-text hover:border-border-gold/40"
                style={{
                  fontFamily: "var(--font-body)",
                  border: "1px solid rgba(139, 115, 85, 0.08)",
                  background: "rgba(17, 16, 9, 0.3)",
                }}
              >
                <span className="text-gold text-[10px]">+</span>
                {service}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Связаться */}
      <div
        className="px-5 md:px-16"
        style={{ paddingBottom: 140 }}
      >
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-6 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-gold/30" />
            <span
              className="text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Контакт
            </span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>
        </div>

        <div
          className="relative p-10 text-center md:p-20"
          style={{
            background: "linear-gradient(135deg, rgba(17, 16, 9, 0.5) 0%, rgba(10, 9, 6, 0.7) 100%)",
            border: "1px solid rgba(139, 115, 85, 0.12)",
          }}
        >
          {/* Золотой разделитель */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="mb-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center border border-gold/20">
              <span className="text-gold text-[24px]">✉</span>
            </div>
          </div>
          <h4
            className="mb-6 text-[32px] font-[400] italic text-text md:text-[40px] lg:text-[48px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Давайте работать вместе
          </h4>
          <p
            className="mb-10 max-w-[480px] mx-auto text-[16px] font-[300] leading-[2] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Есть идея? Напишите мне в Telegram — обсудим
            детали, сроки и бюджет.
          </p>
          <a
            href="https://t.me/zetixx"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-btn inline-flex items-center gap-4 border border-gold/30 bg-gold/5 px-10 py-5 text-[12px] font-[400] uppercase tracking-[0.25em] text-gold transition-all duration-600 hover:bg-gold hover:text-bg hover:border-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>Написать в Telegram</span>
            <span className="text-[16px]">→</span>
          </a>

          {/* Декоративная точка снизу */}
          <div className="mt-12 flex justify-center">
            <div className="h-[1px] w-[1px] bg-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
