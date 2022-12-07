import { contactSection } from "@/data/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";

import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";

const MapBox = dynamic(() => import("../MapSection/MapBox"));
const FormBox = dynamic(() => import("./FormBox"));

const { title, contacts, inputs } = contactSection;

const ContactSection = ({ className = "", map = false, form = false }) => {
  const ref = useActive("#contact");

  return (
    <section ref={ref} className={`contact-section ${className}`} id="contact">
      <div className="auto-container">     

        <div className="upper-info">
        {form && <FormBox inputs={inputs} />}
         </div>

         <DiscoverSection />
       
        {map && <MapBox />}
     
      </div>
    </section>
  );
};

export default ContactSection;
