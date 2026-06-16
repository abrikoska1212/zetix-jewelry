"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "</>",
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
      {/* Герой — приветствие */}
      <div
        className="relative px-10 md:px-16"
        style={{
          paddingTop: 160,
          paddingBottom: 200,
          background: "radial-gradient(ellipse 50% 60% at 30% 40%, rgba(26, 20, 8, 0.5) 0%, transparent 60%), var(--color-bg)",
        }}
      >
        {/* Золотая точка-акцент */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="absolute left-16 top-20 h-[6px] w-[6px] rounded-full bg-gold md:left-24"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-12 flex items-center gap-6"
        >
          <div className="h-[1px] w-12 bg-gold/30" />
          <span
            className="text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Обо мне
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-12 max-w-[700px] text-[56px] leading-[1.05] font-[400] italic md:text-[88px]"
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
          className="max-w-[520px] text-[17px] font-[300] leading-[2.1] text-text-muted"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Разработчик, который превращает сложные вещи в простые и
          красивые продукты. «Зетикс» — мой личный проект, созданный с
          вниманием к каждой детали.
        </motion.p>

        {/* Декоративная линия снизу */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 1,
            height: 80,
            background: "linear-gradient(to top, var(--color-border-gold), transparent)",
          }}
        />
      </div>

      {/* Чем я занимаюсь */}
      <div
        className="px-10 md:px-16"
        style={{ paddingTop: 120, paddingBottom: 180 }}
      >
        <div className="mb-16 flex items-center gap-6">
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
          className="mb-20 text-[42px] font-[400] italic text-text md:text-[52px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Чем я занимаюсь
        </motion.h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15 }}
              className="group relative p-12 transition-all duration-600"
              style={{
                background: "linear-gradient(135deg, rgba(17, 16, 9, 0.6) 0%, rgba(10, 9, 6, 0.8) 100%)",
                border: "1px solid rgba(139, 115, 85, 0.12)",
              }}
            >
              {/* Золотая линия сверху при hover */}
              <div className="absolute top-0 left-0 h-[1px] w-0 bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />

              <span
                className="mb-8 block text-[32px] text-gold/70 transition-colors duration-500 group-hover:text-gold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {skill.icon}
              </span>
              <h4
                className="mb-6 text-[24px] font-[400] text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {skill.title}
              </h4>
              <p
                className="text-[15px] font-[300] leading-[2] text-text-muted"
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
        style={{ paddingBottom: 180 }}
      >
        <div className="mb-16 flex items-center gap-6">
          <div className="h-[1px] w-12 bg-gold/30" />
          <span
            className="text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Услуги
          </span>
          <div className="h-[1px] w-12 bg-gold/30" />
        </div>

        <div
          className="relative p-12 md:p-16"
          style={{
            background: "linear-gradient(135deg, rgba(17, 16, 9, 0.5) 0%, rgba(10, 9, 6, 0.7) 100%)",
            border: "1px solid rgba(139, 115, 85, 0.12)",
          }}
        >
          {/* Золотая линия сверху */}
          <div className="absolute top-0 left-0 h-[1px] w-20 bg-gradient-to-r from-gold to-transparent" />

          <div className="flex items-start gap-8 mb-14">
            <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center border border-gold/20">
              <span className="text-gold text-[22px]">✦</span>
            </div>
            <div>
              <h3
                className="mb-6 text-[32px] font-[400] italic text-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Работы на заказ
              </h3>
              <p
                className="max-w-[600px] text-[16px] font-[300] leading-[2] text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Лендинги, веб-приложения, SPA, образовательные платформы, Telegram-боты.
                Работаю от прототипа до финального продукта. Чистый код, адаптив, анимации.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.08 }}
                className="flex items-center gap-5 px-8 py-6 text-[15px] font-[300] text-text-muted transition-all duration-400 hover:text-text hover:border-border-gold/40"
                style={{
                  fontFamily: "var(--font-body)",
                  border: "1px solid rgba(139, 115, 85, 0.1)",
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
        className="px-10 md:px-16"
        style={{ paddingBottom: 200 }}
      >
        <div className="mb-16 flex items-center gap-6">
          <div className="h-[1px] w-12 bg-gold/30" />
          <span
            className="text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Контакт
          </span>
          <div className="h-[1px] w-12 bg-gold/30" />
        </div>

        <div
          className="relative p-16 md:p-24 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(17, 16, 9, 0.5) 0%, rgba(10, 9, 6, 0.7) 100%)",
            border: "1px solid rgba(139, 115, 85, 0.12)",
          }}
        >
          {/* Золотой разделитель */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="mb-10 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center border border-gold/20">
              <span className="text-gold text-[26px]">✉</span>
            </div>
          </div>
          <h4
            className="mb-8 text-[44px] font-[400] italic text-text md:text-[52px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Давайте работать вместе
          </h4>
          <p
            className="mb-14 max-w-[480px] mx-auto text-[17px] font-[300] leading-[2.1] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Есть идея? Напишите мне в Telegram — обсудим
            детали, сроки и бюджет.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-4 border border-gold/30 bg-gold/5 px-12 py-6 text-[12px] font-[400] uppercase tracking-[0.25em] text-gold transition-all duration-600 hover:bg-gold hover:text-bg hover:border-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>Написать в Telegram</span>
            <span className="text-[16px] transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>

          {/* Декоративная точка снизу */}
          <div className="mt-16 flex justify-center">
            <div className="h-[1px] w-[1px] bg-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
