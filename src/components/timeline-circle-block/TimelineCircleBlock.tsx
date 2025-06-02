import { useState } from 'react';
import { Category, EventItem } from '../../types/types';
import { CircleMenu } from '../circle-menu/CircleMenu';
import { EventSlider } from '../event-slider/EventSlider';
import style from './TimelineCircleBlock.module.scss';
import { YearRange } from '../year-range/YearRange';
import { RotationControls } from '../rotation-controlls/RotationControls';

type Props = {
  categories: Category[];
};

export const TimelineCircleBlock = ({ categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  const getYearRange = (events: EventItem[]) => {
    const years = events.map((e) => e.year);
    return {
      min: Math.min(...years),
      max: Math.max(...years),
    };
  };

  const yearRange = getYearRange(selectedCategory.events);

  return (
    <div className={style.timelineBlock}>
      <CircleMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
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
