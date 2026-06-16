"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
  const blurAmount = useTransform(scrollY, [0, 100], [0, 20]);

  const backgroundColor = useMotionTemplate`rgba(10, 9, 6, ${bgOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 md:px-16 border-b border-border-gold/20"
      style={{ height: 72, backgroundColor, backdropFilter }}
    >
      <Link href="/" className="relative z-10" data-cursor-pointer>
        <span
          className="block text-[22px] font-[400] italic text-gold"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}
        >
          Zetix
        </span>
        <span
          className="block text-[8px] font-[300] uppercase text-text-muted"
          style={{ fontFamily: "var(--font-body)", letterSpacing: "0.3em", marginTop: 2 }}
        >
          Jewelry
        </span>
      </Link>

      <div className="relative z-10 flex items-center gap-10">
        {[
          { label: "Коллекции", href: "#collections" },
          { label: "Об украшениях", href: "#about" },
          { label: "Контакт", href: "#contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-[12px] font-[400] uppercase tracking-[0.12em] text-text-muted transition-colors duration-300 hover:text-gold"
            style={{ fontFamily: "var(--font-body)" }}
            data-cursor-pointer
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
