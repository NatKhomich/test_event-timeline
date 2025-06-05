import styles from './YearRange.module.scss';

import { useRange } from '../../../hooks/useRange';

type Props = {
  years: { min: number; max: number };
};

export const YearRange = ({ years }: Props) => {
  const { maxRef, minRef } = useRange(years);

  return (
    <div className={styles.yearRangeBlock}>
      <span className={styles.minRange} ref={minRef}>
        {years.min}
      </span>
      <span className={styles.maxRange} ref={maxRef}>
        {years.max}
      </span>
    </div>
  );
};
