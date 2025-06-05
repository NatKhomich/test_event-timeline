import { memo } from 'react';
import { Category } from '../../../types/types';
import style from './TimelineCircleBlock.module.scss';
import { RotationControls } from '../rotation-controlls';
import { CircleMenu } from '../circle-menu';
import { EventSlider } from '../event-slider';
import { YearRange } from '../year-range';
import { useTimeline } from '../../../hooks/useTimeline';

type Props = {
  categories: Category[];
};

export const TimelineCircleBlock = memo(({ categories }: Props) => {
  const { selectedCategory, yearRange, handleCategorySelect } = useTimeline(categories);

  return (
    <div className={style.timelineBlock} role="region" aria-label="Timeline">
      <div className={`${style.circleMenuWrapper} ${style.hideOnMobile}`}>
        <CircleMenu
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
        />
      </div>

      <YearRange years={yearRange} />

      <div className={style.categoryTitle}>{selectedCategory.label}</div>

      <RotationControls
        selectedCategory={selectedCategory}
        categories={categories}
        onSelected={handleCategorySelect}
      />

      <EventSlider events={selectedCategory.events} />
    </div>
  );
});
