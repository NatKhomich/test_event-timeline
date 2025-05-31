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
    <div className={styles.sliderContainer}>
      <div className={styles.navigation}>
        {!isBeginning ? (
          <button onClick={goPrev}>←</button>
        ) : (
          <span className={styles.emptySpace} />
        )}

        {!isEnd ? <button onClick={goNext}>→</button> : <span className={styles.emptySpace} />}
      </div>

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
    </div>
  );
};
