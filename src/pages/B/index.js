import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Grid, _ } from "gridjs-react";

// Polices Table Data
const policiesTableData = [
  [
    "Network Security",
    "Information and Communication",
    "Abhishek",
    "Gajodhar",
    "Published",
  ],
  ["Access Control", "Access Control", "Akhilesh", "Ramesh", "Published"],
  ["Change Management", "Access Control", "Akhilesh", "Ramesh", "Published"],
  ["Server Security", "Access Control", "Akhilesh", "Ramesh", "Published"],
  [
    "Business Continuity and Disaster Recovery",
    "Access Control",
    "Akhilesh",
    "Ramesh",
    "Published",
  ],
];

const B = () => {
  document.title = "FCISO Testing SOC 2";

  const [arrowNavTab, setarrowNavTab] = useState("1");
  const arrowNavToggle = (tab) => {
    if (arrowNavTab !== tab) {
      setarrowNavTab(tab);
    }
  };

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
                  <p className="mb-2 text-center fs-18 fw-bold">
                    Evidence Tasks{" "}
                  </p>
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
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Nav
                    pills
                    className="nav nav-pills arrow-navtabs nav-primary bg-light mb-3"
                  >
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "1",
                        })}
                        onClick={() => {
                          arrowNavToggle("1");
                        }}
                      >
                        Policies
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "2",
                        })}
                        onClick={() => {
                          arrowNavToggle("2");
                        }}
                      >
                        Procedures
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "3",
                        })}
                        onClick={() => {
                          arrowNavToggle("3");
                        }}
                      >
                        Controls
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "4",
                        })}
                        onClick={() => {
                          arrowNavToggle("4");
                        }}
                      >
                        Evidence Tasks
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "5",
                        })}
                        onClick={() => {
                          arrowNavToggle("5");
                        }}
                      >
                        Compliance Calendar
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: arrowNavTab === "6",
                        })}
                        onClick={() => {
                          arrowNavToggle("6");
                        }}
                      >
                        Readiness Project Calendar
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={arrowNavTab} className="text-muted">
                    <TabPane tabId="1" id="arrow-overview">
                      <Grid
                        data={policiesTableData}
                        columns={[
                          {
                            name: "Policy Name",
                            formatter: (cell) =>
                              _(<span className="fw-semibold">{cell}</span>),
                          },
                          "Category",
                          {
                            name: "Assignee",
                            formatter: (cell) =>
                              _(
                                <span className="badge bg-primary">
                                  {cell}
                                </span>
                              ),
                          },
                          {
                            name: "Reviewer",
                            formatter: (cell) =>
                              _(
                                <span className="badge bg-info">
                                  {cell}
                                </span>
                              ),
                          },
                          "Status",
                        ]}
                        search={true}
                        sort={true}
                        pagination={{ enabled: true, limit: 20 }}
                      />
                    </TabPane>
                    <TabPane tabId="2" id="arrow-profile"></TabPane>
                    <TabPane tabId="3" id="arrow-contact"></TabPane>
                    <TabPane tabId="4" id="arrow-contact"></TabPane>
                    <TabPane tabId="5" id="arrow-contact"></TabPane>
                    <TabPane tabId="6" id="arrow-contact"></TabPane>
                  </TabContent>
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
