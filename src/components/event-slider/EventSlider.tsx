import { EventCard } from '../event-card/EventCard';
import { EventItem } from '../../types/types';
import styles from './EventSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';

interface Props {
  events: EventItem[];
}

export const EventSlider = ({ events }: Props) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <div className={`${styles.sliderContainer} ${!isBeginning ? styles.withLeftOffset : ''}`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigation}>
        {!isBeginning && (
          <button
            className={`${styles.navButton} ${styles.leftButton}`}
            onClick={() => {
              console.log('goPrev');
              goPrev();
            }}
          >
            <svg
              style={{ transform: 'rotate(180deg)' }}
              width="5"
              height="10"
              viewBox="0 0 6 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path d="M0.7 0.7L5.7 5.7L0.7 10.7" stroke="#3877EE" />
            </svg>
          </button>
        )}
        {!isEnd && (
          <button
            className={`${styles.navButton} ${styles.rightButton}`}
            onClick={() => {
              console.log('goNext');
              goNext();
            }}
          >
            <svg
              width="5"
              height="10"
              viewBox="0 0 6 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path d="M0.7 0.7L5.7 5.7L0.7 10.7" stroke="#3877EE" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
