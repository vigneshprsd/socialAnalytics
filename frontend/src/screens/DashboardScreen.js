import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SubHeader from "../components/SubHeader";
import infoboard from "../infoboard.js";

const DashboardScreen = () => {
  const dataToRender = {
    title: "Infoboards",
    component: (
      <Button
        variant="success"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Create New{" "}
      </Button>
    ),
    navLinks: "",
  };
  return (
    <>
      <SubHeader data={dataToRender} />
      <Row className="py-5 mt-4">
        {infoboard.map((info) => (
          <Col className="pb-4" md={2} key={info.id}>
            <Card>
              <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Subtitle>{info.description}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DashboardScreen;
