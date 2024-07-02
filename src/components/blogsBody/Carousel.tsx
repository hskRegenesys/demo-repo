import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { ICarouselProps } from "./dataTypes";
import Link from "next/link";

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
        ({ desktopImage, mobileImage, link, label, caption }, index) => (
          <Carousel.Item key={index}>
            <div
              className="w-100 position-relative d-none d-md-block "
              style={{ minHeight: "500px" }}
            >
              <Link href={link} passHref>
                <Image
                  style={{ cursor: "pointer" }}
                  src={`/assets/images/background/${desktopImage}`}
                  alt="Banner Image"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>
            <div
              className="w-100 position-relative d-block d-md-none"
              style={{ minHeight: "500px", cursor: "pointer" }}
            >
              <Link href={link} passHref>
                <Image
                  style={{ cursor: "pointer" }}
                  src={`/assets/images/background/${mobileImage}`}
                  alt="Mobile Banner"
                  layout="fill"
                  objectFit="cover"
                />
              </Link>
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
