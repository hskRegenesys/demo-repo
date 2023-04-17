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
    console.log(eventKey, event);
    // setIndex(selectedIndex);
  };

  return (
    // <Carousel variant="dark">
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=First slide&bg=f5f5f5"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>First slide label</h5>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=Second slide&bg=eee"
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>Second slide label</h5>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="holder.js/800x400?text=Third slide&bg=e5e5e5"
    //       alt="Third slide"
    //     />
    //     <Carousel.Caption>
    //       <h5>Third slide label</h5>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <Carousel
      style={{ background: "beige" }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {carouselProps.map(({ image, label, caption }, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={`/assets/images/background/${image}`}
            alt={`${image}-index`}
            height={400}
            width={"100%"}
          />
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
