import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6305.997505377998!2d-122.400744!3d37.790069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581942ecaf9e3%3A0x163a8f17c7ba01ee!2s548%20Market%20St%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sin!4v1686675232992!5m2!1sen!2sin"
        loading="lazy"
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
