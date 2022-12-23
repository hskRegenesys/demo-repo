import { contactSection } from "@/data/contactSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomSelect from "../Reuseable/CustomSelect";
import Form from 'react-bootstrap/Form';
import Link from "next/link";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";


const MapBox = dynamic(() => import("../MapSection/MapBox"));


const options = ["USA", "Canada", "Australia"].map((it) => ({
  value: it,
  label: it,
}));

const ContactSection = ({ className = "", map = false, form = false }) => {
    return (
    <section  className={`contact-section ${className}`} id="contact">
      <div className="auto-container">     

        <div className="upper-info">
          <form className="form-box text-start">
            <Row>

              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Your First name" />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="You Last name" />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="textarea" placeholder="Enter email" />
              </Form.Group>


              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter your Phone number" />
              </Form.Group>


              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter your Country" />
              </Form.Group>


              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Course of interest</Form.Label>
                <div className="field-inner">
                  <Form.Select className="select-course">
                    <option>Select Course</option>
                    <option value="1">Data Science</option>
                    <option value="2">Digital Marketing</option>
                    <option value="3">Project Management</option>
                    <option value="4">Cyber Security</option>
                    <option value="5">Investment, Trading and Personal finance</option>
                  </Form.Select>
                </div>
              </Form.Group>



              <Col md={12} className="form-group mt-3">
                <div className="field-inner">
                  <textarea
                    name="notes"
                    placeholder="Enter your Messsage"
                  ></textarea>
                </div>
              </Col>

              <Link href="">
                <a className="theme-btn btn-style-two mt-3">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Send Message</span>
                </a>
              </Link>
            </Row>
          </form>
        </div>

        <DiscoverSection />

        {map && <MapBox />}

      </div>
    </section>
  );
};

export default ContactSection;
