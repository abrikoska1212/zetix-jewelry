"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "<>",
    title: "Веб-разработка",
    desc: "React, TypeScript, современный стек. От идей до деплоя. Чистый код и анимации.",
  },
  {
    icon: "◈",
    title: "Дизайн",
    desc: "Интерфейсы, которые хочется использовать. Детали имеют значение.",
  },
  {
    icon: "✦",
    title: "EdTech",
    desc: "Образовательные продукты с геймификацией и современным UX.",
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="author" ref={ref}>
      {/* Приветствие */}
      <div
        className="px-10 md:px-16"
        style={{ paddingTop: 140, paddingBottom: 120 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 flex items-center gap-6"
        >
          <div className="h-[1px] w-8 bg-gold/30" />
          <span
            className="text-[10px] font-[400] uppercase tracking-[0.35em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Обо мне
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-8 text-[48px] leading-[1.1] font-[400] italic md:text-[72px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Привет, я
          <br />
          <span className="text-gold">ZETIXX</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-[600px] text-[16px] font-[300] leading-[2] text-text-muted"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Разработчик, который превращает сложные вещи в простые и
          красивые продукты. «Зетикс» — мой личный проект, созданный с
          вниманием к каждой детали.
        </motion.p>
      </div>

      {/* Чем я занимаюсь */}
      <div
        className="px-10 md:px-16"
        style={{ paddingBottom: 140 }}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-14 text-[28px] font-[400] italic text-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Чем я занимаюсь
        </motion.h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
              className="group border border-border/50 p-8 transition-all duration-500 hover:border-border-gold/40"
              style={{ background: "rgba(17, 16, 9, 0.4)" }}
            >
              <span className="mb-6 block text-[20px] text-gold" style={{ fontFamily: "var(--font-body)" }}>{skill.icon}</span>
              <h4
                className="mb-4 text-[20px] font-[400] text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {skill.title}
              </h4>
              <p
                className="text-[14px] font-[300] leading-[1.8] text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Работы на заказ */}
      <div
        className="px-10 md:px-16"
        style={{ paddingBottom: 140 }}
      >
        <div
          className="border border-border/40 p-10 md:p-14"
          style={{ background: "rgba(17, 16, 9, 0.3)" }}
        >
          <div className="flex items-start gap-6 mb-10">
            <div className="mt-1 flex h-10 w-10 items-center justify-center border border-gold/30">
              <span className="text-gold text-[18px]">✦</span>
            </div>
            <div>
              <h3
                className="mb-4 text-[24px] font-[400] italic text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Работы на заказ
              </h3>
              <p
                className="max-w-[600px] text-[15px] font-[300] leading-[1.9] text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Лендинги, веб-приложения, SPA, образовательные платформы, Telegram-боты.
                Работаю от прототипа до финального продукта. Чистый код, адаптив, анимации.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-4 border border-border/30 px-6 py-4 text-[14px] font-[300] text-text-muted transition-colors duration-300 hover:border-border-gold/40 hover:text-text"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="text-gold text-[10px]">+</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Связаться */}
      <div
        className="px-10 md:px-16"
        style={{ paddingBottom: 160 }}
      >
        <h3
          className="mb-12 text-[28px] font-[400] italic text-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Связаться
        </h3>

        <div
          className="border border-border/40 p-12 md:p-16 text-center"
          style={{ background: "rgba(17, 16, 9, 0.3)" }}
        >
          <div className="mb-8 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center border border-gold/30">
              <span className="text-gold text-[22px]">✉</span>
            </div>
          </div>
          <h4
            className="mb-6 text-[36px] font-[400] italic text-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Давайте работать вместе
          </h4>
          <p
            className="mb-10 max-w-[500px] mx-auto text-[16px] font-[300] leading-[1.9] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Есть идея? Напишите мне в Telegram — обсудим
            детали, сроки и бюджет.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-gold/40 bg-gold/10 px-8 py-4 text-[12px] font-[400] uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:bg-gold hover:text-bg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>Написать в Telegram</span>
            <span>@zetixx</span>
          </a>
        </div>
      </div>
    </section>
  );
}
