import dynamic from "next/dynamic";
import React from "react";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";


const MapBox = dynamic(() => import("../MapSection/MapBox"));
const ContactSection = ({ className = "", map = false }) => {
  return (
    <section className={`map-section ${className}`}>
      <div className="auto-container">
        <DiscoverSection />
        {map && <MapBox />}
      </div>
    </section>
  );
};

export default ContactSection;
