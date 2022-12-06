import React from "react";
import { Col, Row } from "react-bootstrap";
import ContentSide from "./ContentSide";
import SidebarSide from "./SidebarSide";

const SidebarPageContainer = ({ service = {} }) => {
  return (
 
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={12} md={12} sm={12} className="content-side">
            <ContentSide service={service} />
          </Col>       
        </Row>
      </div>
  );
};

export default SidebarPageContainer;
