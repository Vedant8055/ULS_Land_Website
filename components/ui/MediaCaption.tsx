export function MediaCaption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-basalt leading-relaxed">
      {children}
    </p>
  );
}
