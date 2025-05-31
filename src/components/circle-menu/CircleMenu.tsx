import { Category } from '../../types/types';

interface Props {
  categories: Category[];
  onSelect: (cat: Category) => void;
}

export const CircleMenu = ({ categories, onSelect }: Props) => {
  const radius = 120;
  const center = 150;

  return (
    <svg width={300} height={300}>
      {categories.map((cat, i) => {
        const angle = (2 * Math.PI * i) / categories.length;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        return (
          <g key={cat.label} onClick={() => onSelect(cat)} style={{ cursor: 'pointer' }}>
            <circle cx={x} cy={y} r={20} fill="#ccc" />
            <text x={x} y={y} textAnchor="middle" dy=".3em" fontSize={12}>
              {cat.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
