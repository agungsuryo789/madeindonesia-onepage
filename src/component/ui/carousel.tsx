import { useRef } from "react";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const { offsetWidth, scrollLeft, scrollWidth } = carouselRef.current;

      carouselRef.current.scrollBy({
        left: offsetWidth,
        behavior: "smooth",
      });

      //   if (scrollLeft + offsetWidth >=  offsetWidth ) {
      //     carouselRef.current.scrollTo({
      //       left: 0,
      //       behavior: "smooth",
      //     });
      //   }
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const { offsetWidth, scrollLeft } = carouselRef.current;

      carouselRef.current.scrollBy({
        left: -offsetWidth,
        behavior: "smooth",
      });

      if (scrollLeft <= 0) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth - offsetWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-4 w-full overflow-x-hidden scroll-smooth"
      >
        {children}
      </div>
      <div className="flex justify-center items-center gap-4 my-6 px-4 w-full">
        <button
          onClick={handlePrev}
          className="border-2 bg-white hover:bg-gray-600 p-2 rounded-md text-black"
        >
          <TfiAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="border-2 bg-white hover:bg-gray-600 p-2 rounded-md text-black"
        >
          <TfiAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
