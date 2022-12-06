import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15088.900050223941!2d72.835704!3d19.009804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7701195b79ba988!2sRegenesys%20Business%20School!5e0!3m2!1sen!2sin!4v1670132120897!5m2!1sen!2sin"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};




export default MapBox;


