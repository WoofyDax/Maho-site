interface SectionDividerProps {
  color?: 'gold' | 'green';
}

export function SectionDivider({ color = 'gold' }: SectionDividerProps) {
  const colorClass = color === 'gold' ? 'via-amber-600/30' : 'via-green-600/30';
  return (
    <div className={`h-px bg-gradient-to-r from-transparent ${colorClass} to-transparent`}></div>
  );
}
