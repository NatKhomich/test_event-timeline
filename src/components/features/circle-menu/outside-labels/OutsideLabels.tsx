import { Category } from '../../../../types/types';
import styles from './OutsideLabels.module.scss';

type Props = {
  categories: Category[];
  selectedIndex: number;
  currentRotation: number;
  center: number;
  radius: number;
  size: number;
};

export const OutsideLabels = ({
  categories,
  selectedIndex,
  currentRotation,
  center,
  radius,
  size,
}: Props) => {
  const degToRad = (deg: number) => (deg * Math.PI) / 180;
  const baseAngleOffset = Math.PI / 3.5;

  const rotationRad = degToRad(currentRotation);

  return (
    <>
      {categories.map((category, i) => {
        if (selectedIndex !== i) return null;

        const baseAngle = (2 * Math.PI * i) / categories.length - baseAngleOffset;
        const totalAngle = baseAngle + rotationRad;
        const labelRadius = radius + size * 0.1;
        const x = center + labelRadius * Math.cos(totalAngle) + 45;
        const y = center + labelRadius * Math.sin(totalAngle) + 10;

        return (
          <text
            key={i}
            x={x}
            y={y}
            className={styles.pointLabelText}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {category.label}
          </text>
        );
      })}
    </>
  );
};
