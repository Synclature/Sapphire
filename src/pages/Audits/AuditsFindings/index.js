import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Grid, _ } from "gridjs-react";

const AuditsFindings = () => {
  document.title = "Audits Readiness Projects";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Audits Readiness Projects"
            pageTitle="Audits Readiness Projects"
          />
          <Row>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AuditsFindings;
