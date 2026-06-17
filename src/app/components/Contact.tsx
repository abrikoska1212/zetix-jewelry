"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const line = (
    <div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, transparent, rgba(139,115,85,0.3), transparent)" }} />
  );

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0A0906",
        padding: "120px 20px 96px",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Лейбл */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "48px", justifyContent: "center" }}
        >
          <div className="label-line" style={{ height: "1px", width: "48px", background: "rgba(201,168,76,0.3)" }} />
          <span style={{ fontSize: "11px", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.3em", color: "#C9A84C", fontFamily: "var(--font-body)" }}>
            Связаться
          </span>
          <div className="label-line" style={{ height: "1px", width: "48px", background: "rgba(201,168,76,0.3)" }} />
        </motion.div>

        {/* Split layout: left — title + CTA, right — contacts */}
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>

          {/* LEFT: Заголовок + описание + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ flex: "1 1 50%", minWidth: 0 }}
          >
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                lineHeight: 1.1,
                fontWeight: 400,
                fontStyle: "italic",
                color: "#F0EDE8",
                fontFamily: "var(--font-display)",
                marginBottom: "28px",
              }}
            >
              Есть вопрос?<br />Мы ответим.
            </h2>

            <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#6B6560", fontFamily: "var(--font-body)", marginBottom: "48px", maxWidth: "320px" }}>
              Расскажем об украшении, подберём размер, ответим на любой вопрос.
            </p>

            {/* Telegram CTA */}
            <motion.a
              href="https://t.me/zetixx"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="telegram-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                border: "1px solid #8B7355",
                background: "transparent",
                padding: "18px 40px",
                fontSize: "11px",
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#C9A84C",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                transition: "all 0.5s",
                boxSizing: "border-box" as const,
              }}
            >
              <span>Написать в Telegram</span>
              <span style={{ fontSize: "16px", transition: "transform 0.5s" }}>→</span>
            </motion.a>
          </motion.div>

          {/* Правая линия-разделитель */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: "1px", background: "rgba(139,115,85,0.2)", alignSelf: "stretch", transformOrigin: "top", flexShrink: 0 }}
          />

          {/* RIGHT: Контактная информация */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ flex: "1 1 50%", minWidth: 0, display: "flex", flexDirection: "column", gap: 0 }}
          >
            {/* Адрес */}
            <div style={{ padding: "0 0 36px" }}>
              <div style={{ fontSize: "10px", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.25em", color: "#C9A84C", marginBottom: "14px", fontFamily: "var(--font-body)" }}>
                Шоурум
              </div>
              <div style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#F0EDE8", fontFamily: "var(--font-body)" }}>
                Москва
              </div>
              <div style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#F0EDE8", fontFamily: "var(--font-body)" }}>
                ул. Кузнецкий Мост, 7
              </div>
            </div>

            {line}

            {/* График */}
            <div style={{ padding: "36px 0" }}>
              <div style={{ fontSize: "10px", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.25em", color: "#C9A84C", marginBottom: "14px", fontFamily: "var(--font-body)" }}>
                Время работы
              </div>
              <div style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#F0EDE8", fontFamily: "var(--font-body)" }}>
                Пн–Сб, 11:00–20:00
              </div>
            </div>

            {line}

            {/* Соцсети */}
            <div style={{ padding: "36px 0 0" }}>
              <div style={{ fontSize: "10px", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.25em", color: "#C9A84C", marginBottom: "14px", fontFamily: "var(--font-body)" }}>
                Онлайн
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a
                  href="https://t.me/zetixx"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "14px", fontWeight: 300, color: "#F0EDE8", textDecoration: "none", fontFamily: "var(--font-body)", transition: "color 0.3s", lineHeight: 1.8 }}
                >
                  Telegram @zetixx
                </a>
                <a
                  href="https://instagram.com/zetixjewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "14px", fontWeight: 300, color: "#F0EDE8", textDecoration: "none", fontFamily: "var(--font-body)", transition: "color 0.3s", lineHeight: 1.8 }}
                >
                  Instagram @zetixjewelry
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Координаты */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginTop: "80px" }}
        >
          <div style={{ height: "1px", width: "1px", background: "rgba(201,168,76,0.4)" }} />
          <span style={{ fontSize: "9px", fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.4em", color: "rgba(107,101,96,0.4)", fontFamily: "var(--font-body)" }}>
            55.7618° N, 37.6225° E
          </span>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:nth-child(2) {
            flex-direction: column !important;
            gap: 48px !important;
          }
          #contact > div > div:nth-child(2) > div:first-child {
            width: 100% !important;
            flex: unset !important;
          }
          #contact > div > div:nth-child(2) > div:first-child h2 {
            text-align: center !important;
          }
          #contact > div > div:nth-child(2) > div:first-child p {
            text-align: center !important;
            max-width: 100% !important;
          }
          #contact > div > div:nth-child(2) > div:first-child a {
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
          }
          #contact > div > div:nth-child(2) > div:nth-child(2) {
            display: none !important;
          }
          #contact > div > div:nth-child(2) > div:nth-child(3) {
            width: 100% !important;
            flex: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
