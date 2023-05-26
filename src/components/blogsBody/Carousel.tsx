import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ICarouselProps } from "./dataTypes";

function CarouselComponent({ carouselProps = [] }: ICarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    eventKey: number,
    event: Record<string, unknown> | null
  ) => {
    setIndex(eventKey);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselProps?.map(
        ({ desktopImage, mobileImage, label, caption }, index) => (
          <Carousel.Item key={index}>
            <div
              className="w-100 position-relative d-none d-md-block "
              style={{ minHeight: "500px" }}
            >
              <Image
                src={`/assets/images/background/${desktopImage}`}
                alt={`${desktopImage}-index`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              className="w-100 position-relative d-block d-md-none"
              style={{ minHeight: "500px" }}
            >
              <Image
                src={`/assets/images/background/${mobileImage}`}
                alt={`${mobileImage}-index`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <Carousel.Caption className="d-flex align-item-center justify-content-center flex-column">
              {label && (
                <div>
                  <h3 className="text-light carousal-text">{label}</h3>
                </div>
              )}
              {caption && <p className="text-light carousal-text">{caption}</p>}
            </Carousel.Caption>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
}

export default CarouselComponent;
