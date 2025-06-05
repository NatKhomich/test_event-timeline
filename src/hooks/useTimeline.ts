import { useState, useCallback } from 'react';
import { Category } from '../types/types';
import { getYearRange } from '../utils/dateUtils';

export const useTimeline = (categories: Category[]) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const yearRange = getYearRange(selectedCategory.events);

  const handleCategorySelect = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  return {
    selectedCategory,
    yearRange,
    handleCategorySelect,
  };
};
