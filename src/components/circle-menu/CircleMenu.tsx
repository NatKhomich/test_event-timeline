import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Category } from '../../types/types';
import styles from './CircleMenu.module.scss';

interface Props {
  categories: Category[];
  selectedCategory: Category;
  onSelect: (cat: Category) => void;
}

export const CircleMenu = ({ categories, selectedCategory, onSelect }: Props) => {
  const size = 620;
  const center = size / 2;
  const radius = center - 45;

  const baseAngleOffset = Math.PI / 3.5;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const rotationRef = useRef<SVGGElement | null>(null);
  const currentRotation = useRef<number>(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const index = categories.findIndex((cat) => cat === selectedCategory);
    if (index !== -1 && index !== selectedIndex) {
      setSelectedIndex(index);
      rotateTo(index);
    }
  }, [selectedCategory]);

  const rotateTo = (targetIndex: number) => {
    const anglePerItem = 360 / categories.length;
    const targetAngle = -targetIndex * anglePerItem;

    gsap.to(currentRotation, {
      current: targetAngle,
      duration: 0.7,
      ease: 'power2.out',
      onUpdate: () => {
        if (rotationRef.current) {
          rotationRef.current.setAttribute(
            'transform',
            `rotate(${currentRotation.current}, ${center}, ${center})`
          );
          setRotationAngle(currentRotation.current);
        }
      },
    });
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onSelect(categories[index]);
    rotateTo(index);
  };

  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  const outsideLabels = categories.map((category, i) => {
    if (selectedIndex !== i) return null;

    const baseAngle = (2 * Math.PI * i) / categories.length - baseAngleOffset;
    const rotationRad = degToRad(currentRotation.current);
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
  });
  return (
    <div className={styles.circleMenu}>
      <svg width={size} height={size}>
        <circle cx={center} cy={center} r={radius} fill="none" stroke="#ddd" strokeWidth={1} />
        <g ref={rotationRef}>
          {categories.map((_, i) => {
            const angle = (2 * Math.PI * i) / categories.length - Math.PI / 3.5;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            const isHovered = hoveredIndex === i;
            const isSelected = selectedIndex === i;

            return (
              <g
                key={i}
                onClick={() => handleClick(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={[
                  styles.pointGroup,
                  isHovered ? styles.hovered : '',
                  isSelected ? styles.selected : '',
                ].join(' ')}
              >
                <circle cx={x} cy={y} r={20} fill="transparent" pointerEvents="visiblePainted" />

                <circle className={styles.pointCircle} cx={x} cy={y} r={3} />
                {(isHovered || isSelected) && (
                  <text
                    x={x}
                    y={y}
                    transform={`rotate(${-currentRotation.current}, ${x}, ${y})`}
                    className={styles.pointLabel}
                  >
                    {i + 1}
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {outsideLabels}
      </svg>
    </div>
  );
};
