"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "◇",
    title: "Ручная работа",
    desc: "Каждое изделие создаётся вручную. Без конвейера, без шаблонов. Только мастер и золото.",
  },
  {
    icon: "✦",
    title: "Гравировка",
    desc: "Уникальные узоры и надписи, выполненные вручную. Каждая гравировка как отпечаток пальца.",
  },
  {
    icon: "◈",
    title: "Инкрустация",
    desc: "Натуральные камни вставлены так, чтобы подчёркивать характер камня, а не скрывать его.",
  },
];

const services = [
  "Индивидуальный заказ украшений",
  "Ремонт и реставрация золота",
  "Гравировка на металле",
  "Подбор и инкрустация камней",
  "Реставрация семейных украшений",
  "Консультация по материалам",
];

export default function Author() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="author"
      ref={ref}
      className="px-10 md:px-16 py-32 md:py-44"
    >
      {/* Заголовок секции */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="mb-16 flex items-center gap-6"
      >
        <div className="h-[1px] w-8 bg-gold/30" />
        <span
          className="text-[10px] font-[400] uppercase tracking-[0.35em] text-gold"
          style={{ fontFamily: "var(--font-body)" }}
        >
          О мастере
        </span>
      </motion.div>

      {/* Приветствие + описание */}
      <div className="mb-24 max-w-[800px]">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-8 text-[48px] leading-[1.1] font-[400] italic md:text-[72px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Привет, я
          <br />
          <span className="text-gold">мастер Zetix</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-[600px] text-[16px] font-[300] leading-[2] text-text-muted"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Ювелир, который превращает золото и камни в украшения с характером.
          Каждое изделие — это история, созданная с вниманием к каждой детали.
        </motion.p>
      </div>

      {/* Что я делаю — карточки */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-8"
      >
        <h3
          className="mb-10 text-[24px] font-[400] italic text-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Чем я занимаюсь
        </h3>
      </motion.div>

      <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            className="group border border-border/50 p-8 transition-all duration-500 hover:border-border-gold/40"
            style={{ background: "rgba(17, 16, 9, 0.4)" }}
          >
            <span className="mb-6 block text-[24px] text-gold">{skill.icon}</span>
            <h4
              className="mb-4 text-[18px] font-[400] text-text"
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

      {/* Услуги на заказ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-24 border border-border/40 p-10 md:p-14"
        style={{ background: "rgba(17, 16, 9, 0.3)" }}
      >
        <div className="flex items-start gap-6 mb-8">
          <div className="mt-1 flex h-10 w-10 items-center justify-center border border-gold/30">
            <span className="text-gold text-[18px]">✦</span>
          </div>
          <div>
            <h3
              className="mb-3 text-[22px] font-[400] italic text-text"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Работы на заказ
            </h3>
            <p
              className="max-w-[600px] text-[14px] font-[300] leading-[1.9] text-text-muted"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Беру заказы любой сложности — от идеи до готового изделия.
              Работаю от прототипа до финального продукта. Чистое исполнение,
              внимание к деталям, ручная доводка.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-4 border border-border/30 px-6 py-4 text-[13px] font-[300] text-text-muted transition-colors duration-300 hover:border-border-gold/40 hover:text-text"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="text-gold text-[10px]">+</span>
              {service}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Связаться */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h3
          className="mb-10 text-[24px] font-[400] italic text-text"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Связаться
        </h3>

        <div
          className="border border-border/40 p-10 md:p-14 text-center"
          style={{ background: "rgba(17, 16, 9, 0.3)" }}
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center border border-gold/30">
              <span className="text-gold text-[20px]">✉</span>
            </div>
          </div>
          <h4
            className="mb-4 text-[32px] font-[400] italic text-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Давайте создадим вместе
          </h4>
          <p
            className="mb-8 max-w-[500px] mx-auto text-[15px] font-[300] leading-[1.9] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Есть идея? Напишите нам в Telegram — обсудим
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
      </motion.div>
    </section>
  );
}
