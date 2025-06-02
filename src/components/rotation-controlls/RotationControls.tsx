import { Category } from '../../types/types';
import { ArrowIcon } from '../ui/arrow-icon';
import { Button } from '../ui/button';
import styles from './RotationControls.module.scss';

type Props = {
  selectedCategory: Category;
  categories: Category[];
  onSelected: (category: Category) => void;
};

export const RotationControls = ({ selectedCategory, categories, onSelected }: Props) => {
  const selectedIndex = categories.findIndex((cat) => cat === selectedCategory);

  const handlePrev = () => {
    const newIndex = selectedIndex === 0 ? categories.length - 1 : selectedIndex - 1;
    onSelected(categories[newIndex]);
  };

  const handleNext = () => {
    const newIndex = selectedIndex === categories.length - 1 ? 0 : selectedIndex + 1;
    onSelected(categories[newIndex]);
  };
  return (
    <div className={styles.rotationControls}>
      <span className={styles.categoryName}>
        0{selectedIndex + 1}/0{selectedCategory.events.length}
      </span>
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={handlePrev}>
          <ArrowIcon direction="left" />
        </Button>
        <Button className={styles.button} onClick={handleNext}>
          <ArrowIcon direction="right" />
        </Button>
      </div>
    </div>
  );
};
