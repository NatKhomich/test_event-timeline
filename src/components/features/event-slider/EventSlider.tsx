import { EventItem } from '../../../types/types';
import styles from './EventSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../ui/button';
import { ArrowIcon } from '../../ui/arrow-icon';
import gsap from 'gsap';
import { EventCard } from './event-card';

interface Props {
  events: EventItem[];
}

export const EventSlider = ({ events }: Props) => {
  const swiperRef = useRef<any>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!slidesContainerRef.current) return;
    const slides = slidesContainerRef.current.querySelectorAll('.swiper-slide');

    gsap.fromTo(
      slides,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0,
        ease: 'power2.out',
      }
    );
  }, [events]);

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
    <div
      className={`${styles.sliderContainer} ${!isBeginning ? styles.withLeftOffset : ''}`}
      ref={slidesContainerRef}
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1.3,
            spaceBetween: 12,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.navigation}>
        {!isBeginning && (
          <Button className={`${styles.leftButton}`} onClick={goPrev}>
            <ArrowIcon direction="left" />
          </Button>
        )}
        {!isEnd && (
          <Button className={`${styles.rightButton}`} onClick={goNext}>
            <ArrowIcon direction="right" />
          </Button>
        )}
      </div>
    </div>
  );
};
