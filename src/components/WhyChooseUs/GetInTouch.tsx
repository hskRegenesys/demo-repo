import { servicesSectionThree } from "@/data/servicesSection";
import useActive from "@/hooks/useActive";
import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import SingleService from "./SingleService";

const { title, services } = servicesSectionThree;

const GetInTouch = ({ className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className={`services-section-three ${className}`}
      id="services"
    >
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title}
          </h2>
        </div>
        <div className="services">
          <Row className="clearfix">
            {services.map((service) => (
              <SingleService service={service} key={service.id} />
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
