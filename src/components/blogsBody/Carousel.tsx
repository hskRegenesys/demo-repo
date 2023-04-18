import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
interface IImage {
  image: string;
  label: string;
  caption?: string;
}
interface ICarouselProps {
  carouselProps: IImage[];
}

function CarouselComponent({ carouselProps = [] }: ICarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    eventKey: number,
    event: Record<string, unknown> | null
  ) => {
    setIndex(eventKey);
  };

  return (
    <Carousel
      style={{ background: "beige" }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {carouselProps?.map(({ image, label, caption }, index) => (
        <Carousel.Item key={index}>
          <div className="w-100 position-relative" style={{ height: "400px" }}>
            <Image
              className="d-block w-100"
              src={`/assets/images/background/${image}`}
              alt={`${image}-index`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <Carousel.Caption className="d-flex align-item-center justify-content-center flex-column">
            <div>
              <h3 className="text-dark">{label}</h3>
            </div>
            {caption && <p className="text-dark">{caption}</p>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
