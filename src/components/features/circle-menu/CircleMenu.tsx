import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Category } from '../../../types/types';
import styles from './CircleMenu.module.scss';
import { OutsideLabels } from './outside-labels';

interface Props {
  categories: Category[];
  selectedCategory: Category;
  onSelect: (cat: Category) => void;
}

export const CircleMenu = ({ categories, selectedCategory, onSelect }: Props) => {
  const size = 620;
  const center = size / 2;
  const radius = center - 45;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const rotationRef = useRef<SVGGElement | null>(null);
  const currentRotation = useRef<number>(0);
  const [, forceUpdate] = useState({});

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
          forceUpdate(currentRotation.current);
        }
      },
    });
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onSelect(categories[index]);
    rotateTo(index);
  };

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

        <OutsideLabels
          categories={categories}
          selectedIndex={selectedIndex}
          currentRotation={currentRotation.current}
          center={center}
          radius={radius}
          size={size}
        />
      </svg>
    </div>
  );
};
