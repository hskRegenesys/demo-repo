import dynamic from "next/dynamic";
import React from "react";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import { Col, Row } from "react-bootstrap";


const MapBox = dynamic(() => import("../MapSection/MapBox"));
const ContactSection = ({ className = "", map = false }) => {
  return (
    <section className={`map-section ${className}`}>
      <div className="auto-container">
        <DiscoverSection />
        <Row className="mobile-hide">
          <Col>
        {map && <MapBox />}
        </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSection;
