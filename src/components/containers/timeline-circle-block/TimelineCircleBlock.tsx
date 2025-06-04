import { useEffect, useState } from 'react';
import { Category, EventItem } from '../../../types/types';
import style from './TimelineCircleBlock.module.scss';
import { RotationControls } from '../rotation-controlls';
import { CircleMenu } from '../circle-menu';
import { EventSlider } from '../event-slider';
import { YearRange } from '../year-range';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

type Props = {
  categories: Category[];
};

export const TimelineCircleBlock = ({ categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [mounted, setMounted] = useState(false);

  const breakpoint = useBreakpoint();

  if (!breakpoint) return null;

  const getYearRange = (events: EventItem[]) => {
    const years = events.map((e) => e.year);
    return {
      min: Math.min(...years),
      max: Math.max(...years),
    };
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const yearRange = getYearRange(selectedCategory.events);

  if (!mounted || !breakpoint) return null;

  return (
    <div className={style.timelineBlock}>
      <div className={`${style.circleMenuWrapper} ${style.hideOnMobile}`}>
        <CircleMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <YearRange years={yearRange} />

      <RotationControls
        selectedCategory={selectedCategory}
        categories={categories}
        onSelected={setSelectedCategory}
      />

      <EventSlider events={selectedCategory.events} />
    </div>
  );
};
