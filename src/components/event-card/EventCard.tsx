import { EventItem } from '../../types/types';
import styles from "./EventCard.module.scss";

type Props = {
  event: EventItem;
};

export const EventCard = ({ event }: Props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{event.title}</h3>
      <p className={styles.description}>{event.description}</p>
    </div>
  );
};
