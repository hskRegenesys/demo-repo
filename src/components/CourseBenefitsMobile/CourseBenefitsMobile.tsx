import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Col, Image, Row } from "react-bootstrap";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

// Define an interface for tab button objects
interface TabButton {
  id: string;
  title: string;
}

const settings = {
  container: ".my-slider2",
  items: 1,
  slideBy: "page",
  autoplay: false,
  loop: true,
  nav: false,
  controls: true,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls5",
};

const CourseBenefitsMobile = (props: { courseBenefitsData: any }) => {
  const listRef = useRef<any>(null);
  const { tabsContents, tabBtns } = props.courseBenefitsData.courseBenefits;

  return (
    <section className="career-benefits-section" id="career-benefits-mobile">
      <div className="auto-container">
        <div className="carousel-box">
          <div className="testimonials-carousel">
            <TinySlider options={settings} ref={listRef}>
              {tabsContents?.map(
                ({ id, lists }: { id: string; lists: string[] }) => (
                  <div className="gallery-item" key={id}>
                    <div className="partner-one__card">
                      <div className="careers-one__content mobile_course_benefits">
                        <h3 className="careers-one__title">
                          {
                            tabBtns.find((btn: TabButton) => btn.id === id)
                              ?.title
                          }
                        </h3>
                        <ul>
                          {lists?.map((text: string, i: number) => (
                            <li key={i}> {text}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              )}
            </TinySlider>

            <div className="tns-controls5 text-center">
              <button className="tns-prev">
                <span className="icon fa fa-angle-left"></span>
              </button>
              <button className="tns-next">
                <span className="icon fas fa-angle-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBenefitsMobile;
