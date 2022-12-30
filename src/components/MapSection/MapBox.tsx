import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120670.72686785142!2d72.92634654265281!3d19.065486783233194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceebee65afe5%3A0x2314e609c30716c1!2sRegenesys%20Business%20School%20-%20India%20Office!5e0!3m2!1sen!2sin!4v1672172080272!5m2!1sen!2sin"   loading="lazy"
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
