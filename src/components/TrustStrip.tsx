const items = [
  "Responsive Design",
  "Modern Frontend",
  "Clean Code",
  "API Integration",
  "Performance",
  "Pixel-Perfect UI",
];

export default function TrustStrip() {
  return (
    <div className="border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-x-10">
            <span className="font-mono text-xs tracking-wide text-ink-faint uppercase">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="hidden sm:inline text-border-strong">/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
