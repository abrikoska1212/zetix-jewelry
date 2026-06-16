"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProductOverlay from "./ProductOverlay";

interface Product {
  name: string;
  subtitle: string;
  material: string;
  stone: string;
  craft: string;
  image: string;
  collection: string;
}

const items: Product[] = [
  {
    name: "Кольцо",
    subtitle: "«Ночь»",
    material: "Жёлтое золото 585°",
    stone: "Чёрный бриллиант 0.5 кт",
    craft: "Ручная гравировка",
    image: "/images/ring.jpg",
    collection: "КОЛЛЕКЦИЯ NOIR",
  },
  {
    name: "Браслет",
    subtitle: "«Река»",
    material: "Серебро 925°",
    stone: "Без камней",
    craft: "Полировка вручную",
    image: "/images/brace.jpg",
    collection: "КОЛЛЕКЦИЯ LUMIÈRE",
  },
  {
    name: "Серьги",
    subtitle: "«Звезда»",
    material: "Золото 585°",
    stone: "Бриллианты 0.8 кт",
    craft: "Инкрустация",
    image: "/images/earrings.jpg",
    collection: "КОЛЛЕКЦИЯ ÉTERNEL",
  },
  {
    name: "Кулон",
    subtitle: "«Луна»",
    material: "Серебро 925°",
    stone: "Лунный камень",
    craft: "Ручная огранка",
    image: "/images/pendant.jpg",
    collection: "КОЛЛЕКЦИЯ NOIR",
  },
];

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <section ref={ref} className="px-10 md:px-16 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span
            className="mb-16 block text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
            style={{ fontFamily: "var(--font-body)", opacity: 0.7 }}
          >
            Витрина
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.name + item.subtitle}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
              }}
              className="group relative cursor-pointer overflow-hidden"
              onClick={() => setSelected(item)}
              data-cursor-pointer
            >
              {/* Золотая рамка при hover */}
              <div
                className="pointer-events-none absolute inset-0 z-[2] border border-transparent transition-colors duration-[400ms] group-hover:border-border-gold"
              />

              <div className="relative mb-4 aspect-square overflow-hidden bg-surface">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-bg/0 transition-colors duration-300 group-hover:bg-bg/40" />
              </div>

              {/* Золотая линия снизу при hover */}
              <div
                className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-full"
              />

              <h3
                className="text-[16px] font-[400] text-text transition-colors duration-300 group-hover:text-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.name}
              </h3>
              <p
                className="text-[14px] font-[400] italic text-text-muted"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.subtitle}
              </p>
              <p
                className="mt-1 text-[11px] font-[300] uppercase tracking-[0.1em] text-text-muted/60"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.material.split(" ")[0]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <ProductOverlay item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
