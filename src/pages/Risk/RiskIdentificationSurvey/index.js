import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const RiskIdentificationSurvey = () => {
    document.title = 'Risk Identification Survey';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Risk Identification Survey"
                        pageTitle="Risk Identification Survey"
                    />
                    <Row>
                        <p>
                            Complete the survey to define a custom set of risks based on your
                            organization's strategic objectives.
                        </p>

                        <Card>
                            <CardBody>
                                <Row className="mb-4">
                                    <p className="fw-medium fs-22">
                                        What are the steps involved in a risk assessment?
                                    </p>
                                    <Col className="d-flex align-items-center flex-column">
                                        <span className="fw-bold display-5 ff-secondary text-success">
                                            1
                                        </span>
                                        <span className="fw-medium fs-16">Define the Scope</span>
                                    </Col>
                                    <Col className="d-flex align-items-center flex-column">
                                        <span className="fw-bold display-5 ff-secondary text-success">
                                            2
                                        </span>
                                        <span className="fw-medium fs-16">Identify Risks</span>
                                    </Col>
                                    <Col className="d-flex align-items-center flex-column">
                                        <span className="fw-bold display-5 ff-secondary text-success">
                                            3
                                        </span>
                                        <span className="fw-medium fs-16">Assess Risks</span>
                                    </Col>
                                    <Col className="d-flex align-items-center flex-column">
                                        <span className="fw-bold display-5 ff-secondary text-success">
                                            4
                                        </span>
                                        <span className="fw-medium fs-16">
                                            Identify Security Controls
                                        </span>
                                    </Col>
                                    <Col className="d-flex align-items-center flex-column">
                                        <span className="fw-bold display-5 ff-secondary text-success">
                                            5
                                        </span>
                                        <span className="fw-medium fs-16">Monitor Risks</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="fw-medium text-primary fs-22 mb-0">
                                            What is a risk assessment?
                                        </p>
                                        <p className="mb-4 fs-14">
                                            A risk assessment is a process to identify risks,
                                            evaluate the severity of risks, and prioritize risks
                                            across your organization. The ultimate goal of a risk
                                            assessment is to reduce financial, reputational, and
                                            operational risks by being proactive in planning and
                                            implementing risk mitigation strategies. The Tugboat
                                            Logic Risk Assessment Module provides guidance on which
                                            IT and security risks to consider, how to best mitigate
                                            these risks, and automatically tracks compliance of
                                            mitigating controls.
                                        </p>
                                        <p className="fw-medium text-primary fs-22 mb-0">
                                            Why are risk assessments important?
                                        </p>
                                        <p className="fs-14">
                                            It is necessary to conduct a risk assessment to identify
                                            the security gaps in your organization's business
                                            processes and determine actions to close those gaps.
                                            Understanding risks and their significance provides
                                            management with insight into the effectiveness of a
                                            security program and enables them to make informed
                                            decisions about where to focus their security efforts. A
                                            risk assessment is the foundation of a strong
                                            information security program.
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col className="d-flex flex-column align-items-center">
                                        <p className="fs-22">Start your risk assessment now!</p>
                                        <a
                                            href="/"
                                            type="button"
                                            className="btn btn-success waves-effect waves-light">
                                            Get Started
                                        </a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default RiskIdentificationSurvey;
