import React from "react";

const MapSection = ({ fullWidth = false, className = "" }) => {
  return (
    <div className={`map-section ${className}`}>
      <div className={fullWidth ? "" : "auto-container"}>
        <div className="map-container">
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9987624186656!2d-122.40331852434929!3d37.79006877198159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581942ecaf9e3%3A0x163a8f17c7ba01ee!2s548%20Market%20St%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sin!4v1684166041142!5m2!1sen!2sin"
            style={{ border: 0 }}
            aria-hidden={false}
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
