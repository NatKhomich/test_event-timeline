import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useRange = (years: { min: number; max: number }) => {
  const minRef = useRef<HTMLSpanElement>(null);
  const maxRef = useRef<HTMLSpanElement>(null);

  const prevMin = useRef(years.min);
  const prevMax = useRef(years.max);

  useEffect(() => {
    const minObj = { val: prevMin.current };
    const maxObj = { val: prevMax.current };

    if (minRef.current) {
      gsap.fromTo(
        minObj,
        { val: prevMin.current },
        {
          val: years.min,
          duration: 1,
          ease: 'power2.out',
          onUpdate() {
            if (minRef.current) {
              minRef.current.textContent = Math.round(minObj.val).toString();
            }
          },
        }
      );
    }

    if (maxRef.current) {
      gsap.fromTo(
        maxObj,
        { val: prevMax.current },
        {
          val: years.max,
          duration: 1,
          ease: 'power2.out',
          onUpdate() {
            if (maxRef.current) {
              maxRef.current.textContent = Math.round(maxObj.val).toString();
            }
          },
        }
      );
    }

    prevMin.current = years.min;
    prevMax.current = years.max;
  }, [years.min, years.max]);

  return { minRef, maxRef };
};
