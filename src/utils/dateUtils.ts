import { EventItem } from '../types/types';

export const getYearRange = (events: EventItem[]) => {
  const years = events.map((e) => e.year);
  return {
    min: Math.min(...years),
    max: Math.max(...years),
  };
};
