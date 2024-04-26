import teamSection from "@/data/teamSection";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
// import SingleTeam from "./SingleTeam";
const SingleTeam = dynamic(() => import("./SingleTeam"));

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const responsive1 = {
  600: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 4,
    gutter: 30,
  },
  1500: {
    items: 4,
    gutter: 30,
  },
  1600: {
    items: 5,
    gutter: 30,
  },
};

const settings = {
  container: ".my-slider-19",
  loop: false,
  lazyload: true,
  navPosition: false,
  mouseDrag: true,
  items: 2,
  gutter: 30,
  controls: true,
  autoplayButtonOutput: false,
  nav: false,
  controlsContainer: ".tns-controls2",
  autoplay: true,
  autoplayButton: false,
};

const { title, teams } = teamSection;

const TeamSection = ({ onePage = false }) => {
  const listRef = useRef(null);

  return (
    <section className="team-section no-padd-top" id="team">
      <div className="auto-container">
        <div className="sec-title">
          <h2 className="with-curve head-popular-topics">{title}</h2>
        </div>
      </div>
      <div className={onePage ? "auto-container" : ""}>
        <div className="carousel-box">
          <div
            className={onePage ? "team-carousel__one-page" : "team-carousel"}
          >
            <div className="auto-container text-right">
              <div className="tns-controls2">
                <button className="tns-prev">
                  <span className="icon fa fa-angle-left"></span>
                </button>
                <button className="tns-next">
                  <span className="icon fas fa-angle-right"></span>
                </button>
              </div>
            </div>

            <TinySlider
              options={{
                ...settings,
                responsive: responsive1,
              }}
              ref={listRef}
            >
              {teams?.map((team) => (
                <SingleTeam key={team.id} team={team} ref={listRef} />
              ))}
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
