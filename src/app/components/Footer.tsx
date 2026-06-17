export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-5 py-12 md:px-16 md:py-16">
      {/* Золотая линия */}
      <div className="mb-14 h-[1px] w-full max-w-[800px] bg-gradient-to-r from-transparent via-border-gold/40 to-transparent" />

      {/* Основной контент */}
      <div className="footer-inner flex w-full max-w-[800px] items-center justify-between">
        <div className="flex items-center gap-8">
          <span
            className="text-[18px] font-[400] italic text-gold"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.08em" }}
          >
            Zetix
          </span>
          <div className="h-[14px] w-[1px] bg-border-gold/20" />
          <span
            className="text-[10px] font-[300] uppercase tracking-[0.2em] text-text-muted/60"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ручная работа · Золото · Серебро
          </span>
        </div>

        <span
          className="text-[10px] font-[300] text-text-muted/40"
          style={{ fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}
        >
          © 2026
        </span>
      </div>
    </footer>
  );
}
