import Modal from "react-bootstrap/Modal";
import React from "react";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { leadService } from "src/services";

function ModalPopup(props: any) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const current = new Date();
    data.page_url = window.location.href;
    data.zapUrl = "";
    data.highestQualification = "";
    data.interestedTopic = "";
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    if (date) {
      data.date = date;
    }
    const result = leadService.saveLead(data);
  };
  return (
    <>
      <Modal.Header closeButton onClick={(e) => props.setShows(false)}>
        <Modal.Title>
          {props.title ? props.title : "Request a call"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form
          className="form-box text-start popup-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Form.Group className="mb-3 col-md-6" controlId="">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                {...register("name", { required: true, maxLength: 20 })}
                type="text"
                placeholder="Your First name"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email", { required: true })}
                type="text"
                placeholder="You Last name"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                {...register("phone", { required: true })}
                type="text"
                placeholder="Enter your Phone number"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-md-6" controlId="">
              <Form.Label>City</Form.Label>
              <Form.Control
                {...register("city", { required: true })}
                type="text"
                placeholder="Enter your City"
              />
            </Form.Group>
          </Row>

          <div className="d-flex mt-3 justify-content-center align-items-center">
            <a
              className="theme-btn btn-style-two mr-2"
              onClick={(e) => props.setShows(false)}
            >
              <i className="btn-curve"></i>
              <span className="btn-title">Cancel</span>
            </a>

            <button type="submit" className="theme-btn btn-style-two">
              <i className="btn-curve"></i>
              <span className="btn-title">Submit</span>
            </button>
          </div>
        </form>
      </Modal.Body>
    </>
  );
}

export default ModalPopup;
