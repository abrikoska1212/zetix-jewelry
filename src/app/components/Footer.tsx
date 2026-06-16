export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between"
      style={{
        padding: "32px 80px",
        borderTop: "1px solid var(--color-border-gold)",
      }}
    >
      <div className="flex items-center gap-6">
        <span
          className="text-[14px] font-[400] text-gold"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}
        >
          ZETIX
        </span>
        <span
          className="text-[11px] font-[300] uppercase tracking-[0.12em] text-text-muted"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Ручная работа · Золото · Серебро
        </span>
      </div>

      <span
        className="text-[11px] font-[300] text-text-muted"
        style={{ fontFamily: "var(--font-body)", letterSpacing: "0.05em" }}
      >
        © 2026
      </span>
    </footer>
  );
}
