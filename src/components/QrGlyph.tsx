type Props = {
  size?: number;
  color?: string;
};

/** Stylized QR-code placeholder glyph — not a scannable code, a visual stand-in. */
export function QrGlyph({ size = 60, color = 'currentColor' }: Props) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ color }}>
      <rect x="4" y="4" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="12" y="12" width="8" height="8" fill="currentColor" />
      <rect x="72" y="4" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="80" y="12" width="8" height="8" fill="currentColor" />
      <rect x="4" y="72" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="6" />
      <rect x="12" y="80" width="8" height="8" fill="currentColor" />
      <rect x="40" y="8" width="8" height="8" fill="currentColor" />
      <rect x="56" y="8" width="8" height="8" fill="currentColor" />
      <rect x="40" y="24" width="8" height="8" fill="currentColor" />
      <rect x="48" y="40" width="8" height="8" fill="currentColor" />
      <rect x="64" y="40" width="8" height="8" fill="currentColor" />
      <rect x="8" y="48" width="8" height="8" fill="currentColor" />
      <rect x="24" y="48" width="8" height="8" fill="currentColor" />
      <rect x="40" y="56" width="8" height="8" fill="currentColor" />
      <rect x="56" y="56" width="8" height="8" fill="currentColor" />
      <rect x="72" y="56" width="8" height="8" fill="currentColor" />
      <rect x="40" y="72" width="8" height="8" fill="currentColor" />
      <rect x="56" y="72" width="8" height="8" fill="currentColor" />
      <rect x="72" y="80" width="8" height="8" fill="currentColor" />
      <rect x="88" y="64" width="8" height="8" fill="currentColor" />
    </svg>
  );
}
