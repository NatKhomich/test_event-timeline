import { Category } from '../../../types/types';
import { ArrowIcon } from '../../ui/arrow-icon';
import { Button } from '../../ui/button';
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
        0{selectedIndex + 1}/0{selectedCategory.events.length + 1}
      </span>
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={handlePrev} disabled={selectedIndex === 0}>
          <ArrowIcon direction="left" />
        </Button>
        <Button
          className={styles.button}
          onClick={handleNext}
          disabled={selectedIndex === categories.length - 1}
        >
          <ArrowIcon direction="right" />
        </Button>
      </div>
    </div>
  );
};
