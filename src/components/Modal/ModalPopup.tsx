import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Col, Row } from "react-bootstrap";
import CustomSelect from "../Reuseable/CustomSelect";
import Form from 'react-bootstrap/Form';
import Link from "next/link";



function ModalPopup(props: any) {

  return ( 
   <>
        <Modal.Header closeButton onClick={e => props.setShows(false)}>
          <Modal.Title>Download Brochure</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="form-box text-start popup-form">
            <Row>
              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Your First name" />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="You Last name" />
              </Form.Group>

              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter your Phone number" />
              </Form.Group>
              
              <Form.Group className="mb-3 col-md-6" controlId="">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter your City" />
              </Form.Group>
            </Row>

            <div className="d-block mt-3 text-center">
              <a className="theme-btn btn-style-two mr-2" onClick={e => props.setShows(false)}>
                <i className="btn-curve"></i>
                <span className="btn-title">Cancel</span>
              </a>

              <a className="theme-btn btn-style-two">
                <i className="btn-curve"></i> 
                <span className="btn-title">Submit</span>
              </a>
            </div>
          </form>
        </Modal.Body>
        </>
  );
}

export default ModalPopup;