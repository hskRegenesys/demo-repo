import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6920871831026!2d73.0072521!3d19.077271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1f0b34f5f01%3A0x6ddb59351ca12c12!2sDigital%20Regenesys%20-%20India!5e0!3m2!1sen!2sin!4v1672136061648!5m2!1sen!2sin"
        loading="lazy"
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
