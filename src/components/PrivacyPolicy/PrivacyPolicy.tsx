import React from "react";
import { privacyPolicy } from "@/data/privacyPolicy";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";




const { title1, paragraph1, paragraph2, paragraph3, title2, paragraph4, title3, paragraph5, title4, paragraph6, title5, paragraph7, title6, paragraph8, title7, paragraph9, subTitle, list1, list2, paragraph10, paragraph11, paragraph12, paragraph13, title8, paragraph14, paragraph15 } = privacyPolicy;


const PrivacyPolicy = () => {
  return (
    <section className="privacy-bg">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={12}>
            <div className="about-me-one__content p-0 privacy-policy">

              <h6>
                {title1}
              </h6>
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
              <p>{paragraph3}</p>

              <h6>
                {title2}
              </h6>
              <p>{paragraph4}</p>

              <h6>
                {title3}
              </h6>
              <p>{paragraph5}</p>


              <h6>
                {title4}
              </h6>
              <p>{paragraph6}</p>


              <h6>
                {title5}
              </h6>
              <p>{paragraph7}</p>


              <h6>
                {title6}
              </h6>
              <p>{paragraph8}</p>

              <h6>
                {title7}
              </h6>
              <p>{paragraph9}</p>

              <h5>
                {subTitle}
              </h5>

              <ul>
                <li><i class="far fa-check-circle"></i> {list1}</li>
                <li><i class="far fa-check-circle"></i>{list2}</li>
              </ul>
              <p>{paragraph10}</p>

              <p>{paragraph11}</p>

              <p>{paragraph12}</p>

              <p>{paragraph13}</p>

              <h6>
                {title8}
              </h6>

              <p>{paragraph14}</p>

              <p>{paragraph15}</p>






            </div>
          </Col>
        </Row>
      </div>

    </section>
  );
};


export default PrivacyPolicy;
