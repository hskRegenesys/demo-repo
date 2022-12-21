import React from "react";
import ModalVideo from "react-modal-video";
interface propsType{
  isOpen:boolean
  setOpen:(setOpen:boolean)=>void
  id:string
}
const VideoModal = ({ isOpen, setOpen, id }:propsType) => {
  return (
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          ratio="16:9"
          isOpen={isOpen}
          videoId={id}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default VideoModal;
