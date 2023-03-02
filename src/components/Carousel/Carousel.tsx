import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './style.module.css';
import { Children, useState } from 'react';
import { getNumberFromPxString } from '@/utils/stringModifier';
import { size } from '@/styles/Theme';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: getNumberFromPxString(size.laptop) },
    items: 5,
    partialVisibilityGutter: 10,
    // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: {
      max: getNumberFromPxString(size.laptop),
      min: getNumberFromPxString(size.tablet),
    },
    items: 4,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: getNumberFromPxString(size.tablet), min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};
interface CarouselProps {
  title: string;
  children: React.ReactNode;
}
export function MultiItemCarousel({ children, title }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className={styles.title}>{title}</div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        centerMode={true}
        // partialVisible={true}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        containerClass={styles.container}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Children.map(children, child => {
          return child;
        })}
      </Carousel>
    </>
  );
}
