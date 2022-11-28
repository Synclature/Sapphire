import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Grid, _ } from "gridjs-react";

// Statement of Applicability Controls
const SOAControls = [
  [
    "A.5.1.1 - Policies for Information Security",
    "No",
    "This control is applicable as it ensures the expectations a...",
    "No",
    "",
  ],
  [
    "A.6.1.1 - Information Security Roles and Response",
    "Yes",
    "This control is applicable as it ensures the expectations a...",
    "No",
    "",
  ],
  [
    "A.6.1.2 - Segregation of Duties",
    "Yes",
    "This control is applicable as it ensures the expectations a...",
    "No",
    "",
  ],
  [
    "A.6.1.3 - Contact with Authorities",
    "Yes",
    "This control is applicable as it ensures the expectations a...",
    "No",
    "",
  ],
  [
    "A.6.2.2 - Teleworking",
    "Yes",
    "This control is applicable as it ensures the expectations a...",
    "No",
    "",
  ],
  [
    "A.6.1.1 - Information Security Roles and Response",
    "Yes",
    "This control is applicable as it ensures the expectations a...",
    "No",
    "",
  ],
];

const SOA = () => {
  document.title = "Statement of Applicability";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Statement of Applicability"
            pageTitle="Statement of Applicability"
          />
          <Row>
            <Col>
              <p>
                The Statement of Applicability is required for ISO
                certification. This document summarizes your organization’s
                stance on the Annex A controls and includes the applicability,
                implementation status and justification for each control.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="fs-3">
                Scope: <b>Flagship Product</b> Framework:
              </p>
            </Col>
          </Row>

          <Row>
            <Grid
              data={SOAControls}
              columns={[
                {
                  name: "Control Name",
                  formatter: (cell) =>
                    _(<span className="fw-semibold">{cell}</span>),
                },
                {
                  name: "Applicable",
                  formatter: (cell) => _(<span>{cell}</span>),
                  width: 150,
                },
                {
                  name: "Justification",
                  formatter: (cell) => _(<span>{cell}</span>),
                  width: 300,
                },
                {
                  name: "Implemented",
                  formatter: (cell) => _(<span>{cell}</span>),
                  width: 150,
                },
                "Risk",
              ]}
              search={true}
              sort={true}
              pagination={{ enabled: true, limit: 20 }}
            />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SOA;
