import React from "react";
import { Container, Col } from "reactstrap";

const FooterSection = () => {
  return (
    <Container fluid className="d-flex  navbar fixed-bottom bg-black">
      <Col className=" text-center">
        <p className="text-white m-auto">footer section</p>
      </Col>
    </Container>
  );
};

export default FooterSection;
