"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.92]);
  const blurAmount = useTransform(scrollY, [0, 120], [0, 24]);

  const backgroundColor = useMotionTemplate`rgba(10, 9, 6, ${bgOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 md:px-16"
      style={{
        height: 72,
        backgroundColor,
        backdropFilter,
        borderBottom: "1px solid rgba(139, 115, 85, 0.12)",
      }}
    >
      <Link href="/" className="relative z-10 flex items-center gap-4">
        <div className="flex flex-col items-start">
          <span
            className="text-[24px] font-[400] italic text-gold"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}
          >
            Zetix
          </span>
          <span
            className="text-[8px] font-[300] uppercase text-text-muted"
            style={{ fontFamily: "var(--font-body)", letterSpacing: "0.3em", marginTop: 2 }}
          >
            Jewelry
          </span>
        </div>
        <div className="ml-2 hidden h-[28px] w-[1px] bg-border-gold/20 md:block" />
        <span
          className="hidden text-[10px] font-[300] uppercase tracking-[0.15em] text-text-muted/50 md:block"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Ручная работа
        </span>
      </Link>

      <div className="relative z-10 flex items-center gap-10">
        {[
          { label: "Коллекции", href: "#collections" },
          { label: "Автор", href: "#author" },
          { label: "Об украшениях", href: "#about" },
          { label: "Контакт", href: "#contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="link-underline text-[12px] font-[400] uppercase tracking-[0.12em] text-text-muted transition-colors duration-500 hover:text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
