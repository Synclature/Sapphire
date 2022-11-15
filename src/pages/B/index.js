import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const B = () => {
  document.title = "FCISO Testing SOC 2";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="FCISO Testing SOC 2"
            pageTitle="FCISO Testing SOC 2"
          />
          <Row lg="4">
            <Col>
              <Card>
                <CardBody>
                  <p className="mb-2 text-center fs-18 fw-bold">Policies </p>
                  <div className="progress animated-progress custom-progress mb-2">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                    11 of 18 Published
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <p className="mb-2 text-center fs-18 fw-bold">Procedures </p>
                  <div className="progress animated-progress custom-progress mb-2">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                    0 of 0 Approved
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <p className="mb-2 text-center fs-18 fw-bold">Controls </p>
                  <div className="progress animated-progress custom-progress mb-2">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "2%" }}
                      aria-valuenow="2"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                    2 of 138 Implemented
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <p className="mb-2 text-center fs-18 fw-bold">Evidence Tasks </p>
                  <div className="progress animated-progress custom-progress mb-2">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "4%" }}
                      aria-valuenow="4"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                    4 of 108 Tasks Completed
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default B;
