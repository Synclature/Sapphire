import React from "react";
import { Container, Row, Col } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Stats from "../../Components/widgets/stats";
import MyTasks from "../../Components/widgets/taskList";

// Data
const statsData = [
  {
    polices: [
      {
        id: 1,
        label: "Published",
        counter: "13",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
      {
        id: 1,
        label: "In Progress",
        counter: "5",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
    ],
    controls: [
      {
        id: 1,
        label: "Implemented",
        counter: "207",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
      {
        id: 1,
        label: "In Progress",
        counter: "348",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
    ],
    evidence: [
      {
        id: 1,
        label: "Completed",
        counter: "238",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
      {
        id: 1,
        label: "In Progress",
        counter: "1003",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
    ],
    certificationRequest: [
      {
        id: 1,
        label: "Completed",
        counter: "16",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
      {
        id: 1,
        label: "In Progress",
        counter: "132",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
    ],
    securitiesQuestionnaires: [
      {
        id: 1,
        label: "Completed",
        counter: "2",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
      {
        id: 1,
        label: "In Progress",
        counter: "3",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
    ],
    vrmVendors: [
      {
        id: 1,
        label: "Completed",
        counter: "0",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
      {
        id: 1,
        label: "In Progress",
        counter: "3",
        decimals: 0,
        suffix: "",
        prefix: "",
      },
    ],
  },
];

const DashboardEcommerce = () => {
  document.title = "Dashboard";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Dashboard" pageTitle="Dashboards" />
          <Row className="row-cols-1" gap="2" md="2" lg="3">
            <Col>
              <Stats
                data={statsData[0].polices}
                icon="mdi mdi-shield-bug-outline"
                title="Polices"
              />
            </Col>
            <Col>
              <Stats
                data={statsData[0].controls}
                icon="mdi mdi-hook"
                title="Controls"
              />
            </Col>
            <Col>
              <Stats
                data={statsData[0].evidence}
                icon="mdi mdi-shield-search"
                title="Evidence"
              />
            </Col>
            <Col>
              <Stats
                data={statsData[0].certificationRequest}
                icon="mdi mdi-certificate-outline"
                title="Certification Request"
              />
            </Col>
            <Col>
              <Stats
                data={statsData[0].securitiesQuestionnaires}
                icon="mdi mdi-notebook-outline"
                title="Securities Questionnaires"
              />
            </Col>
            <Col>
              <Stats
                data={statsData[0].vrmVendors}
                icon="mdi mdi-account-group-outline"
                title="VRM Vendors"
              />
            </Col>
          </Row>
          <Row lg="2">
            <MyTasks />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
