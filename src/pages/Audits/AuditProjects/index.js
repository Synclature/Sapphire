import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const auditProjectTableData = [];

const AuditProjects = () => {
    document.title = 'Audit Projects';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Audit Projects" pageTitle="Audit Projects" />
                    <Row>
                        <Col>
                            <p>Use a Readiness Project to start an Audit</p>
                            <Grid
                                data={auditProjectTableData}
                                columns={[
                                    {
                                        name: 'Name',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Readiness Project',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Framework',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Request Date',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Observation Period',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                ]}
                                search={true}
                                sort={true}
                                pagination={{ enabled: true, limit: 20 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AuditProjects;
