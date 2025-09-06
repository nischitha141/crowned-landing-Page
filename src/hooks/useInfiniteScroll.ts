import { useRef, useEffect, useState } from "react";

export const useInfiniteScroll = (itemCount: number) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      const cardWidth = 470;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll - cardWidth,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      const cardWidth = 470;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: currentScroll + cardWidth,
        behavior: "smooth",
      });
    }
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollInterval.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const cardWidth = 470;
          const currentScroll = scrollContainerRef.current.scrollLeft;
          
          if (currentScroll >= itemCount * cardWidth) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: "auto",
            });
            setTimeout(() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({
                  left: cardWidth,
                  behavior: "smooth",
                });
              }
            }, 10);
          } else {
            scrollContainerRef.current.scrollTo({
              left: currentScroll + cardWidth,
              behavior: "smooth",
            });
          }
        }
      }, 1500);
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isAutoScrolling, itemCount]);

  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return {
    scrollContainerRef,
    scrollLeft,
    scrollRight,
    handleMouseEnter,
    handleMouseLeave,
  };
};